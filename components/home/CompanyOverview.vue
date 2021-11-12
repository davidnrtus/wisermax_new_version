<template>
  <div class="tu-section">
    <div class="tu-section-content">
      <div class="tu-co-padding">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20" :lg="16">
            <el-row :gutter="32">
              <el-col :xs="12" :sm="6">
                <div class="tu-co-data">
                  <div class="tu-co-data_value">4+</div>
                  <div class="tu-co-data_txt">Years experience</div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="6">
                <div class="tu-co-data">
                  <div class="tu-co-data_value">300+</div>
                  <div class="tu-co-data_txt">Products</div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="6">
                <div class="tu-co-data">
                  <div class="tu-co-data_value">20+</div>
                  <div class="tu-co-data_txt">Trusted company</div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="6">
                <div class="tu-co-data">
                  <div class="tu-co-data_value">1.1k</div>
                  <div class="tu-co-data_txt">World wide clients</div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tu-co-padding {
  margin-top: 3rem;
}
.tu-co-data {
  text-align: center;
  &_value {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
