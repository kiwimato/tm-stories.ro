<template>
  <div class="page-container">
    <div class="intro-container">
      <div class="intro-text">
        <h2 class="text-white page-title animate__animated animate__slideInRight">
          {{ $t('worldWars.stories.story1.title') }}
        </h2>
      </div>
      <div 
        class="main-image animated animate__animated animate__slideInLeft"
        key="main-image"
      />
    </div>
    <div class="content-container">
      <p class="text-black intro highlight-text pa-0" v-scroll-animation v-html="$t('worldWars.stories.story1.intro')" />
    </div>
    <div class="content-container">
      <div class="tm-20-cent" v-scroll-animation />    
    </div>
    <div class="content-container">
      <p class="text-black text mt-0" v-scroll-animation>{{ $t('worldWars.stories.story1.text-1') }}</p>
      <div class="half-half-container half-half-container--responsive">
        <div class="texts">
          <p class="mt-0" v-scroll-animation>{{ $t('worldWars.stories.story1.text-2') }}</p>
        </div>
        <div class="image-container">
          <div class="soldiers-going-to-war-1 avoid-clicks" v-scroll-animation />
          <span class="small-text"> Credit to: Associated Press</span>
        </div>
      </div>
    </div>
    <div class="content-container">
        <div class="half-half-container half-half-container--responsive">
          <div class="image-container">
            <div class="soldiers-going-to-war-2 avoid-clicks" v-scroll-animation />
            <span class="small-text">Credit to: Toronto Star</span>
          </div>
          <div class="texts">
            <p class="mt-0" v-scroll-animation>{{ $t('worldWars.stories.story1.text-3') }}</p>
            <p v-scroll-animation>{{ $t('worldWars.stories.story1.text-4') }}</p>
          </div>
        </div>
    </div>
    <div class="content-container">
      <p class="mt-0" v-scroll-animation>{{ $t('worldWars.stories.story1.text-5') }}</p>
      <p v-scroll-animation>{{ $t('worldWars.stories.story1.text-6') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="soldiers-fighting-2 avoid-clicks" v-scroll-animation />
        <div class="soldiers-fighting avoid-clicks" v-scroll-animation />
      </div>
    </div>
    <div class="content-container">
      <p class="highlight-text mt-0 pb-0 mb-0" v-scroll-animation>{{ $t('worldWars.stories.story1.text-7') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="munition-workers avoid-clicks" v-scroll-animation />
        <div class="texts">
          <p class="mt-0" v-scroll-animation>{{ $t('worldWars.stories.story1.text-8') }}</p>
          <p v-scroll-animation>{{ $t('worldWars.stories.story1.text-9') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <p class="highlight-text mt-0 pb-0 mb-0" v-scroll-animation>{{ $t('worldWars.stories.story1.text-10') }}</p>
      <p class="highlight-text pb-0 mb-0" v-scroll-animation>{{ $t('worldWars.stories.story1.text-11') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="image-container">
          <div class="union avoid-clicks" />
          <span class="small-text">Credit to: Scena 9</span>
        </div>
        <div class="texts">
          <p class="mt-0" v-scroll-animation>{{ $t('worldWars.stories.story1.text-12') }}</p>
          <p v-scroll-animation>{{ $t('worldWars.stories.story1.text-13') }}</p>
          <p v-scroll-animation>{{ $t('worldWars.stories.story1.text-14') }}</p>
          <p v-scroll-animation>{{ $t('worldWars.stories.story1.text-15') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="ro-army avoid-clicks" />
        <div class="texts">
          <p class="mt-0" v-scroll-animation>{{ $t('worldWars.stories.story1.text-16') }}</p>
          <p v-scroll-animation>{{ $t('worldWars.stories.story1.text-17') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="train-station" />
        <div class="texts">
          <p class="mt-0" v-scroll-animation>{{ $t('worldWars.stories.story1.text-18') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">   
      <div class="half-half-container half-half-container--responsive">
        <div class="ro-army-1 avoid-clicks" />
        <div class="ro-army-2 avoid-clicks" />
      </div>
    </div>
    <div class="content-container">   
      <p class="highlight-text mt-0 pb-0" v-scroll-animation>{{ $t('worldWars.stories.story1.text-19') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Story1'
}
</script>

<style lang="scss" scoped>
.intro-container {
  background-color: lighten($cyan, 10%);
}

.main-image {
  background: url('../../../assets/images/wwi_image-min.jpg') no-repeat bottom/cover;
}

.soldiers-going-to-war-1 {
  background: url('../../../assets/images/soldiers_going_to_war_1-min.jpg') no-repeat top/cover; 
  height: 60vh;
}

.soldiers-going-to-war-2 {
  background: url('../../../assets/images/soldiers_going_to_war-min.jpg') no-repeat top/cover; 
  height: 70vh;
}

.train-station {
  background: url('../../../assets/images/gara_01-min.jpg') no-repeat top/cover; 
  height: 50vh;
}

.tm-20-cent {
  background: url('../../../assets/images/tm_20_cent-min.jpg') no-repeat top/cover;
  height: 70vh;
}

.soldiers-fighting {
  background: url('../../../assets/images/soldiers_wwi-min.jpg') no-repeat top/cover;
  height: 70vh;
}

.soldiers-fighting-2 {
  background: url('../../../assets/images/soldiers_wwi_2-min.jpg') no-repeat top/cover;
  height: 70vh;
}

.munition-workers {
  background: url('../../../assets/images/munition_workers_2-min.jpg') no-repeat top/cover;
  height: 60vh;
}

.union {
  background: url('../../../assets/images/marea_unire-min.jpg') no-repeat center/cover;
  height: 80vh;
}

.ro-army {
  background: url('../../../assets/images/ro_army_entering_tm-min.jpg') no-repeat center/cover;
  height: 60vh;
}

.ro-army-1 {
  background: url('../../../assets/images/ro_army_entering_tm_2-min.jpg') no-repeat center/cover;
  height: 60vh;
}

.ro-army-2 {
  background: url('../../../assets/images/ro_army_entering_tm_3-min.jpg') no-repeat center/cover;
  height: 60vh;
}

</style>