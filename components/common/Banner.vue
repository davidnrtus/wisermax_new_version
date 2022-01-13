<template>
  <div class="tu-banner mg-common">
    <div class="tu-banner-slider">
      <el-carousel :interval="3000" :autoplay="false" trigger="click" arrow="hover">
        <el-carousel-item>
          <div class="slider-container">
            <img src="~/assets/images/banners/banner_4.png" alt="banner" >
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="slider-container">
            <img src="~/assets/images/banners/banner_5.png" alt="banner" >
          </div>
        </el-carousel-item>
        <!-- <el-carousel-item>
          <div class="slider-container">
            <img src="~/assets/images/banners/banner_6.png" alt="banner" >
          </div>
        </el-carousel-item> -->
      </el-carousel>
    </div>
  </div>
</template>

<style lang="scss">
.tu-banner {
  .el-carousel__container {
    height: unset !important;
    padding-bottom: 48%;
    @media (min-width: 1024.98px) and (max-width: 1440px) {
      padding-bottom: 52%;
    }
    @media (max-width: 1024px) {
      padding-bottom: 50%;
    }
  }
}
</style>
