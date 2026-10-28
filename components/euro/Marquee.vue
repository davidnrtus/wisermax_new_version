<template>
  <section ref="root" class="marquee" aria-labelledby="produced-for">
    <!-- A wall of the floor and the product, drifting sideways and pushed
         along by the page scroll. The list is rendered twice so the loop has
         no seam; the copy is hidden from assistive tech. -->
    <div ref="belt" class="belt" :class="{ driven }" @mouseenter="hover = true" @mouseleave="hover = false">
      <ul v-for="copy in 2" :key="copy" class="track" :aria-hidden="copy === 2 ? 'true' : undefined">
        <li v-for="s in shots" :key="s.src" :class="s.shape">
          <NuxtImg
            :src="s.src"
            :alt="copy === 1 ? s.alt : ''"
            sizes="320px"
            format="webp"
            loading="lazy"
          />
        </li>
      </ul>
    </div>

    <div class="wrap clients">
      <p id="produced-for">Produced for</p>
      <ul>
        <li v-for="name in clients" :key="name">{{ name }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import clients from '@/data/clients.json'

// The belt used to be a 70s CSS loop, which crawled while the page scrolled
// past and felt behind the reader. It now drifts slowly on its own and is
// also carried by the scroll: every pixel scrolled moves it SCROLL_GAIN px.
const DRIFT = 30 // px per second
const SCROLL_GAIN = 0.8

const root = ref(null)
const belt = ref(null)
const driven = ref(false)
const hover = ref(false)

let x = 0
let lastY = 0
let lastT = 0
let frame = 0
let visible = false
let io = null

function tick(t) {
  frame = 0
  if (!visible || !belt.value) return
  const dt = lastT ? Math.min(t - lastT, 64) / 1000 : 0
  lastT = t
  const y = window.scrollY
  x += (hover.value ? 0 : DRIFT * dt) + (y - lastY) * SCROLL_GAIN
  lastY = y
  // Wrap on one copy's width so the loop is seamless in both directions.
  const loop = belt.value.scrollWidth / 2
  x = ((x % loop) + loop) % loop
  belt.value.style.transform = `translate3d(${-x}px,0,0)`
  frame = requestAnimationFrame(tick)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  driven.value = true
  lastY = window.scrollY
  // Only run while the belt is on screen.
  io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting
    if (visible && !frame) {
      lastT = 0
      lastY = window.scrollY
      frame = requestAnimationFrame(tick)
    }
  })
  io.observe(root.value)
})

onBeforeUnmount(() => {
  io?.disconnect()
  if (frame) cancelAnimationFrame(frame)
})

const shots = [
  { src: '/factory/cutting-room.webp', shape: 'tall', alt: 'Cutting room at a garment factory in Vietnam' },
  { src: '/samples/french-terry-drawstring-short.webp', shape: 'tall', alt: 'French terry drawstring short, development sample' },
  { src: '/factory/finishing-packing.webp', shape: 'wide', alt: 'Finishing and packing room, every garment inspected' },
  { src: '/factory/sewing-line-2.webp', shape: 'tall', alt: 'Sewing line 2 producing knit tops' },
  { src: '/home/so-design.jpg', shape: 'wide', alt: 'Fashion sketches for a collection in development' },
  { src: '/samples/fleece-lounge-short.webp', shape: 'tall', alt: 'Brushed fleece lounge short on a fit model' },
  { src: '/factory/trims-store.webp', shape: 'wide', alt: 'Trims store with labelled cartons of buttons and zips' },
  { src: '/factory/pressing.webp', shape: 'tall', alt: 'Pressing area with vacuum ironing tables' },
  { src: '/factory/sewing-line-4.webp', shape: 'tall', alt: 'Sewing line 4 running a printed fashion style' },
]
</script>

<style lang="scss" scoped>
.marquee {
  padding-bottom: clamp(48px, 6vw, 80px);
  overflow: hidden;
}

.belt {
  display: flex;
  width: max-content;
  /* Without JS the belt still drifts on a CSS loop. */
  animation: belt 70s linear infinite;
  will-change: transform;

  &:hover { animation-play-state: paused; }

  &.driven { animation: none; }
}

.track {
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 0 10px 0 0;
  list-style: none;

  li {
    height: clamp(200px, 24vw, 340px);
    overflow: hidden;
    border-radius: 4px;
    background: var(--muslin);
  }

  .tall { aspect-ratio: 3 / 4; }
  .wide { aspect-ratio: 4 / 3; }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Factory light is cold and bright; a touch of warmth and less
       saturation keeps the wall in the paper's palette. */
    filter: saturate(.82) sepia(.08);
  }
}

@keyframes belt {
  to { transform: translateX(-50%); }
}

.clients {
  display: flex;
  align-items: baseline;
  gap: 16px 48px;
  flex-wrap: wrap;
  margin-top: clamp(40px, 5vw, 64px);

  p {
    margin: 0;
    font-size: 12px;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: var(--thread);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 40px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    font-family: var(--serif);
    font-size: clamp(22px, 2.2vw, 32px);
    font-style: italic;
    line-height: 1.2;
    color: var(--ink);
  }
}

@media (prefers-reduced-motion: reduce) {
  .belt { animation: none; }
  .marquee { overflow-x: auto; }
}
</style>
