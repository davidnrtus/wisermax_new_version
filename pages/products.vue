<template>
  <div class="clearfixed-fit">
    <div class="tu-section tu-product-list">
      <div class="tu-section-content">
        <div class="tu-section-img xsim">
          <img
            src="~/assets/images/products/banners/banner_2.jpg"
            alt="banner"
          />
          <!-- <img
            v-else
            src="~/assets/images/products/banners/banner_2_mb.png"
            class="img-mb"
            alt="banner"
          /> -->
        </div>
        <div class="tu-section-img lgim">
          <img
            v-if="!isMobile"
            src="~/assets/images/products/banners/banner_men_3.png"
            class="img-lg"
            alt="banner"
          />
          <img
            v-else
            src="~/assets/images/products/banners/banner_men_2_mb.png"
            class="img-mb"
            alt="banner"
          />
        </div>
        <div class="tu-section-img">
          <img
            v-if="!isMobile"
            src="~/assets/images/products/banners/banner_women_1.png"
            class="img-lg"
            alt="banner"
          />
          <img
            v-else
            src="~/assets/images/products/banners/banner_women_mb.png"
            class="img-mb"
            alt="banner"
          />
        </div>
        <div class="tu-section-img mdim">
          <img
            v-if="!isMobile"
            src="~/assets/images/products/banners/banner_kids.png"
            class="img-lg"
            alt="banner"
          />
          <img
            v-else
            src="~/assets/images/products/banners/banner_kids_mb.png"
            class="img-mb"
            alt="banner"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { subHeaders } from '@/data/header'
import productsJSON from '@/data/products.json'

const breakpoint = 550.98

export default {
  data() {
    return {
      subHeaders,
      products: productsJSON,
      activeKeys: [],
      isMobile: false,
    }
  },
  // computed: {
  //   isEmpty() {
  //     if (!this.products) return false
  //     return Object.keys(this.products).length === 0
  //   },
  //   productsObject() {
  //     return this.products.reduce(
  //       (ps, current) => ({ ...ps, [current.key]: current }),
  //       {}
  //     )
  //   },
  // },
  // watch: {
  //   '$route.query'() {
  //     this.updateActiveKeys()
  //   },
  // },
  // created() {
  //   this.updateActiveKeys()
  // },
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
    // isActiveCategoryType(name) {
    //   const query = this.$route.query
    //   if (!query.type || !name) return false
    //   return name === query.type
    // },
    // getProductImage(current, index) {
    //   const image = current.images[index]
    //   if (image) return `${current.category}/${image.url}`
    //   return undefined
    // },
    // updateActiveKeys() {
    //   const query = this.$route.query
    //   for (const property in query) {
    //     if (typeof this.activeKeys === 'string') {
    //       this.activeKeys = [this.activeKeys]
    //     } else {
    //       this.activeKeys = [...new Set([...this.activeKeys, query[property]])]
    //     }
    //   }
    // },
    onResize() {
      this.isMobile = window.innerWidth < breakpoint
    },
  },
}
</script>

<style lang="scss" scoped>
.tu-product-list {
  padding-top: 0 !important;
}
.tu-section-img {
  position: relative;
  padding-bottom: 45%;
  margin-bottom: 2rem;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
  }
  .img-lg {
    display: flex;
  }
  .img-mb {
    display: none;
  }
}
@media (max-width: 550.98px) {
  .tu-section-img {
    padding-bottom: 165%;
    margin-bottom: 1rem;
    .img-lg {
      display: none;
    }
    .img-mb {
      display: flex;
    }
  }
  .lgim {
    padding-bottom: 290%;
  }
  .mdim {
    padding-bottom: 208%;
  }
  .xsim {
    padding-bottom: 46%;
  }
}
.tu-banner {
  height: 780px;
  @media (min-width: 1024.98px) and (max-width: 1440px) {
    height: 420px;
  }
  @media (max-width: 1024px) {
    height: 200px;
  }
}
.tu-drawer {
  margin-right: 32px;
  &_link {
    padding-left: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    &-active {
      font-weight: 600;
    }
  }
  a {
    text-decoration: none;
    font-size: 16px;
    color: $blue;
    &:hover {
      font-weight: 500;
    }
  }
}
// .tu-card {
//   margin-bottom: 32px;
//   .tu-product-card {
//     margin-bottom: 0;
//     border: 1px solid #ccc;
//     &_info {
//       padding: 8px 16px 16px 16px;
//       text-align: center;
//     }
//     &_name {
//       font-size: 16px;
//       font-weight: 600;
//       cursor: pointer;
//     }
//     &_color {
//       display: flex;
//       justify-content: center;
//       margin-top: 8px;
//       .color_box {
//         width: 15px;
//         height: 15px;
//         border: 0.5px solid #626262;
//         cursor: pointer;
//         margin: 0 3px;
//         border-radius: 50%;
//         position: relative;
//       }
//       .active {
//         &::after {
//           content: "";
//           width: 17px;
//           border: 1px solid #000;
//           height: 17px;
//           position: absolute;
//           top: -3px;
//           left: -3px;
//           padding: 1px;
//           border-radius: 50%;
//         }
//       }
//     }
//   }
// }
@media (max-width: 991.98px) {
  .tu-drawer {
    margin-right: 0;
  }
}
</style>

<style lang="scss">
.tu-drawer {
  .el-collapse-item__header {
    font-size: 16px;
    color: $blue;
  }
}
</style>
