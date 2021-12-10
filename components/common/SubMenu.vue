<template>
  <div class="tu-drawer">
    <div class="tu-drawer-row">
      <div v-for="menu in subHeaders" :key="menu.key" class="tu-drawer-col">
        <nuxt-link :to="`products?category=${menu.key}`">
          <div class="tu-drawer-title" style="font-weight: 700">{{ menu.title }}</div>
        </nuxt-link>
        <div v-if="menu.childrens" class="tu-drawer-list">
          <ul>
            <li v-for="subMenu in menu.childrens" :key="subMenu.key">
              <nuxt-link :to="`products?category=${menu.key}&type=${subMenu.key}`" class="tu-drawer-title">
                {{ subMenu.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { subHeaders } from '@/data/header'

export default {
  data() {
    return {
      subHeaders,
    }
  },
}
</script>

<style lang="scss" scoped>
.tu-drawer {
  width: 100%;
  padding: 10px 20px;
  &-row {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  &-col {
    padding: 8px 30px;
  }
  &-title {
    font-size: 0.95rem;
    color: $blue;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      font-weight: 600;
    }
  }
  &-list {
    ul {
      display: flex;
      flex-direction: column;
      padding: 0;
      li {
        display: inline-block;
        list-style: none;
        padding: 4px 0;
        font-size: 0.85rem;
        font-weight: 500;
      }
    }
  }
}
</style>
