<template>
  <header class="site-header">
    <div class="wrap nav">
      <NuxtLink to="/" class="brand" aria-label="Wisermax HN — Vietnam garment manufacturer, Hanoi">
        <span class="brand-name">Wisermax HN</span>
        <small>Hanoi</small>
      </NuxtLink>

      <nav aria-label="Primary">
        <ul class="nav-list">
          <li v-for="h in mainNav" :key="h.key">
            <NuxtLink :to="h.url" active-class="is-active">{{ h.title }}</NuxtLink>
          </li>
        </ul>
      </nav>

      <NuxtLink to="/contact#quote" class="btn nav-cta">Request a quote</NuxtLink>

      <button
        class="nav-toggle"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-nav"
        aria-label="Toggle navigation"
        @click="mobileOpen = !mobileOpen"
      >
        <span :class="['bar', { open: mobileOpen }]"></span>
        <span :class="['bar', { open: mobileOpen }]"></span>
      </button>
    </div>

    <transition name="fade">
      <div v-if="mobileOpen" id="mobile-nav" class="mobile-nav">
        <ul>
          <li v-for="h in mainNav" :key="h.key">
            <NuxtLink :to="h.url" @click="mobileOpen = false">{{ h.title }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact#quote" class="btn rust" @click="mobileOpen = false">Request a quote</NuxtLink>
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
  background: rgba(245, 241, 230, .92);
  border-bottom: 1px solid var(--hair);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.nav {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 72px;
  gap: 24px;
}

.brand {
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-family: var(--serif);
  font-weight: 500;
  font-size: 19px;
  letter-spacing: .02em;
  color: var(--ink);

  small {
    color: var(--mute);
    font-family: var(--sans);
    font-weight: 400;
    font-size: 12px;
    letter-spacing: .06em;
  }
}

.nav-list {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #4a443c;
  justify-content: center;

  a {
    padding-bottom: 2px;
    border-bottom: 1px solid transparent;
    transition: color .15s, border-color .15s;

    &:hover,
    &.is-active {
      color: var(--ink);
      border-bottom-color: var(--ink);
    }
  }
}

.nav-cta {
  justify-self: end;
}

.nav-toggle {
  display: none;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  justify-self: end;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;

  .bar {
    display: block;
    width: 22px;
    height: 1.5px;
    background: var(--ink);
    transition: transform .2s, opacity .2s;

    &.open:nth-child(1) { transform: translateY(4px) rotate(45deg); }
    &.open:nth-child(2) { transform: translateY(-3px) rotate(-45deg); }
  }
}

.mobile-nav {
  border-top: 1px solid var(--hair);
  background: var(--paper);
  padding: 12px 0 24px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0 var(--g);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  a {
    display: block;
    padding: 12px 0;
    font: 500 15px/1 var(--sans);
    color: var(--ink);
    letter-spacing: .01em;
    border-bottom: 1px solid var(--hair);

    &.btn {
      margin-top: 8px;
      border-bottom: 1px solid var(--rust);
    }
  }
}

.fade-enter-from,
.fade-leave-to { opacity: 0; }
.fade-enter-active,
.fade-leave-active { transition: opacity .2s; }

@media (max-width: 1000px) {
  .nav {
    grid-template-columns: 1fr auto;
    height: 60px;
  }

  .nav-list,
  .nav-cta { display: none; }

  .nav-toggle { display: flex; }
}
</style>
