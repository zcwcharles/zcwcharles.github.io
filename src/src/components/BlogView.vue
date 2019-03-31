<template>
  <div>
    <div class="btn" @click="onBack">
      <div :class="['icon']">
      </div>
    </div>
    <BlogJsNote01/>
  </div>
</template>

<style lang="scss">
.btn {
  top: 80px;
  left: 15vw;
  z-index: 9999;
  position: fixed;
  height: 40px;
  width: 40px;
  background: whitesmoke;
  &:hover {
    background: #d0d0d0;
  }
}
.icon {
  background: black;
  height: 100%;
  width: 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: 30px;
  -webkit-mask-position-x: center;
  -webkit-mask-position-y: center;
  -webkit-mask-image: url('../assets/back.svg');
  &:hover {
    background: #6d6d6d;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import 'highlight.js/styles/github.css';
import '@/css/markdown7.css';
import { Component } from 'vue-property-decorator';
const BlogJsNote01 = () => import('../blogs/blog-js-note-01.md');

@Component({
  components: {
    BlogJsNote01,
  },
})
export default class BlogView extends Vue {
  onBack() {
    this.$emit('back');
  }
}
</script>
