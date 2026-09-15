<template>
  <div class="tu-section clearpt">
    <div class="text-center" style="margin-bottom: 2rem">
      <h1 class="underline-2">{{ $t('our_services') }}</h1>
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
        style="margin: 12px 0;"
      >
        <div class="tu-card">
          <div class="tu-card-img tu-img-cover">
            <img :src="`/about/${item.img}`" alt="" />
          </div>
          <div class="text-center tu-card-content">
            <h3 style="margin: 0.5rem 0">{{ $t(item.name) }}</h3>
            <p>{{ $t(item.text) }}</p>
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
          img: 'service-41.jpg',
          name: 'sourcing_material',
          text: 'sourcing_material_description'
        },
        { 
          img: 'service-21.jpg',
          name: 'develop_design',
          text: 'develop_design_description'
        },
        { 
          img: 'service-11.jpeg',
          name: 'process',
          text: 'process_description'
        },
        { 
          img: 'service-51.jpg',
          name: 'shipping',
          text: 'shipping_description'
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.tu-card {
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.15);
  height: 100%;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  &-img {
    padding-bottom: 100%;
    img {
      top: 4%;
      left: 4%;
      width: 92%;
      height: 92%;
    }
  }
  &-content {
    padding: 0 12px;
  }
}
</style>