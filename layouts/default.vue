<template>
  <div class="main">
    <TuHeader />
    <div class="inner">
      <Nuxt />
    </div>
    <TuFooter /> 
  </div>
</template>

<script>
import TuHeader from '@/components/common/Header1'
import TuFooter from '@/components/common/Footer'

export default {
  components: {
    TuHeader,
    TuFooter
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: Muli,sans-serif;
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