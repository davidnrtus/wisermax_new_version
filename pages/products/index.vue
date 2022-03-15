<template>
  <div>
    <div class="tu-section clearspacer">
      <div class="tu-section-content">
        <el-row type="flex" justify="center" class="flex-wrap" :gutter="22">
          <el-col :xs="24" :sm="24" :md="16" :lg="16">
            <div class="card-img">
              <TuImage
                :src="
                  require(`~/assets/images/products/banners/banner_top_women.png`)
                "
              />
              <div class="card-content">
                <router-link :to="localePath('/products/women')">
                  {{ $t('women_clothing') }} <i class="el-icon-right" />
                </router-link>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8" :lg="8">
            <el-row>
              <el-col :span="24">
                <div class="card-img">
                  <TuImage
                    :src="
                      require(`~/assets/images/products/banners/banner_top_men.png`)
                    "
                  />
                  <div class="card-content">
                    <router-link :to="localePath('/products/men')">
                      {{ $t('men_clothing') }} <i class="el-icon-right" />
                    </router-link>
                  </div>
                </div>
              </el-col>
              <el-col :span="24">
                <div class="card-img">
                  <TuImage
                    :src="
                      require(`~/assets/images/products/banners/banner_top_kids.png`)
                    "
                  />
                  <div class="card-content">
                    <router-link :to="localePath('/products/kids')">
                      {{ $t('kid_clothing') }} <i class="el-icon-right" />
                    </router-link>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="tu-content title-line-l">{{ $t('protective_clothing') }}</div>
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="22" :md="16" :lg="14">
            <p class="text-center">
              {{ $t('protective_clothing_content') }}
            </p>
          </el-col>
        </el-row>
        <div class="tu-content">
          <TuImage
            :src="
              require(`~/assets/images/products/banners/banner_protective.png`)
            "
          />
        </div>
        <div class="tu-content title-line-l">{{ $t('assessories') }}</div>
        <p class="text-center">
          {{ $t('assessories_content') }}
        </p>
        <div class="tu-content">
          <TuImage
            :src="
              require(`~/assets/images/products/banners/banner_assessories.png`)
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
  name: 'ProductMain',
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
    margin-bottom: 1rem;
    @media (max-width: 550.98px) {
      margin-bottom: 0.5rem;
    }
  }
}
.card-img {
  position: relative;
  .card-content {
    position: absolute;
    bottom: 30px;
    right: 30px;
    a {
      color: #fff;
      text-transform: uppercase;
      font-size: 13px;
      padding: 6px 16px 6px 16px;
      background: #363636;
      border-radius: 2px;
      transition: transform 0.2s;
      &:hover {
        background: #707070;
      }
    }
  }
}
</style>
