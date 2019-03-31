<template>
<div>
  <div class="title-slot" v-for="el in titleList" :key="el.id" @click="onBlogClick(el.id)">
    <div class="title">
      {{el.title}}
    </div>
    <div class="date">
      <span class="date-pre">Last edited: </span>{{el.date}}
    </div>
  </div>
</div>
</template>

<style lang="scss">
.title-slot {
  height: 70px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  transition: 0.5s;
  background: white;
  position: relative;
  &:hover {
    background: rgba(51,49,59, 0.8);
    transition: 0.6s;
    cursor: pointer;
  }
}
.title {
  padding-top: 25px;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 5px;
}
.date {
  color: #bbbbbb;
  position: absolute;
  bottom: 0;
  right: 0;

  &-pre {
    color: black;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface BlogSummary {
  id: number;
  title: string;
  date: string;
}

@Component
export default class BlogListView extends Vue {
  titleList: BlogSummary[] = [
    {
      id: 0,
      title: 'JavaScript Learning Note - 01',
      date: '2019-03-31',
    },
  ];

  onBlogClick(id: number) {
    this.$emit('showBlog', id);
  }
}
</script>
