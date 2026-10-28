<template>
  <div class="sample-grid">
    <div class="bar">
      <div class="filters" role="group" aria-label="Filter samples by category">
        <button
          v-for="c in categories"
          :key="c.id"
          type="button"
          :aria-pressed="c.id === filter"
          @click="filter = c.id"
        >
          {{ c.label }} <span>{{ c.count }}</span>
        </button>
      </div>
      <p class="count" aria-live="polite">{{ shown.length }} of {{ filtered.length }} styles</p>
    </div>

    <!-- Each tile is a plain link to the full image, so it still works with
         JavaScript off; with JS it opens the viewer instead. -->
    <TransitionGroup tag="ul" name="tile" class="tiles">
      <li v-for="(s, i) in shown" :key="s.id" class="tile">
        <a :href="s.image" @click.prevent="open(i)">
          <div class="ph">
            <NuxtImg
              :src="s.image"
              :alt="s.alt"
              sizes="sm:50vw md:33vw lg:320px"
              format="webp"
              loading="lazy"
            />
          </div>
          <span class="meta">
            <span class="cat">{{ labelOf(s.category) }}</span>
            <span class="t">{{ s.title }}</span>
          </span>
        </a>
      </li>
    </TransitionGroup>

    <button v-if="expandable && hidden > 0" type="button" class="btn ghost show-all" @click="expanded = true">
      Show all {{ filtered.length }} styles <span aria-hidden="true">↓</span>
    </button>

    <dialog ref="dlg" class="viewer" aria-label="Sample viewer" @close="current = -1" @click.self="close">
      <template v-if="item">
        <figure>
          <NuxtImg
            :key="item.id"
            :src="item.image"
            :alt="item.alt"
            sizes="sm:100vw lg:900px"
            format="webp"
          />
          <figcaption>
            <span class="cat">{{ labelOf(item.category) }} · {{ current + 1 }} / {{ shown.length }}</span>
            <span class="t">{{ item.title }}</span>
            <NuxtLink class="btn sm" to="/contact#quote" @click="close">Quote a style like this</NuxtLink>
          </figcaption>
        </figure>
        <button type="button" class="nav prev" aria-label="Previous sample" @click="step(-1)">←</button>
        <button type="button" class="nav next" aria-label="Next sample" @click="step(1)">→</button>
        <button type="button" class="x" aria-label="Close" @click="close">×</button>
      </template>
    </dialog>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import archive from '@/data/sample-archive.json'

const props = defineProps({
  // Show at most this many tiles (0 = all).
  limit: { type: Number, default: 0 },
  // Campaign images are shown separately on the home page.
  excludeCampaign: { type: Boolean, default: false },
  // 'women' or 'men': only samples tagged for that programme.
  audience: { type: String, default: '' },
  // With a limit, offer a button that reveals the rest in place.
  expandable: { type: Boolean, default: false },
})

const LABELS = {
  all: 'All',
  dresses: 'Dresses',
  tops: 'Tops & tees',
  active: 'Active & tennis',
  jersey: 'Jersey & outerwear',
  campaign: 'Campaign',
}

const source = archive.filter((s) =>
  !(props.excludeCampaign && s.category === 'campaign')
  && !(props.audience && !s.for.includes(props.audience)))

// "All" deals the categories out in turn (dress, top, tennis, jersey, …) so
// the first rows show the range rather than four dresses in a row.
function interleave(list) {
  const byCat = {}
  for (const s of list) (byCat[s.category] ||= []).push(s)
  const groups = Object.values(byCat)
  const out = []
  for (let i = 0; out.length < list.length; i++) {
    for (const g of groups) if (g[i]) out.push(g[i])
  }
  return out
}

const items = interleave(source)

const categories = computed(() => {
  const ids = ['all', ...new Set(items.map((s) => s.category))]
  return ids.map((id) => ({
    id,
    label: LABELS[id],
    count: id === 'all' ? items.length : items.filter((s) => s.category === id).length,
  }))
})

const filter = ref('all')
const filtered = computed(() => (filter.value === 'all' ? items : items.filter((s) => s.category === filter.value)))
const expanded = ref(false)
const shown = computed(() =>
  props.limit && !expanded.value ? filtered.value.slice(0, props.limit) : filtered.value)
const hidden = computed(() => filtered.value.length - shown.value.length)

const labelOf = (id) => LABELS[id]

// ---------- viewer ----------
const dlg = ref(null)
const current = ref(-1)
const item = computed(() => shown.value[current.value])

function open(i) {
  current.value = i
  dlg.value?.showModal()
}

function close() {
  dlg.value?.close()
}

function step(d) {
  const n = shown.value.length
  current.value = (current.value + d + n) % n
}

function onKey(e) {
  if (current.value < 0) return
  if (e.key === 'ArrowRight') step(1)
  else if (e.key === 'ArrowLeft') step(-1)
}

watch(filter, () => close())

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<style lang="scss" scoped>
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px 32px;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--rule);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  button {
    font: 500 14px/1 var(--f);
    padding: 11px 16px;
    border: 1px solid var(--rule);
    border-radius: 999px;
    background: transparent;
    color: var(--ink);
    cursor: pointer;
    transition: background .25s, color .25s, border-color .25s;

    span { margin-left: 4px; color: var(--thread); font-size: 12px; transition: color .25s; }

    &:hover { border-color: var(--ink); }

    &[aria-pressed="true"] {
      background: var(--ink);
      border-color: var(--ink);
      color: var(--paper);

      span { color: rgba(244, 240, 232, .6); }
    }
  }
}

.count {
  margin: 0;
  font-size: 13px;
  color: var(--thread);
}

.tiles {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px 16px;
  margin: 32px 0 0;
  padding: 0;
  list-style: none;
}

.tile a {
  display: block;
  cursor: zoom-in;
}

.ph {
  aspect-ratio: 3 / 4;
  border-radius: 4px;
  /* Dress-form shots sit on studio grey; muslin keeps empty space warm. */
  background: var(--muslin);

  :deep(img) {
    transition: transform 1s cubic-bezier(.16, 1, .3, 1);
  }
}

.tile a:hover .ph :deep(img),
.tile a:focus-visible .ph :deep(img) { transform: scale(1.05); }

.meta {
  display: grid;
  gap: 4px;
  margin-top: 12px;
}

.cat {
  font-size: 11px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--thread);
}

.t {
  font-family: var(--serif);
  font-size: 22px;
  line-height: 1.15;
  color: var(--ink);
}

.show-all { margin-top: 40px; }

/* Filter change: tiles fade and lift into place. */
.tile-enter-active,
.tile-leave-active { transition: opacity .4s ease, transform .5s cubic-bezier(.16, 1, .3, 1); }
.tile-enter-from { opacity: 0; transform: translateY(24px); }
.tile-leave-to { opacity: 0; }
.tile-leave-active { position: absolute; visibility: hidden; }
.tile-move { transition: transform .5s cubic-bezier(.16, 1, .3, 1); }

/* ---------- viewer ---------- */

.viewer {
  width: min(1100px, 100vw - 32px);
  max-height: calc(100vh - 32px);
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: var(--paper);
  color: var(--ink);
  overflow: hidden;

  &::backdrop {
    background: rgba(23, 21, 18, .82);
    backdrop-filter: blur(4px);
  }

  &[open] { animation: viewer-in .35s cubic-bezier(.16, 1, .3, 1); }

  figure {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    margin: 0;
    min-height: 0;
  }

  img {
    width: 100%;
    height: min(80vh, 820px);
    object-fit: contain;
    background: var(--muslin);
    animation: viewer-img .4s ease;
  }

  figcaption {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 12px;
    padding: 40px 40px 88px;

    .t { font-size: clamp(30px, 3vw, 44px); line-height: 1.05; }
    .btn { align-self: flex-start; margin-top: 12px; }
  }
}

@keyframes viewer-in {
  from { opacity: 0; transform: translateY(16px) scale(.98); }
}

@keyframes viewer-img {
  from { opacity: 0; }
}

.nav,
.x {
  position: absolute;
  width: 44px;
  height: 44px;
  border: 1px solid var(--rule);
  border-radius: 50%;
  background: var(--paper);
  color: var(--ink);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  transition: background .2s, color .2s;

  &:hover { background: var(--ink); color: var(--paper); }
}

.nav { bottom: 28px; }
.prev { right: 92px; }
.next { right: 40px; }
.x { top: 16px; right: 16px; font-size: 22px; }

@media (max-width: 1024px) {
  .tiles { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 720px) {
  .tiles { grid-template-columns: repeat(2, 1fr); gap: 24px 10px; }
  .t { font-size: 18px; }
  .filters button { padding: 9px 12px; font-size: 13px; }

  .viewer {
    figure { grid-template-columns: 1fr; }
    img { height: 62vh; }
    figcaption { padding: 20px 20px 84px; }
    .nav { bottom: 20px; }
    .prev { right: 72px; }
    .next { right: 20px; }
  }
}

@media (prefers-reduced-motion: reduce) {
  .tile-enter-active,
  .tile-leave-active,
  .tile-move { transition: none; }
  .viewer[open],
  .viewer img { animation: none; }
}
</style>
