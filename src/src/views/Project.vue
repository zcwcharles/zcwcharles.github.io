<template>
  <div class="project">
    <h3>DCF calculator</h3> 
    <div :class="`dcf-container${isFiveYearPeriod ? ' dcf-container__five-year-view' : ''}`">
      <div class="form-item">
        <div>First year cashflow</div>
        <input type="number" v-model="firstYearCashFlow" />
      </div>
      <div class="form-item">
        <div>Second year cashflow</div>
        <input type="number" v-model="secondYearCashFlow" />
      </div>
      <div class="form-item">
        <div>Third year cashflow</div>
        <input type="number" v-model="thirdYearCashFlow" />
      </div>
      <div v-if="isFiveYearPeriod" class="form-item">
        <div>Forth year cashflow</div>
        <input type="number" v-model="forthYearCashFlow" />
      </div>
      <div v-if="isFiveYearPeriod" class="form-item">
        <div>Fifth year cashflow</div>
        <input type="number" v-model="fifthYearCashFlow" />
      </div>
      <div class="form-item percentage-input">
        <div>Discount rate(Interest rate)</div>
        <input type="number" v-model="discountRate" />
      </div>
      <div class="form-item percentage-input">
        <div>Growth rate</div>
        <input type="number" v-model="growthRate" />
      </div>
      <div class="calculate-button" @click="calculate">Calculate</div>
      <div class="form-item"> 
        <h3>Reasonable price</h3>
        <div>{{resonablePrice}}</div>
      </div>
    </div>
    <div class="switch">
      <div :class="isFiveYearPeriod ? 'item' : 'item selected'" @click="switchToThreeYearView">Period 3</div>
      <div :class="isFiveYearPeriod ? 'item selected' : 'item'" @click="switchToFiveYearView">Period 5</div>
    </div>
  </div>
</template>

<style lang="scss">
.project {
  padding-top: 60px;
  position: absolute;
  width: 100vw;

  @media screen and (max-width: 375px) {
    padding-top: 0px;
  }

  .switch {
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;

    .item {
      padding: 10px;
      background: white;
      color: black;
      border-radius: 4px;
    }

    .selected {
      background: rgba(0,0,0,0.8);
      color: white;
    }
  }

  .dcf-container {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    flex-direction: column;
    height: 60vh;
    
    @media screen and (max-width: 375px) {
      height: 70vh;
      padding: 0 10px;
    }

    &__five-year-view{
      height: 80vh;
      @media screen and (max-width: 375px) {
        height: 100vh;
        padding: 0 10px;
      }
    }
  
    .form-item {
      width: 100%;
      height: 130px;
    }

    input {
      line-height: 40px;
      font-size: 25px;
    }

    .calculate-button {
      background: rgba(0,0,0,0.8);
      color: white;
      font-size: 20px;
      width: 80%;
      margin: auto;
      line-height: 40px;
    }

    .percentage-input {
      &::after {
        content: '%';
        padding-left: 5px;
      }
    }
  }
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Project extends Vue {
  resonablePrice: number = 0;
  firstYearCashFlow: (number | string) = '';
  secondYearCashFlow: (number | string) = '';
  thirdYearCashFlow: (number | string) = '';
  forthYearCashFlow: (number | string) = '';
  fifthYearCashFlow: (number | string) = '';
  discountRate: number = 8;
  growthRate: number = 5;
  isFiveYearPeriod: boolean = true;

  switchToThreeYearView() {
    this.isFiveYearPeriod = false;
  }

  switchToFiveYearView() {
    this.isFiveYearPeriod = true;
  }

  calculate() {
    if (this.firstYearCashFlow && this.secondYearCashFlow && this.thirdYearCashFlow) {
      let cfs = [];
      if (this.isFiveYearPeriod) {
        cfs = [this.firstYearCashFlow, this.secondYearCashFlow, this.thirdYearCashFlow, this.forthYearCashFlow, this.fifthYearCashFlow];
      } else {
        cfs = [this.firstYearCashFlow, this.secondYearCashFlow, this.thirdYearCashFlow];
      }
      let res = 0;
      const length = cfs.length;
      const discountRatePercent = this.discountRate / 100;
      const compoundRate = 1 + discountRatePercent;
      const growthRatePercent = this.growthRate / 100;
      cfs.forEach((c: (string | number), index) => {
        res += Number(c) / Math.pow(compoundRate, index);
      });
      res += ((cfs[length - 1] as number) / (discountRatePercent - growthRatePercent)) / Math.pow(compoundRate, length);

      this.resonablePrice = res;
    }
  }
}
</script>