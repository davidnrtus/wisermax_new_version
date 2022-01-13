<template>
  <div class="tu-section clearpt">
    <div class="text-center" style="margin-bottom: 2rem">
      <h1 class="underline-2">Our Services</h1>
    </div>
    <el-row type="flex" justify="center" class="flex-wrap" :gutter="24">
      <el-col
        v-for="(item, index) in services"
        :key="index"
        :xl="5"
        :lg="6"
        :md="8"
        :sm="12"
        :xs="24"
      >
        <div class="tu-card tu-img-cover">
          <img :src="require(`~/assets/images/about/${item.img}`)" alt="" />
          <div class="tu-card-content overlay centeral text-white">
            <div class="text-center">
              <h3>{{ item.name }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { 
          img: 'service-2.jpg', 
          name: 'Thiết kế sản phẩm thời trang',
          text: 'We invest strongly in design.'
        },
        { 
          img: 'service-1.jpg', 
          name: 'Sản xuất sản phẩm may mặc',
          text: 'We control quality  base on AQL 1.0, 2.5. We seek manufacturing partners with great care, sometimes newcomers with whom we can build.'
        },
        { img: 'service-1.jpg', name: 'Sản xuất sản phẩm may mặc' },
        { img: 'service-1.jpg', name: 'Sản xuất sản phẩm may mặc' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.tu-card-content {
  display: none;
}
.tu-card {
  padding-bottom: 100%;
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.15);
  margin: 6px 0;
  cursor: pointer;
  &:hover {
    .tu-card-content {
      display: flex;
      background: rgba($color: $second, $alpha: 0.8);
    }
  }
}
</style>