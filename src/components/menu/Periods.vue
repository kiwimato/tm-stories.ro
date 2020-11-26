<template>
  <div class="periods-container">
    <div
      class="period-card img-1 avoid-clicks flex align-center justify-end text-black"
    >
      <div class="text-background" />
      <div class="period-text">
        {{ $t('antiquity.title') }}
      </div>
      <div class="white-stripe" />
    </div>
    <div
      class="period-card img-2 pointer flex align-center justify-end text-black"
      @click="$emit('open-page', 'medieval')"
    >
      <div class="text-background" />
      <div class="period-text">
        {{ $t('medieval.title') }}
      </div>
      <div class="white-stripe" />
    </div>
    <div
      class="period-card img-3 pointer flex align-center justify-end text-black"
      @click="$emit('open-page', 'otoman')"
    >
      <div class="text-background" />
      <div class="period-text">
        {{ $t('otoman.title') }}
      </div>
      <div class="white-stripe" />
    </div>
    <div
      class="period-card img-4 avoid-clicks flex align-center justify-end text-black"
    >
      <div class="text-background" />
      <div class="period-text">
        {{ $t('periods.habsburgic') }}
      </div>
      <div class="white-stripe" />
    </div>
    <div
      class="period-card img-5 avoid-clicks flex align-center justify-end text-black"
    >
       <div class="text-background" />
        <div class="period-text">
          {{ $t('periods.wars') }}
        </div>
        <div class="white-stripe" />
    </div>
    <div
      class="period-card img-6 avoid-clicks flex align-center justify-end text-black"
    >
      <div class="text-background" />
      <div class="period-text">
        {{ $t('periods.modern') }}
      </div>
      <div class="white-stripe" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Periods'
}
</script>

<style lang="scss" scoped>
.periods-container {
  display: grid;
  grid-auto-rows: 1fr;
}

.period-card {
  width: 100%;
  height: calc(100vh/6.6);
  margin-bottom: 12px;

  .text-background {
    position: absolute;
    width: 28%;
    height: calc(100vh/6.6);
    transform: skew(-15deg);
    margin-left: -24px;
    z-index: 30;
  }

  .white-stripe {
    position: absolute;
    width: 30%;
    height: calc(100vh/6.5);
    background-color: white;
    transform: skew(-15deg);
    margin-left: -24px;
    z-index: 10;
  }

  &:nth-of-type(2n) {
    .text-background, .white-stripe {
      transform: skew(15deg);
    }
  }

  &:nth-of-type(1) {
    .text-background {
      background-color: $coral;
    }
  }

  &:nth-of-type(2) {
    .text-background {
      background-color: #97a97f;
    }
  }

  &:nth-of-type(3) {
    .text-background {
      background-color: lighten($indigo, 20%);
    }
  }

  &:nth-of-type(4) {
    .text-background {
      background-color: darken($coral, 5%);
    }
  }

  &:nth-of-type(5) {
    .text-background {
      background-color: lighten($cyan, 10%);
    }
  }

  &:nth-of-type(6) {
    .text-background {
      background-color: $gold;
    }
  }
  
  .period-text {
    font-family: 'Avant Garde';
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 1.2px;
    z-index: 30;
    color: $black;
    width: 300px;
  }

  &:hover {
    background-size: 130%;
    transition: all 10s;
  }
}

.img-1 {
  background: url('../../assets/images/antichitate_min.png') no-repeat center/100%;
}

.img-2 {
  background: url('../../assets/images/middle-ages-knights.jpg') no-repeat center/100%;
}

.img-3 {
  background: url('../../assets/images/tm-otoman-min.jpg') no-repeat center/100%;
}

.img-4 {
  background: url('../../assets/images/habsburgic_min.png') no-repeat center/100%;
}

.img-5 {
  background: url('../../assets/images/world_wars_header.png') no-repeat 100% 10%;
}

.img-6 {
  background: url('../../assets/images/modern_header-min.png') no-repeat center/100%;
}

@media(max-width: 1280px) {
  .period-card {
    .period-text {
      font-size: 1.6rem;
    }
  }
}

@media(max-width: 960px) {
  .period-card {
    .text-background {
      width: 32%;
    }

    .white-stripe {
      width: 34%;
    }

    .period-text {
      font-size: 1.4rem;
      width: 250px;
    }
  }
}


@media(max-width: 768px) {
  .periods-container {
    padding: 0 1rem 0 1rem;
  }

  .period-card {
    height: calc(63vh/6.7);

    .text-background {
      height: calc(63vh/6.7);
      margin-left: -20px;
      width: 46%;
    }

    .white-stripe {
      height: calc(63vh/6.6);
      width: 49%;
    }

    .period-text {
      font-size: 1.2rem;
    }
  }
}

@media(max-width: 500px) {
  .periods-container {
    padding: 0 0.5rem 0 2.2rem;
  }

  .period-card {
    height: calc(60vh/6.7);
    .text-background {
      height: calc(60vh/6.7);
      width: 60%;
    }

    .white-stripe {
      height: calc(60vh/6.6);
      width: 64%;
    }

    .period-text {
      font-size: 1.1rem;
      width: 180px;
    }
  }
}
</style>