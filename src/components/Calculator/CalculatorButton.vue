<template>
  <button class="btn" @click="$emit('update-display', value)">{{ value }}</button>
</template>

<script>
export default {
  name: "ButtonCalculator",
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
  .btn {
    width: 100%;
    height: 3rem; 
    border: 0;
    background-color: rgba(42, 50, 113, 0.28);
    color: #6cacc5;
    cursor: pointer;
    float: left;
    font: inherit;
    // margin: 0.25em;

    transition: all 0.5s;

    &:hover {
      background: #201e40;
    }

    &:focus {
      outline: 0; // Better check accessibility

      /* The value fade-ins that appear */
      &::after {
        animation: zoom 1s;
        animation-iteration-count: 1;
        animation-fill-mode: both; // Fix Firefox from firing animations only once
        content: attr(data-num);
        cursor: default;
        font-size: 100px;
        position: absolute;
        top: 1.5em;
        left: 50%;
        text-align: center;
        margin-left: -24px;
        opacity: 0;
        width: 48px;
      }
    }
  }
</style>