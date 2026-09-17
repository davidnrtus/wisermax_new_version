<template>
  <article class="card">
    <div class="card-hd">
      <span>{{ specimen.plate }}</span>
      <b>{{ specimen.label }}</b>
    </div>
    <figure class="shot">
      <NuxtImg
        :src="specimen.image"
        :alt="specimen.alt"
        loading="lazy"
        format="webp"
        sizes="sm:100vw md:50vw lg:600px"
        densities="x1 x2"
      />
    </figure>
    <h3>
      {{ specimen.title }} <em>{{ specimen.titleAccent }}</em><span v-if="specimen.titleSuffix">&nbsp;{{ specimen.titleSuffix }}</span>
    </h3>
    <p>{{ specimen.description }}</p>
    <dl>
      <template v-for="spec in specimen.specs" :key="spec.term">
        <dt>{{ spec.term }}</dt>
        <dd>
          {{ spec.value }}
          <small v-if="spec.note">{{ spec.note }}</small>
        </dd>
      </template>
    </dl>
  </article>
</template>

<script setup>
defineProps({
  specimen: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.card {
  padding: 36px 0;
  border-top: 1px solid var(--rule);
}

.card:first-child,
.card:nth-child(2) {
  border-top-color: var(--ink);
  border-top-width: 1.5px;
}

.card-hd {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px;
  font: 500 12px/1 var(--sans);
  color: var(--mute);
  letter-spacing: .08em;
  text-transform: uppercase;

  b {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    color: var(--ink);
    text-transform: none;
    letter-spacing: 0;
  }
}

.shot {
  aspect-ratio: 4 / 3;
  background: var(--paper-2);
  margin: 0 0 26px;
  overflow: hidden;

  :deep(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

h3 {
  font-size: 32px;
  line-height: 1.05;
  margin-bottom: 12px;
  letter-spacing: -.015em;

  em { color: var(--rust); }
}

p {
  margin: 0 0 24px;
  color: #3a352e;
  font-size: 15px;
  max-width: 44ch;
  line-height: 1.6;
}

dl {
  margin: 0;
  padding: 18px 0 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px 20px;
  border-top: 1px solid var(--rule);
  font-size: 13.5px;
}

dt {
  color: var(--mute);
  font-weight: 500;
  letter-spacing: .02em;
}

dd {
  margin: 0;
  color: var(--ink);
  font-weight: 500;

  small {
    display: block;
    color: var(--mute);
    font-weight: 400;
    margin-top: 1px;
    font-family: var(--serif);
    font-style: italic;
  }
}
</style>
