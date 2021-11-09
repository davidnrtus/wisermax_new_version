<template>
  <div id="mblMenu">
    <div class="tu-header-menu">
      <div class="tu-header-menu_link">
        <router-link to="/">Home</router-link>
      </div>
      <div class="tu-header-menu_link trigger">
        <router-link to="/products">Products</router-link>
        <div class="submenu">
          <TuSubMenu />
        </div>
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
        color: #00174f;
        font-weight: 600;
      }
    }
    // .submenu {
    //   display: none;
    //   position: absolute;
    //   top: 100%;
    //   left: 0;
    //   perspective: 1000px;
    //   z-index: -1;
    //   background: #fff;
    //   width: 100vw;
    //   transform: translateY(100%);
    //   box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
    //   animation: rotateMenu 400ms ease-in-out forwards;
    //   transform-origin: top center;
    // }
    // .trigger {
    //   &:hover {
    //     .submenu {
    //       display: block;
    //     }
    //   }
    // }
  }
}
</style>