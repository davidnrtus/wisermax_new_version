<template>
  <div class="tu-section clearspacer">
    <TuImage
      :src="require(`~/assets/images/products/women/banner.jpeg`)"
      padding-bottom="30"
      text="Each piece we create is designed to accentuate every individuals body and make them feel empowered."
      class="banner"
      :blur="30"
    />
  </div>
</template>

<script>
const breakpoint = 550.98

export default {
  mounted() {
    this.$nextTick(() => {
      this.isMobile = window.innerWidth < breakpoint
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < breakpoint
    },
  },
}
</script>
