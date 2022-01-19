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
                <router-link to="/products/women">
                  Women's clothing <i class="el-icon-right" />
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
                    <router-link to="/products/men">
                      Men's clothing <i class="el-icon-right" />
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
                    <router-link to="/products/kids">
                      Kids' clothing <i class="el-icon-right" />
                    </router-link>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="tu-content title-line-l">Protective Clothing</div>
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="22" :md="16" :lg="14">
            <p class="text-center">
              There are many varieties of protective clothing available for
              specific hazards. Examples of the body/skin protection include
              laboratory coats, coveralls, vests, jackets, aprons, surgical
              gowns and full body suits.
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
        <div class="tu-content title-line-l">Assessories</div>
        <p class="text-center">
          Accessories that are worn may include cravats, gloves, shawls, scarves,
          lanyards, socks and stockings.
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
      padding: 10px 16px 6px 16px;
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
