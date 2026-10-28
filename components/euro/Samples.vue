<template>
  <section id="samples" class="samples" aria-labelledby="samples-title">
    <div class="wrap">
      <div class="head">
        <div>
          <p class="kicker">From our sample room</p>
          <h2 id="samples-title" v-reveal:blur>Private label clothing, <em>on the body</em>.</h2>
        </div>
        <p v-reveal="1" class="lede">
          Development samples cut and sewn in our own sample room, shown on fit models. This is
          what your proto looks like two to three weeks after the brief.
        </p>
      </div>

      <ul class="grid">
        <li v-for="(s, i) in samples" :key="s.id" class="card">
          <div v-reveal:mask="i" class="ph">
            <NuxtImg :src="s.image" :alt="s.alt" sizes="sm:50vw md:25vw lg:320px" format="webp" loading="lazy" />
          </div>
          <div class="meta">
            <span>{{ s.code }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.fabric }}</p>
          </div>
        </li>
      </ul>

      <NuxtLink class="more" to="/products">See all product categories <span aria-hidden="true">→</span></NuxtLink>
    </div>
  </section>
</template>

<script setup>
import samples from '@/data/samples.json'
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

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: clamp(40px, 5vw, 72px) 0 0;
  padding: 0;
  list-style: none;
}

/* Offset every other card so the row reads like a lookbook spread. */
.card:nth-child(even) { margin-top: clamp(24px, 4vw, 64px); }

.ph {
  aspect-ratio: 3 / 4;
  border-radius: 4px;

  :deep(img) { transition: transform 1.2s cubic-bezier(.16, 1, .3, 1); }
}

.card:hover .ph :deep(img) { transform: scale(1.04); }

.meta {
  margin-top: 14px;

  span {
    font-size: 11px;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: var(--thread);
  }

  h3 {
    margin-top: 6px;
    font-family: var(--serif);
    font-weight: 400;
    font-size: 24px;
    line-height: 1.15;
  }

  p { margin: 4px 0 0; font-size: 14px; color: var(--thread); }
}

.more {
  display: inline-block;
  margin-top: 48px;
  font-size: 15px;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 2px;
  transition: color .2s, border-color .2s;

  &:hover { color: var(--selvedge); border-color: var(--selvedge); }
}

@media (max-width: 900px) {
  .head { grid-template-columns: 1fr; }
  .grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
