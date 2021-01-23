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
  height: 100vh;
  width: 100vw;
  position: relative;

  @media screen and (max-width: 375px) {
    padding-top: 120px;
  }

  &__text {
    text-align: start;
    padding-top: 20%;
    padding-left: 10%;

    @media screen and (max-width: 375px) {
      text-align: center;
      padding: 0;
    }
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

    @media screen and (max-width: 375px) {
      font-size: 40px;
    }
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
