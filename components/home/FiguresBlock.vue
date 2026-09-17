<template>
  <section id="figures" class="figures">
    <div class="wrap">
      <div class="kicker">By the numbers</div>
      <div class="figures-grid">
        <div v-for="(f, i) in figures" :key="i" class="fig">
          <b>
            {{ f.value }}<sup v-if="f.unit">{{ f.unit }}</sup>
          </b>
          <div class="sub">{{ f.sub }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import figures from '@/data/figures.json'
</script>

<style lang="scss" scoped>
.figures {
  padding: clamp(72px, 9vw, 120px) 0;
}

.kicker {
  margin-bottom: 56px;
  text-align: center;
}

.figures-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
}

.fig {
  padding: 44px 32px;
  border-right: 1px solid var(--rule);
  text-align: center;

  &:last-child { border-right: 0; }

  b {
    display: block;
    font-family: var(--serif);
    font-weight: 300;
    font-size: clamp(52px, 6.4vw, 96px);
    line-height: 1;
    letter-spacing: -.02em;
    color: var(--ink);
    font-variation-settings: "opsz" 72;

    sup {
      font-family: var(--sans);
      font-size: .24em;
      font-weight: 600;
      letter-spacing: .06em;
      color: var(--mute);
      text-transform: uppercase;
      vertical-align: top;
      margin-left: 6px;
      padding-top: 14px;
      display: inline-block;
    }
  }

  .sub {
    margin-top: 20px;
    font-family: var(--serif);
    font-style: italic;
    color: #3a352e;
    font-size: 15px;
    line-height: 1.5;
    max-width: 24ch;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 1000px) {
  .figures-grid { grid-template-columns: 1fr 1fr; }
  .fig {
    border-right: 0;
    border-bottom: 1px solid var(--rule);

    &:nth-child(2n) { border-right: 0; }
    &:nth-last-child(-n+2) { border-bottom: 0; }
  }
}

@media (max-width: 640px) {
  .figures-grid { grid-template-columns: 1fr; }
  .fig {
    border-bottom: 1px solid var(--rule);
    &:last-child { border-bottom: 0; }
  }
}
</style>
