<template>
  <div class="tu-section clearspacer">
    <TuImage :src="require(`~/assets/images/products/kids/banner_top.png`)" />
    <TuImage :src="require(`~/assets/images/products/kids/banner_top2.png`)" />
    <div class="title-noline">{{ $t('baby_zip') }}</div>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="18" :md="12" :lg="10">
        <TuImage :src="require(`~/assets/images/products/kids/baby_1.jpeg`)" />
      </el-col>
    </el-row>
    <div class="title-line">{{ $t('boys') }}</div>
    <el-row type="flex" justify="center" class="flex-wrap" :gutter="6">
      <el-col v-for="i in 4" :key="i" :xs="12" :sm="6" :md="6" :lg="6">
        <TuImage :src="require(`~/assets/images/products/kids/boy_${i}.jpeg`)" />
      </el-col>
    </el-row>
    <div class="title-line">{{ $t('girls') }}</div>
    <el-row type="flex" justify="center" class="flex-wrap" :gutter="6">
      <el-col v-for="i in 4" :key="i" :xs="12" :sm="6" :md="6" :lg="6">
        <TuImage :src="require(`~/assets/images/products/kids/girl_${i}.jpeg`)" />
      </el-col>
    </el-row>
    <br>
    <br>
  </div>
</template>

<style lang="scss" scoped>
.title-noline, .title-line {
  margin-top: 1.5rem;
}
</style>
