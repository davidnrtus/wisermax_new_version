<template>
  <ProductCategory :data="data" />
</template>

<script setup>
import data from '@/data/products-women.json'
import ProductCategory from '@/components/products/ProductCategory.vue'

const title = `Women's clothing manufacturer Vietnam — knit dresses, blouses, coats & activewear | Wisermax HN`
const description = `Knit dress manufacturer Vietnam, woven blouses, tailored coats and activewear from a Hanoi garment factory. Full package OEM, ODM and private label for US and EU brands.`
const url = 'https://www.wisermaxhn.com/products/women'
// Share card rendered by scripts/og/render.sh
const image = 'https://www.wisermaxhn.com/og/women.jpg'
const imageAlt = `Women's dresses, tops and activewear samples from Wisermax HN, garment manufacturer in Hanoi, Vietnam`

useHead({
  title,
  meta: [
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:url', property: 'og:url', content: url },
    { hid: 'og:image', property: 'og:image', content: image },
    { hid: 'og:image:alt', property: 'og:image:alt', content: imageAlt },
    { hid: 'twitter:image', name: 'twitter:image', content: image },
    { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: imageAlt },
    { hid: 'twitter:title', name: 'twitter:title', content: title },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
  ],
  link: [{ rel: 'canonical', href: url }],
})

useBreadcrumb([
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: `Women's clothing`, path: '/products/women' },
])
</script>
