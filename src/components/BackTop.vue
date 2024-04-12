<template>
  <div class="back_top">
    <i class="fas fa-arrow-circle-up fa-2x" />
  </div>
</template>

<script setup></script>

<style lang="scss">
  .back_top {
    position: fixed;
    bottom: 15px;
    right: 15px;
    font-size: 20px;
    color: var(--font-color);
    transition: all 0.5 ease;
  }

  .fa-solid,
  .fas {
    font-weight: 900;
    border-radius: 50%;
  }
</style>
