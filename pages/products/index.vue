<template>
  <div>
    <div class="tu-section clearspacer">
      <div class="tu-section-content">
        <div class="tu-content">
          <TuImage :src="require(`~/assets/images/banners/banner_6.png`)" />
        </div>
        <div class="tu-content">
          <TuImage v-if="!isMobile" :src="require(`~/assets/images/products/banners/banner_men_2.png`)" />
          <TuImage v-else :src="require(`~/assets/images/products/banners/banner_men_2_mb.png`)" />
          <div class="tu-content-link">
            <router-link to="/products/men">View more</router-link>
          </div>
        </div>
        <div class="tu-content">
          <TuImage v-if="!isMobile" :src="require(`~/assets/images/products/banners/banner_women_1.png`)" />
          <TuImage v-else :src="require(`~/assets/images/products/banners/banner_women_mb.png`)" />
          <div class="tu-content-link">
            <router-link to="/products/women">View more</router-link>
          </div>
        </div>
        <div class="tu-content">
          <TuImage v-if="!isMobile" :src="require(`~/assets/images/products/banners/banner_kids.png`)" />
          <TuImage v-else :src="require(`~/assets/images/products/banners/banner_kids_mb.png`)" />
          <div class="tu-content-link">
            <router-link to="/products/kids">View more</router-link>
          </div>
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

<style lang="scss" scoped>
.tu-section-content {
  .tu-img {
    margin-bottom: 1.5rem;
    @media (max-width: 550.98px) {
      margin-bottom: 0.5rem;
    }
  }
  .tu-content {
    position: relative;
    cursor: pointer;
    
    &-link {
      position: absolute;
      bottom: 7%;
      left: 0;
      width: 100%;
      text-align: center;
      a {
        border: 1px solid #404040;
        color: #404040;
        text-decoration: none;
        padding: 11px 27px;
        &:hover {
          text-decoration: underline;
          background: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
}
</style>
