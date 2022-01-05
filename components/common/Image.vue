<template>
  <div class="tu-img">
    <img v-if="intersected" :src="srcImage" :style="imgStyles" :class="imgClass" alt="" />
    <div v-else class="loading" />
  </div>
</template>

<script>
export default {
  name: 'TuImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    lazy: {
      type: Boolean,
      default: true,
    },
    delay: {
      type: Number,
      default: 0,
    },
    imgClass: {
      type: String,
      default: '',
    },
    fit: {
      type: String,
      default: 'cover',
      validator(value) {
        return [
          'contain',
          'cover',
          'fill',
          'none',
          'revert',
          'scale-down',
          'unset',
          'inherit',
          'initial',
        ].includes(value)
      },
    },
  },
  data() {
    return {
      observer: null,
      intersected: false,
      isError: false,
    }
  },
  computed: {
    srcImage() {
      if (!this.lazy) return this.src
      return this.intersected ? this.src : ''
    },
    imgStyles() {
      return {
        objectFit: this.fit,
      }
    },
  },

  mounted() {
    if (this.lazy) {
      this.observer = new IntersectionObserver((entries) => {
        const image = entries[0]
        if (image.isIntersecting) {
          this.loadImage()
        }
      })

      this.observer.observe(this.$el)
    } else {
      this.intersected = true
    }
  },
  methods: {
    loadImage() {
      setTimeout(() => {
        this.intersected = true
      }, this.delay)
    },
  },
}
</script>

<style lang="scss" scoped>
.tu-img {
  img {
    width: 100%;
    height: 100%;
  }
  .loading {
    width: 100%;
    padding-bottom: 60%;
    background: #d4d4d429;
  }
}

</style>