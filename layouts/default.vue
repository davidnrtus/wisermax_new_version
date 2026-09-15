<template>
  <div class="main">
    <TuHeader />
    <div class="inner">
      <slot />
    </div>
    <TuFooter />
  </div>
</template>

<script setup>
// Header and Footer are auto-imported from components/common/*
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: Muli, sans-serif;
  overflow-x: hidden;
  color: $main;
}
.main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  .inner {
    flex: 1;
  }
}
.space-no-wrap {
  white-space: nowrap;
}
</style>
