<template>
  <div class="tu-header mg-common hfixed">
    <div
      class="thi tu-header-imenu"
      :class="active && 'thia'"
      @click="openHeader"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <img
      src="~/assets/images/logo/logo-v6.svg"
      alt="logo.svg"
      class="tu-header-logo"
    />
    <div class="tu-header-menu">
      <div
        v-for="header in headers"
        :key="header.key"
        :class="header.key === 'products' && 'trigger'"
        class="tu-header-menu_link"
      >
        <router-link :to="header.url">{{ header.title }}</router-link>
        <!-- <div v-if="header.key === 'products'" class="submenu">
          <TuSubMenu />
        </div> -->
      </div>
    </div>
    <div class="flag centeral" @click="changeLocale">
      <img
        v-if="currentLocale"
        src="~/assets/images/icons/flag-china.svg"
        alt="china flag"
      />
      <img
        v-else
        src="~/assets/images/icons/flag-uk.svg"
        alt="england flag"
      />
      <div class="flag-name">
        {{ currentLocale ? 'China' : 'English' }}
      </div>
    </div>
    <TuMenuMobile v-if="active" />
  </div>
</template>

<script>
// import TuSubMenu from './SubMenu'
import TuMenuMobile from './MenuMobile'
import { headers } from '@/data/header'

export default {
  components: {
    // TuSubMenu,
    TuMenuMobile,
  },
  data() {
    return {
      headers,
      scrolling: false,
      active: false,
      currentLocale: false,
      isCollapsed: false
    }
  },
  computed: {
    isMobile() {
      if (window)
        return window.innerWidth < 575
      return true
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
    //   const r = this.isMobile ? 7 : 41
    //   this.scrolling = window.top.scrollY > r
    // },
    openHeader() {
      this.active = !this.active
    },
    changeLocale() {
      this.currentLocale = !this.currentLocale
    },
    changeRoute() {
      this.isCollapsed = false
    }
  },
}
</script>

<style lang="scss" scoped>
.hfixed {
  position: fixed !important;
}
.tu-header {
  display: flex;
  align-items: center;
  flex-direction: row;
  top: 0;
  left: 0;
  z-index: 11;
  background: #fff;
  position: relative;
  height: $header_height_desktop;

  &-logo {
    // width: 47px;
    width: 117px;
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
    height: 100%;
    // position: relative;
    // perspective: 1000px;
    z-index: 100;
    &_link {
      padding: 0 18px;
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      a {
        font-size: 0.95rem;
        text-decoration: none;
        color: $main;
        font-weight: 600;
        position: relative;
      }
    }
    .submenu {
      display: none;
      position: absolute;
      top: calc(100% - 1.5rem);
      left: 0;
      perspective: 1000px;
      z-index: -1;
      background: #fff;
      width: 100vw;
      transform: translateY(100%);
      box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, 0.15);
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
.flag {
  cursor: pointer;
  font-size: 0.875rem;
  img {
    height: 28px;
  }
  &-name {
    margin-left: 0.5rem;
    min-width: 47px;
    @media (max-width: $header_breakpoint) {
      display: none;
    }
  }
}
@media (max-width: $header_breakpoint) {
  .tu-header {
    justify-content: space-between;
    width: calc(100% - 22px);
    height: $header_height_mobile;
    &-logo {
      width: 97px;
    }
    &-imenu {
      display: block;
    }
    &-menu {
      display: none;
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
  background: $main;
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
  background: $main;
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
        background: $main;
        position: absolute;
        bottom: -3px;
        left: 0;
      }
    }
  }
}
</style>
