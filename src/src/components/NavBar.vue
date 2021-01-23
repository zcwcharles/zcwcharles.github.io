<template>
  <div v-if="expanded" class="nav">
    <nav-btn path="/" name="Home"/>
    <nav-btn path="/project" name="DCF Calculator"/>
    <nav-btn path="/blogs" name="Blogs"/>
    <nav-btn path="/about" name="About"/>
    <div class="collapse" @click="onCollapse">x</div>
  </div>
  <div class="collapsed-menu" v-else @click="onCollapse">
    Menu
  </div>
</template>

<style lang="scss">
.nav {
  width: 100vw;
  right: 0;
  left: 0;
  z-index: 9999;
  transition: ease 0.5s;
  display: flex;
  background: white;
  box-shadow: 0 2px 2px -2px rgba(240,240,240, 0.8);
  &:hover {
    background: rgba(51,49,59, 0.8);
    transition: ease 0.5s;
  }
}

.collapse {
  display: none;
}

@media screen and (max-width: 375px) {
  .nav {
    width: 100vw;
    flex-direction: column;

    &:hover {
      background: none;
    }
  }

  .collapse {
    padding: 10px 0;
    display: block;
  }

  .collapsed-menu {
    padding: 10px 0;
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
  expanded: boolean = false;

  onCollapse() {
    this.expanded = !this.expanded;
  }


}
</script>
