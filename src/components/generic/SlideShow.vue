<template>
  <div class="slider">
    <div
      class="slider-row"
    >
      <div class="slider-image img-1 avoid-clicks" />
      <div
        class="slider-image img-2 pointer flex align-center justify-center text-white"
        @click="$emit('open-page', 'medieval')"
      >
        {{ $t('medieval.title') }}
      </div>
      <div 
        class="slider-image img-3 pointer flex align-center justify-center text-white"
        @click="$emit('open-page', 'otoman')"
      >
        {{ $t('otoman.title') }}
      </div>
      <div class="slider-image img-4 avoid-clicks" />
      <div class="slider-image img-5 avoid-clicks" />
      <div class="slider-image img-6 avoid-clicks" />
      <div class="slider-image img-7 avoid-clicks" />
      <div class="slider-image img-8 avoid-clicks" />
      <div class="slider-image img-1 avoid-clicks" />
      <div
        class="slider-image img-2 pointer flex align-center justify-center text-white"
        @click="$emit('open-page', 'medieval')"
      >
        {{ $t('medieval.title') }}
      </div>
      <div 
        class="slider-image img-3 pointer flex align-center justify-center text-white"
        @click="$emit('open-page', 'otoman')"
      >
        {{ $t('otoman.title') }}
      </div>
      <div class="slider-image img-4 avoid-clicks" />
      <div class="slider-image img-5 avoid-clicks" />
      <div class="slider-image img-6 avoid-clicks" />
      <div class="slider-image img-7 avoid-clicks" />
      <div class="slider-image img-8 avoid-clicks" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideShow'
}
</script>

<style lang="scss" scoped>
$img-w: 300px;
$img-h: 389px;
$shrink: 2;
$ratio: 1 / $shrink;
$speed: 30s;

.slider {
  position: absolute;
  width: 100vw;
  top: calc(65% - #{$img-h * $ratio / 2});
  overflow: hidden;
  margin: auto;

  .slider-row {
    width: calc(300px * 16);
    height: $img-h * $ratio;
    display: flex;
    animation: slide 30s linear infinite;

    .slider-image {
      width: 300px;
      height: 200px;
      font-family: 'Yeseva One';
      font-size: 1.6rem;
      font-weight: 600;

      &:hover {
        transition: all 1s cubic-bezier(.77,0,.175,1);
        transform: scale(1.1);
      }
    }

    &:hover {
      -webkit-animation-play-state: paused;
      -moz-animation-play-state: paused;
      -o-animation-play-state: paused;
      animation-play-state: paused;
    }

    .img-1 {
      background: url('../../assets/images/preistorie_thumbnail.jpg') no-repeat center/cover;
    }

    .img-2 {
      background: url('../../assets/images/medieval_thumbnail.jpg') no-repeat center/cover;
    }

    .img-3 {
      background: url('../../assets/images/otoman_thumbnail.jpg') no-repeat center/cover;
    }

    .img-4 {
      background: url('../../assets/images/stampa_tm_1_thumbnail.jpg') no-repeat center/cover;
    }

    .img-5 {
      background: url('../../assets/images/stampa_tm_2_thumbnail.jpg') no-repeat center/cover;
    }

    .img-6 {
      background: url('../../assets/images/stampa_tm_3_thumbnail.jpg') no-repeat center/cover;
    }

    .img-7 {
      background: url('../../assets/images/stampa_tm_4_thumbnail.jpg') no-repeat center/cover;
    }

    .img-8 {
      background: url('../../assets/images/stampa_tm_5_thumbnail.jpg') no-repeat center/cover;
    }
  }
}

// .slider-alt {
//   position: absolute;
//   width: 90vw;
//   top: 35vh;
//   margin: 2rem 3rem;

//   .slider-row-alt {
//     height: 200px;
//     width: 400px;
//     cursor: pointer;
//     display: flex;

//     .slider-image {
//       width: 45vw;
//       margin-right: 2rem;

//       &:last-of-type {
//         margin-right: 0;
//       }

//       &:hover {
//         transition: all 1s cubic-bezier(.77,0,.175,1);
//         transform: scale(1.1);
//       }
//     }

//     .img-2 {
//       background: url('../../assets/images/medieval_thumbnail.jpg') no-repeat center/cover;
//     }

//      .img-3 {
//       background: url('../../assets/images/otoman_thumbnail.jpg') no-repeat center/cover;
//     }
//   }
// }

@keyframes slide {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  100% {
    -webkit-transform: translateX(calc(-300px * 8));
    transform: translateX(calc(-300px * 8));
  }
}
</style>