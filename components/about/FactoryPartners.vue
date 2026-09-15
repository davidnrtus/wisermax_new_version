<template>
  <div class="tu-section clearpt">
    <el-row type="flex" justify="center" class="mt4">
      <el-col :xl="16" :lg="20" :md="22" :sm="24" :xs="24">
        <el-row>
          <el-col :lg="10" :xl="12" class="sp">
            <div>
              <h2>Factory Partners</h2>
              <p class="tu-text-p">
                Our 20++ factory partner in north and midle of VietNam 
              </p>
            </div>
          </el-col>
          <el-col :lg="14" :xl="12" class="sp">
            <div class="tu-img-cover tu-about-bg">
              <NuxtImg
                src="/about/bg-employee.jpeg"
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
        { title: 'Pearl Vina' },
        { title: 'Hung Yen JSC' },
        { title: 'Hoang Duong CO.,LTD' },
        { title: 'Tien Hung JSC' },
        { title: 'TNG' },
        { title: 'May 10' },
        { title: 'Nhan Khang CO.,LTD' },
        { title: 'Hoa Sen Phu Tho CO.,LTD' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.tu-text-p {
  line-height: 2.3;
}
.sp {
  padding: 0 12px;
  @media (max-width: 687.98px) {
    padding: 0;
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
  display: flex;
  flex-wrap: wrap;
  .fp-item {
    margin-bottom: 0.5rem;
    width: 50%;
    font-weight: 500;
    @media (max-width: 687.98px) {
      width: 100%;
    }
  }
}
</style>