<template>
  <div class='page-container'>
    <div class="intro-container">
      <div class="intro-text">
        <h2 class="text-white page-title">
          {{ $t('antiquity.title')}}
        </h2>
      </div>
      <div 
        class="main-image animated avoid-clicks"
        key="main-image"
      />   
    </div>
    <div class="content-container mt-n-2">
      <p class="text-black intro pt-0" v-scroll-animation v-html="$t('medieval.intro')" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Antiquity'
}
</script>

<style lang="scss" scoped>
.intro-container {
  background-color: lighten($keppel, 10%);
}

.main-image {
  background: url('../assets/images/antichitate_min.png') no-repeat top/contain;
}
</style>