import Vue from 'vue'
import TuImage from '@/components/common/Image'

const components = { TuImage }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
