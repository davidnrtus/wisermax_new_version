<template>
  <div class="clearfixed-fit">
    <div class="tu-section clearspacer">
      <div class="tu-section-content">
        <div class="tu-content">
          <TuImage
            :src="require(`~/assets/images/products/banners/banner_men_3.png`)"
          />
        </div>
        <h3 class="tu-section-title text-blue">Polo</h3>
        <div class="tu-content">
          <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="24" :md="20" :lg="16">
              <el-row type="flex" :gutter="isMobile ? 10 : 32">
                <el-col :span="12">
                  <TuImage
                    :src="require(`~/assets/images/products/men/polo_1.1.jpeg`)"
                  />
                </el-col>
                <el-col :span="12">
                  <TuImage
                    :src="require(`~/assets/images/products/men/polo_1.2.jpeg`)"
                  />
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="tu-section-title text-blue text-center" style="margin-bottom: 0">Suit</div>
        <div class="tu-content">
          <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="24" :md="20" :lg="16">
              <p class="text-center">
                Chất liệu vải nhập khẩu cao cấp không bai xù, nhăn co, màu sắc
                đa dạng, độ bóng đẹp sắc nét. Áo vest được thiết kế cho các buổi
                tiệc quan trọng, đi làm công sở hay đi chơi.
              </p>
              <TuImage
                :src="require(`~/assets/images/products/men/vest_1.png`)"
              />
              <!-- <el-row type="flex" :gutter="isMobile ? 10 : 32">
                <el-col :span="12">
                  <TuImage :src="require(`~/assets/images/products/men/vest_1.png`)" />
                </el-col>
                <el-col :span="12">
                  <TuImage :src="require(`~/assets/images/products/men/polo_1.2.jpeg`)" />
                </el-col>
              </el-row> -->
            </el-col>
          </el-row>
        </div>
        <div class="tu-content">
          <TuImage
            v-if="!isMobile"
            :src="
              require(`~/assets/images/products/banners/banner_men_shirts.png`)
            "
          />
          <TuImage
            v-else
            :src="
              require(`~/assets/images/products/banners/banner_men_shirts_mb.png`)
            "
          />
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
.img-mx {
  img {
    margin: 0 0.5rem;
  }
}
</style>