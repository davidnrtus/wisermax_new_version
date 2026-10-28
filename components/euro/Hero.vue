<template>
  <section class="hero">
    <div class="wrap shell">
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

        <!-- Fifteen small plates in three columns at staggered heights, each
             column drifting slowly against its neighbours. -->
        <div class="stage atelier-up delay-1">
          <div class="gallery">
            <ul v-for="(col, c) in columns" :key="c" :class="['col', `c${c}`]">
              <li v-for="s in col" :key="s.src">
                <NuxtImg
                  :src="s.src"
                  :alt="s.alt"
                  sizes="sm:33vw md:15vw lg:160px"
                  format="webp"
                  :loading="s.eager ? 'eager' : 'lazy'"
                  :fetchpriority="s.eager ? 'high' : undefined"
                />
              </li>
            </ul>
          </div>

          <div class="card stat">
            <span class="k">Monthly capacity</span>
            <strong v-count>600,000</strong>
            <span class="u">pieces, own lines</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import archive from '@/data/sample-archive.json'

const SAMPLE = Object.fromEntries(archive.map((x) => [x.id, x]))
const sample = (id) => ({ src: SAMPLE[id].image, alt: SAMPLE[id].alt })
const floor = (file, alt) => ({ src: `/factory/${file}.webp`, alt })

// Three columns of five: garments and campaign shots dealt between the
// factory floor, so every column reads as "made here".
const columns = [
  [
    sample('campaign-paris-graphic-tee'),
    floor('sewing-line-3', 'Sewing line with inline quality checks at a cut and sew manufacturer in Vietnam'),
    sample('floral-print-shirt-dress'),
    sample('white-tiered-tennis-skirt'),
    floor('pressing', 'Steam pressing on vacuum tables at a garment factory in Vietnam'),
  ],
  [
    { src: '/home/so-sampleroom.jpg', alt: 'In-house sample room, pattern makers at work in Hanoi' },
    sample('raglan-crew'),
    sample('blue-swirl-print-ruched-dress'),
    floor('trims-store', 'Trims store with labelled cartons of buttons and zips'),
    sample('red-eiffel-graphic-tee'),
  ],
  [
    sample('campaign-halter-print-maxi-dress'),
    sample('navy-striped-track-jacket'),
    floor('cutting-room', 'Fabric cutting room at a garment factory in Vietnam'),
    sample('black-bow-collar-blouse'),
    sample('ivory-sleeveless-polo-contrast-collar'),
  ],
].map((col) => col.map((s, row) => ({ ...s, eager: row < 2 })))
</script>

<style lang="scss" scoped>
/* The hero fills exactly the first screen under the 68px sticky header,
   and type and spacing scale with the viewport height as well as its width
   so a short laptop screen still shows the buttons. */
.hero {
  padding: clamp(16px, 2.6vh, 32px) 0 clamp(24px, 4vh, 48px);
}

.shell {
  display: flex;
  flex-direction: column;
  min-height: calc(100svh - 68px - clamp(16px, 2.6vh, 32px) - clamp(24px, 4vh, 48px));
}

.meta {
  list-style: none;
  margin: 0;
  padding: 0 0 clamp(12px, 2vh, 18px);
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
  flex: 1;
  display: grid;
  /* The gallery takes the narrower share, which keeps its plates small. */
  grid-template-columns: minmax(0, 1.3fr) minmax(0, .7fr);
  gap: clamp(32px, 5vw, 88px);
  align-items: center;
  margin-top: clamp(20px, 4vh, 48px);
  min-height: 0;
}

.display {
  max-width: 11ch;
  font-size: clamp(44px, min(6.8vw, 11vh), 112px);
}

.eyebrow {
  display: block;
  margin-bottom: clamp(16px, 3vh, 28px);
  font-family: var(--f);
  font-size: clamp(14px, min(1.25vw, 2vh), 18px);
  font-weight: 600;
  font-style: normal;
  letter-spacing: .16em;
  line-height: 1.4;
  text-transform: uppercase;
  color: var(--selvedge);
}

.lede {
  margin-top: clamp(18px, 3.4vh, 36px);
  max-width: 30em;
  font-size: clamp(16px, min(1.4vw, 2.3vh), 21px);
}

.cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: clamp(20px, 3.4vh, 36px);
}

/* ---------- gallery ---------- */

.stage {
  position: relative;
  align-self: stretch;
  min-height: 420px;
}

.gallery {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  overflow: hidden;
  /* Soft top and bottom edges, so plates slide in and out of view. */
  mask-image: linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent);
}

.col {
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Taller than the stage, so the offsets and the drift never open a gap
     at either end on any screen height; plates stretch to share it. */
  height: 118%;
  margin: 0;
  padding: 0;
  list-style: none;
  animation: drift 16s ease-in-out infinite alternate;

  li {
    flex: 1;
    min-height: 0;
    overflow: hidden;
    border-radius: 4px;
    background: var(--muslin);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.2s cubic-bezier(.16, 1, .3, 1);
  }

  li:hover img { transform: scale(1.06); }
}

/* Staggered start: the middle column sits lower and moves the other way. */
.c0 { margin-top: -2%; }
.c1 { margin-top: 12%; animation-direction: alternate-reverse; }
.c2 { margin-top: -12%; }

@keyframes drift {
  from { transform: translateY(0); }
  to { transform: translateY(-9%); }
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
  bottom: 10%;
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

@media (max-width: 900px) {
  /* Stacked: no full-screen fit, the gallery follows the copy. */
  .shell { min-height: 0; }
  .grid { grid-template-columns: 1fr; }
  .stage { min-height: 0; height: clamp(360px, 90vw, 560px); }
  .stat { left: 12px; bottom: 12px; }
}

@media (max-width: 480px) {
  .meta li + li::before { display: none; }
  .meta { gap: 6px 20px; }
}

@media (prefers-reduced-motion: reduce) {
  .col { animation: none; }
}
</style>
