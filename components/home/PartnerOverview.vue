<template>
  <div class="tu-section" style="background: #f7fdff; margin-top: 4rem">
    <div class="tu-section-label">
      Cooperate with more than 20 companies around the world
    </div>
    <div class="tu-section-content">
      <el-row type="flex" justify="center" class="crow">
        <el-col :md="23" :lg="18">
          <el-row>
            <el-col class="ccol-img" :xs="12" :sm="4">
              <div class="center">
                <img src="~/assets/images/temp/ck.png" alt="ck" />
              </div>
            </el-col>
            <el-col class="ccol-img" :xs="12" :sm="4">
              <div class="center">
                <img src="~/assets/images/temp/gucci.png" alt="ck" />
              </div>
            </el-col>
            <el-col class="ccol-img" :xs="12" :sm="4">
              <div class="center">
                <img src="~/assets/images/temp/tommy.png" alt="ck" />
              </div>
            </el-col>
            <el-col class="ccol-img" :xs="12" :sm="4">
              <div class="center">
                <img src="~/assets/images/temp/ck.png" alt="ck" />
              </div>
            </el-col>
            <el-col class="ccol-img" :xs="12" :sm="4">
              <div class="center">
                <img src="~/assets/images/temp/gucci.png" alt="ck" />
              </div>
            </el-col>
            <el-col class="ccol-img" :xs="12" :sm="4">
              <div class="center">
                <img src="~/assets/images/temp/tommy.png" alt="ck" />
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="tu-section-label">
      <router-link to="/about-us" class="ca">...and many more.</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.tu-section {
  &-content {
    img {
      width: 100%;
      height: auto;
    }
  }
  &-label {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
  }
  .crow {
    margin: 3rem 0 1rem 0;
  }
  .ccol-img {
    height: 80px;
    padding: 0 30px;
    margin: 16px 0;
  }
}
@media (max-width: 768px) {
  .crow {
    margin: 1rem 0 1rem 0 !important;
  }
  .ccol-img {
    height: 50px !important;
  }
  .tu-section-label {
    font-size: 1rem;
  }
}
</style>