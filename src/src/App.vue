<template>
  <div id="app">
    <nav-bar/>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
body {
  line-height: 1.6;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/NavBar.vue';
import { Component } from 'vue-property-decorator';

@Component({
  components: {
    NavBar,
  },
})
export default class App extends Vue {
  private onNavClick(path: string) {
    this.$router.push(path);
  }
}
</script>
