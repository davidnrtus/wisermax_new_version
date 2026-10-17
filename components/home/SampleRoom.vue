<template>
  <section id="samples" class="band samples">
    <div class="wrap">
      <div class="split head">
        <div>
          <div class="kicker">From the sample room</div>
          <h2>Recent development samples</h2>
        </div>
        <p class="lede">
          Every collection starts on a dress form in Hanoi. These are recent fit samples for
          European and US labels — French terry, fleece and jersey, patterned and sewn in-house
          before a single bulk metre is cut.
        </p>
      </div>

      <div class="grid">
        <figure v-for="s in samples" :key="s.id" class="sample">
          <div class="ph">
            <NuxtImg
              :src="s.image"
              :alt="s.alt"
              sizes="sm:50vw md:50vw lg:320px"
              format="webp"
              loading="lazy"
            />
          </div>
          <figcaption>
            <span>{{ s.code }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.fabric }}</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
import samples from '@/data/samples.json'
</script>

<style lang="scss" scoped>
.samples .head { align-items: end; }

.samples h2 { margin-top: 16px; }

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: clamp(44px, 5vw, 72px);
}

.sample {
  margin: 0;

  .ph { aspect-ratio: 3 / 4; }

  figcaption {
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

    h3 { margin: 8px 0 4px; }

    p { margin: 0; color: #3a3e44; font-size: 15px; }
  }
}

@media (max-width: 1024px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
