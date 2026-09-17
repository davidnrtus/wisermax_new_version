<template>
  <footer class="site-footer">
    <div class="wrap foot-grid">
      <div class="foot-brand">
        <div class="brand-line">
          <span class="brand-name">Wisermax HN</span>
          <span class="brand-dot">·</span>
          <span class="brand-tagline">Vietnam apparel manufacturer</span>
        </div>
        <p class="foot-address">
          {{ info.company_name }}<br>
          {{ info.street }}, {{ info.city }}, {{ info.country }}
        </p>
        <p class="foot-contact">
          <a :href="`mailto:${info.email_primary}`">{{ info.email_primary }}</a>
          <span aria-hidden="true"> · </span>
          <a :href="`tel:${info.phone_href}`">{{ info.phone }}</a>
        </p>
      </div>

      <div class="foot-nav">
        <div class="kicker">Explore</div>
        <ul>
          <li v-for="h in mainNav" :key="h.key">
            <NuxtLink :to="h.url">{{ h.title }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="foot-cats">
        <div class="kicker">Categories</div>
        <ul>
          <li v-for="c in productCategories" :key="c.key">
            <NuxtLink :to="c.url">{{ c.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="wrap foot-bottom">
      <span>{{ info.legal_notice }}</span>
      <span class="foot-tagline">{{ info.tagline }}</span>
    </div>
  </footer>
</template>

<script setup>
import { headers, productCategories } from '@/data/header'
import info from '@/data/info'

const mainNav = headers
</script>

<style lang="scss" scoped>
.site-footer {
  background: var(--paper-2);
  color: var(--ink);
  border-top: 1px solid var(--hair);
  padding: clamp(56px, 7vw, 96px) 0 32px;
  font-family: var(--sans);
}

.foot-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: clamp(28px, 4vw, 64px);
  align-items: start;
  padding-bottom: 48px;
  border-bottom: 1px solid var(--hair);
}

.foot-brand {
  .brand-line {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 10px;
    font-family: var(--serif);
    font-size: 22px;
    color: var(--ink);
    letter-spacing: .02em;

    .brand-dot { color: var(--mute); }
    .brand-tagline {
      font-style: italic;
      color: var(--mute);
      font-size: 15px;
    }
  }

  .foot-address {
    margin: 18px 0 0;
    color: var(--mute);
    font-size: 14px;
    line-height: 1.65;
  }

  .foot-contact {
    margin: 12px 0 0;
    font-size: 14px;

    a {
      color: var(--ink);
      border-bottom: 1px solid var(--ink);
      padding-bottom: 1px;

      &:hover { color: var(--rust); border-color: var(--rust); }
    }

    span { color: var(--mute); }
  }
}

.foot-nav,
.foot-cats {
  .kicker { margin-bottom: 18px; }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  a {
    font-size: 14px;
    color: var(--ink);
    letter-spacing: .01em;

    &:hover { color: var(--rust); }
  }
}

.foot-bottom {
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  font-size: 13px;
  color: var(--mute);
}

.foot-tagline {
  font-family: var(--serif);
  font-style: italic;
}

@media (max-width: 720px) {
  .foot-grid { grid-template-columns: 1fr; gap: 40px; }
}
</style>
