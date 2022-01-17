<template>
  <div class="tu-header1 mg-common">
    <div class="header-logo">
      <div class="header-left">
        <!-- <div class="thi tu-header-imenu">
          <span></span>
          <span></span>
          <span></span>
        </div> -->
      </div>
      <div class="header-center">
        <img
          src="~/assets/images/logo/logo-v6.svg"
          alt="logo.svg"
          class="tu-header-logo"
        />
      </div>
      <div class="header-right">
        <div class="flag centeral">
          <img
            src="~/assets/images/icons/flag-uk.svg"
            alt="england flag"
          />
        </div>
      </div>
    </div>
    <div class="header-menu">
      <nav>
        <ul class="horizontal-list">
          <li v-for="header in headers" :key="header.key" class="horizontal-list_item">
            <router-link :to="header.url">{{ header.title }}</router-link>
          </li>
        </ul>
      </nav>
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
  }
}
</script>

<style lang="scss" scoped>
.tu-header1 {
  padding-top: 16px;
  padding-bottom: 16px;
  .header-logo {
    display: flex;
    align-items: center;
    .header-center {
      img {
        width: 170px;
        margin-bottom: 10px;
      }
    }
    .header-left, .header-right {
      flex: 1;
    }
    .header-right {
      display: flex;
      justify-content: flex-end;
    }
  }
  .header-menu {
    .horizontal-list {
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: center;
      &_item {
        display: inline-block;
        margin: 6px 8px 6px 8px;
        a {
          color: #1c1b1b;
          font-size: 13px;
          font-family: Muli,sans-serif;
          font-weight: 400;
          font-style: normal;
          -webkit-transition: color .2s ease-in-out;
          transition: color .2s ease-in-out;
          letter-spacing: .2em;
          text-transform: uppercase;
          &:hover {
            color: #6a6a6a;
          }
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
  background: $blue;
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
  background: $blue;
}
</style>