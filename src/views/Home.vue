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
  }
};
</script>
