<template>
  <div class='page-container'>
    <div class="intro-container">
      <div class="intro-text">
        <h2 class="text-white page-title animate__animated animate__slideInLeft">
          {{ $t('antiquity.title')}}
        </h2>
      </div>
      <div 
        class="main-image animated avoid-clicks animate__animated animate__slideInRight"
        key="main-image"
      />   
    </div>
    <div class="content-container">
      <p class="text-black intro" v-scroll-animation>
        {{ $t('antiquity.intro') }}
      </p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="image-container" v-scroll-animation>
          <div class="celts" />
          <span class="small-text">{{ $t('antiquity.image-1') }}</span>
        </div>
        <div class="flex align-center justify-start">
          <h4 class="text-black highlight-text mt-0 pa-0" v-scroll-animation>{{ $t('antiquity.text-1') }}</h4>
        </div>
      </div>
    </div>
    <div class="content-container" v-scroll-animation>
      <p class="ma-0">{{ $t('antiquity.text-2') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="texts">
          <p class="ma-0" v-scroll-animation>{{ $t('antiquity.text-3') }}</p>
          <p v-scroll-animation>{{ $t('antiquity.text-4') }}</p>
        </div>
        <div class="image-container" v-scroll-animation>
          <div class="ancient-village" />
          <span class="small-text">{{ $t('antiquity.image-2') }}</span>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="ancient-household" v-scroll-animation />
        <div class="texts">
          <p v-scroll-animation>{{ $t('antiquity.text-5') }}</p>
          <p v-scroll-animation>{{ $t('antiquity.text-6') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="texts" v-scroll-animation>
          <p>{{ $t('antiquity.text-7') }}</p>
        </div>
        <div class="image-container" v-scroll-animation>
          <div class="ancient-farming" />
          <span class="small-text">{{ $t('antiquity.image-4') }}</span>
        </div>
      </div>
    </div>
     <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="image-container" v-scroll-animation>
          <div class="pottery-oven" />
          <span class="small-text">{{ $t('antiquity.image-5') }}</span>
        </div>
        <div class="texts">
          <p v-scroll-animation>{{ $t('antiquity.text-8') }}</p>
          <p v-scroll-animation>{{ $t('antiquity.text-9') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="texts">
          <p v-scroll-animation>{{ $t('antiquity.text-10') }}</p>
          <p v-scroll-animation>{{ $t('antiquity.text-11') }}</p>
          <p v-scroll-animation>{{ $t('antiquity.text-12') }}</p>
        </div>
        <div class="image-container" v-scroll-animation>
          <div class="blacksmith" />
          <span class="small-text">{{ $t('antiquity.image-6') }}</span>
        </div>
      </div>
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
  background: url('../assets/images/antichitate_min.png') no-repeat center/cover;
}

.celts {
  background: url('../assets/images/celtic_warriors_central_europe-min.jpg') no-repeat top/cover;
  height: 50vh;
}

.ancient-village {
  background: url('../assets/images/danish_village-min.jpg') no-repeat top/cover;
  height: 60vh;
}

.ancient-household {
  background: url('../assets/images/ancient_household.jpg') no-repeat top/cover;
  height: 60vh;
}

.ancient-farming {
  background: url('../assets/images/iron_age_farming-min.jpg') no-repeat top/cover;
  height: 60vh;
}

.pottery-oven {
  background: url('../assets/images/pottery_oven-min.jpg') no-repeat top/cover;
  height: 60vh;
}

.blacksmith {
  background: url('../assets/images/blacksmith-min.jpg') no-repeat top/cover;
  height: 70vh;
}
</style>