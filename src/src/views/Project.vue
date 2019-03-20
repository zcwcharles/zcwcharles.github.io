<template>
  <div class="project">
    <div>This is an project page</div>
  </div>
</template>

<style lang="scss">
.project {
  padding-top: 60px;
  position: absolute;
  height: 94.5%;
  width: 100%;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Project extends Vue {
}
</script>