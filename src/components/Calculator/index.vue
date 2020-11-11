<template>
  <div class="w-full">
    <!-- Transition -->
    <div class="block py-4 h-20">
      <transition name="fade" @enter="enter">
        <p class="text-center text-4xl font-light" v-show="showTransition">
          {{ lastDisplay }}
        </p>
      </transition>
      <!-- /Transition -->
    </div>
    <div class="mb-4 grid gap-4 grid-cols-4 grid-row-6">
      <!-- Clean Number -->
      <div class="col-start-1 col-span-1 row-start-1">
        <CalculatorButton :value="'C'" @update-display="resetDisplay"
          >C</CalculatorButton
        >
      </div>
      <!-- / Clean Number -->
      <!-- View Number -->
      <div
        class="col-start-2 col-span-4 row-start-1 flex items-center justify-end"
      >
        <div class="text-orange-400">{{ display }}</div>
      </div>
    </div>
    <!-- Grid Buttons Numerals -->
    <div class="grid gap-4 grid-cols-4 grid-row-5">
      <div v-for="(item, index) in values" :key="`calc-btn-${index}`">
        <CalculatorButton
          :value="item"
          @update-display="changeDisplay"
        ></CalculatorButton>
      </div>
    </div>
  </div>
</template>

<script>
import CalculatorButton from "@/components/Calculator/CalculatorButton.vue";

export default {
  name: "Calculator",
  components: {
    CalculatorButton,
  },
  data() {
    return {
      display: 0,
      lastDisplay: null,
      oldNumber: null,
      currentNumber: null,
      operation: null,
      results: null,
      values: [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, ".", "=", "/"],
      showTransition: false,
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
      if (!this.operation) {
        this.oldNumber = this.currentNumber;
        this.currentNumber = null;
      }
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

      // If NaN or Infinity returned
      if (!isFinite(resultNum)) {
        if (isNaN(resultNum)) { // If result is not a number; set off by, eg, double-clicking operators
          resultNum = "You broke it!";
        }
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

      // Create a Header animation
      this.lastDisplay = value;
      this.showTransition = true;

      // If have a remains of results
      if (results) {
        this.resetDisplay();
      }

      // When display is equals a zero or number is null clean display
      if (this.display == 0 || !this.currentNumber) {
        currentNumber = "";
      } 
      
      // When active a action in buttons, call the current function
      if (!this.isNumber(digit) && !this.isEquals(digit)) {
        return this.setOperation(value);
      } else if (this.isEquals(digit)) {
        return this.setEquals();
      }

      // Set component data
      this.currentNumber = currentNumber + digit;
      this.display = this.currentNumber;
    },
    /* Transition Effect */
    enter: function (el, done) {
      setTimeout(() => this.showTransition = false, 300);
    },
  },
};
</script>

<style>
  @keyframes zoom {
    0% {
      transform: scale(0.2);
      opacity: 0;
    }

    70% {
      transform: scale(1);
    }

    100% {
      opacity: 1;
    }
  }

  .fade-enter-active {
    animation: zoom 0.3s;
  }
  .fade-enter /* .fade-leave-active below version 2.1.8 */ {
    animation: zoom 0.3s;
  }
</style>