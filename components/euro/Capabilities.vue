<template>
  <section id="capabilities" class="caps" aria-labelledby="caps-title">
    <div class="wrap">
      <div class="head">
        <p class="kicker">What we make</p>
        <h2 id="caps-title" v-reveal:blur>
          Full package apparel manufacturing, from <em>sketch</em> to carton.
        </h2>
      </div>

      <div class="body">
        <ol class="rows">
          <li
            v-for="(c, i) in caps"
            :key="c.id"
            v-reveal="i % 3"
            :class="{ active: i === active }"
            @mouseenter="active = i"
            @focusin="active = i"
          >
            <span class="n">{{ String(i + 1).padStart(2, '0') }}</span>
            <div class="txt">
              <h3>{{ c.name }}</h3>
              <p>{{ c.description }}</p>
            </div>
            <span class="tag">{{ c.tag }}</span>
          </li>
        </ol>

        <!-- Desktop only: a sticky plate that follows the row in focus. -->
        <div class="plate" aria-hidden="true">
          <div class="frame">
            <NuxtImg
              v-for="(c, i) in caps"
              :key="c.id"
              :src="c.image"
              alt=""
              :class="{ on: i === active }"
              sizes="md:40vw lg:520px"
              format="webp"
              loading="lazy"
            />
          </div>
          <p class="cap">{{ caps[active].tag }} · {{ caps[active].name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import capabilities from '@/data/capabilities.json'

const IMAGES = {
  development: '/home/so-sampleroom.jpg',
  jersey: '/samples/raglan-crew-sweatshirt.webp',
  woven: '/factory/sewing-line-4.webp',
  dresses: '/home/product_overview_women.jpeg',
  kidswear: '/home/product_overview_kid.png',
  'small-runs': '/factory/finishing-packing.webp',
}

const caps = capabilities.map((c) => ({ ...c, image: IMAGES[c.id] }))
const active = ref(0)
</script>

<style lang="scss" scoped>
.caps {
  padding: clamp(80px, 10vw, 144px) 0;
}

.head h2 { max-width: 15em; margin-top: 20px; }

.body {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, .75fr);
  gap: clamp(32px, 5vw, 80px);
  margin-top: clamp(48px, 6vw, 88px);
  align-items: start;
}

.rows {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--ink);

  li {
    display: grid;
    grid-template-columns: 56px 1fr auto;
    gap: 20px;
    align-items: baseline;
    padding: 28px 0;
    border-bottom: 1px solid var(--rule);
    cursor: default;
  }

  .n {
    font-family: var(--serif);
    font-style: italic;
    font-size: 22px;
    color: var(--thread);
    transition: color .3s;
  }

  h3 {
    font-family: var(--serif);
    font-weight: 400;
    font-size: clamp(26px, 2.4vw, 36px);
    line-height: 1.1;
    transition: transform .4s cubic-bezier(.16, 1, .3, 1);
  }

  p {
    margin: 10px 0 0;
    max-width: 36em;
    color: #4a453d;
    font-size: 15px;
    line-height: 1.6;
  }

  .tag {
    font-size: 11px;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--thread);
    white-space: nowrap;
  }

  li.active {
    .n { color: var(--selvedge); }
    h3 { transform: translateX(8px); }
  }
}

.plate {
  position: sticky;
  top: 100px;

  .frame {
    position: relative;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border-radius: 4px;
    background: var(--muslin);
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transform: scale(1.05);
    transition: opacity .6s ease, transform 1.2s cubic-bezier(.16, 1, .3, 1);

    &.on { opacity: 1; transform: none; }
  }

  .cap {
    margin: 14px 0 0;
    font-size: 13px;
    color: var(--thread);
  }
}

@media (max-width: 900px) {
  .body { grid-template-columns: 1fr; }
  .plate { display: none; }
  .rows li { grid-template-columns: 40px 1fr; }
  .rows .tag { grid-column: 2; }
}
</style>
