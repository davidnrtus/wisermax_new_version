<template>
  <div class="tu-section clearfixed clearpt">
    <el-row type="flex" justify="center">
      <el-col :xl="16" :lg="20" :md="22" :sm="24" :xs="24">
        <div class="tu-section-title_sm underline">Introduction</div>
        <p class="tu-text-p">
          WE ARE CONNECTED WITH OUR PEOPLE, WITH OUR CUSTOMERS AROUND THE GLOBE,
          AND WITH OUR PRODUCTION PARTNERS IN ASIA AND US. WE HAVE CHOSEN THEM,
          OR THEY HAVE FOUND US, BECAUSE WE SHARE VALUES AND VISION WE TAKE
          ABSOLUTE RESPONSIBILITY FOR ALL PRODUCTS SUPPLIED TO CONSUMMERS, BRING
          HAPPINESS TO EMPLOYEES, CUSTOMERS AND COMMUNITIES
        </p>
        <p class="tu-text-p">
          We are a quality oriented professional clothing manufacturer exporter
          brand which focus on Women clothing, Man clothing,. children wear.
          Factory base in vietnam, As for the production capability, we can
          produce 600.000 pieces monthly. In the year of 2019, we provide total
          3.000.000 pieces for US, Canada market. We offer OEM, ODM service and
          design/manufacture as per clothes design and requirements.
        </p>
        <p class="tu-text-p">
          We have a skilled team of experts with a real working passion and
          dedication to make buyer's fashion dream come true. We always focusing
          on providing fast, precise service for all customers "We are committed
          to high quality and innovation and a process that SAFETY and FAIR
          creating clothes you can trust and your customers want to wear". Any
          inquiry please feel free to contact us
        </p>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" class="tu-abu-num flex-wrap">
      <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <div class="bg-left">
          <img
            src="~/assets/images/about/bg-employee.jpeg"
            class="overlay object-fit"
            alt=""
          />
          <div class="overlay" style="background: rgba(0, 0, 0, 0.45)"></div>
          <div
            class="centeral column overlay"
            style="
              align-items: flex-start;
              justify-content: flex-start;
              margin-top: 3.6rem;
            "
          >
            <h2
              class="text-left w-full"
              style="margin-left: 2rem; margin-right: 1rem"
            >
              Factory Partners
            </h2>
            <p class="tu-text-p" style="margin-left: 2rem; margin-right: 1rem">
              Our 20++ factory partner in north and middle of VietNam.
            </p>
          </div>
        </div>
      </el-col>
      <el-col :xl="12" :lg="12" :md="24" :sm="24" :xs="24">
        <div class="bg-right">
          <img src="~/assets/images/about/bg-nums.jpg" alt="" />
          <div class="content">
            <h2 class="text-left" style="margin-left: 2rem">Our capacity</h2>
            <p class="tu-text-p" style="margin-left: 2rem">
              With 20+ factory partner, WISERMAX can do 6.000.000++ PCS per
              year. Including knit, woven, Jacket, top, pant, dress, handmade...
            </p>
            <div
              v-for="(item, index) in params"
              :key="index"
              class="content-item"
            >
              <span>{{ item.value }}</span> {{ item.text }}
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: [
        {
          value: '6,000 PCS',
          text: 'per month',
        },
        {
          value: '50,000,000 PCS',
          text: 'KNIT TOP / year',
        },
        {
          value: '10,000,000 PCS',
          text: 'KNIT DRESS / year',
        },
        {
          value: '500,000 PCS',
          text: 'COAT & JACKET',
        },
        {
          value: '500,000 PCS',
          text: 'PANT / year',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.tu-text-p {
  line-height: 30px;
}
.tu-abu-num {
  margin-top: 2rem;
  .bg-left {
    background: #e3e3e3;
    height: 100%;
    position: relative;
    color: #fff;
    .pbx {
      height: 100%;
      padding: 0 1rem;
    }
  }
  .bg-right {
    padding-bottom: 60%;
    position: relative;
    img,
    .content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      color: #fff;
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      overflow: hidden;
      span {
        font-size: 1.5rem;
        margin-left: 2rem;
        margin-right: 1rem;
        font-weight: 600;
        position: relative;
        &::after {
          content: '';
          height: 2px;
          width: 40px;
          background: $second;
          bottom: 0;
          left: 0;
          position: absolute;
        }
      }
      &-item {
        padding: 1rem 0;
        width: 100%;
        text-align: left;
      }
    }
  }
}
@media (max-width: 1199.98px) {
  .tu-abu-num {
    .bg-left {
      height: 280px;
    }
  }
}
@media (min-width: 477.98px) and (max-width: 687px) {
  .tu-abu-num {
    .bg-right {
      padding-bottom: 100%;
      .content {
        span {
          font-size: 1.25rem;
        }
      }
    }
  }
}
@media (max-width: 477.98px) {
  .tu-abu-num {
    .bg-right {
      padding-bottom: 140%;
      .content {
        span {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
