<template>
  <div class="tu-section">
    <div class="tu-section-title mb-0">Our Products</div>
    <el-row type="flex" justify="center">
      <el-col :md="20" :lg="16">
        <p class="text-center uppercase">
          Currently, we manufacture apparel products such as men's, women's,
          children's, and protective clothing, as well as accessories such as socks, underwear...
        </p>
      </el-col>
    </el-row>
    <div class="tu-section-content">
      <el-row :gutter="10">
        <el-col
          v-for="product in products"
          :key="product.name"
          :xs="24"
          :sm="12"
          :md="6"
        >
          <div class="tu-product-card">
            <img
              :src="require(`~/assets/images/home/${product.img}`)"
              :alt="product.name"
            />
            <div class="tu-product-card_content">
              <router-link :to="localePath(`/products/${product.key}`)">
                View more
              </router-link>
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
          img: 'product_overview_men.jpeg',
          key: 'men',
        },
        {
          name: 'product_overview_women',
          img: 'product_overview_women.jpeg',
          key: 'women',
        },
        {
          name: 'product_overview_kid',
          img: 'product_overview_kid.png',
          key: 'kids',
        },
        {
          name: 'product_overview_socks',
          img: 'product_overview_protective.jpg',
          key: '',
        },
      ],
    }
  },
}
</script>
