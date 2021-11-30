<template>
  <div class="tu-section clearpt">
    <el-row type="flex" justify="center" style="margin-top: 4rem">
      <el-col :xl="16" :lg="20" :md="22" :sm="24" :xs="24">
        <el-row type="flex" justify="center" :gutter="32" class="flex-wrap">
          <el-col :sm="12" :xs="24">
            <div class="tu-img-cover tu-card-in">
              <img
                src="~/assets/images/backgrounds/bg-about-us-employees.jpeg"
                alt="bg-about-us-employees"
              />
              <div class="tu-card-in_content overlay centeral">
                20,000 employees
              </div>
            </div>
          </el-col>
          <el-col :sm="12" :xs="24">
            <div class="tu-img-cover tu-card-in">
              <img
                src="~/assets/images/backgrounds/bg-about-us-factory.jpeg"
                alt="bg-about-us-factory"
              />
              <div class="tu-card-in_content overlay centeral">
                2000 m2
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="mt4">
      <el-col :xl="16" :lg="20" :md="22" :sm="24" :xs="24">
        <!-- <h2>What we can do?</h2> -->
        <el-row :gutter="16" type="flex" justify="center" class="flex-wrap">
          <el-col v-for="(item, i) in params" :key="i" :lg="4" :md="6" :sm="8" :xs="12">
            <div class="tu-card">
              <h3>{{ item.value }}</h3>
              <div class="tu-card-text">
                {{ item.text }}
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: [
        {
          value: '12,000 PCS',
          text: 'mỗi tháng',
        },
        {
          value: '5,0000,000 PCS',
          text: 'KNIT TOP / năm',
        },
        {
          value: '1,0000,000 PCS',
          text: 'KNIT DRESS / năm',
        },
        {
          value: '500,000 PCS',
          text: 'COAT & JACKET',
        },
        {
          value: '500,000 PCS',
          text: 'PANT / năm',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.tu-card {
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 4px;
  border: 1px solid $blue;
  padding: 0 6px 1rem 6px;
  margin: 1rem 0;
  height: calc(100% - 2rem);
  overflow: hidden;
}
.tu-card-in {
  padding-bottom: 60%;
  &_content {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    background: rgba(0, 0, 0, 0.45);
  }
}
</style>