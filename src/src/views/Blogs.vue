<template>
  <div class="blogs">
    <transition name="fade">
      <div class="blog-list" v-if="!showBlog" key="list">
        <blog-list-view @showBlog="onShowBlog"/>
      </div>
      <div class="blog" v-else key="blog">
        <blog-view @back="onShowList"/>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.blogs {
  padding-top: 60px;
  width: 100vw;
  position: absolute;
}
.blog {
  text-align: start;
  width: 60vw;
  margin-right: auto;
  margin-left: auto;

  &-list {
    position: absolute;
    padding-top: 20px;
    width: 60vw;
    left: 20vw;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import BlogView from '@/components/BlogView.vue';
import BlogListView from '@/components/BlogListView.vue';

@Component({
  components: {
    BlogView,
    BlogListView,
  },
})
export default class Blogs extends Vue {
  showBlog: boolean = false;

  onShowBlog() {
    this.showBlog = true;
  }

  onShowList() {
    this.showBlog = false;
  }
}
</script>

