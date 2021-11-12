<template>
  <div class="tu-section">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="24" :md="18">
        <div class="tu-section-title" style="text-align: left">
          Why choose us
        </div>
        <div class="tu-section-content">
          <el-row :gutter="32">
            <el-col
              v-for="(item, index) in reasons"
              :key="index"
              :xs="24"
              :sm="12"
            >
              <div class="tu-wcu-card">
                <img
                  :src="require(`~/assets/images/icons/${item.img}`)"
                  class="tu-wcu-card_img"
                  :alt="item.title"
                />
                <div class="tu-wcu-card_txt">
                  <b>{{ item.title }}</b>
                  <div>{{ item.description }}</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reasons: [
        {
          title: 'Quality',
          description: '100% check one by one process',
          img: 'wcu-quality.png',
        },
        {
          title: 'Help',
          description: 'Design your idea and provide design solutions',
          img: 'wcu-cost.png',
        },
        {
          title: 'Cost of products',
          description:
            'Help you get the best solution to meet your target price',
          img: 'wcu-services.png',
        },
        {
          title: 'Flexibility',
          description: 'Fast lead time, good price, selectable payment terms',
          img: 'wcu-flexibility.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.tu-wcu-card {
  display: flex;
  padding: 30px 16px;
  background: #e8f5fc;
  margin: 16px 0;
  border-radius: 12px;
  &_img {
    width: 82px;
    height: 82px;
    margin-right: 1.5rem;
    // position: relative;
    // padding-top: 13%;
    // padding-right: 13%;
    // margin-right: 1.5rem;
    // background: #e2f0fc;
    // border-radius: 50%;
    // img {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   height: 100%;
    // }
  }
  &_txt {
    div {
      margin-top: 1rem;
    }
  }
}
</style>