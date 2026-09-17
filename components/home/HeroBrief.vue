<template>
  <section class="band hero">
    <div class="wrap">
      <div class="hero-meta atelier-up">
        <span><b>Est.</b> {{ info.founded_year }} <em>·</em> {{ info.founded_location }}</span>
        <span><b>Port</b> {{ info.port }} <em>·</em> {{ info.port_coords }}</span>
        <span><b>Trade</b> OEM <em>·</em> ODM <em>·</em> Private label</span>
        <span><b>MOQ</b> {{ info.moq }}</span>
      </div>

      <h1 class="atelier-up delay-1">
        A garment <em>atelier</em> in Hanoi, running full package for US and EU brands.
      </h1>

      <div class="layout atelier-up delay-2">
        <p class="lede">
          Cut and sew manufacturer Vietnam. Knitwear, woven, outerwear and sportswear —
          sampled in our own room, produced across twenty audited factories,
          shipped FOB Hai Phong.
        </p>
        <div class="cta">
          <a class="btn rust" href="/contact#quote">Send a tech pack</a>
          <a class="btn ghost" href="#specimens">See capabilities</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import info from '@/data/info'
</script>

<style lang="scss" scoped>
.hero {
  padding-top: clamp(56px, 7vw, 96px);
  padding-bottom: clamp(56px, 7vw, 96px);
}

.hero-meta {
  display: flex;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--rule);
  font: 500 12px/1 var(--sans);
  color: var(--mute);
  letter-spacing: .06em;
  flex-wrap: wrap;
  gap: 16px;

  b {
    color: var(--ink);
    font-weight: 600;
    margin-right: 4px;
  }

  em {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 400;
    color: var(--ink);
    letter-spacing: 0;
  }
}

h1 {
  font-size: clamp(56px, 8.4vw, 132px);
  line-height: .94;
  margin: clamp(56px, 7vw, 96px) 0 0;
  max-width: 16ch;
  font-weight: 400;
  font-variation-settings: "opsz" 72;

  em { color: var(--rust); }
}

.layout {
  display: grid;
  grid-template-columns: 1.4fr .9fr;
  gap: clamp(32px, 5vw, 72px);
  align-items: end;
  margin-top: clamp(48px, 6vw, 80px);
}

.lede {
  font-family: var(--serif);
  font-weight: 400;
  font-size: clamp(20px, 1.9vw, 26px);
  line-height: 1.4;
  color: #3a352e;
  margin: 0;
  max-width: 32ch;
  font-variation-settings: "opsz" 36;
}

.cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

@media (max-width: 1000px) {
  .layout { grid-template-columns: 1fr; }
  .cta { justify-content: flex-start; margin-top: 8px; }
  .hero-meta { font-size: 11px; }
}
</style>
