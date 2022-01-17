<template>
  <div>
    <div class="tu-banner-wrapper">
      <img
        src="~/assets/images/banners/banner_contact_1.jpg"
        alt="banner_contact"
      />
      <div class="text-center content">
        <el-row type="flex" justify="center">
          <el-col :xl="14" :lg="18" :md="22" :sm="24">
            Want to get in touch? We'd love to hear from you. Here's how you can reach us...
          </el-col>
        </el-row>
      </div>
    </div>
      <el-row type="flex" justify="center" class="mt4">
        <el-col :xl="14" :lg="18" :md="22" :sm="24">
          <el-row type="flex" justify="center">
            <el-col :xl="14" :lg="14" :md="14" :sm="24" class="box">
              <h1 class="underline-2">Contact Us</h1>
              <p>
                Feel free to contact us any time. We will get back to you as
                soon as we can!
              </p>
              <el-form :model="form">
                <el-input
                  v-model="form.name"
                  placeholder="Name"
                  name="name"
                  class="tu-input"
                />
                <el-input
                  v-model="form.email"
                  placeholder="Email"
                  type="email"
                  name="email"
                  class="tu-input"
                />
                <el-input
                  v-model="form.phone"
                  placeholder="Phone number"
                  name="phone"
                  class="tu-input"
                />
                <el-input
                  v-model="form.content"
                  :autosize="{ minRows: 4 }"
                  clearable
                  type="textarea"
                  placeholder="Content"
                  name="content"
                  class="tu-input"
                />
                <div class="text-center">
                  <el-button class="tu-button">Send</el-button>
                </div>
              </el-form>
            </el-col>
            <el-col :xl="10" :lg="10" :md="10" :sm="24" class="box"> 
              <h2>Info</h2>
              <div class="taki" style="margin-top: 46px">
                <i class="el-icon-message" />
                <span>{{ info.email }}</span>
              </div>
              <div class="taki">
                <i class="el-icon-phone-outline" />
                <span>{{ info.phone_number }}</span>
              </div>
              <div class="taki">
                <i class="el-icon-location-outline" />
                <span class="txt">{{ info.address }}</span>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import info from '@/data/info'

export default {
  data() {
    return {
      info,
      form: {
        name: '',
        email: '',
        content: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.tu-input {
  margin: 16px 0;
}
.taki {
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  color: $blue;
  i {
    font-size: 1.5rem;
    margin-right: 0.75rem;
  }
}
.clearfixed {
  margin-top: calc(54px + 1.5rem);
}
.tu-banner-wrapper {
  padding-bottom: 32%;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: 400;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.box {
  padding: 18px;
  margin: 0 16px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.08);
}
.tu-button {
  padding: 12px 52px;
  background: $blue;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1.5px;
}
</style>