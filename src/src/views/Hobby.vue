<template>
  <div class="hobby">
    <div>This is an hobby page</div>
  </div>
</template>

<style lang="scss">
.hobby {
  padding-top: 60px;
  position: absolute;
  height: 94.5%;
  width: 100%;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Hobby extends Vue {
}
</script>
