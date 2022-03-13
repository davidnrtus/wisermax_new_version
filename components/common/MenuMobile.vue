<template>
  <div id="mblMenu">
    <div class="tu-header-menu">
      <div
        v-for="header in headers"
        :key="header.key"
        class="tu-header-menu_link"
      >
        <router-link :to="localePath(header.url)">{{ header.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { headers } from '@/data/header'

export default {
  data() {
    return {
      headers,
    }
  },
}
</script>

<style lang="scss" scoped>
#mblMenu {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
}
.tu-header {
  &-menu {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    perspective: 1000px;
    z-index: 100;
    background: #fff;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
    animation: rotateMenu 400ms ease-in-out forwards;
    transform-origin: top center;
    &_link {
      padding: 12px 16px;
      a {
        font-size: 0.95rem;
        text-decoration: none;
        color: $main;
        font-weight: 600;
      }
    }
  }
}
</style>
