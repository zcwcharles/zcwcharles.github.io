<template>
  <div class="nav">
    <nav-btn path="/" name="Home"/>
    <nav-btn path="/project" name="Project"/>
    <nav-btn path="/blogs" name="Blogs"/>
    <nav-btn path="/about" name="About"/>
  </div>
</template>

<style lang="scss">
.nav {
  height: 60px;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 9999;
  transition: ease 0.5s;
  display: flex;
  background: white;
  // border-bottom-style: solid;
  // border-bottom-width: 1px;
  // border-bottom-color: rgba(0,0,0,0.1);
  box-shadow: 0 2px 2px -2px rgba(240,240,240, 0.8);
  &:hover {
    background: rgba(51,49,59, 0.8);
    transition: ease 0.5s;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import NavBtn from './NavBtn.vue';

@Component({
  components: {
    NavBtn,
  },
})
export default class NavBar extends Vue {
}
</script>
