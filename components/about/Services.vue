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
          img: 'service-3.jpeg', 
          name: 'Nhận gia công các đơn hàng',
          text: 'Chúng tôi nhận gia công các đơn hàng từ đơn giản đến khó.\nNhận các đơn hàng FOB từ khâu thiết kế, thu mua nguyên phụ liệu đến sản xuất'
        },
        { 
          img: 'service-2.png', 
          name: 'Thiết kế sản phẩm thời trang',
          text: 'We invest strongly in design.'
        },
        { 
          img: 'service-4.jpeg', 
          name: 'Chọn vải và chất liệu phù hợp',
          text: 'Chúng tôi sẽ lựa chọn nữa loại vải và chất liệu phù hợp, tốt nhất và hợp lí về các loại giá.'
        },
        { 
          img: 'service-1.jpg', 
          name: 'Sản xuất sản phẩm may mặc',
          text: 'We control quality  base on AQL 1.0, 2.5. We seek manufacturing partners with great care, sometimes newcomers with whom we can build.'
        },
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