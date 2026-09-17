<template>
  <div class="site-shell">
    <TuHeader />
    <main class="site-main">
      <slot />
    </main>
    <TuFooter />
  </div>
</template>

<script setup>
// Header and Footer auto-imported via components/common with the 'Tu' prefix.
</script>

<style lang="scss">
.site-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--paper);
  color: var(--ink);
}

.site-main {
  flex: 1;
}
</style>
