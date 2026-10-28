<template>
  <div class="samples-page">
    <section class="intro">
      <div class="wrap">
        <p class="kicker atelier-up">Sample room archive · Gia Lam, Hanoi</p>
        <h1 class="display atelier-up delay-1">
          Garment samples from our <em>Vietnam</em> factory.
        </h1>
        <div class="sub atelier-up delay-2">
          <p class="lede">
            {{ total }} development samples cut and sewn in our own sample room: dresses, tops and
            tees, tennis and activewear, jersey and outerwear. Every style here can be costed,
            regraded to your size chart and produced in bulk from 500 pieces.
          </p>
          <NuxtLink class="btn" to="/contact#quote">Send a tech pack <span aria-hidden="true">→</span></NuxtLink>
        </div>
      </div>
    </section>

    <section class="archive" aria-label="Sample archive">
      <div class="wrap">
        <EuSampleGrid />
      </div>
    </section>

    <TuRfqSection />
  </div>
</template>

<script setup>
import archive from '@/data/sample-archive.json'

const total = archive.length

useAtelierHead({
  title: 'Sample room archive — garment samples from a Vietnam factory | Wisermax HN',
  description: `${archive.length} dresses, tops, activewear and jersey samples developed in our Hanoi sample room. OEM, ODM and private label from 500 pcs, FOB Hai Phong.`,
  path: '/samples',
  // Share card rendered by scripts/og/render.sh (1200x630; the old portrait
  // photo was cropped badly by chat apps).
  image: 'https://www.wisermaxhn.com/og/samples.jpg',
  imageAlt: 'Dresses, tops, activewear and jersey samples from the Wisermax HN sample room in Hanoi, Vietnam',
})

useBreadcrumb([
  { name: 'Home', path: '/' },
  { name: 'Sample archive', path: '/samples' },
])

// The archive as an ImageGallery, so each photo can surface in image search
// tied to this page and to the manufacturer.
useHead({
  script: [
    {
      type: 'application/ld+json',
      key: 'gallery-jsonld',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: 'Wisermax HN sample room archive',
        url: 'https://www.wisermaxhn.com/samples',
        creator: { '@id': 'https://www.wisermaxhn.com/#organization' },
        image: archive.map((s) => ({
          '@type': 'ImageObject',
          contentUrl: `https://www.wisermaxhn.com${s.image}`,
          name: s.title,
          description: s.alt,
        })),
      }),
    },
  ],
})
</script>

<style lang="scss" scoped>
.intro {
  padding: clamp(48px, 7vw, 104px) 0 clamp(40px, 5vw, 64px);

  .display { max-width: 13ch; margin-top: 24px; }
}

.sub {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 24px 48px;
  flex-wrap: wrap;
  margin-top: 36px;
}

.archive {
  padding-bottom: clamp(80px, 10vw, 144px);
}
</style>
