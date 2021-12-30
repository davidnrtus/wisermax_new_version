<template>
  <div class="clearfixed-fit">
    <div class="tu-section clearspacer">
      <div class="tu-section-content">
        <div class="tu-content">
          <TuImage v-if="!isMobile" :src="require(`~/assets/images/products/banners/banner_2.jpg`)" />
          <TuImage v-else :src="require(`~/assets/images/products/banners/banner_2_mb.png`)" />
        </div>
        <div class="tu-content">
          <TuImage :src="require(`~/assets/images/products/banners/banner_men.png`)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const breakpoint = 550.98

export default {
  data() {
    return {
      isMobile: false,
    }
  },
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