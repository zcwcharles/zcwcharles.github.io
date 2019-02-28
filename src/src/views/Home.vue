<template>
  <div class="profile-page">
    <div class="profile-page__text">
      <div class="profile-page__name">Zichen Wang</div>
      <div class="profile-page__title">Web Developer</div>
    </div>
  </div>
</template>

<style lang="scss">
.profile-page {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background: url('../assets/home-bg-2.jpg');
  background-size: cover;
  height: 100vh;

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
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
