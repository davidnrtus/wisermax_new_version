<template>
  <div>
    <TuHeaderPromo />
    <TuHeader />
    <Nuxt />
  </div>
</template>

<script>
import TuHeaderPromo from '@/components/common/HeaderPromo'
import TuHeader from '@/components/common/Header'

export default {
  components: {
    TuHeaderPromo,
    TuHeader
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  overflow-x: hidden;
  color: #00174f;
}
.space-no-wrap {
  white-space: nowrap;
}
</style>