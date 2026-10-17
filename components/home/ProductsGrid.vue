<template>
  <section id="products" class="band">
    <div class="wrap">
      <h2 v-reveal:blur>Collections we produce</h2>
      <p v-reveal="1" class="lede">Women's, men's and kids' fashion, developed and made in Hanoi.</p>
      <div class="products">
        <article v-for="(p, i) in products" :key="p.id" class="product">
          <div v-reveal:mask="i % 3" :class="['ph', { dark: i === products.length - 1 }]">
            <NuxtImg
              :src="p.image"
              :alt="p.alt"
              sizes="sm:100vw md:50vw lg:430px"
              format="webp"
              loading="lazy"
            />
          </div>
          <h3 v-reveal="i % 3 + 1">{{ p.title }}</h3>
          <p v-reveal="i % 3 + 2">{{ p.blurb }}</p>
          <NuxtLink v-reveal="i % 3 + 3" class="go" :to="p.url">{{ p.linkLabel }}</NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import products from '@/data/home-products.json'
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 44px;
}

.product {
  :deep(.ph) { height: clamp(260px, 26vw, 420px); }

  h3 { margin: 16px 0 4px; }

  p { margin: 0; color: #3a3e44; font-size: 15px; }

  .go {
    display: inline-block;
    margin-top: 12px;
    font-size: 14px;
    border-bottom: 1px solid var(--ink);
    padding-bottom: 2px;

    &:hover { color: var(--indigo); border-bottom-color: var(--indigo); }
  }
}

@media (max-width: 1024px) {
  .products { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .products { grid-template-columns: 1fr; }
}
</style>
