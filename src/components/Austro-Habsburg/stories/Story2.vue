<template>
  <div class='page-container'>
    <div class="intro-container">
      <div class="intro-text">
        <h2 class="text-white page-title animate__animated animate__slideInLeft">
          {{ $t('ah.stories.story2.title')}}
        </h2>
      </div>
      <div 
        class="main-image animated avoid-clicks animate__animated animate__slideInRight"
        key="main-image"
      />
    </div>
    <div class="content-container">
      <p class="highlight-text" v-scroll-animation>{{ $t('ah.stories.story2.intro') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="image-container" v-scroll-animation>
          <div class="tm-siege" />
          <span class="small-text">{{ $t('ah.stories.story2.image-1') }}</span>
          <br />
          <span class="small-text">{{ $t('ah.stories.story2.image-1-source') }}</span>
        </div>
        <div class="texts" v-scroll-animation>
          <p>{{ $t('ah.stories.story2.text-1') }}</p>
          <p>{{ $t('ah.stories.story2.text-2') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="texts" v-scroll-animation>
          <p>{{ $t('ah.stories.story2.text-3') }}</p>
        </div>
        <div class="image-container" v-scroll-animation>
          <div class="turks-defeat" />
          <span class="small-text">{{ $t('ah.stories.story2.image-2') }}</span>
        </div> 
      </div>
    </div>
    <div class="content-container">
      <p class="highlight-text" v-scroll-animation>{{ $t('ah.stories.story2.text-4') }}</p>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="texts" v-scroll-animation>
          <p>{{ $t('ah.stories.story2.text-5') }}</p>
          <p>{{ $t('ah.stories.story2.text-6') }}</p>
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
      <div class="half-half-container half-half-container--responsive">
        <div class="image-container" v-scroll-animation>
          <div class="tailor" />
          <span class="small-text">{{ $t('ah.stories.story2.image-3') }}</span>
          <br />
          <span class="small-text">{{ $t('ah.stories.story2.image-3-source') }}</span>
        </div>
        <div class="texts" v-scroll-animation>
          <p>{{ $t('ah.stories.story2.text-7') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="texts">
          <p v-scroll-animation>{{ $t('ah.stories.story2.text-8') }}</p>
          <p v-scroll-animation>{{ $t('ah.stories.story2.text-9') }}</p>
        </div>
        <div class="image-container" v-scroll-animation>
          <div class="joseph-2" />
          <span class="small-text">{{ $t('ah.stories.story2.image-4') }}</span>
          <br />
          <span class="small-text">{{ $t('ah.stories.story2.image-4-source') }}</span>
        </div>
      </div>
    </div>
    <div class="content-container">
      <video controls width="100%" v-scroll-animation>
        <source src="../../../assets/videos/timisoara.mp4" type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
      </video>
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
  background: url('../../../assets/images/perioada_habsburgica-min.png') no-repeat center/cover;
}

.intro-container {
  background-color: darken($coral, 5%);
}

.tm-siege {
  background: url('../../../assets/images/atacul_austriac-min.png') no-repeat top/cover;
  height: 70vh;
}

.turks-defeat {
  background: url('../../../assets/images/capitulare-turci-eugeniu-de-savoya.jpg') no-repeat top/cover;
  height: 60vh;
}

.bastion {
  background: url('../../../assets/images/bastion.jpg') no-repeat top/cover;
  height: 60vh;
}

.tailor {
  background: url('../../../assets/images/tailor-18th-cent-min.jpg') no-repeat top/cover;
  height: 60vh;
}

.joseph-2 {
  background: url('../../../assets/images/joseph_2.jpg') no-repeat top/cover;
  height: 70vh;
}
</style>