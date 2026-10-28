<template>
  <section id="faq" class="faq" aria-labelledby="faq-title">
    <div class="wrap split">
      <div>
        <p class="kicker">Questions buyers ask</p>
        <h2 id="faq-title" v-reveal:blur>Sourcing from <em>Vietnam</em>, answered.</h2>
        <p class="lede">
          Straight answers on MOQ, lead times, shipping and quality. Anything else, our
          merchandisers reply within one working day.
        </p>
      </div>

      <!-- Native <details>: works without JS, and every answer is in the HTML
           for search engines. The same list is emitted as FAQPage JSON-LD. -->
      <div class="list">
        <details v-for="(f, i) in faq" :key="f.q" v-reveal="i % 4" :open="i === 0">
          <summary>
            <h3>{{ f.q }}</h3>
            <span class="pm" aria-hidden="true" />
          </summary>
          <p>{{ f.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup>
import faq from '@/data/faq.json'

useHead({
  script: [
    {
      type: 'application/ld+json',
      key: 'faq-jsonld',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }),
    },
  ],
})
</script>

<style lang="scss" scoped>
.faq {
  padding: clamp(80px, 10vw, 144px) 0;
  border-top: 1px solid var(--rule);

  h2 { margin-top: 16px; }
  .lede { margin-top: 28px; }
}

.list { border-top: 1px solid var(--ink); }

details {
  border-bottom: 1px solid var(--rule);

  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    padding: 24px 0;
    cursor: pointer;
    list-style: none;

    &::-webkit-details-marker { display: none; }
  }

  h3 {
    font-family: var(--serif);
    font-weight: 400;
    font-size: clamp(22px, 2vw, 28px);
    line-height: 1.2;
  }

  p {
    margin: 0;
    padding: 0 48px 28px 0;
    font-size: 16px;
    line-height: 1.65;
    color: #4a453d;
    max-width: 40em;
  }
}

/* Plus that turns into a minus. */
.pm {
  position: relative;
  flex: none;
  width: 16px;
  height: 16px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 7.5px;
    width: 16px;
    height: 1px;
    background: var(--ink);
    transition: transform .3s ease;
  }

  &::after { transform: rotate(90deg); }
}

details[open] .pm::after { transform: rotate(0deg); }
</style>
