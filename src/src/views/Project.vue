<template>
  <div class="project">
    <h3>{{t('DCFTitle')}}</h3>
    <div class="switch">
      <div class="switch__title">{{t('Period')}}</div>
      <div :class="isFiveYearPeriod ? 'item' : 'item selected'" @click="switchToThreeYearView">{{t('Period3')}}</div>
      <div :class="isFiveYearPeriod ? 'item selected' : 'item'" @click="switchToFiveYearView">{{t('Period5')}}</div>
    </div>
    <div class="switch">
      <div class="switch__title">{{t('CashFlowCalculation')}}</div>
      <div :class="useAutoCashFlowCalulation ? 'item' : 'item selected'" @click="switchToManualInput">{{t('Manual')}}</div>
      <div :class="useAutoCashFlowCalulation ? 'item selected' : 'item'" @click="switchToAutoCalculation">{{t('Auto')}}</div>
    </div>
    <div
      v-if="useAutoCashFlowCalulation"
      class="dcf-container"
    >
      <div class="form-item">
        <div>{{t('FirstYearCashflow')}}</div>
        <input type="number" v-model="firstYearCashFlow" />
      </div>
      <div class="form-item percentage-input">
        <div>{{t('CashflowGrowthRate')}}</div>
        <input type="number" v-model="cashFlowGrothRate" />
      </div>
      <div class="form-item percentage-input">
        <div>{{t('DiscountRate')}}</div>
        <input type="number" v-model="discountRate" />
      </div>
      <div class="form-item percentage-input">
        <div>{{t('GrowthRate')}}</div>
        <input type="number" v-model="growthRate" />
      </div>
      <div class="calculate-button" @click="calculate">{{t('Calculate')}}</div>
      <div class="form-item"> 
        <h3>{{t('ReasonablePrice')}}</h3>
        <div class="result">{{resonablePrice}}</div>
      </div>
    </div>
    <div v-else :class="`dcf-container${isFiveYearPeriod ? ' dcf-container__five-year-view' : ''}`">
      <div class="form-item">
        <div>{{t('FirstYearCashflow')}}</div>
        <input type="number" v-model="firstYearCashFlow" />
      </div>
      <div class="form-item">
        <div>{{t('SecondYearCashflow')}}</div>
        <input type="number" v-model="secondYearCashFlow" />
      </div>
      <div class="form-item">
        <div>{{t('ThirdYearCashflow')}}</div>
        <input type="number" v-model="thirdYearCashFlow" />
      </div>
      <div v-if="isFiveYearPeriod" class="form-item">
        <div>{{t('ForthYearCashflow')}}</div>
        <input type="number" v-model="forthYearCashFlow" />
      </div>
      <div v-if="isFiveYearPeriod" class="form-item">
        <div>{{t('FifthYearCashflow')}}</div>
        <input type="number" v-model="fifthYearCashFlow" />
      </div>
      <div class="form-item percentage-input">
        <div>{{t('DiscountRate')}}</div>
        <input type="number" v-model="discountRate" />
      </div>
      <div class="form-item percentage-input">
        <div>{{t('GrowthRate')}}</div>
        <input type="number" v-model="growthRate" />
      </div>
      <div class="calculate-button" @click="calculate">{{t('Calculate')}}</div>
      <div class="form-item"> 
        <h3>{{t('ReasonablePrice')}}</h3>
        <div class="result">{{resonablePrice}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.project {
  padding-top: 60px;
  position: absolute;
  width: 100vw;
  padding-bottom: 20px;

  @media screen and (max-width: 375px) {
    padding-top: 0px;
  }

  .result {
    color: #0f1123;
    line-height: 40px;
    font-size: 20px;
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
      cursor: pointer;
    }

    .selected {
      background: rgba(0,0,0,0.8);
      color: white;
    }

    &__title {
      font-size: 18px;
      line-height: 40px;
      font-weight: 600;
    }
  }

  .dcf-container {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    flex-direction: column;
    max-height: 1000px;
    flex: 0 0 30%;

    @media screen and (max-width: 375px) {
      padding: 0 10px;
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
      cursor: pointer;
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

const en: {
  [key: string]: string;
} = {
  DCFTitle : 'DCF calculator',
  Period: 'Period',
  Period3: '3 Years',
  Period5: '5 Years',
  CashFlowCalculation: 'CashFlow Calculation',
  Manual: 'Manual',
  Auto: 'Auto',
  FirstYearCashflow: 'First year cashflow',
  SecondYearCashflow: 'Second year cashflow',
  ThirdYearCashflow: 'Third year cashflow',
  ForthYearCashflow: 'Forth year cashflow',
  FifthYearCashflow: 'Fifth year cashflow',
  CashflowGrowthRate: 'Cashflow growth rate',
  DiscountRate: 'Discount rate(Interest rate)',
  GrowthRate: 'Growth rate',
  Calculate: 'Calculate',
  ReasonablePrice: 'Reasonable price',
};

const zh: {
  [key: string]: string;
} = {
  DCFTitle : 'DCF 计算器',
  Period: '周期',
  Period3: '3年',
  Period5: '5年',
  CashFlowCalculation: '每股收益计算',
  Manual: '手动',
  Auto: '自动',
  FirstYearCashflow: '第一年每股收益',
  SecondYearCashflow: '第二年每股收益',
  ThirdYearCashflow: '第三年每股收益',
  ForthYearCashflow: '第四年每股收益',
  FifthYearCashflow: '第五年每股收益',
  CashflowGrowthRate: '每股收益增长率',
  DiscountRate: '内含报酬率',
  GrowthRate: '净利润永续增长率',
  Calculate: '计算',
  ReasonablePrice: '合理价位',
};

@Component
export default class Project extends Vue {
  resonablePrice: number = 0;
  firstYearCashFlow: (number | string) = '';
  secondYearCashFlow: (number | string) = '';
  thirdYearCashFlow: (number | string) = '';
  forthYearCashFlow: (number | string) = '';
  fifthYearCashFlow: (number | string) = '';
  cashFlowGrothRate: number = 0;
  discountRate: number = 8;
  growthRate: number = 5;
  isFiveYearPeriod: boolean = true;
  useAutoCashFlowCalulation: boolean = false;
  isChinese: boolean = navigator.language.includes('zh');

  switchToAutoCalculation() {
    this.useAutoCashFlowCalulation = true;
  }

  switchToManualInput() {
    this.useAutoCashFlowCalulation = false;
  }

  switchToThreeYearView() {
    this.isFiveYearPeriod = false;
  }

  switchToFiveYearView() {
    this.isFiveYearPeriod = true;
  }

  t(key: string) {
    if (this.isChinese) {
      return zh[key];
    }
    return en[key];
  }

  calculate() {
    if (!this.firstYearCashFlow) {
      return;
    }

    try {
      let cfs: Array<(number | string)> = [];
      if (this.useAutoCashFlowCalulation) {
        const compoundCashflowRate = this.cashFlowGrothRate / 100 + 1;
        const yearCount = this.isFiveYearPeriod ? 5 : 3;
        for (let i = 0; i < yearCount; i++) {
          cfs.push(Number(this.firstYearCashFlow ) * Math.pow(compoundCashflowRate, i));
        }
      } else if (this.secondYearCashFlow && this.thirdYearCashFlow) {
        if (this.isFiveYearPeriod) {
          cfs = [
            this.firstYearCashFlow,
            this.secondYearCashFlow,
            this.thirdYearCashFlow,
            this.forthYearCashFlow,
            this.fifthYearCashFlow,
          ];
        } else {
          cfs = [this.firstYearCashFlow, this.secondYearCashFlow, this.thirdYearCashFlow];
        }
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
    } catch (e) {
      console.error(e);
    }
  }
}
</script>