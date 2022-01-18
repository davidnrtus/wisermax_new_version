<template>
  <div class="tu-section clearspacer">
    <TuImage
      :src="require(`~/assets/images/products/women/banner.jpeg`)"
      padding-bottom="33"
      text="Each piece we create is designed to accentuate every individuals body and make them feel empowered."
      class="banner"
      :blur="30"
    />
    <h3 class="tu-section-title">Fashion</h3>
    <div class="tu-content">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="20" :lg="18">
          <el-row type="flex" justify="left" class="flex-wrap">
            <el-col :xs="24" :sm="22" :md="18" :lg="16">
              <TuImage :src="require(`~/assets/images/products/women/banner_vay_dai.png`)" />
            </el-col>
            <el-col :xs="24" :sm="16" :md="6" :lg="8">
              <div class="text-conetent">
                <h2>Cotton Top & Skirt</h2>
                <p>White self-design woven crop top with lace inserts on the front, has a round neck, three-quarter sleeves, button closure</p>
                <p>Black solid accordian pleats woven maxi flared skirt, has an elasticated waistband, flared hem</p>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <br>
    <br>
    <br>
    <div class="tu-content">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="20" :md="14" :lg="12">
          <TuImage :src="require(`~/assets/images/products/women/banner_dam_2.png`)" />
        </el-col>
      </el-row>
    </div>
    <br>
    <br>
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

<style lang="scss" scoped>
.text-conetent {
  padding: 0 16px;
}
</style>