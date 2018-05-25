<template>
  <div id="app">
    <transition name="fade" mode="out-in">
        <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss">
  @import 'assets/css/main';

  .fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  #app{
    width:100%;
    height:100%;
  }
</style>
