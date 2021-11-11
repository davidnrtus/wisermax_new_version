<template>
  <div>
    <TuBanner />
    <TuProductOverview />
    <TuPartnerOverview />
  </div>
</template>

<script>
import TuBanner from '@/components/common/Banner'
import TuProductOverview from '@/components/home/ProductOverview'
import TuPartnerOverview from '@/components/home/PartnerOverview'

export default {
  components: {
    TuBanner,
    TuProductOverview,
    TuPartnerOverview,
  }
}
</script>