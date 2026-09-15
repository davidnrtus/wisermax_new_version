<template>
  <div class="tu-header mg-common">
    <div class="header-logo">
      <div class="header-left"></div>
      <div class="header-center">
        <NuxtImg
          src="/logo/logo.png"
          alt="logo.svg"
          class="tu-header-logo"
         />
      </div>
      <div class="header-right">
        <div v-click-outside="hide" class="dropdown">
          <button
            class="dropdown-button"
            tabindex="0"
            @click="isCollapsed = !isCollapsed"
          >
            <NuxtImg
              v-if="currentLocale && currentLocale.code === 'en'"
              src="/icons/flag-uk.svg"
              alt="england flag"
             />
            <NuxtImg
              v-if="currentLocale && currentLocale.code === 'cn'"
              src="/icons/flag-china.svg"
              alt="england flag"
             />
            <NuxtImg
              v-if="currentLocale && currentLocale.code === 'ko'"
              src="/icons/flag-korean.svg"
              alt="england flag"
             />
            {{ currentLocale.code }}
          </button>
          <transition name="slide">
            <div
              v-if="isCollapsed"
              class="dropdown-content"
            >
              <ul>
                <li
                  v-for="(locale, i) in availableLocales"
                  :key="i"
                  :value="locale.code"
                  class="dropdown-content-item"
                >
                  <nuxt-link
                    :to="switchLocalePath(locale.code)"
                    class="centeral lang-text"
                    @click="hide"
                  >
                    <NuxtImg
                      v-if="locale && locale.code === 'en'"
                      src="/icons/flag-uk.svg"
                      alt="england flag"
                     />
                    <NuxtImg
                      v-if="locale && locale.code === 'cn'"
                      src="/icons/flag-china.svg"
                      alt="england flag"
                     />
                    <NuxtImg
                      v-if="locale && locale.code === 'ko'"
                      src="/icons/flag-korean.svg"
                      alt="england flag"
                     />
                    {{ locale.code }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <nav>
        <ul class="horizontal-list">
          <li
            v-for="header in headers"
            :key="header.key"
            class="horizontal-list_item"
          >
            <router-link :to="localePath(header.url)">{{
              $t(header.key)
            }}</router-link>
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
      isCollapsed: false,
    }
  },
  computed: {
    _localesList() {
      const l = this.$i18n.locales
      return Array.isArray(l) ? l : (l && l.value) || []
    },
    availableLocales() {
      return this._localesList.filter((i) => i.code !== this.$i18n.locale)
    },
    currentLocale() {
      return this._localesList.find((i) => i.code === this.$i18n.locale) || {}
    },
  },
  watch: {
    '$route': {
      handler() {
        this.hide()
      }
    }
  },
  methods: {
    hide() {
      this.isCollapsed = false
    }
  }
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
    .header-left,
    .header-right {
      flex: 1;
    }
    .header-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
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
          font-family: Muli, sans-serif;
          font-weight: 600;
          font-style: normal;
          -webkit-transition: color 0.2s ease-in-out;
          transition: color 0.2s ease-in-out;
          letter-spacing: 0.2em;
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

<style scoped>
.dropdown {
  height: fit-content;
  display: inline-block;
  position: relative;
}

.dropdown-button {
  min-width: 100px;
  display: flex;
  align-items: center;
  outline: none;
  white-space: nowrap;
  padding: 0 12px;
  border: none;
  background: transparent;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}

.dropdown-content {
  box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
  top: calc(100% + 8px);
  transform-style: flat;
  min-width: 100%;
  background: #fff;
  position: absolute;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  transform-origin: top;
  transform: scaleY(1);
  z-index: 60;
}

.dropdown-content ul {
  padding: 0;
  margin: 0;
}

.dropdown-content-item {
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
}

.dropdown-content-item a {
  padding: 8px 12px;
}


.dropdown-content-item:hover {
  font-weight: 700;
}

.slide-enter {
  opacity: 0;
  transform: translateY(-20px);
  transition: 0.2s all ease;
}

.slide-enter-to {
  opacity: 1;
  transform: translateY(0);
  transition: 0.2s all ease;
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
  transition: 0.2s all ease;
}
</style>
