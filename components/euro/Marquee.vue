<template>
  <section class="marquee" aria-labelledby="produced-for">
    <!-- A wall of the floor and the product, drifting sideways. The list is
         rendered twice so the loop has no seam; the copy is hidden from
         assistive tech. -->
    <div class="belt">
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
import clients from '@/data/clients.json'

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
  animation: belt 70s linear infinite;

  &:hover { animation-play-state: paused; }
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
