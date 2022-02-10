<template>
  <div class="tu-section" style="margin-top: 2rem">
    <el-row type="flex" justify="center">
      <el-col :md="24" :lg="20">
        <el-row type="flex" justify="center" class="flex-wrap">
          <el-col :xs="24">
            <h3 class="tu-section-title">Business Areas</h3>
          </el-col>
          <el-col :xs="24">
            <el-row type="flex" justify="center" class="flex-wrap">
              <el-col
                v-for="(item, i) in services"
                :key="i"
                :xs="24"
                :sm="8"
                :md="6"
                :xl="5"
              >
                <div class="tu-so-card">
                  <div class="tu-so-card_img">
                    <img
                      :src="require(`~/assets/images${item.img}`)"
                      alt="service"
                    />
                  </div>
                  <div class="tu-so-card_content">
                    <div class="text-bold heading">{{ item.title }}</div>
                    <span>{{ item.description }} </span>
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

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'Design',
          description:
            'We are a quality oriented professional clothing manufacturer exporter brand which focus on Women clothing, Man clothing, children wear.',
          img: '/home/so-design.jpg',
        },
        {
          title: 'OEM, ODM service',
          description:
            'We offer OEM, ODM service and design/manufacture as per clothes design and requirements.',
          img: '/home/so-ewo.jpg',
        },
        {
          title: 'Garment production',
          description:
            'Factory base in vietnam, As for the production capability, we can produce 600,000 pieces monthly. In the year of 2019 we provide total 3000 000 pieces for US, Canada market.',
          img: '/about/service-1.jpg',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.tu-so-card {
  margin-bottom: 1rem;
  padding: 0 8px;
  &_img {
    padding-bottom: 72%;
    position: relative;
    background: #f7fdff;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  &_content {
    padding: 1rem 0;
  }
  .heading {
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
  }
}
</style>