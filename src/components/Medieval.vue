<template>
  <div class="page-container">
    <div class="intro-container">
      <div class="intro-text">
        <h2 class="text-white page-title animate__animated animate__slideInLeft">
          {{ $t('medieval.title')}}
        </h2>
      </div>
      <div 
        class="main-image animated avoid-clicks animate__animated animate__slideInRight"
        key="main-image"
      />   
    </div>
    <div class="content-container">
      <p class="text-black intro" v-scroll-animation v-html="$t('medieval.intro')" />
    </div>
    <div class="content-container">
      <h4 class="text-black highlight-text" v-scroll-animation v-html="$t('medieval.text-1')" />
        <div class="half-half-container half-half-container--responsive">
          <div class="texts">
            <p class="text-black text" v-scroll-animation>{{ $t('medieval.text-2') }}</p>
            <p class="text-black text second-text" v-scroll-animation>{{ $t('medieval.text-3') }}</p>
          </div>
          <div class="medieval-agriculture avoid-clicks" />
        </div>
    </div>
    <div class="content-container">
      <div class="three-thirds-container three-thirds-container--responsive">
        <div class="medieval-agriculture-1" />
        <div class="medieval-agriculture-2" />
        <div class="medieval-agriculture-3" />
      </div>
    </div>
    <div class="content-container">
      <h4 class="text-black highlight-text" v-scroll-animation>{{ $t('medieval.text-4') }}</h4>
      <div class="lateral-image-container">
        <div class="left-image">
          <div class="otto" v-scroll-animation />
          <span class="highlight-text photo-name">{{ $t('medieval.otto') }}</span>
        </div>
        <div class="right-image">
          <div class="robert" v-scroll-animation />
          <span class="highlight-text photo-name">{{ $t('medieval.robert') }}</span>
        </div>
      </div>
      <p class="text-black" v-scroll-animation>{{ $t('medieval.text-5') }}</p>
      <p class="text-black" v-scroll-animation>{{ $t('medieval.text-6') }}</p>
    </div>
    <div class="content-container">
      <h4 class="text-black highlight-text" v-scroll-animation>{{ $t('medieval.text-7') }}</h4>
      <p class="text-black" v-scroll-animation>{{ $t('medieval.text-8') }}</p>
      <p class="text-black" v-scroll-animation>{{ $t('medieval.text-9') }}</p>
    </div>
    <div class="content-container">
       <div class="half-half-container half-half-container--responsive">
         <div class="pavel" />
         <div class="flex align-center justify-start mt-2">
           <h4 class="text-black highlight-text" v-scroll-animation>{{ $t('medieval.text-10') }}</h4>
         </div>
        </div>
        <p class="text-black" v-scroll-animation>{{ $t('medieval.text-11') }}</p>
        <p class="text-black" v-scroll-animation>{{ $t('medieval.text-12') }}</p>
    </div>
    <div class="content-container">
      <video controls width="100%" v-scroll-animation>
        <source src="../assets/videos/middle_ages.mp4" type="video/mp4">
          Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Medieval'
}
</script>

<style scoped lang="scss">
.intro-container {
  background-color: $green;
}

.container-1 {
  margin: 3rem 0;
}

.main-image {
  background: url('../assets/images/middle-ages-knights-min.jpg') no-repeat top/cover;
}

.left-image {
  grid-row-start: 3;
}

.right-image {
  grid-column-start: 3;
}

.robert {
  background: url('../assets/images/carol_robert_anjou-min.jpg') no-repeat top/cover; 
  height: 70vh;
}

.otto {
  background: url('../assets/images/otto.jpg') no-repeat top/cover; 
  height: 70vh;
}

.pavel {
  background: url('../assets/images/pavel_chinezul-min.jpg') no-repeat top/cover;
  grid-row-start: 1;
  grid-column-start: 1;
  height: 80vh;
}

.text {
  grid-column-start: 1;
}

.lateral-image-container {
  display: grid;
  grid-template-columns: 40% 10% 40%;
  grid-template-rows: 10% 5% 40%;
  padding: .7rem;
  height: 90vh;
}

.medieval-agriculture {
  background: url('../assets/images/medieval-farming.jpg') no-repeat top/cover; 
  height: 70vh;
}

.medieval-agriculture-1 {
  background: url('../assets/images/medieval-farming-2-min.jpg') no-repeat top/cover; 
  height: 70vh;
}

.medieval-agriculture-2 {
  background: url('../assets/images/medieval-farming-3-min.jpg') no-repeat top/cover; 
  height: 70vh;
}

.medieval-agriculture-3 {
  background: url('../assets/images/medieval-living-min.jpg') no-repeat top/cover; 
  height: 70vh;
}

@media (max-width: 768px) {
  .pavel {
    height: 70vh;
  }
}


@media (max-width: 640px) {
  .pavel {
    height: 60vh;
  }
}
</style>