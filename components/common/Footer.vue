<template>
  <footer class="site-footer">
    <div class="wrap">
      <div class="foot">
        <div class="foot-brand">
          <div class="logo">
            <b>Wisermax HN</b>
            <span>Hanoi</span>
          </div>
          <p class="foot-tagline">{{ info.tagline }}</p>
          <p class="foot-address">
            {{ info.company_name }}<br>
            {{ info.street }}, {{ info.city }}, {{ info.country }}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul>
            <li v-for="h in mainNav" :key="h.key">
              <NuxtLink :to="h.url">{{ h.title }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <nav aria-label="Product categories">
          <ul>
            <li v-for="c in productCategories" :key="c.key">
              <NuxtLink :to="c.url">{{ c.title }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <ul class="foot-contact">
          <li><a :href="`mailto:${info.email_primary}`">{{ info.email_primary }}</a></li>
          <li><a :href="`tel:${info.phone_href}`">{{ info.phone }}</a></li>
          <li><span class="small">{{ info.hours }}</span></li>
        </ul>
      </div>

      <!-- Oversized wordmark, set like a fashion-house letterhead. -->
      <p class="wordmark" aria-hidden="true">Wisermax <em>HN</em></p>

      <div class="copy">
        <span>{{ info.legal_notice }}</span>
        <span>{{ info.address_full }}</span>
      </div>
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
  border-top: 1px solid var(--rule);
  padding: 72px 0 32px;
  overflow: hidden;
  font-size: 14px;
  color: #3a3e44;
}

.foot {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px;
}

.foot ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.foot a {
  color: #3a3e44;
  border-bottom: 1px solid transparent;
  transition: color .15s, border-color .15s;

  &:hover {
    color: var(--ink);
    border-bottom-color: var(--ink);
  }
}

.logo {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 14px;

  b {
    font-family: var(--serif);
    font-weight: 400;
    font-size: 26px;
    color: var(--ink);
  }

  span {
    color: var(--thread);
    font-size: 11px;
    letter-spacing: .16em;
    text-transform: uppercase;
  }
}

.wordmark {
  margin: 64px 0 0;
  font-family: var(--serif);
  font-size: clamp(64px, 16vw, 248px);
  line-height: .82;
  letter-spacing: -.035em;
  color: var(--ink);
  white-space: nowrap;

  em { color: var(--selvedge); }
}

.foot-tagline {
  margin: 0;
  max-width: 32em;
}

.foot-address {
  margin: 14px 0 0;
  color: var(--thread);
  line-height: 1.6;
}

.foot-contact .small {
  color: var(--thread);
}

.copy {
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid var(--rule);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  color: var(--thread);
  font-size: 13px;
}

@media (max-width: 1024px) {
  .foot { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 820px) {
  .foot { grid-template-columns: 1fr; }
}
</style>
