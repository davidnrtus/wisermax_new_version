<template>
  <header class="site-header">
    <div class="wrap nav">
      <!-- No aria-label: the visible text is the accessible name, so it cannot
           drift out of sync with what a sighted user reads. -->
      <NuxtLink to="/" class="logo">
        <svg class="logo-mark" viewBox="60 45 1690 1580" aria-hidden="true" focusable="false">
          <path d="M73 944 L161 774 L306 1128 L421 810 L364 642 L548 642 C690.4 475.4 876.4 341.3 1092 290 C881.7 400.3 705.7 585.6 620 808 L737 1072 C877.4 604.3 1235.4 169 1728 60 C1198.8 321.1 982.4 916.9 837 1450 L679 1450 L511 1034 L386 1427 L259 1427 Z" />
          <path d="M512 1372 C556.3 1903.4 1328.6 1372.8 1462 1074 C1255.3 1285.7 684.1 1789.9 512 1372 Z" />
        </svg>
        <span class="logo-text">
          <b>Wisermax HN</b>
          <span>Hanoi</span>
        </span>
      </NuxtLink>

      <nav aria-label="Primary">
        <ul class="nav-list">
          <li v-for="h in mainNav" :key="h.key">
            <NuxtLink :to="h.url" active-class="is-active">{{ h.title }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <NuxtLink to="/contact#quote" class="btn sm nav-cta">Request a quote</NuxtLink>

      <button
        class="burger"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-nav"
        aria-label="Toggle navigation"
        @click="mobileOpen = !mobileOpen"
      >
        Menu
      </button>
    </div>

    <transition name="fade">
      <div v-if="mobileOpen" id="mobile-nav" class="mobile-nav">
        <ul>
          <li v-for="h in mainNav" :key="h.key">
            <NuxtLink :to="h.url" @click="mobileOpen = false">{{ h.title }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact#quote" class="btn sm" @click="mobileOpen = false">Request a quote</NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { headers } from '@/data/header'

const mainNav = headers
const mobileOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  mobileOpen.value = false
})
</script>

<style lang="scss" scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(251, 250, 247, .86);
  border-bottom: 1px solid var(--rule);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  gap: 24px;
}

/* Brand sits at the extended end of the width axis. */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;

  /* Cap height of the wordmark; 19×18 keeps the artwork's 1690×1580 ratio. */
  .logo-mark {
    flex: none;
    width: 19px;
    height: 18px;
    fill: #7E3F20;
  }

  .logo-text {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  b {
    font-weight: 800;
    font-stretch: 112%;
    letter-spacing: .06em;
    font-size: 17px;
    text-transform: uppercase;
    color: var(--ink);
  }

  span {
    color: var(--thread);
    font-size: 13px;
  }
}

.nav-list {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    font-size: 15px;
    color: #3a3e44;
    padding: 6px 0;
    border-bottom: 1px solid transparent;
    transition: color .15s, border-color .15s;

    &:hover,
    &.is-active {
      color: var(--ink);
      border-bottom-color: var(--ink);
    }
  }
}

.burger {
  display: none;
  background: none;
  border: 1px solid var(--ink);
  border-radius: 2px;
  padding: 8px 12px;
  font: inherit;
  font-size: 14px;
  color: var(--ink);
  cursor: pointer;
}

.mobile-nav {
  border-top: 1px solid var(--rule);
  background: var(--paper);
  padding: 12px 0 24px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0 var(--gutter);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  a {
    display: block;
    padding: 12px 0;
    font-weight: 500;
    font-size: 15px;
    color: var(--ink);
    border-bottom: 1px solid var(--rule);

    &.btn {
      margin-top: 12px;
      width: fit-content;
      border: 1px solid var(--indigo);
      color: #fff;
    }
  }
}

.fade-enter-from,
.fade-leave-to { opacity: 0; }
.fade-enter-active,
.fade-leave-active { transition: opacity .2s; }

@media (max-width: 820px) {
  .nav { height: 60px; }

  .nav-list,
  .nav-cta { display: none; }

  .burger { display: inline-flex; }
}
</style>
