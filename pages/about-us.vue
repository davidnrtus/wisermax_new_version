<template>
  <div>
    <TuIntroduction />
    <TuServices />
    <!-- <TuFactoryPartners /> -->
    <!-- <TuCertification /> -->
    <TuMembers />
  </div>
</template>

<script>
import TuServices from '@/components/about/Services'
// import TuFactoryPartners from '@/components/about/FactoryPartners'
import TuIntroduction from '@/components/about/Introduction'
// import TuCertification from '@/components/about/Certification'
import TuMembers from '@/components/about/Members'

export default {
  components: {
    // TuFactoryPartners,
    TuIntroduction,
    TuServices,
    // TuCertification,
    TuMembers,
  },
}
</script>
