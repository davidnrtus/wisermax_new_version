<template>
  <section id="factory" class="band floor">
    <div class="wrap">
      <div class="split head">
        <div>
          <div v-reveal:fade class="kicker">Our factory floor</div>
          <h2 v-reveal:blur>We are the factory, not a middleman.</h2>
        </div>
        <div v-reveal="1">
          <p class="lede">
            Cutting, sewing, pressing, finishing and packing happen on our own floor, under our own
            supervisors. The people who sample your style are the people who build it in bulk —
            which is how a fit approved in the sample room is still right on the thousandth piece.
          </p>
          <ul class="list two">
            <li v-for="row in network" :key="row.term">
              <strong>{{ row.term }}</strong>
              <p>{{ row.value }}</p>
            </li>
          </ul>
        </div>
      </div>

      <ol class="gallery">
        <li v-for="(s, i) in floor" :key="s.id" class="shot">
          <div v-reveal:mask="i % 3" class="ph">
            <NuxtImg
              :src="s.image"
              :alt="s.alt"
              sizes="sm:50vw md:33vw lg:440px"
              format="webp"
              loading="lazy"
            />
          </div>
          <div v-reveal="i % 3 + 1" class="meta">
            <span>{{ s.step }}</span>
            <h3>{{ s.title }}</h3>
          </div>
          <p v-reveal="i % 3 + 2">{{ s.caption }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import network from '@/data/network.json'
import floor from '@/data/factory-floor.json'
</script>

<style lang="scss" scoped>
.floor .head { align-items: start; }

.floor :deep(.list) { margin-top: 36px; }

.floor h2 { max-width: 14ch; margin-top: 16px; }

.gallery {
  list-style: none;
  margin: clamp(56px, 7vw, 96px) 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px 12px;
}

.shot {
  .ph { aspect-ratio: 3 / 4; }

  .meta {
    display: flex;
    gap: 14px;
    align-items: baseline;
    margin-top: 16px;
    padding-top: 12px;
    border-top: 1px solid var(--ink);

    span {
      font-stretch: 120%;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: .08em;
      color: var(--thread);
    }
  }

  p { margin: 6px 0 0; color: #3a3e44; font-size: 15px; }
}

@media (max-width: 820px) {
  .gallery { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .gallery { grid-template-columns: 1fr; }
}
</style>
