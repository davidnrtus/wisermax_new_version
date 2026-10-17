<template>
  <div class="products-index">
    <!-- HERO -->
    <section class="band pi-hero">
      <div class="wrap">
        <div v-reveal:fade class="pi-meta">
          <!-- One line: Vue drops whitespace that contains a newline between tags. -->
          <span><b>Collections</b> <NuxtLink to="/products/men">Menswear</NuxtLink> <em>·</em> <NuxtLink to="/products/women">Womenswear</NuxtLink> <em>·</em> <NuxtLink to="/products/kids">Kidswear</NuxtLink></span>
          <span><b>Category lines</b> Jersey <em>·</em> Fleece <em>·</em> Woven fashion</span>
          <span><b>Trade</b> OEM <em>·</em> ODM <em>·</em> Private label</span>
          <span><b>Port</b> FOB Hai Phong</span>
        </div>

        <h1 v-reveal:blur="1">
          Every category, one <em>merchandising</em> desk.
        </h1>

        <div v-reveal="2" class="pi-hero-layout">
          <p class="lede">
            Full package apparel manufacturing Vietnam across women's, men's and kids'
            fashion — jersey, fleece and woven. Developed in our own sample room, made on
            our own lines, shipped FOB Hai Phong to Europe and the US.
          </p>
          <a class="btn" href="/contact#quote">Request a quote</a>
        </div>
      </div>
    </section>

    <!-- CATEGORY GRID -->
    <section class="band cat-grid">
      <div class="wrap">
        <div class="head">
          <div v-reveal:fade class="kicker">Programmes</div>
          <h2 v-reveal:blur>Three category programmes, run through one <em>merchandiser</em>.</h2>
        </div>

        <div class="grid">
          <NuxtLink
            v-for="(c, i) in categories"
            :key="c.slug"
            :to="c.url"
            class="cat"
          >
            <div v-reveal="i" class="cat-hd">
              <span>{{ c.tag }}</span>
              <b>{{ c.label }}</b>
            </div>
            <div v-reveal:mask="i" class="cat-media">
              <NuxtImg :src="c.image" :alt="c.alt" loading="lazy" format="webp" sizes="sm:100vw md:50vw lg:400px" />
            </div>
            <h3 v-reveal="i + 1">
              {{ c.title }} <em>{{ c.titleAccent }}</em>
            </h3>
            <p v-reveal="i + 2">{{ c.blurb }}</p>
            <span v-reveal="i + 3" class="cat-cta">See programme →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CROSS-CATEGORY: development, jersey & fleece, trims -->
    <section class="band cross">
      <div class="wrap">
        <div class="head">
          <div v-reveal:fade class="kicker">Cross-category lines</div>
          <h2 v-reveal:blur>And the development work we're <em>known for.</em></h2>
        </div>

        <div class="cross-grid">
          <article v-for="(c, i) in cross" :key="c.title" v-reveal="i % 3" class="cross-card">
            <div class="cross-code">{{ c.code }}</div>
            <h3>{{ c.title }}</h3>
            <p>{{ c.description }}</p>
            <NuxtImg :src="c.image" :alt="c.alt" loading="lazy" format="webp" sizes="sm:100vw md:50vw lg:430px" />
          </article>
        </div>
      </div>
    </section>

    <TuRfqSection />
  </div>
</template>

<script setup>
const title = 'Products & programmes — Vietnam apparel manufacturer | Wisermax HN'
const description = `Women's, men's and kids' clothing programmes from a Vietnam garment factory in Hanoi. Jersey, fleece and woven fashion — OEM, ODM and private label, FOB Hai Phong.`
const url = 'https://www.wisermaxhn.com/products'

useHead({
  title,
  meta: [
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:url', property: 'og:url', content: url },
    { hid: 'twitter:title', name: 'twitter:title', content: title },
    { hid: 'twitter:description', name: 'twitter:description', content: description },
  ],
  link: [{ rel: 'canonical', href: url }],
})

useBreadcrumb([
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
])

const categories = [
  {
    slug: 'women',
    tag: 'Pr. I · Women',
    label: `Women's clothing manufacturer`,
    url: '/products/women',
    image: '/products/banners/banner_top_women.png',
    alt: `Women's clothing programme — knit dress manufacturer Vietnam and woven blouses supplier`,
    title: `Knit dresses, blouses and`,
    titleAccent: `loungewear.`,
    blurb: `Knit dress manufacturer Vietnam. Blouses in viscose and linen blends, fashion dresses, loungewear and sleepwear for seasonal collections.`,
  },
  {
    slug: 'men',
    tag: 'Pr. II · Men',
    label: `Men's clothing manufacturer`,
    url: '/products/men',
    image: '/products/banners/banner_top_men.png',
    alt: `Men's clothing programme — bulk polo shirt manufacturer and woven pants supplier Vietnam`,
    title: `Polos, shirting, suits and`,
    titleAccent: `jersey.`,
    blurb: `Custom t-shirt factory Vietnam and bulk polo shirt manufacturer. Cut and sew woven shirts, tailored vests and suiting, chinos and sweatshirts.`,
  },
  {
    slug: 'kids',
    tag: 'Pr. III · Kids',
    label: `Kids' clothing manufacturer`,
    url: '/products/kids',
    image: '/products/banners/banner_top_kids.png',
    alt: `Kidswear programme — Vietnam kids' clothing manufacturer to CPSIA and EN 14682`,
    title: `Baby, boys' and girls' full`,
    titleAccent: `ranges.`,
    blurb: `Kidswear ages 2–14 sampled to CPSIA and EN 14682. Baby zip sleepsuits, boys' and girls' seasonal ranges — inspected AQL before packing.`,
  },
]

const cross = [
  {
    code: 'X / 01',
    title: 'Product development',
    description: 'ODM apparel manufacturer for design teams: pattern making, grading to your own size chart, proto, fit and salesman samples from our own sample room.',
    image: '/samples/raglan-crew-sweatshirt.webp',
    alt: 'Raglan sweatshirt fit sample — apparel product development at a Vietnam garment factory',
  },
  {
    code: 'X / 02',
    title: 'Jersey & fleece fashion',
    description: 'French terry, loopback and brushed fleece for sweatshirts, hoodies and lounge sets. 500 pieces per style with colour splits from 200, scaled on the same lines.',
    image: '/samples/sleeveless-hoodie.webp',
    alt: 'Sleeveless fleece hoodie sample — private label clothing manufacturer Vietnam for fashion labels',
  },
  {
    code: 'X / 03',
    title: 'Accessories & trims',
    description: 'Socks, gloves, neckties and pantyhose. YKK zippers, custom labels and hangtags — retail-ready packing to your carton specification.',
    image: '/factory/trims-store.webp',
    alt: 'Trims store with labelled cartons of elastic, labels and packaging — Vietnam garment factory sourcing accessories in-house',
  },
]
</script>

<style lang="scss" scoped>
.pi-hero {
  padding-top: clamp(48px, 6vw, 88px);
  padding-bottom: clamp(48px, 6vw, 88px);
}

.pi-meta {
  display: flex;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--rule);
  font: 500 12px/1 var(--f);
  color: var(--thread);
  letter-spacing: .06em;
  flex-wrap: wrap;
  gap: 16px;

  b { color: var(--ink); font-weight: 600; margin-right: 4px; }
  em { font-style: normal; color: var(--thread); }

  a {
    color: inherit;
    border-bottom: 1px solid var(--rule);
    padding-bottom: 1px;

    &:hover { color: var(--indigo); border-bottom-color: var(--indigo); }
  }
}

h1 {
  font-size: clamp(48px, 7.4vw, 108px);
  line-height: .96;
  margin: clamp(48px, 6vw, 80px) 0 0;
  max-width: 15ch;
  font-weight: 500;
  font-stretch: 78%;
  letter-spacing: -.025em;

  em { font-style: normal; color: inherit; }
}

.pi-hero-layout {
  display: grid;
  grid-template-columns: 1.4fr auto;
  gap: clamp(32px, 5vw, 72px);
  align-items: end;
  margin-top: clamp(40px, 5vw, 64px);
}

.lede {
  font-family: var(--f);
  font-size: clamp(18px, 1.5vw, 21px);
  line-height: 1.45;
  color: #3a3e44;
  margin: 0;
  max-width: 44ch;
}

.cat-grid .head {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 4vw, 64px);
  align-items: end;
  margin-bottom: 56px;
}

.cat-grid h2 {
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1;
  max-width: 18ch;
  em { font-style: normal; color: inherit; }
}
.cat-grid .kicker { margin-bottom: 16px; }

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px clamp(24px, 4vw, 64px);
}

.cat {
  color: var(--ink);
  padding: 24px 0 32px;
  border-top: 1.5px solid var(--ink);
  display: flex;
  flex-direction: column;
  transition: opacity .2s;

  &:hover { opacity: .85; }
  &:hover .cat-cta { color: var(--indigo); }

  &-hd {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 20px;
    font: 500 12px/1 var(--f);
    color: var(--thread);
    letter-spacing: .08em;
    text-transform: uppercase;

    b {
      font-family: var(--f);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: var(--ink);
      text-transform: none;
      letter-spacing: 0;
    }
  }

  &-media {
    aspect-ratio: 4 / 5;
    background: var(--muslin);
    margin-bottom: 24px;
    overflow: hidden;

    :deep(img) { width: 100%; height: 100%; object-fit: cover; }
  }

  h3 {
    font-size: 26px;
    line-height: 1.1;
    margin: 0 0 10px;

    em { font-style: normal; color: inherit; }
  }

  p {
    color: #3a3e44;
    font-size: 14.5px;
    line-height: 1.6;
    margin: 0 0 20px;
  }

  &-cta {
    font: 600 12px/1 var(--f);
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--ink);
    margin-top: auto;
  }
}

.cross {
  background: var(--muslin);

  .head { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px, 4vw, 64px); align-items: end; margin-bottom: 48px; }
  .kicker { margin-bottom: 16px; }
  h2 { font-size: clamp(32px, 4vw, 54px); line-height: 1; max-width: 18ch; em { font-style: normal; color: inherit; } }

  &-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  &-card {
    padding: 20px 0 0;
    border-top: 1px solid var(--ink);
    display: flex;
    flex-direction: column;

    .cross-code {
      font: 600 11px/1 var(--f);
      letter-spacing: .14em;
      color: var(--selvedge);
      text-transform: uppercase;
    }

    h3 {
      font-family: var(--f);
      font-size: 22px;
      margin: 12px 0 10px;
      line-height: 1.15;
    }

    p {
      color: var(--thread);
      font-size: 13.5px;
      line-height: 1.55;
      margin: 0 0 20px;
    }

    /* One frame for every card so photos of different shapes line up. */
    :deep(img) {
      width: 100%;
      display: block;
      margin-top: auto;
      aspect-ratio: 3 / 4;
      object-fit: cover;
    }
  }
}

@media (max-width: 1000px) {
  .cat-grid .head, .cross .head { grid-template-columns: 1fr; }
  .pi-hero-layout { grid-template-columns: 1fr; }
  .grid { grid-template-columns: 1fr 1fr; }
  .cross-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 600px) {
  .grid, .cross-grid { grid-template-columns: 1fr; }
}
</style>
