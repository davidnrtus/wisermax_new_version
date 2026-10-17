<template>
  <section id="capabilities" class="band">
    <div class="wrap split">
      <div>
        <h2>Development and fashion, made by us</h2>
        <p class="lede">
          We work the way a European atelier does: season by season, sample by sample, with the
          design team in the loop. One point of contact from first sketch to shipped carton —
          full package apparel manufacturing Vietnam brands can audit end to end.
        </p>
      </div>
      <ul class="list">
        <li v-for="c in capabilities" :key="c.id">
          <strong>{{ c.name }}</strong>
          <p>{{ c.description }}</p>
          <span>{{ c.tag }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import capabilities from '@/data/capabilities.json'
</script>
