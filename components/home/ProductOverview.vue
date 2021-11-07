<template>
  <div class="tu-section">
    <div class="tu-section-title">Featured Products</div>
    <div class="tu-section-content">
      <el-row :gutter="10">
        <el-col v-for="product in products" :key="product.name" :xs="24" :sm="12" :md="6">
          <div class="tu-product-card">
            <img
              :src="require(`~/assets/images/home/${product.img}`)"
              :alt="product.name"
            />
            <div class="tu-product-card_content">
              new
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          name: 'product_overview_men',
          img: 'product_overview_men.jpg',
        },
        {
          name: 'product_overview_women',
          img: 'product_overview_women.jpg',
        },
        {
          name: 'product_overview_kid',
          img: 'product_overview_kid.jpg',
        },
        {
          name: 'product_overview_socks',
          img: 'product_overview_socks.jpg',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tu-product-card {
  position: relative;
  overflow: hidden;
  padding-bottom: 135%;
  cursor: pointer;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &_content {
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
