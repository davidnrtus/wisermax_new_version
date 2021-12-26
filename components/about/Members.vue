<template>
  <div class="tu-section tu-smember">
    <div class="text-center mot">Meet Our Team</div>
    <p>We are a team of innovations, thinkers, and doers driven by the desire to challenge the status quo</p>
    <el-row type="flex" justify="center">
      <el-col :xl="18" :lg="20" :md="24">
        <el-row type="flex">
          <el-col :xl="10" :lg="10" :md="10" :sm="10">
            <div class="box">
              <div class="b-card">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="">
                <div class="b-card-content">
                  <div class="name">Ms Helen</div>
                  <div class="position">CEO</div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xl="14" :lg="14" :md="14" :sm="14">
            <el-row>
              <el-col v-for="i in 4" :key="i" :span="12">
                <div class="s-card">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="">
                  <div class="b-card-content">
                    <div class="name">Ms Helen</div>
                    <div class="position">CEO</div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.tu-smember {
  background: #ecf1ff;
  text-align: center;
  .mot {
    font-size: 1.75rem;
    line-height: 1.5;
    font-weight: 500;
  }
  .box {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .b-card {
    text-align: center;
    img {
      width: 180px;
      height: 180px;
      object-fit: cover;
      border-radius: 50%;
    }
    .name {
      font-weight: 600;
      margin: 10px 0 5px;
    }
  }
  .s-card {
    text-align: center;
    margin: 10px 6px;
    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}
</style>