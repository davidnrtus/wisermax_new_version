<template>
  <div class="tu-header-promo">
    <!-- <img src="~/assets/images/backgrounds/bg-header-promo.jpg" class="tu-header-promo_bg" alt="bg-header-promo"> -->
    <div class="tu-header-promo_info">
      <div class="content space-no-wrap">
        <i class="el-icon-phone-outline" />
        +84-974-806625
      </div>
      <div class="content space-no-wrap">
        <i class="el-icon-message" />
        helen@wiser.vn / sale@wiser.vn
      </div>
      <div class="content">
        <i class="el-icon-location-outline" />
        No. 729, Nguyen Duc Thuan Street, Dang Xa Commune, Gia Lam District, Hanoi, Vietnam
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tu-header-promo {
  height: 41px;
  width: 100%;
  position: relative;
  background: #323232;
  &_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &_info {
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    font-weight: 500;
    height: 100%;
    width: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    .content {
      margin: 0 3rem;
    }
  }
}
@media (max-width: 1200px) {
  .tu-header-promo {
    display: none;
  }
}
</style>
