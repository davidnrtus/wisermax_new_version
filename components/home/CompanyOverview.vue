<template>
  <div class="tu-section">
    <div class="tu-section-content">
      <div class="tu-co-padding">
        <el-row type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20" :lg="16">
            <el-row>
              <el-col :xs="12" :sm="6">
                <div class="tu-co-data">
                  <div class="tu-co-data_value">{{ info.years_experience }}</div>
                  <div class="tu-co-data_txt">Years of experience</div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="6">
                <div class="tu-co-data">
                  <div class="tu-co-data_value">{{ info.products_per_year }}</div>
                  <div class="tu-co-data_txt">Products Per Year</div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="6">
                <div class="tu-co-data">
                  <div class="tu-co-data_value">{{ info.partners }}</div>
                  <div class="tu-co-data_txt">Trusted Partners</div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="6">
                <div class="tu-co-data">
                  <div class="tu-co-data_value">{{ info.buyers }}</div>
                  <div class="tu-co-data_txt">Buyers</div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import info from '@/data/info'

export default {
  data() {
    return {
      info
    }
  },
}
</script>

<style lang="scss" scoped>
.tu-co-padding {
  margin-top: 3rem;
}
.tu-co-data {
  text-align: center;
  padding: 0 16px;
  &_value {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
  }
}
</style>
