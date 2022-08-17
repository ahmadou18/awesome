<template>
  <div id="appVue">
    <div
      class="div_top transition-transform vh-50 w-screen translate-y-t bg-gray-900 absolute"
    ></div>
    <navBar />
    <Nuxt />
    <div
      class="div_bottom transition-transform translate-y-b vh-50 w-screen bg-gray-900 absolute"
    ></div>
  </div>
</template>

<script>
export default {
  // transition: {
  //   name: "global",
  //   mode: "out-in",
  //   beforeEnter() {
  //     const tp = document.querySelector(".div_top");
  //     const btm = document.querySelector(".div_bottom");
  //     tp.classList.add("translate-default");
  //     btm.classList.add("translate-default");
  //     console.log(tp);
  //     console.log(btm);
  //   },
  // enter() {
  //   const tp = document.querySelector(".div_top");
  //   const btm = document.querySelector(".div_bottom");
  //       tp.classList.remove("translate-y-t");
  //   btm.classList.remove("translate-y-b");
  //  },
  //   afterEnter() {
  //     const tp = document.querySelector(".div_top");
  //     const btm = document.querySelector(".div_bottom");
  //     tp.classList.remove("translate-default");
  //     btm.classList.remove("translate-default");
  //     tp.classList.add("translate-y-t");
  //     btm.classList.add("translate-y-b");
  //     console.log(tp);
  //     console.log(btm);
  //   },
  // },
  //   mounted() {
  //     const btm = document.querySelector(".div_bottom");
  //     const tp = document.querySelector(".div_top");
  //     console.log(btm, tp);
  //     btm.classList.add("h-0");
  //     tp.classList.add("h-0");
  //   },
  //   beforeDestroy() {
  //     const btm = document.querySelector(".div_bottom");
  //     const tp = document.querySelector(".div_top");
  //     btm.classList.add("height_bloc");
  //     tp.classList.add("height_bloc");
  //   },
};
</script>

<style lang="scss" scoped>
.vh-50 {
  height: 50vh;
}

.div_top {
  top: 0;
}

.div_bottom {
  bottom: 0;
}

.translate-y-b {
  transform: translateY(100%);
}

.translate-y-t {
  transform: translateY(-100%);
}

.translate-default {
  transform: translateY(0);
}
</style>
