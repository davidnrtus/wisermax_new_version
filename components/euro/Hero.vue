<template>
  <section class="hero">
    <div class="wrap">
      <ul class="meta atelier-up" aria-label="Company facts">
        <li>Est. 2014</li>
        <li>Gia Lam, Hanoi</li>
        <li>FOB Hai Phong</li>
        <li>OEM · ODM · Private label</li>
      </ul>

      <div class="grid">
        <div class="copy">
          <!-- The visible headline carries the brand voice; the eyebrow line
               above it is part of the same <h1> so Google reads the keyword
               phrase first. -->
          <h1 class="display atelier-up delay-1">
            <span class="eyebrow">Garment manufacturer in Vietnam</span>
            Made in Hanoi. <em>Tailored</em> for Europe.
          </h1>

          <p class="lede atelier-up delay-2">
            A full package apparel factory for European and US fashion labels. Jersey, fleece,
            woven fashion and kidswear are developed in our own sample room, then cut, sewn,
            pressed and packed on our own lines.
          </p>

          <div class="cta atelier-up delay-2">
            <NuxtLink class="btn" to="/contact#quote">
              Send a tech pack <span aria-hidden="true">→</span>
            </NuxtLink>
            <a class="btn ghost" href="#floor">Walk the factory</a>
          </div>
        </div>

        <div class="stage atelier-up delay-1">
          <!-- Three frames cross-fade on a slow loop. The first is the LCP
               image and loads eagerly; the others wait. -->
          <div class="frames">
            <NuxtImg
              v-for="(f, i) in frames"
              :key="f.src"
              :src="f.src"
              :alt="f.alt"
              :class="['frame', `f${i}`]"
              sizes="sm:100vw md:50vw lg:620px"
              format="webp"
              :loading="i === 0 ? 'eager' : 'lazy'"
              :fetchpriority="i === 0 ? 'high' : undefined"
            />
          </div>

          <div class="card stat">
            <span class="k">Monthly capacity</span>
            <strong v-count>600,000</strong>
            <span class="u">pieces, own lines</span>
          </div>

          <div class="card mini">
            <NuxtImg
              src="/home/so-sampleroom.jpg"
              alt="In-house sample room at a Vietnam apparel manufacturer, pattern makers at work"
              sizes="160px"
              format="webp"
              loading="lazy"
            />
            <span>Our sample room<br><small>Proto to salesman samples</small></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const frames = [
  {
    src: '/samples/raglan-crew-sweatshirt.webp',
    alt: 'Raglan crew sweatshirt in ecru French terry on a fit model, made by a garment factory in Vietnam',
  },
  {
    src: '/factory/sewing-line-3.webp',
    alt: 'Sewing line with inline quality checks at Wisermax, a cut and sew manufacturer in Vietnam',
  },
  {
    src: '/samples/sleeveless-hoodie.webp',
    alt: 'Sleeveless hoodie in grey marl fleece, private label sample from a Vietnam apparel manufacturer',
  },
]
</script>

<style lang="scss" scoped>
.hero {
  padding: clamp(28px, 4vw, 48px) 0 clamp(64px, 8vw, 120px);
}

.meta {
  list-style: none;
  margin: 0;
  padding: 0 0 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 32px;
  border-bottom: 1px solid var(--rule);
  font-size: 12px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--thread);

  li + li::before {
    content: "·";
    margin-right: 32px;
    margin-left: -18px;
    opacity: .6;
  }
}

.grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
  gap: clamp(32px, 5vw, 88px);
  align-items: end;
  margin-top: clamp(40px, 6vw, 88px);
}

.display { max-width: 11ch; }

.eyebrow {
  display: block;
  margin-bottom: 28px;
  font-family: var(--f);
  font-size: 13px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: .18em;
  line-height: 1.4;
  text-transform: uppercase;
  color: var(--selvedge);
}

.lede { margin-top: 36px; max-width: 30em; }

.cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 36px;
}

/* ---------- image stage ---------- */

.stage {
  position: relative;
  aspect-ratio: 4 / 5;
}

.frames {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 4px;
  background: var(--muslin);
}

.frame {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  animation: frame 18s infinite;
}

.f0 { opacity: 1; animation-delay: 0s; }
.f1 { animation-delay: 6s; }
.f2 { animation-delay: 12s; }

/* Each frame holds for ~5s, cross-fades over 1s, and drifts slowly in. */
@keyframes frame {
  0% { opacity: 0; transform: scale(1.06); }
  5% { opacity: 1; }
  33% { opacity: 1; }
  39% { opacity: 0; transform: scale(1); }
  100% { opacity: 0; }
}

.f0 { animation-name: frame-first; }

/* The first frame starts visible so the LCP paint is not a blank panel. */
@keyframes frame-first {
  0% { opacity: 1; transform: scale(1.03); }
  33% { opacity: 1; }
  39% { opacity: 0; transform: scale(1); }
  95% { opacity: 0; transform: scale(1.06); }
  100% { opacity: 1; }
}

.card {
  position: absolute;
  background: rgba(244, 240, 232, .92);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 4px;
  box-shadow: 0 18px 40px -18px rgba(23, 21, 18, .35);
}

.stat {
  left: clamp(-56px, -4vw, -20px);
  bottom: 12%;
  padding: 18px 22px;
  display: grid;
  gap: 2px;
  min-width: 200px;

  .k {
    font-size: 11px;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: var(--thread);
  }

  strong {
    font-family: var(--serif);
    font-weight: 400;
    font-size: 44px;
    line-height: 1;
    margin-top: 6px;
  }

  .u { font-size: 13px; color: var(--thread); }
}

.mini {
  right: 16px;
  top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 14px 8px 8px;
  font-size: 13px;
  line-height: 1.3;

  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 2px;
  }

  small { color: var(--thread); font-size: 12px; }
}

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
  .stage { aspect-ratio: 4 / 4.4; }
  .stat { left: 12px; bottom: 12px; }
}

@media (max-width: 480px) {
  .meta li + li::before { display: none; }
  .meta { gap: 6px 20px; }
  .mini { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .frame { animation: none; }
}
</style>
