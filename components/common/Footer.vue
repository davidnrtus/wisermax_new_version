<template>
  <div class="tu-footer">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="20">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="10">
            <div class="tu-footer-title">Information</div>
            <div class="tu-footer-content">
              <h4>WISER MAX HN COMPANY LIMITED</h4>
              <div class="tu-footer-item">
                <i class="el-icon-location-outline" />
                <span class="txt"
                  >No. 729, Nguyen Duc Thuan Street, Dang Xa Commune, Gia Lam
                  District, Hanoi, Vietnam</span
                >
              </div>
              <div class="tu-footer-item">
                <i class="el-icon-message" />
                <span>helen@wiser.vn / sale@wiser.vn</span>
              </div>
              <div class="tu-footer-item">
                <i class="el-icon-phone-outline" />
                <span>+84-974-806625</span>
              </div>
              <div class="tu-footer-item" style="margin-left: -8px">
                <img
                  src="~/assets/images/icons/icons8-whatsapp.svg"
                  alt="whatsapp"
                />
                <img
                  src="~/assets/images/icons/icons8-wechat.svg"
                  alt="wechat"
                />
                <img
                  src="~/assets/images/icons/icons8-kakaotalk.svg"
                  alt="kakaotalk"
                />
                <img src="~/assets/images/icons/icons8-zalo.svg" alt="zalo" />
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6">
            <div class="tu-footer-title">Links</div>
            <div
              v-for="header in headers"
              :key="header.key"
              class="tu-footer-item"
            >
              <router-link :to="header.key">{{ header.title }}</router-link>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6">
            <div class="tu-footer-title">Help</div>
            <div class="tu-footer-item">
              <span>Returns</span>
            </div>
            <div class="tu-footer-item">
              <span>Shipping</span>
            </div>
            <div class="tu-footer-item">
              <span>Q&A</span>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
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
.tu-footer {
  padding: 60px 21px;
  background: #1b3472;
  color: #fff;
  &-title {
    text-transform: uppercase;
    font-size: 1.15rem;
    font-weight: 600;
    position: relative;
    margin-bottom: 2rem;
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background: #fff;
      position: absolute;
      bottom: -10px;
      left: 0;
    }
  }
  &-item {
    margin-bottom: 1.5rem;
    display: flex;
    align-content: center;
    i {
      font-size: 1.5rem;
      margin-right: 0.75rem;
    }
    span,
    a {
      font-size: 0.9rem;
      color: #fff;
      text-decoration: none;
    }
    a {
      margin-left: 0;
      &:hover {
        text-decoration: underline;
      }
    }
    img {
      margin: 8px;
    }
  }
}
</style>
