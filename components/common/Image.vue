<template>
  <div class="tu-img" :style="overlay && overlay.imgCover">
    <img
      v-if="intersected"
      :src="srcImage"
      :style="[imgStyles, overlay && overlay.img]"
      :class="imgClass"
      alt=""
    />
    <div v-else class="loading" />
    <div v-if="blur" class="blur" :style="blurStyle" />
    <div v-if="text && intersected" class="text">{{ text }}</div>
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
    paddingBottom: {
      type: [Number, String],
      default: null,
    },
    text: {
      type: String,
      default: '',
    },
    blur: {
      type: [Boolean, Number],
      default: false
    }
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
    blurStyle() {
      if (typeof this.blur === 'boolean' && this.blur) {
        return { backgroundColor: `rgba(0, 0, 0, 0.2)`}
      }
      return { backgroundColor: `rgba(0, 0, 0, ${this.blur/100})`}
    },
    overlay() {
      if (this.paddingBottom) {
        const imgCover = {
          paddingBottom: `${this.paddingBottom}%`,
        }
        const img = {
          position: 'absolute',
          top: 0,
          left: 0,
        }
        return { imgCover, img }
      }
      return {}
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
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .loading {
    width: 100%;
    padding-bottom: 60%;
    background: #d4d4d429;
  }
  .text {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ddd;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  .blur {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>