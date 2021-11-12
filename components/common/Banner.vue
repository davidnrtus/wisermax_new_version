<template>
  <div class="tu-banner mg-common">
    <div class="tu-banner-slider">
      <el-carousel :interval="7000" :autoplay="false" trigger="click" arrow="hover">
        <el-carousel-item>
          <div class="slider-container">
            <img src="~/assets/images/banners/banner_2.png" alt="banner" >
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="slider-container">
            <img src="~/assets/images/banners/banner_1.png" alt="banner" >
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tu-banner {
  .slider-container {
    // height: 100%;
    // width: 100%;
    position: relative;
    width: 100%;
    height: 100%;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

<style lang="scss">
.tu-banner {
  .el-carousel__container {
    height: unset !important;
    padding-bottom: 44%;
    @media (min-width: 1024.98px) and (max-width: 1440px) {
      padding-bottom: 48%;
    }
    @media (max-width: 1024px) {
      padding-bottom: 58%;
    }
  }
}
</style>
