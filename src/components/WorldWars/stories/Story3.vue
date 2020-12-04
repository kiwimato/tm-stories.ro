<template>
  <div class="page-container">
    <div class="intro-container">
      <!-- <div class="icon-container flex align-center justify-start">
        <font-awesome-icon
          icon="chevron-left"
          class="pointer icon"
          color="white"
          size="5x"
        />
      </div> -->
      <div class="intro-text flex-row">
        <h2 class="text-white page-title animate__animated animate__slideInLeft">
          {{ $t('worldWars.stories.story3.title') }}
        </h2>
      </div>
      <div 
        class="main-image animated animate__animated animate__slideInRight"
        key="main-image"
      />
    </div>
    <div class="content-container">
      <p class="text-black highlight-text mb-0" v-scroll-animation>{{ $t('worldWars.stories.story3.intro') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="texts">
          <p class="text-black text mt-0" v-scroll-animation>{{ $t('worldWars.stories.story3.text-1') }}</p>
        </div>
        <div class="poland-invasion avoid-clicks" />  
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="anti-nazi avoid-clicks" />
        <div class="texts">
          <p class="text-black mt-0" v-scroll-animation>{{ $t('worldWars.stories.story3.text-2') }}</p>
          <p class="text-black" v-scroll-animation>{{ $t('worldWars.stories.story3.text-3') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <p class="text-black highlight-text ma-0 pb-0" v-scroll-animation>{{ $t('worldWars.stories.story3.text-4') }}</p>
    </div>
    <div class="content-container">
       <div class="half-half-container half-half-container--responsive">
         <div class="texts">
           <p class="text-black" v-scroll-animation>{{ $t('worldWars.stories.story3.text-5') }}</p>
         </div>
         <div class="texts">
           <p class="text-black" v-scroll-animation>{{ $t('worldWars.stories.story3.text-6') }}</p>
         </div>
       </div>
    </div>
    <div class="content-container">
      <div class="refugees avoid-clicks" />
    </div>
    <div class="content-container">
      <p class="text-black highlight-text ma-0 pb-0" v-scroll-animation>{{ $t('worldWars.stories.story3.text-7') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="germans-romanians" />
        <div class="germans-romanians-2" />
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="texts">
          <p class="text-black mt-0" v-scroll-animation>{{ $t('worldWars.stories.story3.text-8') }}</p>
          <p class="text-black" v-scroll-animation>{{ $t('worldWars.stories.story3.text-9') }}</p>
        </div>
        <div class="belgrade-bombing avoid-clicks" />
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container-responsive">
        <div class="texts">
          <p class="text-black mt-0" v-scroll-animation>{{ $t('worldWars.stories.story3.text-10') }}</p>
        </div>
        <div class="belgrade-bombing-aerial avoid-clicks" />
      </div>
    </div>
    <div class="content-container">
      <p class="text-black highlight-text pb-0 ma-0" v-scroll-animation>{{ $t('worldWars.stories.story3.text-11') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="texts">
          <p class="text-black mt-0" v-scroll-animation>{{ $t('worldWars.stories.story3.text-12') }}</p>
          <p class="text-black" v-scroll-animation>{{ $t('worldWars.stories.story3.text-13') }}</p>
        </div>
        <div class="images">
          <div class="food-rations" />
        </div>
      </div>
    </div>
    <div class="content-container">
      <p class="text-black highlight-text" v-scroll-animation>{{ $t('worldWars.stories.story3.text-14') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="bombed-train-station" />
        <div class="texts">
          <p class="text-black mt-0" v-scroll-animation>{{ $t('worldWars.stories.story3.text-15') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <p class="text-black highlight-text pb-0 ma-0" v-scroll-animation>{{ $t('worldWars.stories.story3.text-16') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="russians" />
        <div class="katiuska" />
      </div>
    </div>
    <div class="content-container">
      <p class="text-black highlight-text pb-0 ma-0" v-scroll-animation>{{ $t('worldWars.stories.story3.text-17') }}</p>
    </div>
    <div class="content-container"> 
      <p class="text-black" v-scroll-animation>{{ $t('worldWars.stories.story3.text-18') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Story2'
}
</script>

<style lang="scss" scoped>
.main-image {
  background: url('../../../assets/images/wwii_image-min.jpg') no-repeat top/contain;
}

.intro-container {
  background-color: darken($coral, 40%);
}

.poland-invasion {
  background: url('../../../assets/images/poland_invasion-min.png') no-repeat top/cover;
  height: 50vh;
}

.anti-nazi {
  background: url('../../../assets/images/anti-nazi-propaganda-min.jpg') no-repeat top/cover;
  height: 80vh;
}

.refugees {
  background: url('../../../assets/images/polish_refugees_adevarul-min.jpg') no-repeat top/contain;
  height: 70vh;
}

.germans-romanians {
  background: url('../../../assets/images/germans_romanians_wwii-min.png') no-repeat top/cover;
  height: 70vh;
}

.germans-romanians-2 {
  background: url('../../../assets/images/germans_romanians_1941-min.jpg') no-repeat top/cover;
  height: 70vh;
}

.belgrade-bombing {
  background: url('../../../assets/images/belgrade_bombed_serbia-com-min.jpg') no-repeat top/cover;
  height: 60vh;
}

.belgrade-bombing-aerial {
  background: url('../../../assets/images/bombing-of-belgrade-1941-2-serbia-com.jpg') no-repeat top/cover;
  height: 60vh;
}

.food-rations {
  background: url('../../../assets/images/weekly_ration_2_people_UK_1943_rare_historical_photos-min.jpg') no-repeat top/cover;
  height: 60vh;
}

.bombed-train-station {
  background: url('../../../assets/images/bombed-train-station-1944-min.jpg') no-repeat top/contain;
  height: 50vh;
}

.russians {
  background: url('../../../assets/images/soviet-tank-min.jpg') no-repeat top/cover;
  height: 50vh;
}

.katiuska {
  background: url('../../../assets/images/katiusa-min.jpg') no-repeat top/cover;
  height: 50vh;
}
</style>