<template>
  <section ref="root" class="manifesto">
    <div class="wrap">
      <p class="kicker">Not a middleman</p>
      <!-- Words light up one by one as the section scrolls past. Without JS
           (or with reduced motion) the paragraph is simply fully inked. -->
      <p class="statement" :class="{ live }">
        <span
          v-for="(w, i) in words"
          :key="i"
          :class="{ on: i < lit, accent: w.accent }"
        >{{ w.text }}</span>
      </p>
      <p class="sign">Wisermax HN · Gia Lam, Hanoi · since 2014</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// *word* marks an accent word.
const TEXT = 'We are the factory. The people who *sample* your style in Hanoi are the people who *sew* it in bulk — so the fit you approve is still right on the ten-thousandth piece, and still right when it lands in Rotterdam.'

const words = TEXT.split(' ').map((t) => ({
  // The space lives in the data: Vue's whitespace condensing would strip
  // a literal one at the end of the span.
  text: `${t.replace(/\*/g, '')} `,
  accent: t.startsWith('*'),
}))

const root = ref(null)
const live = ref(false)
const lit = ref(words.length)
let frame = 0

function update() {
  frame = 0
  const el = root.value
  if (!el) return
  const r = el.getBoundingClientRect()
  const vh = window.innerHeight
  // 0 when the section's top reaches 80% of the viewport, 1 when its
  // bottom reaches 55% — the paragraph is fully lit before it leaves.
  const start = vh * 0.8
  const end = vh * 0.55
  const p = (start - r.top) / (r.height + start - end)
  lit.value = Math.round(Math.min(Math.max(p, 0), 1) * words.length)
}

function onScroll() {
  if (!frame) frame = requestAnimationFrame(update)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  live.value = true
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (frame) cancelAnimationFrame(frame)
})
</script>

<style lang="scss" scoped>
.manifesto {
  padding: clamp(80px, 11vw, 168px) 0;
  border-top: 1px solid var(--rule);
}

.statement {
  margin: 28px 0 0;
  font-family: var(--serif);
  letter-spacing: -.015em;
  max-width: 20em;
  font-size: clamp(32px, 4.4vw, 66px);
  line-height: 1.08;

  span { transition: opacity .35s ease, color .35s ease; }
  .accent { font-style: italic; color: var(--selvedge); }

  &.live span:not(.on) { opacity: .16; }
}

.sign {
  margin: 40px 0 0;
  font-size: 13px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--thread);
}
</style>
