<template>
  <div class="tu-header mg-common" :class="scrolling && 'fixed'">
    <img
      src="~/assets/images/logo/logo.svg"
      alt="logo.svg"
      class="tu-header-logo"
    />
    <img
      src="~/assets/images/icons/menu.svg"
      alt="menu.svg"
      class="tu-header-imenu"
    />
    <div class="tu-header-menu">
      <div class="tu-header-menu_link">
        <router-link to="/">Home</router-link>
      </div>
      <div class="tu-header-menu_link">
        <router-link to="/products">Products</router-link>
      </div>
      <div class="tu-header-menu_link">
        <router-link to="/customers">Customers</router-link>
      </div>
      <div class="tu-header-menu_link">
        <router-link to="/about-us">About us</router-link>
      </div>
      <div class="tu-header-menu_link">
        <router-link to="/contacts">Contacts</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolling: false,
    }
  },
  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.handleScroll)
  // },
  // methods: {
  //   handleScroll() {
  //     this.scrolling = window.top.scrollY > 41
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.tu-header {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 8px;
  padding-bottom: 8px;
  top: 0;
  left: 0;
  z-index: 11;
  background: #fff;

  &-logo {
    width: 37px;
    height: auto;
  }
  &-imenu {
    display: none;
  }
  &-menu {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0 30px;
    &_link {
      padding: 6px 16px;
      a {
        font-size: 0.9rem;
        text-decoration: none;
        color: #333;
        font-weight: 600;
      }
    }
  }
}
@media (max-width: 574px) {
  .tu-header {
    flex-direction: row-reverse;
    justify-content: space-between;
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
    .nuxt-link-active {
      color: #764022 !important;
    }
  }
}
</style>
