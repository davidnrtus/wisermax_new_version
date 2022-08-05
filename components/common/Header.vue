<template>
  <div class="tu-header mg-common">
    <div class="header-logo">
      <div class="header-left">
      </div>
      <div class="header-center">
        <img
          src="~/assets/images/logo/logo.png"
          alt="logo.svg"
          class="tu-header-logo"
        />
      </div>
      <div class="header-right">
        <nuxt-link v-if="availableLocales" :to="switchLocalePath(availableLocales.code)" class="centeral lang-text">
          <img
            v-if="availableLocales && availableLocales.code === 'en'"
            src="~/assets/images/icons/flag-uk.svg"
            alt="england flag"
          />
          <img
            v-if="availableLocales && availableLocales.code === 'cn'"
            src="~/assets/images/icons/flag-china.svg"
            alt="england flag"
          />
          {{ availableLocales.code }}
        </nuxt-link>
      </div>
    </div>
    <div class="header-menu">
      <nav>
        <ul class="horizontal-list">
          <li v-for="header in headers" :key="header.key" class="horizontal-list_item">
            <router-link :to="localePath(header.url)">{{ $t(header.key) }}</router-link>
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
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)[0]
    },
    currentLocale() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0]
    },
  },
}
</script>

<style lang="scss" scoped>
.tu-header {
  padding-top: 16px;
  padding-bottom: 16px;
  .header-logo {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .header-center {
      img {
        width: 82px;
      }
    }
    .header-left, .header-right {
      flex: 1;
    }
    .header-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img {
        width: 28px;
        height: 28px;
        margin-right: 0.5rem;
        cursor: pointer;
      }
      .lang-text {
        text-transform: uppercase;
        color: $main;
      }
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
        margin: 6px 10px;
        a {
          color: #2c2c2c;
          font-size: 13px;
          font-family: Muli,sans-serif;
          font-weight: 600;
          font-style: normal;
          -webkit-transition: color .2s ease-in-out;
          transition: color .2s ease-in-out;
          letter-spacing: .2em;
          text-transform: uppercase;
          &:hover {
            // color: #6a6a6a;
            font-weight: 700 !important;
          }
        }
      }
    }
  }
}
@media (min-width: 478px) and (max-width: 687.98px) {
  .tu-header {
    padding-top: 12px;
    padding-bottom: 12px;
    .header-menu {
      .horizontal-list {
        &_item {
          a {
            font-size: 12px;
          }
        }
      }
    }
    .header-right {
      img {
        width: 24px;
      }
    }
  }
}
@media (max-width: 477.98px) {
  .tu-header {
    .header-logo {
      .header-center {
        img {
          width: 64px;
        }
      }
    }
    .header-menu {
      .horizontal-list {
        &_item {
          margin: 6px 4px;
          a {
            font-size: 10px !important;
          }
        }
      }
    }
    .header-right {
      img {
        width: 20px;
      }
    }
  }
}
</style>

<style lang="scss">
.tu-header {
  .nuxt-link-exact-active {
    font-weight: 700 !important;
  }
}
</style>