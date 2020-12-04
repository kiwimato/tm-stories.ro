<template>
  <div class='page-container'>
    <div class="intro-container">
      <div class="intro-text">
        <h2 class="text-white page-title animate__animated animate__slideInLeft">
          {{ $t('ah.stories.story1.title')}}
        </h2>
      </div>
      <div 
        class="main-image animated avoid-clicks animate__animated animate__slideInRight"
        key="main-image"
      />
    </div>
    <div class="content-container">
      <p class="highlight-text" v-scroll-animation>{{ $t('ah.stories.story1.intro') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="image-container" v-scroll-animation>
          <div class="maria-theresa" />
          <span class="small-text">{{ $t('ah.stories.story1.image-1') }}</span>
          <br />
          <span class="small-text">{{ $t('ah.stories.story1.image-1-source') }}</span>
        </div>
        <div class="texts">
          <p v-scroll-animation>{{ $t('ah.stories.story1.text-1') }}</p>
          <p v-scroll-animation>{{ $t('ah.stories.story1.text-2') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="image-container" v-scroll-animation>
          <div class="vienna-siege" />
          <span class="small-text">{{ $t('ah.stories.story1.image-2') }}</span>
        </div>
        <div class="texts" v-scroll-animation>
          <p>{{ $t('ah.stories.story1.text-3') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <p class="highlight-text" v-scroll-animation>{{ $t('ah.stories.story1.text-4') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="texts">
          <p v-scroll-animation>{{ $t('ah.stories.story1.text-5') }}</p>
          <p v-scroll-animation>{{ $t('ah.stories.story1.text-6') }}</p>
        </div>
        <div class="image-container" v-scroll-animation>
          <div class="bastion" />
          <span class="small-text">{{ $t('ah.stories.story1.image-3') }}</span>
          <br />
          <span class="small-text">{{ $t('ah.stories.story1.image-3-source') }}</span>
        </div>
      </div>
    </div>
    <div class="content-container">
      <p class="highlight-text" v-scroll-animation>{{ $t('ah.stories.story1.text-7') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Story1'
}
</script>

<style scoped lang="scss">
.main-image {
  background: url('../../../assets/images/capitulare-turci-eugeniu-de-savoya.jpg') no-repeat top/cover;
}

.intro-container {
  background-color: $anzac;
}

.maria-theresa {
  background: url('../../../assets/images/maria.jpg') no-repeat top/cover;
  height: 70vh;
}

.vienna-siege {
  background: url('../../../assets/images/siege_of_vienna.jpg') no-repeat top/cover;
  height: 60vh;
}

.bastion {
  background: url('../../../assets/images/bastion.jpg') no-repeat top/cover;
  height: 60vh;
}
</style>