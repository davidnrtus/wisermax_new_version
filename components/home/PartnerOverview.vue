<template>
  <div class="tu-section" style="background: #f7fdff; margin-top: 4rem">
    <div class="tu-section-label">
      {{ $t('customer_1') }}
    </div>
    <div class="tu-section-content">
      <el-row type="flex" justify="center" class="crow">
        <el-col :md="23" :lg="18">
          <div class="flex flex-wrap">
            <div v-for="(cus, i) in customers" :key="i" :style="`width: calc(1/${customers.length} * 100%);`" class="img-wi ccol-img">
              <div class="center">
                <img :src="require(`~/assets/images/customers/${cus.img}`)" :alt="cus.img" />
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="tu-section-label">
      {{ $t('customer_2') }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customers: [
        { img: 'ck.png' },
        { img: 'gucci.png' },
        { img: 'tommy.png' },
        { img: 'dkny.svg' },
        { img: 'karl.png' },
        { img: 'guess.svg' },
        { img: 'huckberry.png' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.tu-section {
  &-content {
    img {
      width: 100%;
      height: auto;
    }
  }
  &-label {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5;
  }
  .crow {
    margin: 3rem 0 1rem 0;
  }
  .ccol-img {
    height: 80px;
    padding: 0 30px;
    margin: 16px 0;
    box-sizing: border-box;
  }
}
@media (max-width: 768px) {
  .crow {
    margin: 1rem 0 1rem 0 !important;
  }
  .ccol-img {
    margin: 8px 0;
    height: 50px !important;
  }
  .tu-section-label {
    font-size: 1rem;
  }
  .img-wi {
    width: 50% !important;
  }
}
</style>