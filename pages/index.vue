<template>
  <div>
    <TuHeroBrief />
    <TuClientsBand />
    <TuCapabilityList />
    <TuSampleRoom />
    <TuFactoryFloor />
    <TuProcessSteps />
    <TuProductsGrid />
    <TuQualityBand />
    <TuRfqSection />
  </div>
</template>

<script setup>
const title = 'WISERMAX HN — Garment factory in Vietnam for European fashion labels'
const description = 'Vietnam apparel manufacturer in Hanoi developing fashion collections for EU and US labels. Own sample room and sewing lines — OEM, ODM, FOB Hai Phong.'
const url = 'https://www.wisermaxhn.com/'

useHead({
  title,
  meta: [
    { hid: 'description', name: 'description', content: description },
    { hid: 'keywords', name: 'keywords', content: 'Vietnam apparel manufacturer, garment factory in Vietnam, clothing manufacturer Vietnam, cut and sew manufacturer Vietnam, FOB garment manufacturer Vietnam, OEM clothing factory Vietnam, ODM apparel manufacturer, full package apparel manufacturing Vietnam, private label clothing manufacturer Vietnam, custom t-shirt factory Vietnam, bulk polo shirt manufacturer, knit dress manufacturer Vietnam, woven pants supplier Vietnam, fashion garment manufacturer Vietnam, apparel product development Vietnam' },
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:url', property: 'og:url', content: url },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'twitter:title', name: 'twitter:title', content: title },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
  ],
  link: [
    { rel: 'canonical', href: url },
  ],
})
</script>
