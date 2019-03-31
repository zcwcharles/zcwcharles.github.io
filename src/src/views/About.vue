<template>
  <div class="about">
    <div>This is an about page</div>
  </div>
</template>

<style lang="scss">
.about {
  padding-top: 60px;
  position: absolute;
  height: 100vh;
  width: 100vw;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {
}
</script>