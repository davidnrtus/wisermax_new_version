<template>
  <section id="samples" class="samples" aria-labelledby="samples-title">
    <div class="wrap">
      <div class="head">
        <div>
          <p class="kicker">From our sample room</p>
          <h2 id="samples-title" v-reveal:blur>
            {{ total }} styles, sewn in our <em>sample room</em>.
          </h2>
        </div>
        <p v-reveal="1" class="lede">
          Dresses, tops, tennis and activewear, jersey and outerwear: development samples cut and
          sewn in Hanoi for European and US labels. This is what your proto looks like two to three
          weeks after the brief.
        </p>
      </div>

      <!-- Campaign plates: the three styled shots, set as an editorial
           spread. The middle one rides a little lower. -->
      <ul class="campaign">
        <li v-for="(c, i) in campaign" :key="c.id" v-reveal:mask="i">
          <NuxtImg
            :src="c.image"
            :alt="c.alt"
            sizes="sm:80vw md:33vw lg:440px"
            format="webp"
            loading="lazy"
          />
          <span class="cap">Campaign · {{ c.title }}</span>
        </li>
      </ul>

      <EuSampleGrid class="grid" :limit="8" exclude-campaign />

      <NuxtLink class="more btn ghost" to="/samples">
        Open the full archive · {{ total }} styles <span aria-hidden="true">→</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import archive from '@/data/sample-archive.json'

const campaign = archive.filter((s) => s.category === 'campaign')
const total = archive.length
</script>

<style lang="scss" scoped>
.samples {
  padding: clamp(80px, 10vw, 144px) 0;
}

.head {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr);
  gap: clamp(24px, 4vw, 64px);
  align-items: end;

  h2 { margin-top: 16px; max-width: 11em; }
}

.campaign {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin: clamp(40px, 5vw, 72px) 0 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    aspect-ratio: 3 / 4;
    overflow: hidden;
    border-radius: 4px;
    background: var(--muslin);
  }

  li:nth-child(2) { margin-top: clamp(24px, 5vw, 80px); }

  /* Anchored to the top: the logo sits there, and the poster's wordmark at
     the bottom is cropped out whole rather than cut through. */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  .cap {
    position: absolute;
    left: 14px;
    bottom: 14px;
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(244, 240, 232, .9);
    font-size: 12px;
    color: var(--ink);
  }
}

.grid { margin-top: clamp(56px, 7vw, 104px); }

.more { margin-top: 48px; }

@media (max-width: 900px) {
  .head { grid-template-columns: 1fr; }
}

@media (max-width: 720px) {
  /* Swipe through the campaign plates instead of stacking three tall images. */
  .campaign {
    grid-template-columns: none;
    grid-auto-flow: column;
    grid-auto-columns: 78%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    margin-right: calc(var(--gutter) * -1);
    padding-right: var(--gutter);

    li { scroll-snap-align: start; }
    li:nth-child(2) { margin-top: 0; }
  }
}
</style>
