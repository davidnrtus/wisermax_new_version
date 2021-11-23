<template>
  <div class="tu-section clearfixed">
    <div class="centeral">
      <img
        src="~/assets/images/backgrounds/bg-about-us-intro.jpeg"
        alt="bg-about-us"
      />
      <div class="tu-section-title underline">About</div>
    </div>
    <el-row type="flex" justify="center" style="margin-top: 4rem">
      <el-col :lg="18" :xl="20" :md="22" :sm="24" :xs="24">
        <el-row :gutter="32">
          <el-col :lg="10" :xl="12">
            <div class="tu-img-cover tu-about-bg">
              <img
                src="~/assets/images/backgrounds/bg-about-us.jpeg"
                alt="bg-about-us"
              />
            </div>
          </el-col>
          <el-col :lg="14" :xl="12">
            <h2>Introduction</h2>
            <p class="tu-text-p">
              We are a quality oriented professional clothing manufacturer
              exporter brand which focus on Women clothing, Man clothing,
              children wear. Factory base in vietnam, As for the production
              capability, we can produce 500,000 pieces monthly. In the year of
              2019, we provide total 3000 000 pieces for US, Canada market. We
              offer OEM, ODM service and design/manufacture as per clothes
              design and requirements.
            </p>
            <p class="tu-text-p">
              We have a skilled team of experts with a real working passion and
              dedication to make buyer’s fashion dream come true. We always
              focusing on providing fast, precise service for all customers "We
              are committed to high quality and innovation and a process that
              SAFETY and FAIR creating clothes you can trust and your customers
              want to wear". Any inquiry please feel free to contact us
            </p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" style="margin-top: 4rem">
      <el-col :lg="18" :xl="20" :md="22" :sm="24" :xs="24">
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
    <el-row type="flex" justify="center" style="margin-top: 4rem">
      <el-col :lg="18" :xl="20" :md="22" :sm="24" :xs="24">
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
.tu-text-p {
  line-height: 2.3;
}
.underline {
  position: relative;
  display: inline-block;
  &::after {
    content: '';
    width: 100%;
    height: 6px;
    background: $blue;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.tu-about-bg {
  padding-top: 100%;
  margin-top: 1.75rem;
}
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
