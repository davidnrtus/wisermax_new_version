<template>
  <div class="tu-footer">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="20">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="16">
            <div class="tu-footer-title">Information</div>
            <div class="tu-footer-content">
              <h4>{{ info.company_name }}</h4>
              <div class="tu-footer-item">
                <i class="el-icon-location-outline" />
                <div class="txt">{{ info.address }}</div>
              </div>
              <div class="tu-footer-item">
                <i class="el-icon-message" />
                <div>{{ info.email }}</div>
              </div>
              <div class="tu-footer-item">
                <i class="el-icon-phone-outline" />
                <div>{{ info.phone_number }}</div>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="tu-footer-title">Links</div>
            <div
              v-for="header in headers"
              :key="header.key"
              class="tu-footer-item"
            >
              <router-link :to="localePath(header.url)">{{ header.title }}</router-link>
            </div>
          </el-col>
          <!-- <el-col :xs="24" :sm="24" :md="6">
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
          </el-col> -->
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { headers } from '@/data/header'
import info from '@/data/info'

export default {
  data() {
    return {
      headers,
      info
    }
  },
}
</script>

<style lang="scss" scoped>
.tu-footer {
  padding: 60px 21px;
  background: $main_brown_footer;
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
    div {
      display: flex;
      align-items: center;
    }
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
