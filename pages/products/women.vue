<template>
  <div class="tu-section clearspacer">
    <TuImage
      :src="require(`~/assets/images/products/women/banner.jpeg`)"
      padding-bottom="33"
      :text="$t('women_page_description')"
      class="banner"
      :blur="30"
    />
    <h1 class="tu-section-title">{{ $t('what_we_made') }}</h1>
    <div class="tu-content">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="18" :lg="16">
          <el-row type="flex" justify="left" class="flex-wrap">
            <el-col :xs="24" :sm="22" :md="18" :lg="16">
              <TuImage
                :src="
                  require(`~/assets/images/products/women/banner_vay_dai.png`)
                "
              />
            </el-col>
            <el-col :xs="24" :sm="16" :md="6" :lg="8">
              <div class="text-content">
                <h2>{{ $t('cottom_top_skirt') }}</h2>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="tu-content">
      <TuImage :src="require(`~/assets/images/products/women/banner_vest.png`)" />
    </div>
    <div class="tu-content">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="18" :lg="16">
          <div class="title-line-l">{{ $t('overcoat') }}</div>
          <el-row type="flex" justify="center" class="flex-wrap" :gutter="24">
            <el-col :xs="24" :sm="20" :md="16" :lg="12">
              <p class="text-center"> {{ $t('overcoat_description') }} </p>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center" class="flex-wrap" :gutter="32">
            <el-col
              v-for="item in mangto"
              :key="item"
              :xs="12"
              :sm="12"
              :md="6"
              :lg="6"
            >
              <TuImage
                :src="require(`~/assets/images/products/women/${item}`)"
              />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="tu-content">
      <el-row type="flex" justify="center">
        <el-col v-for="(item, i) in dl" :key="i" :span="8">
          <div class="relative">
            <TuImage :src="require(`~/assets/images/products/women/dl_${i+1}.png`)" />
            <div class="vcax">{{ $t(item) }}</div>
          </div>
        </el-col>
      </el-row>
      <!-- <TuImage :src="require(`~/assets/images/products/women/banner_do_lot.png`)" /> -->
    </div>
    <div class="tu-content">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="20" :md="14" :lg="10">
          <div class="title-line-l">{{ $t('dress') }}</div>
          <TuImage :src="require(`~/assets/images/products/women/banner_dam_2.png`)" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
const breakpoint = 550.98

export default {
  data() {
    return {
      mangto: [
        'mangto_1.jpg',
        'mangto_2.jpg',
        'mangto_3.png',
        'mangto_4.jpg',
      ],
      dl: [
        'workout_clothes',
        'pyjama',
        'swimsuit',
        'underwear',
      ]
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
.text-content {
  padding: 0 16px;
}
.vcax {
  position: absolute;
  bottom: 3%;
  left: 3%;
  background: #F3F3F3;
  color: #5C5C5C;
  padding: 3% 6% 2% 6%;
  font-size: 1.25rem;
  text-transform: uppercase;
  @media (min-width: 688px) and (max-width: 1200px) {
    font-size: 0.75rem;
    bottom: 4%;
    left: 4%;
  }
  @media (max-width: 687.98px) {
    font-size: 0.3rem;
    bottom: 6%;
    left: 6%;
  }
}
</style>