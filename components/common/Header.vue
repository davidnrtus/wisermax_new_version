<template>
  <div class="tu-header mg-common" :class="scrolling && 'fixed'">
    <img
      src="~/assets/images/logo/logo.svg"
      alt="logo.svg"
      class="tu-header-logo"
    />
    <div
      class="thi tu-header-imenu"
      :class="active && 'thia'"
      @click="openHeader"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="tu-header-menu">
      <div
        v-for="header in headers"
        :key="header.key"
        :class="header.key === 'products' && 'trigger'"
        class="tu-header-menu_link"
      >
        <router-link :to="header.url">{{ header.title }}</router-link>
        <div v-if="header.key === 'products'" class="submenu">
          <TuSubMenu />
        </div>
      </div>
    </div>
    <TuMenuMobile v-if="active" />
  </div>
</template>

<script>
import TuSubMenu from './SubMenu'
import TuMenuMobile from './MenuMobile'
import { headers } from '@/data/header'

export default {
  components: {
    TuSubMenu,
    TuMenuMobile,
  },
  data() {
    return {
      headers,
      scrolling: false,
      active: false,
    }
  },
  watch: {
    $route (){
      if (this.active) {
        this.active = false
      }
    }
  },
  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
  methods: {
    // handleScroll() {
    //   this.scrolling = window.top.scrollY > 41
    // },
    openHeader() {
      this.active = !this.active
    },
  },
}
</script>

<style lang="scss" scoped>
.tu-header {
  display: flex;
  align-items: center;
  // flex-direction: row;
  flex-direction: column;
  // padding-top: 1.5rem;
  // padding-bottom: 1.5rem;
  padding-top: 8px;
  top: 0;
  left: 0;
  z-index: 11;
  background: #fff;
  position: relative;

  &-logo {
    // width: 47px;
    width: 77px;
    height: auto;
  }
  &-imenu {
    display: none;
    z-index: 101;
  }
  &-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    padding: 0 30px;
    width: 100%;
    position: relative;
    perspective: 1000px;
    z-index: 100;
    &_link {
      padding: 12px 16px;
      a {
        font-size: 0.95rem;
        text-decoration: none;
        color: #00174f;
        font-weight: 600;
        position: relative;
      }
    }
    .submenu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      perspective: 1000px;
      z-index: -1;
      background: #fff;
      width: 100vw;
      transform: translateY(100%);
      box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
      animation: rotateMenu 400ms ease-in-out forwards;
      transform-origin: top center;
    }
    .trigger {
      &:hover {
        .submenu {
          display: block;
        }
      }
    }
  }
}

// humberger icon css
.thi {
  position: relative;
  width: 24px;
  height: 19px;
  box-sizing: border-box;
}
.thi span {
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: #00174f;
  border-radius: 10px;
  transition: 350ms cubic-bezier(0.8, 0.5, 0.2, 1.4);
}
.thi span:nth-child(1) {
  top: 0;
  left: 0;
}
.thi span:nth-child(2) {
  top: 8px;
  left: 0;
}
.thi span:nth-child(3) {
  top: 16px;
  left: 0;
}
.thia span:nth-child(2) {
  opacity: 0;
}
.thia span:nth-child(1) {
  transform: rotate(45deg);
  top: 10px;
  width: 24px;
  left: 0;
  cursor: pointer;
}
.thia span:nth-child(3) {
  transform: rotate(-45deg);
  top: 10px;
  width: 24px;
  left: 0;
  cursor: pointer;
}
.thia span {
  background: #00174f;
}
@media (max-width: 574px) {
  .tu-header {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-bottom: 8px;
    &-logo {
      width: 37px;
    }
    &-imenu {
      display: block;
    }
    &-menu {
      display: none;
    }
  }
}
</style>

<style lang="scss">
.tu-header {
  &-menu_link {
    .nuxt-link-exact-active {
      font-weight: 700 !important;
      &::after {
        content: '';
        width: 100%;
        height: 2px;
        background: #00174f;
        position: absolute;
        bottom: -3px;
        left: 0;
      }
    }
  }
}
</style>
