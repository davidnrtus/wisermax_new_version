<template>
  <div class="tu-image">
    <el-image :src="src" :lazy="lazy">
      <div slot="placeholder" class="image-slot">
        <i class="el-icon-picture-outline" />
      </div>
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline" />
      </div>
    </el-image>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    lazy: {
      type: Boolean,
      default: true
    }
  }
}
</script>