<template>
  <div class="spinner__container">
      <div class="w-12 h-12 border-2 border-primary-600 rounded-full loader"></div>
  </div>
</template>

<style scoped>
.spinner__container {
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;
}

@keyframes loader-rotate {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
.loader {
    border-right-color: transparent;
    animation: loader-rotate 1s linear infinite;
}
</style>

