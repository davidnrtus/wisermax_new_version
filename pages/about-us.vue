<template>
  <div>
    <TuIntroduction />
    <TuServices />
    <TuFactoryPartners />
  </div>
</template>

<script>
import TuServices from '@/components/about/Services'
import TuFactoryPartners from '@/components/about/FactoryPartners'
import TuIntroduction from '@/components/about/Introduction'

export default {
  components: {
    TuFactoryPartners,
    TuIntroduction,
    TuServices,
  },
}
</script>
