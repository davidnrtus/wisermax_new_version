<template>
  <div class="tu-section clearfixed clearpt">
    <!-- <div class="centeral">
      <img
        src="~/assets/images/backgrounds/bg-about-us-intro.jpeg"
        alt="bg-about-us"
      />
      <div class="tu-section-title underline">About</div>
    </div> -->
    <el-row type="flex" justify="center">
      <el-col :xl="16" :lg="20" :md="22" :sm="24" :xs="24">
        <el-row :gutter="32">
          <el-col :lg="10" :xl="12">
            <div class="tu-img-cover tu-about-bg">
              <img
                src="~/assets/images/about/bg-intro.jpg"
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
    <el-row type="flex" justify="center" class="mt4">
      <el-col :xl="16" :lg="20" :md="22" :sm="24" :xs="24">
        <el-row :gutter="32">
          <el-col :lg="10" :xl="12">
            <div>
              <h2>Factory Partners</h2>
              <p class="tu-text-p">
                With the goals of increasing the transparency of our supply
                chain, taking on a greater responsibility to ensure good labor
                conditions. Sewing factories represent factories where finished
                products are manufactured and include both factories with our direct
                and indirect business relationships.
              </p>
              <div class="fp-list">
                <div v-for="(item, i) in partners" :key="i" class="fp-item">
                  {{ item.title }}
                </div>
              </div>
            </div>
          </el-col>
          <el-col :lg="14" :xl="12">
            <div class="tu-img-cover tu-about-bg">
              <img
                src="~/assets/images/backgrounds/bg-about-us-fp.png"
                alt="bg-about-us"
              />
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
      partners: [
        { title: 'PEARL VINA' },
        { title: 'HUNG YEN JSC' },
        { title: 'HOANG DUONG CO.,LTD' },
        { title: 'TIEN HUNG JSC' },
        { title: 'TNG' },
        { title: 'MAY 10' },
        { title: 'NHAN KHANG CO.,LTD' },
        { title: 'HOA SEN PHU THO CO.,LTD' },
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
  padding-top: 60%;
  margin-top: 1.75rem;
  @media (max-width: 1199.98px) {
    padding-top: 50%;
    margin-top: 0.25rem;
  }
}
.fp-list {
  text-align: right;
  @media (max-width: 1199.98px) {
    text-align: left;
  }
}
</style>
