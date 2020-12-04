<template>
  <div class="page-container">
    <div class="intro-container">
      <div class="intro-text">
        <h2 class="text-white page-title animate__animated animate__slideInLeft">
          {{ $t('worldWars.stories.story2.title') }}
        </h2>
      </div>
      <div 
        class="main-image animated animate__animated animate__slideInRight"
        key="main-image"
      />
    </div>
    <div class="content-container">
      <p class="text-black highlight-text pb-0 mb-0" v-scroll-animation>{{ $t('worldWars.stories.story2.intro') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="texts">
          <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-1') }}</p>
          <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-2') }}</p>
          <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-3') }}</p>
        </div>
        <div class="images">
           <div class="palatul-lloyd-tram avoid-clicks" />
        </div>
      </div>
    </div>
    <div class="content-container">
      <p class="text-black text mt-0" v-scroll-animation>{{ $t('worldWars.stories.story2.text-4') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="population-1930" />
        <div class="population-1941" />
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div>
          <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-5') }}</p>
        </div>
        <div>
          <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-6') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="text">
          <p class="text-black highlight-text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-7') }}</p>
        </div>
        <div class="images">
          <div class="ro-army avoid-clicks" />
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="images">
          <div class="stan avoid-clicks" />
        </div>
        <div class="texts">
          <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-8') }}</p>
          <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-9') }}</p>
          <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-10') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="texts">
        <p class="text-black text highlight-text ma-0 pb-0" v-scroll-animation>{{ $t('worldWars.stories.story2.text-11') }}</p>
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="kandia-ad" />
        <div class="kandia-505" />
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="kandia-ad-2" />
        <div class="interbelic-ads" />
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="images">
          <div class="car avoid-clicks" />
        </div>
        <div class="texts">
          <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-12') }}</p>
          <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-13') }}</p>
          <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-14') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="texts">
        <p class="text-black highlight-text ma-0" v-scroll-animation>{{ $t('worldWars.stories.story2.text-15') }}</p>
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="empty-cathedral-place" />
        <div class="cathedral-almost-finished" />
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="chinezul-tm" />
        <div class="texts">
          <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-16') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="ripensia-tm" />
    </div>
    <div class="content-container">
      <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-17') }}</p>
      <p class="text-black text" v-scroll-animation>{{ $t('worldWars.stories.story2.text-18') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="unirii-square" />
        <div class="piata-iosefin" />
      </div>
    </div>
    <div class="content-container">
      <p class="text-black highlight-text ma-0" v-scroll-animation>{{ $t('worldWars.stories.story2.text-19') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Story2'
}
</script>

<style lang="scss" scoped>
.intro-container {
  background-color: $anzac;
}

.main-image {
  background: url('../../../assets/images/tm_interbelica_utopia.jpg') no-repeat top/cover;
}

.palatul-lloyd-tram {
  background: url('../../../assets/images/palatul-lloyd-tram-min.jpg') no-repeat top/contain;
  height: 100%;
}

.ro-army {
  background: url('../../../assets/images/ro_army_entering_tm-min.jpg') no-repeat center/cover;
  height: 80vh;
}

.stan {
  background: url('../../../assets/images/stan-min.jpg') no-repeat top/cover;
  height: 100%;
}

.population-1930 {
  background: url('../../../assets/images/etnii_tm_1930.png') no-repeat top/contain;
  height: 28.5rem;
}

.population-1941 {
  background: url('../../../assets/images/etnii_tm_1941.png') no-repeat top/contain;
  height: 30rem;
}

.kandia-ad {
  background: url('../../../assets/images/Kandia_ad-min.jpg') no-repeat top/contain;
  height: 60vh;
}

.kandia-505 {
  background: url('../../../assets/images/Kandia_ad_1-min.jpg') no-repeat top/contain;
  height: 60vh;
}

.kandia-ad-2 {
  background: url('../../../assets/images/505_cu_dunga.jpg') no-repeat top/contain;
  height: 60vh;
}

.interbelic-ads {
  background: url('../../../assets/images/reclame_perioada_interbelica-min.jpg') no-repeat top/cover;
  height: 60vh;
}

.car {
  background: url('../../../assets/images/tm_interbelica_car-min.jpg') no-repeat top/cover;
  height: 60vh;
}

.empty-cathedral-place {
  background: url('../../../assets/images/cathedral_empty_space-min.jpg') no-repeat top/cover;
  height: 70vh;
}

.cathedral-almost-finished {
  background: url('../../../assets/images/cathedral_almost_finished-min.jpg') no-repeat top/cover;
  height: 70vh;
}

.chinezul-tm {
  background: url('../../../assets/images/chinezul-timisoara-min.jpg') no-repeat top/cover;
  height: 70vh;
}

.ripensia-tm {
  background: url('../../../assets/images/ripensia-1931-min.jpg') no-repeat bottom/cover;
  height: 70vh;
}

.unirii-square {
  background: url('../../../assets/images/piata-unirii-interbelica-min.jpg') no-repeat top/cover;
  height: 70vh;
}

.piata-iosefin {
  background: url('../../../assets/images/piata_iosefin-min.jpg') no-repeat top/cover;
  height: 70vh;
}

@media (max-width: 768px) {
  .ripensia-tm {
    height: 20rem;
  }
}

@media (max-width: 600px) {
  .population-1930 {
    height: 24rem;
    width: 100%;
  }

  .population-1941 {
    height: 23rem;
  }
}

@media (max-width: 500px) {
  .population-1930 {
    height: 20rem;
    width: 100%;
  }

  .population-1941 {
    height: 20rem;
  }
}

@media (max-width: 400px) {
  .population-1930 {
    height: 15rem;
    width: 100%;
  }

  .population-1941 {
    height: 15rem;
  }
}
</style>