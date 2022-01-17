<template>
  <div>
    <TuBanner />
    <TuCompanyOverview />
    <TuServiceOverview />
    <TuProductOverview />
    <TuWhyChooseUs />
    <TuPartnerOverview />
  </div>
</template>

<script>
import TuBanner from '@/components/common/Banner'
import TuProductOverview from '@/components/home/ProductOverview'
import TuPartnerOverview from '@/components/home/PartnerOverview'
import TuWhyChooseUs from '@/components/home/WhyChooseUs'
import TuCompanyOverview from '@/components/home/CompanyOverview'
import TuServiceOverview from '@/components/home/ServiceOverview'

export default {
  components: {
    TuBanner,
    TuProductOverview,
    TuPartnerOverview,
    TuWhyChooseUs,
    TuCompanyOverview,
    TuServiceOverview,
  }
}
</script>