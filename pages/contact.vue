<template>
  <div>
    <TuImage
      :src="require(`~/assets/images/banners/banner_contact_2.png`)"
      padding-bottom="40"
      class="banner"
    />
    <el-row type="flex" justify="center" class="mt4">
      <el-col :xl="14" :lg="18" :md="22" :sm="24">
        <el-row type="flex" justify="center" class="flex-wrap">
          <el-col :xl="14" :lg="14" :md="14" :sm="14" :xs="24" class="flex">
            <div class="box">
                <h1 class="underline-2">{{ $t('contact_us') }}</h1>
              <p>
                {{ $t('feel_free_contact') }}
              </p>
              <el-form :model="form">
                <el-input
                  v-model="form.name"
                  :placeholder="$t('name')"
                  :class="isClick && !form.name ? 'error' : ''"
                  name="name"
                  class="tu-input"
                />
                <el-input
                  v-model="form.email"
                  :placeholder="$t('email')"
                  :class="isClick && !form.email ? 'error' : ''"
                  type="email"
                  name="email"
                  class="tu-input"
                />
                <el-input
                  v-model="form.phone"
                  :placeholder="$t('phone_number')"
                  :class="isClick && !form.phone ? 'error' : ''"
                  name="phone"
                  class="tu-input"
                />
                <el-input
                  v-model="form.content"
                  :autosize="{ minRows: 4 }"
                  :placeholder="$t('content')"
                  :class="isClick && !form.content ? 'error' : ''"
                  clearable
                  type="textarea"
                  name="content"
                  class="tu-input"
                />
                <div class="text-center" style="margin-top:1.5rem">
                  <el-button class="tu-button" :loading="loading" @click="sendMail">{{ $t('send') }}</el-button>
                </div>
                <h4
                  style="margin-top:2rem;margin-bottom:0;color:#2563eb;"
                  :style="{ visibility: isSuccess ? 'visible' : 'hidden' }"
                >
                  Sent successfully
                </h4>
              </el-form>
            </div>
          </el-col>
          <el-col :xl="10" :lg="10" :md="10" :sm="10" :xs="24" class="flex">
            <div class="box">
              <h2>Info</h2>
              <div class="taki" style="margin-top: 46px">
                <i class="el-icon-message" />
                <span>{{ info.email }}</span>
              </div>
              <div class="taki">
                <i class="el-icon-location-outline" />
                <span class="txt">{{ $t('address') }}</span>
              </div>
              <div class="taki">
                <div class="flex centeral">
                  <img src="~/assets/images/icons/wechat.png" class="wic" alt="wechat">
                  <img src="~/assets/images/icons/whatsapp.png" class="wic" alt="whatsapp">
                  <i class="el-icon-phone-outline" />
                </div>
                <span>{{ info.phone_number }}</span>
              </div>
              <div class="taki">
                <div class="flex">
                  <TuImage
                    :src="require(`~/assets/images/members/qr-ceo.svg`)"
                    class="avt"
                    style="margin-right: 1rem"
                  />
                  <TuImage
                    :src="require(`~/assets/images/members/qr-wechat.svg`)"
                    class="avt"
                  />
                </div>
              </div>
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
        phone: ''
      },
      isClick: false,
      loading: false,
      isSuccess: false
    }
  },
  computed: {
    isEmpty() {
      return !this.form.name || !this.form.email || !this.form.content || !this.form.phone
    }
  },
  watch: {
    form: {
      deep: true,
      handler() {
        this.isClick = false
      }
    },
    isSuccess: {
      handler(value) {
        if (value) {
          setTimeout(() => {
            this.isSuccess = false
          }, 2500)
        }
      }
    },
  },
  methods: {
    async sendMail() {
      this.loading = true
      try {
        if (this.isEmpty) {
          this.isClick = true
          this.loading = false
          return
        }
        this.isClick = false
        const response = await this.$axios.$post('/sendMail', this.form)
        if (response.code === 200) {
          this.isSuccess = true
        }
      } catch (error) {
        this.isSuccess = false
        console.log({ error });
      }
      this.loading = false
    }
  }
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
  color: $main;
  i {
    font-size: 1.5rem;
    margin-right: 0.75rem;
  }
}
.clearfixed {
  margin-top: calc(54px + 1.5rem);
}
.box {
  padding: 18px 18px 36px 18px;
  margin: 0 16px 16px 16px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.08);
}
.tu-button {
  padding: 12px 52px;
  background: $main;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1.5px;
}
.wic {
  width: 26px;
  height: 26px;
  margin-right: 1rem;
}
</style>

<style lang="scss">
.error {
  input, textarea {
    border-color: #ef4444;
  }
}
</style>