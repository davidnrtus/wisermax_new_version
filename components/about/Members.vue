<template>
  <div class="tu-section tu-smember">
    <div class="text-center mot">Meet Our Team</div>
    <p style="margin-bottom: 2rem">
      We are a team of innovations, thinkers, and doers driven by the desire to
      challenge the status quo
    </p>
    <el-row type="flex" justify="center">
      <el-col :xl="18" :lg="20" :md="24">
        <el-row type="flex" justify="center" class="flex-wrap">
          <el-col :xl="10" :lg="10" :md="10" :sm="10">
            <div class="box">
              <div class="b-card">
                <TuImage
                  :src="require(`~/assets/images/members/ceo_helen.jpg`)"
                  class="avt"
                />
                <div class="b-card-content">
                  <div class="name">Ms Helen</div>
                  <div class="position">CEO</div>
                  <div class="position">helen@wiser.vn / +84-974-806625</div>
                  <div class="description">
                    Với 10 năm kinh nghiệm trong lĩnh vực may mặc. Chúng tôi
                    luôn tự hào mang đến những sản phẩm chất lượng cao cho khách
                    hàng...
                  </div>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :xl="10" :lg="10" :md="10" :sm="14">
            <el-row type="flex" justify="center" class="flex-wrap">
              <el-col :span="12" class="overflow-hidden">
                <div style="width: 70%; margin: 0 auto;">
                  <TuImage
                    :src="require(`~/assets/images/members/qr-ceo.svg`)"
                    class="avt"
                  />
                </div>
              </el-col>
              <el-col :span="12" class="overflow-hidden">
                <div style="width: 70%; margin: 0 auto;">
                  <TuImage
                    :src="require(`~/assets/images/members/qr-wechat.svg`)"
                    class="avt"
                  />
                </div>
              </el-col>
            </el-row>
          </el-col>
          <!-- <el-col :xl="10" :lg="10" :md="10" :sm="14">
            <el-row type="flex" justify="center" class="flex-wrap">
              <el-col v-for="(item, i) in teams" :key="i" :span="12" class="overflow-hidden">
                <div class="s-card">
                  <h3 style="padding-top: 8px">{{ item.title }}</h3>
                  <p>{{ item.des }}</p>
                </div>
              </el-col>
            </el-row>
          </el-col> -->
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        {
          title: 'Purchasing team',
          des: 'Includes dynamic and meticulous workers who receive orders and technical documents then coordinate with technical & MD team to source out and order materials. ',
        },
        {
          title: 'Technical team and sample room',
          des: 'Includes creative and responsible workers who take charge of  design and development sessions.',
        },
        {
          title: 'Merchandiser team and QC team',
          des: 'Includes enthusiastic workers who follow production plans and handling problems arising during production process. QC team are responsible for garment quality ',
        },
        {
          title: 'Shipping team',
          des: 'Includes careful and meticulous workers who follow arrange and book vessels, submit related shipping docs.',
        },
      ],
    }
  },
}
</script>

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
    margin: 16px 0;
    line-height: 1.5;
    .avt {
      width: 180px;
      height: 180px;
      object-fit: cover;
      border-radius: 50%;
      overflow: hidden;
      margin: auto;
    }
    .name {
      font-weight: 600;
      margin: 10px 0 5px;
    }
  }
  .s-card {
    text-align: center;
    margin: 8px;
    padding: 0 12px;
    border-radius: 4px;
    height: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.03);
  }
}
</style>