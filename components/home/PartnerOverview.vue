<template>
  <div class="tu-section" style="background: #f7fdff; margin-top: 4rem">
    <div class="tu-section-label">
      With 12+ years of experience, all kind of item such as knit, woven.
    </div>
    <div class="tu-section-content">
      <el-row type="flex" justify="center" class="crow">
        <el-col :md="23" :lg="18">
          <el-row type="flex" justify="center" class="flex-wrap">
            <el-col class="ccol-img" :xs="12" :sm="4">
              <div class="center">
                <img src="~/assets/images/customers/ck.png" alt="ck" />
              </div>
            </el-col>
            <el-col class="ccol-img" :xs="12" :sm="4">
              <div class="center">
                <img src="~/assets/images/customers/gucci.png" alt="ck" />
              </div>
            </el-col>
            <el-col class="ccol-img" :xs="12" :sm="4">
              <div class="center">
                <img src="~/assets/images/customers/tommy.png" alt="ck" />
              </div>
            </el-col>
            <el-col class="ccol-img" :xs="12" :sm="4">
              <div class="center">
                <img src="~/assets/images/customers/dkny.svg" alt="dkny" />
              </div>
            </el-col>
            <el-col class="ccol-img" :xs="12" :sm="4">
              <div class="center">
                <img src="~/assets/images/customers/karl.png" alt="karl" />
              </div>
            </el-col>
            <el-col class="ccol-img" :xs="12" :sm="4">
              <div class="center">
                <img src="~/assets/images/customers/guess.svg" alt="guess" />
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="tu-section-label">
      Main label: US and canada market: Calvin & Klein, Tommy, DKNY, Karlarfield, Guess..., Korea market: CJ home shoping.
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
    line-height: 1.5;
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