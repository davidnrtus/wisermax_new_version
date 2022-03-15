<template>
  <div class="tu-section" style="margin-top: 2rem">
    <el-row type="flex" justify="center">
      <el-col :md="24" :lg="20">
        <el-row type="flex" justify="center" class="flex-wrap">
          <el-col :xs="24">
            <h3 class="tu-section-title">{{ $t('business_areas') }}</h3>
          </el-col>
          <el-col :xs="24">
            <el-row type="flex" justify="center" class="flex-wrap">
              <el-col
                v-for="(item, i) in services"
                :key="i"
                :xs="24"
                :sm="8"
                :md="7"
                :xl="6"
              >
                <div class="tu-so-card">
                  <div class="tu-so-card_img">
                    <img
                      :src="require(`~/assets/images${item.img}`)"
                      alt="service"
                    />
                  </div>
                  <div class="tu-so-card_content">
                    <div class="text-bold heading">{{ $t(item.title) }}</div>
                    <span>{{ $t(item.description) }} </span>
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
          title: 'design',
          description: 'design_service_content',
          img: '/home/so-design.jpg',
        },
        {
          title: 'oem_odm_service',
          description: 'oem_odm_service_content',
          img: '/home/so-sampleroom.jpg',
        },
        {
          title: 'garment_production',
          description: 'garment_production_content',
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