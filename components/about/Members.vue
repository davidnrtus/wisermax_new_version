<template>
  <div class="tu-section tu-smember text-center">
    <h1 class="underline-2" style="margin-bottom: 4rem">{{ $t('meet_our_director') }}</h1>
    <el-row type="flex" justify="center">
      <el-col :xl="18" :lg="20" :md="24">
        <el-row type="flex" justify="center" class="flex-wrap">
          <el-col :xl="9" :lg="9" :md="9" :sm="10">
            <div class="">
              <TuImage
                :src="`/members/ceo_helen.jpg`"
                :padding-bottom="60"
                img-width="60%"
                center
                rounded-full
              />
            </div>
          </el-col>
          <el-col :xl="10" :lg="10" :md="10" :sm="14">
            <el-row type="flex" justify="left" class="flex-wrap">
              <el-col :span="24">
                <div class="b-card-content text-left">
                  <h2 class="mb4 text-primary">Ms Helen Hoang</h2>
                  <div class="text-bold mb4">
                    helen@wiser.vn / +84-974-806625
                  </div>
                  <div class="description mb4">
                    {{ $t('meet_our_director_description') }}
                  </div>
                </div>
              </el-col>
              <el-col
                :xl="18"
                :lg="20"
                :md="22"
                :sm="22"
                class="overflow-hidden"
              >
                <div class="text-left mb2">{{ $t('meet_our_director_feel') }}</div>
                <div class="flex">
                  <TuImage
                    :src="`/members/qr-ceo.svg`"
                    class="avt"
                    style="margin-right: 1rem"
                  />
                  <TuImage
                    :src="`/members/qr-wechat.svg`"
                    class="avt"
                  />
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
.mb2 {
  margin-bottom: 0.5rem;
}
.mb4 {
  margin-bottom: 1rem;
}
.description {
  line-height: 2;
}
.tu-smember {
  // background: #ecf1ff;
  background: #fff3e8;
}
</style>
