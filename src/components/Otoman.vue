<template>
  <div class="page-container">
    <div class="intro-container">
      <div class="intro-text">
        <h2 class="text-white page-title animate__animated animate__slideInLeft">
          {{ $t('otoman.title')}}
        </h2>
      </div>
      <div 
        class="main-image animated animate__animated animate__slideInRight"
        key="main-image"
      />   
    </div>
    <div class="content-container">
      <h4 class="text-black intro highlight-text" v-scroll-animation>{{ $t('otoman.intro') }}</h4>
    </div>
    <div class="content-container">
      <div class="three-thirds-container three-thirds-container--big-photo three-thirds-container--responsive">
        <div class="text flex align-center justify-center">
          <p class="text-black" v-scroll-animation>{{ $t('otoman.text-1') }}</p>
        </div>
        <div class="istambul" />
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="mosque" v-scroll-animation />
        <div class="texts flex flex-column justify-center">
          <p class="text-black" v-scroll-animation>{{ $t('otoman.text-2') }}</p>
          <p class="text-black text" v-scroll-animation>{{ $t('otoman.text-3') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="three-thirds-container three-thirds-container--responsive">
        <div class="tm-siege-1" v-scroll-animation/>
        <div class="texts flex align-center">
          <p class="text-black text highlight-text" v-scroll-animation>{{ $t('otoman.text-4') }}</p>
        </div>
        <div class="tm-siege-2" v-scroll-animation />
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="texts-left">
          <p class="text-black text" v-scroll-animation>{{ $t('otoman.text-5') }}</p>
          <p class="text-black text" v-scroll-animation>{{ $t('otoman.text-6') }}</p>
        </div>
        <div class="texts-right">
          <p class="text-black text" v-scroll-animation>{{ $t('otoman.text-7') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="three-thirds-container three-thirds-container--responsive">
        <div class="tm-siege-3" v-scroll-animation />
        <div class="tm-siege-4" v-scroll-animation />
        <div class="text flex align-center">
          <p class="text-black" v-scroll-animation>{{ $t('otoman.text-8') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <p class="text-black text" v-scroll-animation>{{ $t('otoman.text-9') }}</p>
      <h4 class="text-black highlight-text mt-4" v-scroll-animation>{{ $t('otoman.text-10') }}</h4>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="texts flex flex-column justify-center">
          <p class="text-black" v-scroll-animation>{{ $t('otoman.text-11') }}</p>
          <p class="text-black" v-scroll-animation>{{ $t('otoman.text-12') }}</p>
        </div>
        <div class="otoman-tm" v-scroll-animation />
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="coffee" v-scroll-animation />
        <div class="texts">
          <p class="text-black" v-scroll-animation>{{ $t('otoman.text-13') }}</p>
          <p class="text-black mb-2" v-scroll-animation>{{ $t('otoman.text-14') }}</p>
          <div class="bazar" v-scroll-animation />
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="half-half-container half-half-container--responsive">
        <div class="turkish-food" v-scroll-animation />
        <div class="texts flex flex-column justify-center">
          <h4 class="text-black highlight-text" v-scroll-animation>{{ $t('otoman.text-15') }}</h4>
          <p class="text-black" v-scroll-animation>{{ $t('otoman.text-16') }}</p>
          <p class="text-black" v-scroll-animation>{{ $t('otoman.text-17') }}</p>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div>
        <div class="texts flex flex-column justify-center">
          <h4 class="text-black highlight-text" v-scroll-animation>{{ $t('otoman.text-19') }}</h4>
          <div class="clothes" v-scroll-animation />
          <div class="half-half-container half-half-container--responsive">
            <div class="text-left">
              <p class="text-black" v-scroll-animation>{{ $t('otoman.text-20') }}</p>
            </div>
            <div class="text-right">
              <p class="text-black" v-scroll-animation>{{ $t('otoman.text-21') }}</p>
              <p class="text-black" v-scroll-animation>{{ $t('otoman.text-22') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-container">
      <p class="text-black author">{{ $t('otoman.text-23') }}</p>
    </div>
    <div class="content-container">
      <video controls width="100%" v-scroll-animation>
        <source src="https://tmstories.fra1.cdn.digitaloceanspaces.com/media/ottoman.mp4" type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Otoman'
}
</script>

<style scoped lang="scss">
.main-image {
  background: url('../assets/images/tm-otoman-min.jpg') no-repeat top/cover;
}

.intro-container {
  background-color: $cornflower;
}

.istambul {
  background: url('../assets/images/sultan_palace-min.jpg') no-repeat top/cover; 
  height: 45vh;
}

.mosque {
  background: url('../assets/images/mosque.png') no-repeat top/contain; 
  height: 45vh;
}

.tm-siege-1 {
  background: url('../assets/images/siege_of_tm_1-min.jpg') no-repeat top/cover; 
  height: 75vh;
}

.tm-siege-2 {
  background: url('../assets/images/siege_of_tm_2-min.jpg') no-repeat top/cover; 
  height: 75vh;
}

.tm-siege-3 {
  background: url('../assets/images/siege_of_tm_3-min.jpg') no-repeat top/cover; 
  height: 100%;
}

.tm-siege-4 {
  background: url('../assets/images/siege_of_tm_4-min.jpg') no-repeat top/cover; 
  height: 100%;
}

.otoman-tm {
  background: url('../assets/images/tm_otomans_2-min.jpg') no-repeat top/cover; 
  height: 100%;
}

.bazar {
  background: url('../assets/images/bazar_hist.jpg') no-repeat top/cover; 
  height: 70vh;
}

.coffee {
  background: url('../assets/images/cafenea-min.jpg') no-repeat top/contain; 
  height: 100%;
}

.turkish-food {
  background: url('../assets/images/turkish-food.jpg') no-repeat top/cover; 
  height: 100%;
}

.clothes {
  background: url('../assets/images/hungarian_clothing.jpeg') no-repeat top/cover; 
  height: 80vh;
}

.author {
  font-style: italic;
}

.before-enter {
  opacity: 0;
  transition: 1s all ease-out;
  transform: translateY(100px);
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}

@media (max-width: 1280px) {
  .tm-siege-1 {
    height: 100%;
  }

  .tm-siege-2 {
    height: 100%;
  }
}

@media (max-width: 768px) {
  .istambul {
    height: 40vh;
  }
  
  .coffee {
    height: 80vh;
  }

  .tm-siege-1 {
    height: 100vh;
  }

  .tm-siege-2 {
    height: 100vh;
  }

  .tm-siege-3 {
    height: 80vh;
    margin-bottom: 2rem;
  }

  .tm-siege-4 {
    height: 80vh;
  }

  .otoman-tm {
    height: 50vh;
  }

  .turkish-food {
    height: 50vh;
  }

  .clothes {
    height: 70vh;
  }

  .highlight-text {
    margin-top: 2rem;
    padding-bottom: 1rem;

    &.intro {
      margin-top: 0;
    }
  }
}

@media (max-width: 500px) {
  .mosque {
    height: 35vh;
  }
}
</style>