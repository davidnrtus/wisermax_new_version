<template>
  <div class="main">
    <!-- <TuHeaderPromo /> -->
    <TuHeader />
    <div class="inner">
      <Nuxt />
    </div>
    <TuFooter /> 
  </div>
</template>

<script>
// import TuHeaderPromo from '@/components/common/HeaderPromo'
import TuHeader from '@/components/common/Header1'
import TuFooter from '@/components/common/Footer'

export default {
  components: {
    // TuHeaderPromo,
    TuHeader,
    TuFooter
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
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