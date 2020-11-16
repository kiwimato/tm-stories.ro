<template>
  <div class="error-container flex align-center justify-center highlight-text text-white">{{ $t('errors.error404') }}</div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style lang="scss">
.error-container {
  width: 100%;
  height: 100vh;
  background-color: lighten($deep-blush, 20%);
}
</style>