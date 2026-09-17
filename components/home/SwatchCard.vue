<template>
  <div class="swatch">
    <div
      class="shot"
      :style="{ background: material.swatch, backgroundSize: material.swatchSize }"
      role="img"
      :aria-label="`${material.name} — ${material.description}`"
    ></div>
    <div class="body">
      <span class="n">{{ material.code }}</span>
      <h4>{{ material.name }}</h4>
      <p>{{ material.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  material: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.swatch {
  background: var(--card);
  border: 1px solid var(--hair);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.shot {
  aspect-ratio: 1 / 1;
  background: var(--paper-2) center/cover no-repeat;
}

.body {
  padding: 18px 18px 22px;
}

.n {
  font: 500 11px/1 var(--sans);
  letter-spacing: .14em;
  color: var(--rust);
  text-transform: uppercase;
}

h4 {
  font-family: var(--serif);
  font-weight: 400;
  font-size: 21px;
  margin: 8px 0 4px;
  letter-spacing: -.01em;
}

p {
  margin: 0;
  color: var(--mute);
  font-size: 13px;
  line-height: 1.5;
}
</style>
