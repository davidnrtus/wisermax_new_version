<template>
  <div>
    <TuBanner />
    <TuProductOverview />
  </div>
</template>

<script>
import TuBanner from '@/components/common/Banner'
import TuProductOverview from '@/components/home/ProductOverview'

export default {
  components: {
    TuBanner,
    TuProductOverview
  }
}
</script>