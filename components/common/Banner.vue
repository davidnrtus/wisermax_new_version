<template>
  <div class="tu-banner mg-common">
    <div class="tu-banner-slider">
      <el-carousel :interval="4000" :autoplay="true" trigger="click" arrow="hover">
        <el-carousel-item>
          <div class="slider-container">
            <NuxtImg src="/banners/banner_contact_2.png" alt="banner"  />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="slider-container">
            <NuxtImg src="/banners/banner_2.png" alt="banner"  />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="slider-container">
            <NuxtImg src="/banners/banner_4.png" alt="banner"  />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style lang="scss">
.tu-banner {
  .el-carousel__container {
    height: unset !important;
    padding-bottom: 39%;
    @media (min-width: 1024.98px) and (max-width: 1440px) {
      // padding-bottom: 52%;
    }
    @media (max-width: 1024px) {
      // padding-bottom: 50%;
    }
  }
}
</style>
