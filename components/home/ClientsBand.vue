<template>
  <section class="clients-band">
    <div class="wrap">
      <div class="kicker">Produced, packed and shipped for</div>
      <ul>
        <li v-for="c in clients" :key="c">{{ c }}</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import clients from '@/data/clients.json'
</script>

<style lang="scss" scoped>
.clients-band {
  padding: clamp(72px, 9vw, 120px) 0;
  text-align: center;
  background: var(--paper-2);

  .kicker { margin-bottom: 40px; }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 14px 52px;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 400;
    font-size: clamp(26px, 3.4vw, 46px);
    color: var(--ink);
    line-height: 1.1;
    letter-spacing: -.01em;
    font-variation-settings: "opsz" 60;
  }
}

@media (max-width: 640px) {
  .clients-band ul { gap: 10px 32px; }
}
</style>
