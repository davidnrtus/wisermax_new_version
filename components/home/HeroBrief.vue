<template>
  <section class="band hero">
    <div class="wrap">
      <div class="hero-grid">
        <h1 class="hero-head display atelier-up">
          A garment manufacturer in Hanoi, developing fashion collections for European labels.
        </h1>

        <div class="hero-sub">
          <p class="lede atelier-up delay-1">
            Jersey, fleece, woven fashion and kidswear — developed in our own sample room, then cut,
            sewn, pressed and packed on our own lines. Send a sketch or a tech pack and we come back
            with a costed sample plan within five working days.
          </p>
          <div class="hero-cta atelier-up delay-2">
            <a class="btn" href="#rfq">Send a tech pack</a>
            <a class="btn ghost" href="#capabilities">See capabilities</a>
          </div>
        </div>

        <div class="spec-sheet atelier-up delay-2">
          <dl class="spec" aria-label="Factory at a glance">
            <div v-for="row in spec" :key="row.term" class="spec-row">
              <dt>{{ row.term }}</dt>
              <dd v-count>
                {{ row.value }}<small v-if="row.unit">{{ row.unit }}</small>
              </dd>
            </div>
          </dl>
          <p class="spec-foot">
            Figures are typical for FOB Hai Phong orders. Lead time excludes fabric development.
          </p>
        </div>
      </div>

      <div class="hero-visual">
        <div v-reveal:mask="2" class="ph">
          <NuxtImg
            src="/about/service-1.jpg"
            alt="Sewing line on the Wisermax factory floor — garment factory in Vietnam running full package production"
            sizes="sm:100vw md:66vw lg:880px"
            loading="eager"
            fetchpriority="high"
            format="webp"
          />
          <span class="cap">Sewing line, our factory floor</span>
        </div>
        <div class="col">
          <div v-reveal:mask="3" class="ph">
            <NuxtImg
              src="/home/so-sampleroom.jpg"
              alt="In-house sample room — cut and sew manufacturer Vietnam making proto and fit samples"
              sizes="sm:100vw md:33vw lg:440px"
              format="webp"
              loading="lazy"
            />
            <span class="cap">Sample room</span>
          </div>
          <div v-reveal:mask="4" class="ph">
            <NuxtImg
              src="/factory/cutting-room.webp"
              alt="Cutting room with fabric spreading table — OEM clothing factory Vietnam cutting in-house"
              sizes="sm:100vw md:33vw lg:440px"
              format="webp"
              loading="lazy"
            />
            <span class="cap">Cutting room</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import spec from '@/data/hero-spec.json'
</script>

<style lang="scss" scoped>
.hero {
  border-top: 0;
  padding-top: clamp(56px, 7vw, 104px);
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(300px, .85fr);
  grid-template-areas:
    "head spec"
    "sub  .";
  column-gap: clamp(40px, 6vw, 96px);
  align-items: start;
}

/* The spec sheet's foot lines up with the headline's last line. Aligning it
   to the whole left column (headline + lede + buttons) pushed it below the
   fold on a laptop screen. */
.hero-head { grid-area: head; align-self: end; }
.spec-sheet { grid-area: spec; align-self: end; }
.hero-sub { grid-area: sub; }

.hero :deep(.display) { max-width: 15ch; }

.hero .lede { margin-top: 28px; }

.hero-cta {
  display: flex;
  gap: 14px;
  margin-top: 36px;
  flex-wrap: wrap;
}

/* The spec sheet — a factory's own data, set as a ledger. */
.spec {
  margin: 0;
  border-top: 2px solid var(--ink);
}

.spec-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: baseline;
  padding: 16px 0;
  border-bottom: 1px solid var(--rule);

  dt {
    color: #5a5f66;
    font-size: 15px;
    margin: 0;
  }

  dd {
    margin: 0;
    font-weight: 600;
    font-stretch: 88%;
    font-size: clamp(20px, 1.8vw, 26px);
    letter-spacing: -.01em;
    text-align: right;
    white-space: nowrap;

    small {
      font-weight: 400;
      font-size: 14px;
      color: var(--thread);
      margin-left: 6px;
      letter-spacing: 0;
    }
  }
}

.spec-foot {
  padding-top: 14px;
  margin: 0;
  font-size: 13px;
  color: var(--thread);
}

.hero-visual {
  margin-top: clamp(56px, 7vw, 96px);
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  grid-template-rows: minmax(0, 1fr);
  height: clamp(320px, 46vw, 620px);

  .col {
    display: grid;
    grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
    gap: 10px;
    min-height: 0;
  }

  /* Pin images to their panel so a portrait photo cannot stretch the row
     past the fixed height and spill over the next section. */
  .ph { min-height: 0; }

  .ph :deep(img) { position: absolute; inset: 0; }
}

@media (max-width: 820px) {
  .hero-grid {
    grid-template-columns: 1fr;
    grid-template-areas: "head" "sub" "spec";
  }

  .spec-sheet { margin-top: 48px; }

  .hero-visual {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    height: auto;

    .ph { height: 260px; }

    .col { grid-template-rows: none; grid-template-columns: 1fr 1fr; }
  }
}

@media (max-width: 480px) {
  .hero-visual .col { grid-template-columns: 1fr; }
}
</style>
