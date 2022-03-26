<template>
  <div class="pagination">
    <p class="expand" @click="changeEndPoint(10)">Показать еще</p>
    <div class="navigation">
      <span class="back-slide" @click="onBackSlide">
        <img :src="require('../assets/icons/Vector.svg')" />
      </span>
      <p
        v-for="num in lengthPage"
        :key="num"
        :class="{
          textBold: counterSlide === num,
        }"
        @click="selectSlide(num)"
      >
        {{ num }}
      </p>
      <span class="next-slide" @click="onNextSlide">
        <img :src="require('../assets/icons/Vector.svg')" />
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "BottomNavBar",
  props: ["lengthPartners"],
  methods: {
    ...mapMutations([
      "changeEndPoint",
      "selectSlide",
      "nextSlide",
      "backSlide",
    ]),
    onBackSlide() {
      if (this.counterSlide - 1 === 0) {
        this.selectSlide(this.lengthPage);
      } else {
        this.selectSlide(this.counterSlide - 1);
      }
    },
    onNextSlide() {
      if (this.counterSlide + 1 > this.lengthPage) {
        this.selectSlide(1);
      } else {
        this.selectSlide(this.counterSlide + 1);
      }
    },
  },
  computed: {
    ...mapGetters(["counterSlide", "lengthPage"]),
  },
};
</script>

<style scoped lang="scss">
@import "~@/theme/_mixins.scss";
.pagination {
  @include displayFlex();
  width: 100%;
  margin: 24px 0 21px 0;
  justify-content: space-between;
  .expand {
    font-family: "Inter-Light";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 130%;
    color: #741d7b;
    cursor: pointer;
  }
  .navigation {
    @include displayFlex();
    .back-slide {
      margin-right: 26px;
      transform: rotate(180deg);
      cursor: pointer;
    }

    .textBold {
      font-family: "Inter-Light";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 130%;
      color: #741d7b;
    }
    p {
      margin-right: 25px;
      cursor: pointer;
      font-family: "Inter-Light";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 130%;
      color: #828282;
    }
    .next-slide {
      cursor: pointer;
    }
  }
}
</style>
