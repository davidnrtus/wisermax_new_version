<template>
  <div>
    <TuIntroduction />
    <TuFactoryPartners />
    <TuCompanyData />
  </div>
</template>

<script>
import TuCompanyData from '@/components/about/CompanyData'
import TuFactoryPartners from '@/components/about/FactoryPartners'
import TuIntroduction from '@/components/about/Introduction'

export default {
  components: {
    TuFactoryPartners,
    TuIntroduction,
    TuCompanyData,
  },
}
</script>
