<template>
  <section class="plate">
    <div class="wrap">
      <div
        class="shot"
        role="img"
        :aria-label="alt"
        :style="{ backgroundImage: `url('${image}')` }"
      ></div>
      <div class="caption">
        <span><b>Plate&nbsp;I</b> · Cut &amp; sew line, partner factory</span>
        <span class="mid">Nam Dinh, Northern Vietnam — Autumn 2026</span>
        <span class="r">1 of 4 · <b>Photograph on file</b></span>
      </div>
    </div>
  </section>
</template>

<script setup>
const img = useImage()
const image = img('/about/service-1.jpg', { width: 1600 })
const alt = 'Cut and sew production line at a Wisermax HN partner factory in Nam Dinh — Vietnam apparel manufacturer for US and EU brands'
</script>

<style lang="scss" scoped>
.plate {
  padding: 0 0 clamp(56px, 7vw, 96px);
}

.wrap { position: relative; }

.shot {
  aspect-ratio: 16 / 9;
  background: var(--paper-2) center/cover no-repeat;
  position: relative;
}

.caption {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 24px;
  align-items: center;
  font: 500 12px/1.4 var(--sans);
  color: var(--mute);
  letter-spacing: .02em;
  padding-top: 14px;
  border-top: 1px solid var(--rule);

  b {
    color: var(--ink);
    font-weight: 600;
  }

  .mid {
    font-family: var(--serif);
    font-style: italic;
    font-size: 14px;
    color: var(--ink);
    font-weight: 400;
    text-align: center;
    letter-spacing: 0;
  }

  .r { text-align: right; }
}

@media (max-width: 1000px) {
  .caption {
    grid-template-columns: 1fr;
    text-align: left;

    .mid,
    .r { text-align: left; }
  }
}
</style>
