<template>
  <div class="tu-section clearfixed clearpt">
    <el-row type="flex" justify="center">
      <el-col :xl="16" :lg="20" :md="22" :sm="24" :xs="24">
        <div class="tu-section-title_sm underline">{{ $t('Introduction') }}</div>
        <p class="tu-text-p">{{ $t('about_text_1') }}</p>
        <p class="tu-text-p">{{ $t('about_text_2') }}</p>
        <p class="tu-text-p">{{ $t('about_text_3') }}</p>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="tu-abu-num flex-wrap">
      <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <div class="bg-left">
          <NuxtImg
            src="/about/bg-employee.jpeg"
            class="overlay object-fit"
            alt=""
           />
          <div class="overlay" style="background: rgba(0, 0, 0, 0.45)"></div>
          <div
            class="centeral column overlay"
            style="
              align-items: flex-start;
              justify-content: flex-start;
              margin-top: 3.6rem;
            "
          >
            <h2
              class="text-left w-full"
              style="margin-left: 2rem; margin-right: 1rem"
            >
              {{ $t('factory_partners') }}
            </h2>
            <p class="tu-text-p" style="margin-left: 2rem; margin-right: 1rem">
              {{ $t('factory_partners_content') }}
            </p>
          </div>
        </div>
      </el-col>
      <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <div class="bg-right">
          <NuxtImg src="/about/bg-nums.jpg" alt=""  />
          <div class="content">
            <h2 class="text-left" style="margin-left: 2rem">{{ $t('our_capacity') }}</h2>
            <p class="tu-text-p" style="margin-left: 2rem">
              {{ $t('our_capacity_description') }}
            </p>
            <div
              v-for="(item, index) in params"
              :key="index"
              class="content-item"
            >
              <span>{{ $t(item) }}</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: [
        'pcs_per_month',
        'pcs_knit_top_per_year',
        'pcs_knit_dress_per_year',
        'pcs_coat_jacket',
        'pcs_pant',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.tu-text-p {
  line-height: 30px;
}
.tu-abu-num {
  margin-top: 2rem;
  .bg-left {
    background: #e3e3e3;
    height: 100%;
    position: relative;
    color: #fff;
    .pbx {
      height: 100%;
      padding: 0 1rem;
    }
  }
  .bg-right {
    padding-bottom: 60%;
    position: relative;
    img,
    .content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      color: #fff;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      span {
        font-size: 1.5rem;
        margin-left: 2rem;
        margin-right: 1rem;
        font-weight: 600;
        position: relative;
        &::after {
          content: '';
          height: 2px;
          width: 40px;
          background: $second;
          bottom: 0;
          left: 0;
          position: absolute;
        }
      }
      &-item {
        padding: 1rem 0;
        width: 100%;
        text-align: left;
      }
    }
  }
}
@media (max-width: 1199.98px) {
  .tu-abu-num {
    .bg-left {
      height: 280px;
    }
  }
}
@media (min-width: 477.98px) and (max-width: 687px) {
  .tu-abu-num {
    .bg-right {
      padding-bottom: 100%;
      .content {
        span {
          font-size: 1.25rem;
        }
      }
    }
  }
}
@media (max-width: 477.98px) {
  .tu-abu-num {
    .bg-right {
      padding-bottom: 140%;
      .content {
        span {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
