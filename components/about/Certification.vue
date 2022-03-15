<template>
  <div class="tu-section clearpt">
    <el-row type="flex" justify="center" class="mt4">
      <el-col :xl="16" :lg="18" :md="20" :sm="22">
        <div class="text-center">
          <h1 class="underline-2" style="margin-bottom: 2rem">{{ $t('certification') }}</h1>
        </div>
        <TuImage
          :src="require(`~/assets/images/about/certification.png`)"
          class="avt"
        />   
      </el-col>
    </el-row>
  </div>
</template>