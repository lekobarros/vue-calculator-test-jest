<template>
  <div class="flex items-center mx-auto w-full max-w-xs min-h-screen">
    <div class="mx-auto">
      <!-- Header Element -->
      <header class="block text-center">
        <h1 class="text-3xl font-light">Vue Jest Test Calculator</h1>
        <p class="warning">Don't divide by zero</p>
      </header>
      <!-- / Header Element -->
      <!-- Calculator -->
      <calculator></calculator>
    </div>
  </div>
</template>

<script>
import Calculator from "@/components/Calculator";

export default {
  name: "Home",
  components: {
    Calculator,
  },
  data() {
    return {
      display: 0,
      oldNumber: null,
      currentNum: null,
      operation: null,
      results: null,
      values: [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, ".", "=", "/"],
    };
  },
  // watch: {
  //   currentNumber: function (current) {
  //     this.display = current
  //   }
  // },
  methods: {
    isNumber(value) {
      return /[0-9.]/.test(value);
    },
    isEquals(value) {
      return /[=]/.test(value);
    },
    setOperation(value) {
      this.oldNumber = this.currentNumber;
      this.currentNumber = null;
      this.operation = value;
    },
    setEquals() {
      const oldNumber = parseFloat(this.oldNumber);
      const currentNumber = parseFloat( this.currentNumber);
      const operation = this.operation;
      let resultNum;

      if (!operation) return;
      switch (operation) {
        case "+":
          resultNum = oldNumber + currentNumber;
          break;

        case "-":
          resultNum = oldNumber - currentNumber;
          break;

        case "*":
          resultNum = oldNumber * currentNumber;
          break;

        case "/":
          resultNum = oldNumber / currentNumber;
          break;
        default:
          resultNum = currentNumber;
      }

      // Set results in component data
      this.results = resultNum;
      this.display = this.results;
    },
    resetDisplay() {
      this.display = 0;
      this.oldNumber = null;
      this.currentNumber = null;
      this.operation = null;
      this.results = null;
      return;
    },
    changeDisplay(value) {
      let digit = value.toString();
      let { display, currentNumber, results } = this;
      let numToDisplay;

      // If have a remains of results
      if (results) {
        this.resetDisplay();
      }
      // When active a action in buttons, call the current function
      if (!currentNumber) {
        currentNumber = "";
      } else if (!this.isNumber(digit) && !this.isEquals(digit)) {
        return this.setOperation(value);
      } else if (this.isEquals(digit)) {
        return this.setEquals();
      }

      // Set component data
      this.currentNumber = currentNumber + digit;
      this.display = this.currentNumber;
    },
  },
};
</script>
