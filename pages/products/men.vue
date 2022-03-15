<template>
  <div class="tu-section clearspacer">
    <div class="tu-section-content">
      <TuImage :src="require(`~/assets/images/products/men/banner_top.png`)" />
      <div class="tu-content title-line">{{ $t('polo') }}</div>
      <div class="tu-content">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="18" :lg="12">
            <p class="text-center" style="margin-bottom: 2rem; line-height: 2">
              {{ $t('polo_description') }}
            </p>
          </el-col>
        </el-row>
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
      <div class="tu-content" style="margin-top: 3rem">
        <TuImage
          v-if="!isMobile"
          :src="require(`~/assets/images/products/men/banner_shirt.png`)"
        />
        <TuImage
          v-else
          :src="require(`~/assets/images/products/men/banner_shirt_mb.png`)"
        />
      </div>
      <div class="tu-content title-line">{{ $t('suit') }}</div>
      <div class="tu-content" style="margin-bottom: 2rem">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="18" :lg="12">
            <p class="text-center" style="margin-bottom: 2rem; line-height: 2">
              {{ $t('suit_description') }}
            </p>
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20" :lg="16">
            <TuImage
              :src="require(`~/assets/images/products/men/vest_1.png`)"
            />
          </el-col>
        </el-row>
      </div>
      <div class="tu-section-title text-center">{{ $t('we_can_do_more') }}</div>
      <el-row :gutter="24" style="margin-bottom: 2rem">
        <el-col
          v-for="(item, i) in others"
          :key="i"
          :xs="12"
          :sm="12"
          :md="8"
          :lg="4"
        >
          <TuImage :src="require(`~/assets/images/products/men/${item.img}`)" />
          <div style="margin-bottom: 0.5rem">{{ $t(item.name) }}</div>
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
      isMobile: false,
      others: [
        {
          img: 'ao_gio.jpeg',
          name: 'coats',
        },
        {
          img: 'ao_len.jpeg',
          name: 'sweater',
        },
        {
          img: 'ao-thun.jpeg',
          name: 'tshirt',
        },
        {
          img: 'shirt_short.jpeg',
          name: 'short_sleeved_shirt',
        },
        {
          img: 'quan-kaki.jpeg',
          name: 'kaki_pant',
        },
        {
          img: 'quan-lot-nam.png',
          name: 'underpants',
        },
      ],
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
.tu-section-title {
  margin-top: 2rem;
  margin-bottom: 0;
  color: #3e3d3d;
  font-weight: 500;
}
</style>
