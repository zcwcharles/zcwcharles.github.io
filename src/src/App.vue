<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
