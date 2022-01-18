<template>
  <div class="tu-section clearspacer">
    <TuImage
      :src="require(`~/assets/images/products/women/banner.jpeg`)"
      padding-bottom="33"
      text="Each piece we create is designed to accentuate every individuals body and make them feel empowered."
      class="banner"
      :blur="30"
    />
    <h3 class="tu-section-title">Here's what we made</h3>
    <div class="tu-content">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="18" :lg="16">
          <el-row type="flex" justify="left" class="flex-wrap">
            <el-col :xs="24" :sm="22" :md="18" :lg="16">
              <TuImage
                :src="
                  require(`~/assets/images/products/women/banner_vay_dai.png`)
                "
              />
            </el-col>
            <el-col :xs="24" :sm="16" :md="6" :lg="8">
              <div class="text-content">
                <h2>Cotton Top & Skirt</h2>
                <p>
                  White self-design woven crop top with lace inserts on the
                  front, has a round neck, three-quarter sleeves, button closure
                </p>
                <p>
                  Black solid accordian pleats woven maxi flared skirt, has an
                  elasticated waistband, flared hem
                </p>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div class="tu-content">
      <TuImage :src="require(`~/assets/images/products/women/banner_vest.png`)" />
    </div>
    <div class="tu-content">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="22" :md="18" :lg="16">
          <div class="title-line">Overcoat</div>
          <el-row type="flex" justify="center" class="flex-wrap" :gutter="32">
            <el-col :xs="24" :sm="20" :md="16" :lg="12">
              <p class="text-center">
                We manufacture a variety of overcoat products for women. With
                high-quality materials such as Polyester, Wool, Viso... Felt
                fabric keeps warm, retains heat well, has high durability,
                fabric thickens to standard form, fleece vest should be dry
                cleaned to ensure longevity of shirt.
              </p>
            </el-col>
          </el-row>
          <el-row type="flex" justify="center" class="flex-wrap" :gutter="32">
            <el-col
              v-for="item in mangto"
              :key="item.img"
              :xs="12"
              :sm="12"
              :md="6"
              :lg="6"
            >
              <TuImage
                :src="require(`~/assets/images/products/women/${item.img}`)"
              />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- <div class="tu-content">
      <TuImage :src="require(`~/assets/images/products/women/banner_do_lot.png`)" />
    </div> -->
    <div class="tu-content">
      <el-row type="flex" justify="center">
        <el-col :xs="24" :sm="20" :md="14" :lg="10">
          <TuImage :src="require(`~/assets/images/products/women/banner_dam_2.png`)" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
const breakpoint = 550.98

export default {
  data() {
    return {
      mangto: [
        {
          img: 'mangto_1.jpg',
          description:
            'Cổ áo 2 ve tự nhiên, thời thượng kết hợp với khuy cài tạo điểm nhấn cho chiếc áo thêm phần nổi bật. Chất vải dạ giữ ấm, giữ nhiệt tốt, có độ bền cao, chất vải dày lên phom chuẩn, áo dạ ép lông cừu nên giặt khô để đảm bảo tuổi thọ của áo. ',
        },
        {
          img: 'mangto_2.jpg',
          description:
            'Áo măng tô chất liệu dạ len cổ bấm cúc có đai chiết eo được thiết kế với phong cách thời thượng, thanh lịch, hiện đại. Phần tay áo thiết kế ống đứng suông thẳng đơn giản, các đường may tạo hình chau chuốt tỉ mỉ, thể hiện lên khí chất thời thượng. Thiết kế dây đai eo thời trang , cùng form chiết eo khéo léo hai bên thân áo, chiếc đai thắt qua lưng thắt nơ éo xinh xắn có thể điều chỉnh theo phong cách phối đồ, tạo vòng 2 eo thon, tinh tế.',
        },
        {
          img: 'mangto_3.png',
          description:
            'Áo măng tô với đường nét cắt may cơ bản giữ nguyên tính nguyên bản của chất liệu dạ cao cấp, mềm mịn, giữ ấm cho các nàng xinh đẹp trong những ngày giá lạnh. Phủ lên gam màu thời thượng, item không hề kén da và phù hợp với mọi dáng người nhờ phom dáng basic không bao giờ lỗi mốt.',
        },
        {
          img: 'mangto_4.jpg',
          description:
            'Áo măng tô dạ kẻ được thiết kế dáng dài phong cách thời thượng, thanh lịch, hiện đại, là 1 món đồ không thể thiếu trong tủ đồ của chị em khi thời tiết trở lạnh. Cổ áo bẻ thời thượng kết hợp với cúc cài tạo điểm nhấn cho chiếc áo thêm phần nổi bật. ',
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.isMobile = window.innerWidth < breakpoint
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < breakpoint
    },
  },
}
</script>

<style lang="scss" scoped>
.text-content {
  padding: 0 16px;
}
.tu-content {
  margin: 2rem 0 3rem;
}
.title-line {
  font-size: 1.5rem;
  position: relative;
  text-align: center;
  margin-bottom: 1rem;
  &::before,
  &::after {
    content: '';
    height: 1px;
    background: #e5e5e5;
    position: absolute;
    width: 42%;
    top: calc(50% - 1px);
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
}
</style>