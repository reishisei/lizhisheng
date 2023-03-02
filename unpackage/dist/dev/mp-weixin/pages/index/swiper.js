"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500
    };
  },
  methods: {
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
      console.log("autoplay", this.autoplay);
    },
    intervalChange(e) {
      this.interval = e.target.value;
    },
    durationChange(e) {
      this.duration = e.target.value;
    },
    changeSwiper(event) {
      console.log("detail", event.detail);
    },
    changeTrans() {
    },
    changeAnimation() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.indicatorDots,
    b: $data.autoplay,
    c: $data.interval,
    d: $data.duration,
    e: common_vendor.o((...args) => $options.changeTrans && $options.changeTrans(...args)),
    f: common_vendor.o((...args) => $options.changeAnimation && $options.changeAnimation(...args)),
    g: $data.indicatorDots,
    h: common_vendor.o((...args) => $options.changeIndicatorDots && $options.changeIndicatorDots(...args)),
    i: $data.autoplay,
    j: common_vendor.o((...args) => $options.changeAutoplay && $options.changeAutoplay(...args)),
    k: common_vendor.t($data.duration),
    l: common_vendor.o((...args) => $options.durationChange && $options.durationChange(...args)),
    m: $data.duration,
    n: common_vendor.t($data.interval),
    o: common_vendor.o((...args) => $options.intervalChange && $options.intervalChange(...args)),
    p: $data.interval
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/cce/Desktop/work/lizhihub/--huv/pages/index/swiper.vue"]]);
wx.createPage(MiniProgramPage);
