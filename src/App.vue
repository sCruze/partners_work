<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~@/theme/fonts.scss";
@import "~@/theme/_mixins.scss";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  body {
    background-color: #e5e5e5;
    #app {
      @include displayFlex();
      width: 100%;
    }
  }
}
</style>
