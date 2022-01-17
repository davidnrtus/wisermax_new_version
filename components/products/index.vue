<template>
  <div class="clearfixed">
    <div class="tu-banner mg-common">
      <div class="slider-container">
        <img src="~/assets/images/products/banners/banner_1.jpg" alt="banner" />
      </div>
    </div>
    <div class="tu-section tu-product-list">
      <div class="tu-section-content">
        <el-row type="flex" justify="center">
          <el-col :md="24" :lg="18">
            <el-row>
              <el-col :md="6">
                <div class="tu-drawer">
                  <h2>Category</h2>
                  <div class="tu-drawer-list">
                    <el-collapse v-model="activeKeys" accordion>
                      <el-collapse-item
                        v-for="menu in subHeaders"
                        :key="menu.key"
                        :name="menu.key"
                        :title="menu.title"
                      >
                        <div
                          v-for="sub in menu.childrens"
                          :key="sub.key"
                          class="tu-drawer_link"
                        >
                          <i class="el-icon-d-arrow-right" />
                          <router-link
                            :to="`products?category=${menu.key}&type=${sub.key}`"
                            :class="
                              isActiveCategoryType(sub.key) &&
                              'tu-drawer_link-active'
                            "
                          >
                            {{ sub.title }}
                          </router-link>
                        </div>
                      </el-collapse-item>
                    </el-collapse>
                  </div>
                </div>
              </el-col>
              <el-col :md="18">
                <h2>Our Products</h2>
                <el-row :gutter="32">
                  <div v-if="isEmpty" class="text-center">
                    <h4 style="font-weight: 400; margin-top: 3rem">
                      No products found
                    </h4>
                  </div>
                  <el-col
                    v-for="product in products"
                    v-else
                    :key="product.key"
                    :xs="24"
                    :sm="12"
                    :md="6"
                  >
                    <div class="tu-card">
                      <div class="tu-product-card">
                        <img
                          v-if="getProductImage(product, 0)"
                          :src="
                            require(`~/assets/images/products/${getProductImage(
                              product,
                              0
                            )}`)
                          "
                          :alt="product.name"
                        />
                      </div>
                      <div class="tu-product-card_info">
                        <div class="tu-product-card_name">
                          {{ product.name }}
                        </div>
                        <div class="tu-product-card_color">
                          <div
                            v-for="(image, index) in product.images.filter(
                              (item) => item.color
                            )"
                            :key="index"
                            :data-pic="getProductImage(product, index)"
                            :style="`background: ${image.color}`"
                            :class="index === 0 && 'active'"
                            class="color_box"
                          />
                        </div>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { subHeaders } from '@/data/header'
import productsJSON from '@/data/products.json'

export default {
  data() {
    return {
      subHeaders,
      products: productsJSON,
      activeKeys: [],
    }
  },
  computed: {
    isEmpty() {
      if (!this.products) return false
      return Object.keys(this.products).length === 0
    },
    productsObject() {
      return this.products.reduce(
        (ps, current) => ({ ...ps, [current.key]: current }),
        {}
      )
    },
  },
  watch: {
    '$route.query'() {
      this.updateActiveKeys()
    }
  },
  created() {
    this.updateActiveKeys()
  },
  methods: {
    isActiveCategoryType(name) {
      const query = this.$route.query
      if (!query.type || !name) return false
      return name === query.type
    },
    getProductImage(current, index) {
      const image = current.images[index]
      if (image) return `${current.category}/${image.url}`
      return undefined
    },
    updateActiveKeys() {
      const query = this.$route.query
      for (const property in query) {
        if (typeof this.activeKeys === 'string') {
          this.activeKeys = [this.activeKeys]
        } else {
          this.activeKeys = [...new Set([...this.activeKeys, query[property]])]
        }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
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
    color: $main;
    &:hover {
      font-weight: 500;
    }
  }
}
.tu-card {
  margin-bottom: 32px;
  .tu-product-card {
    margin-bottom: 0;
    border: 1px solid #ccc;
    &_info {
      padding: 8px 16px 16px 16px;
      text-align: center;
    }
    &_name {
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }
    &_color {
      display: flex;
      justify-content: center;
      margin-top: 8px;
      .color_box {
        width: 15px;
        height: 15px;
        border: 0.5px solid #626262;
        cursor: pointer;
        margin: 0 3px;
        border-radius: 50%;
        position: relative;
      }
      .active {
        &::after {
          content: "";
          width: 17px;
          border: 1px solid #000;
          height: 17px;
          position: absolute;
          top: -3px;
          left: -3px;
          padding: 1px;
          border-radius: 50%;
        }
      }
    }
  }
}
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
    color: $main;
  }
}
</style>
