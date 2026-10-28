<template>
  <section class="figures" aria-labelledby="figures-title">
    <div class="wrap">
      <div class="head">
        <p class="kicker">By the numbers</p>
        <h2 id="figures-title" v-reveal:blur>A high capacity garment manufacturer, <em>measured</em>.</h2>
      </div>

      <dl class="grid">
        <div v-for="(f, i) in figures" :key="f.label" v-reveal="i % 3" class="cell">
          <dt>{{ f.label }}</dt>
          <dd v-if="f.static">{{ f.value }}</dd>
          <dd v-else v-count>{{ f.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
import figures from '@/data/figures.json'
</script>

<style lang="scss" scoped>
.figures {
  background: var(--ink);
  color: var(--paper);
  padding: clamp(80px, 10vw, 144px) 0;

  .kicker { color: rgba(244, 240, 232, .6); }

  h2 {
    color: var(--paper);
    max-width: 14em;
    margin-top: 20px;

    em { color: #C99A72; }
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: clamp(48px, 6vw, 88px) 0 0;
  border-top: 1px solid rgba(244, 240, 232, .22);
}

.cell {
  /* dt reads first for screen readers, but sits under the number visually. */
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 12px;
  padding: 32px 24px 40px 0;
  border-bottom: 1px solid rgba(244, 240, 232, .22);

  dd {
    margin: 0;
    font-family: var(--serif);
    font-size: clamp(56px, 7vw, 108px);
    line-height: .95;
    letter-spacing: -.02em;
  }

  dt {
    font-size: 15px;
    color: rgba(244, 240, 232, .7);
    max-width: 18em;
  }
}

@media (max-width: 820px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
