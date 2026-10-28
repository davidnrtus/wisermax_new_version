<template>
  <div class="home">
    <EuHero />
    <EuMarquee />
    <EuManifesto />
    <EuCapabilities />
    <EuFigures />
    <EuFloor />
    <EuSamples />
    <EuLanes />
    <EuProcess />
    <EuFaq />
    <TuRfqSection />
  </div>
</template>

<script setup>
const title = 'WISERMAX HN — Garment manufacturer in Vietnam for European labels'
const description = 'Vietnam garment manufacturer in Hanoi for European and US fashion labels. Own sample room and sewing lines, 500 pcs MOQ, FOB Hai Phong.'
const url = 'https://www.wisermaxhn.com/'

useHead({
  title,
  meta: [
    { hid: 'description', name: 'description', content: description },
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
  script: [
    {
      // WebSite entity tied to the Organization in nuxt.config.ts, so search
      // engines and AI assistants connect the brand name to this domain.
      type: 'application/ld+json',
      key: 'website-jsonld',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': 'https://www.wisermaxhn.com/#website',
        url: 'https://www.wisermaxhn.com/',
        name: 'Wisermax HN',
        alternateName: 'Wiser Max HN',
        inLanguage: 'en',
        publisher: { '@id': 'https://www.wisermaxhn.com/#organization' },
      }),
    },
  ],
})
</script>
