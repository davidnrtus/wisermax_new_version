<template>
  <section id="materials" class="band mats">
    <div class="wrap">
      <div class="head">
        <div>
          <div class="kicker">Materials &amp; mills</div>
          <h2>Fabrics from mills we've <em>audited ourselves.</em></h2>
        </div>
        <p>
          Nominated mills for the buyer who has one. Approved mills for the buyer who doesn't.
          Nothing left to a middleman — sourcing is part of the merchandising conversation,
          not a separate transaction.
        </p>
      </div>

      <div class="strip">
        <TuSwatchCard
          v-for="m in materials"
          :key="m.id"
          :material="m"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import materials from '@/data/materials.json'
</script>

<style lang="scss" scoped>
.mats {
  background: var(--paper-2);
}

.head {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: clamp(28px, 4vw, 64px);
  align-items: end;
  margin-bottom: 48px;
}

.kicker { margin-bottom: 16px; }

h2 {
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1;
  max-width: 16ch;

  em { color: var(--rust); }
}

.head p {
  margin: 0;
  color: #3a352e;
  font-size: 16px;
  max-width: 48ch;
  justify-self: end;
}

.strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

@media (max-width: 1000px) {
  .head {
    grid-template-columns: 1fr;
    text-align: left;
    p { justify-self: start; }
  }
  .strip { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 640px) {
  .strip { grid-template-columns: 1fr; }
}
</style>
