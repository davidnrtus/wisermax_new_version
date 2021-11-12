<template>
  <div>
    <TuBanner />
    <TuWhyChooseUs />
    <TuProductOverview />
    <TuPartnerOverview />
  </div>
</template>

<script>
import TuBanner from '@/components/common/Banner'
import TuProductOverview from '@/components/home/ProductOverview'
import TuPartnerOverview from '@/components/home/PartnerOverview'
import TuWhyChooseUs from '@/components/home/WhyChooseUs'

export default {
  components: {
    TuBanner,
    TuProductOverview,
    TuPartnerOverview,
    TuWhyChooseUs,
  }
}
</script>