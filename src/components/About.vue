<template>
  <div class="about flex flex-column align-center justify-center content-container">
    <p v-html="$t('about.text-1')" />
    <p>{{ $t('about.text-2') }}</p>
    <p>{{ $t('about.text-3') }}</p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>
.about {
  background-color: lighten($cyan, 10%);
  height: 95.4vh;
}

</style>