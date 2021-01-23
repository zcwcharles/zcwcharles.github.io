<template>
  <div :class="['nav-btn', this.path === curPath ? 'nav-btn--active' : '']" @click="onClick">{{name}}</div>
</template>

<style lang="scss">
.nav-btn {
  width: 50%;
  padding: 20px 0;
  color: #333333;
  background: none;
  transition: ease 0.5s;
  font-size: 14px;
  cursor: pointer;
  &:hover {
     background: #9692af;
  }
  &--active {
    color: #9692af;
    background: black;
    &:hover {
      background: black;
    }
  }
}

@media screen and (max-width: 375px) {
  .nav-btn {
    width: 100%;
    padding: 10px 0;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { RoutePayload } from '../store';

@Component
export default class NavBtn extends Vue {
  @State('cur_route')
  curPath: string;

  @Prop({ required: true })
  name?: string;

  @Prop({ required: true })
  path?: string;

  onClick() {
    if (this.path !== undefined) {
      this.$router.push(this.path);
      this.$store.commit('updateRoute', { newRoute: this.path } as RoutePayload);
    }
  }
}
</script>
