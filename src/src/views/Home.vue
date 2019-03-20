<template>
  <div class="profile-page">
    <div class="profile-page__text">
      <div class="profile-page__name">Zichen Wang</div>
      <div class="profile-page__title">Web Developer</div>
    </div>
    <background/>
  </div>
</template>

<style lang="scss">
.profile-page {
  position: absolute;
  height: 100%;
  width: 100%;

  &__text {
    text-align: start;
    padding-top: 20%;
    padding-left: 10%;
  }

  &__name {
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #35477d;
  }

  &__title {
    font-family: 'Playfair Display', serif;
    font-size: 80px;
    font-weight: 500;
    padding-top: 10px;
  }
}
</style>


<script lang="ts">
import { VNode, CreateElement } from 'vue';
import { Component, Vue } from 'vue-property-decorator';
import Background from '../components/Background.vue';

@Component({
  components: {
    Background,
  },
})
export default class Home extends Vue {
}
</script>
