<template>
  <section id="floor" ref="root" class="floor" :class="{ pinned }" :style="pinned ? { height: `${height}px` } : null" aria-labelledby="floor-title">
    <div class="stick">
      <div class="wrap head">
        <div>
          <p class="kicker">Our factory floor · Gia Lam, Hanoi</p>
          <h2 id="floor-title">We are the factory, <em>not</em> a middleman.</h2>
        </div>
        <p class="lede">
          Cutting, sewing, pressing, finishing and packing happen on our own floor, under our own
          supervisors. Scroll to walk the line, from fabric to carton.
        </p>
      </div>

      <!-- Desktop with JS: the page scrolls vertically and the track slides
           sideways, pinned in place. Otherwise it is a normal swipeable row. -->
      <div ref="viewport" class="viewport">
        <ol ref="track" class="track" :style="pinned ? { transform: `translate3d(${-x}px,0,0)` } : null">
          <li v-for="s in floor" :key="s.id" class="shot">
            <div class="ph">
              <NuxtImg :src="s.image" :alt="s.alt" sizes="sm:80vw md:40vw lg:420px" format="webp" loading="lazy" />
            </div>
            <div class="meta">
              <span>{{ s.step }}</span>
              <h3>{{ s.title }}</h3>
            </div>
            <p>{{ s.caption }}</p>
          </li>
          <li class="shot end">
            <p class="end-copy">Six rooms. One roof. <em>Your</em> programme.</p>
            <NuxtLink class="btn ghost" to="/about-us">About the factory</NuxtLink>
          </li>
        </ol>
      </div>

      <div v-if="pinned" class="progress" aria-hidden="true">
        <span :style="{ transform: `scaleX(${progress})` }" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import floor from '@/data/factory-floor.json'

const root = ref(null)
const viewport = ref(null)
const track = ref(null)
const pinned = ref(false)
const height = ref(0)
const x = ref(0)
const progress = ref(0)

let distance = 0
let frame = 0
let mq = null

function measure() {
  if (!track.value || !viewport.value) return
  distance = Math.max(track.value.scrollWidth - viewport.value.clientWidth, 0)
  height.value = window.innerHeight + distance
}

function update() {
  frame = 0
  if (!pinned.value || !root.value) return
  const top = -root.value.getBoundingClientRect().top
  const p = distance ? Math.min(Math.max(top / distance, 0), 1) : 0
  progress.value = p
  x.value = p * distance
}

function onScroll() {
  if (!frame) frame = requestAnimationFrame(update)
}

function onResize() {
  apply()
}

function apply() {
  pinned.value = mq.matches
  if (pinned.value) {
    measure()
    update()
  }
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  mq = window.matchMedia('(min-width: 901px)')
  apply()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
  if (frame) cancelAnimationFrame(frame)
})
</script>

<style lang="scss" scoped>
.floor {
  position: relative;
  background: var(--muslin);
  padding: clamp(80px, 10vw, 128px) 0;
}

.head {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
  gap: clamp(24px, 4vw, 64px);
  align-items: end;

  h2 { margin-top: 16px; max-width: 12em; }
  .lede { max-width: 30em; }
}

.viewport {
  margin-top: clamp(40px, 5vw, 64px);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar { display: none; }
}

.track {
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 0 var(--gutter);
  list-style: none;
  width: max-content;
  will-change: transform;
}

.shot {
  width: clamp(240px, 26vw, 400px);
  scroll-snap-align: start;

  .ph {
    aspect-ratio: 3 / 4;
    border-radius: 4px;
  }

  .meta {
    display: flex;
    gap: 14px;
    align-items: baseline;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid var(--ink);

    span {
      font-family: var(--serif);
      font-style: italic;
      font-size: 20px;
      color: var(--selvedge);
    }

    h3 {
      font-family: var(--serif);
      font-weight: 400;
      font-size: 26px;
    }
  }

  p {
    margin: 6px 0 0;
    color: #4a453d;
    font-size: 15px;
  }
}

.end {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
  padding: 0 24px;

  .end-copy {
    font-family: var(--serif);
    font-size: clamp(34px, 3.4vw, 52px);
    line-height: 1.05;
    color: var(--ink);

    em { color: var(--selvedge); }
  }

  .btn { align-self: flex-start; }
}

/* ---------- pinned (desktop, JS) ---------- */

.pinned {
  padding: 0;

  /* Pinned under the sticky header (68px, see $header-height-desktop). */
  .stick {
    position: sticky;
    top: 68px;
    height: calc(100vh - 68px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }

  .viewport {
    overflow: visible;
    scroll-snap-type: none;
  }

  /* Sized off the viewport height too, so heading + photo + caption always
     fit inside the pinned screen on a short laptop. */
  .shot { width: clamp(220px, min(24vw, calc((100vh - 400px) * .75)), 380px); }
}

.progress {
  margin: 36px var(--gutter) 0;
  height: 1px;
  background: var(--rule);

  span {
    display: block;
    height: 100%;
    background: var(--ink);
    transform-origin: left;
  }
}

@media (max-width: 900px) {
  .head { grid-template-columns: 1fr; }
}
</style>
