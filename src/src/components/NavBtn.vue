<template>
  <div :class="['nav-btn', this.path === curPath ? 'nav-btn--active' : '']" @click="onClick">{{name}}</div>
</template>

<style lang="scss">
.nav-btn {
  width: 50%;
  padding-top:20px;
  color: #0b8457;
  background: none;
  transition: ease 0.5s;
  cursor: pointer;
  &:hover {
     background: #9692af;
  }
  &--active {
    color: #9692af;
    background: none;
    &:hover {
      background: none;
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { RoutePayload } from '@/store.ts';

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
