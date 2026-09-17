<template>
  <section id="specimens" class="band specimens">
    <div class="wrap">
      <div class="head">
        <h2>Four capability lines. <em>One</em> merchandising desk.</h2>
        <p>
          Every category runs on its own dedicated partner factory and QA lead —
          but everything flows through one merchandiser here in Hanoi.
          You never chase four vendors.
        </p>
      </div>

      <div class="plates">
        <TuSpecimenCard
          v-for="s in specimens"
          :key="s.id"
          :specimen="s"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import specimens from '@/data/specimens.json'
</script>

<style lang="scss" scoped>
.head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 64px);
  align-items: end;
  margin-bottom: 56px;
}

h2 {
  font-size: clamp(36px, 4.4vw, 64px);
  line-height: 1;
  max-width: 14ch;

  em { color: var(--rust); }
}

.head p {
  margin: 0;
  color: #3a352e;
  font-size: 16.5px;
  max-width: 44ch;
  justify-self: end;
}

.plates {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 clamp(28px, 4vw, 72px);
}

@media (max-width: 1000px) {
  .head {
    grid-template-columns: 1fr;
    text-align: left;

    p { justify-self: start; }
  }

  .plates { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 640px) {
  .plates { grid-template-columns: 1fr; }
}
</style>
