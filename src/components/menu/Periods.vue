<template>
  <div
    ref="periods"
    class="periods-container"
  >
    <div
      class="period-card img-1 pointer flex align-center text-black"
      @click="$emit('open-page', 'antiquity')"
    >
      <div class="text-background" />
      <div class="period-text">
        {{ $t('antiquity.title') }}
      </div>
      <div class="white-stripe" />
    </div>
    <div
      class="period-card img-2 pointer flex align-center text-black"
      @click="$emit('open-page', 'medieval')"
    >
      <div class="text-background" />
      <div class="period-text">
        {{ $t('medieval.title') }}
      </div>
      <div class="white-stripe" />
    </div>
    <div
      class="period-card img-3 pointer flex align-center text-black"
      @click="$emit('open-page', 'otoman')"
    >
      <div class="text-background" />
      <div class="period-text">
        {{ $t('otoman.title') }}
      </div>
      <div class="white-stripe" />
    </div>
    <div
      class="period-card img-4 pointer flex align-center text-black"
      @click="$emit('open-page', 'austro-habsburg')"
    >
      <div class="text-background" />
      <div class="period-text">
        {{ $t('ah.title') }}
      </div>
      <div class="white-stripe" />
    </div>
    <div
      class="period-card img-5 pointer flex align-center text-black"
      @click="$emit('open-page', 'world-wars')"
    >
       <div class="text-background" />
        <div class="period-text">
          {{ $t('periods.wars') }}
        </div>
        <div class="white-stripe" />
    </div>
    <div
      class="period-card img-6 avoid-clicks flex align-center text-black"
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

    .period-text {
      color: darken($coral, 40%);
    }
  }

  &:nth-of-type(2) {
    .text-background {
      background-color: #97a97f;
    }

    .period-text {
      color: darken(#97a97f, 30%);
    }
  }

  &:nth-of-type(3) {
    .text-background {
      background-color: lighten($indigo, 20%);
    }

    .period-text {
      color: darken($indigo, 20%);
    }
  }

  &:nth-of-type(4) {
    .text-background {
      background-color: darken($coral, 5%);
    }

    .period-text {
      color: darken($coral, 42%);
    }
  }

  &:nth-of-type(5) {
    .text-background {
      background-color: lighten($cyan, 10%);
    }

    .period-text {
      color: darken($cyan, 32%);
    }
  }

  &:nth-of-type(6) {
    .text-background {
      background-color: $gold;
    }

    .period-text {
      color: darken($gold, 35%);
    }
  }
  
  .period-text {
    font-family: 'YesevaOne_Regular';
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1.2px;
    z-index: 30;
    width: 340px;
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
  background: url('../../assets/images/world_wars_header_2.png') no-repeat 180px 30%;
}

.img-6 {
  background: url('../../assets/images/modern_header-min.png') no-repeat center/100%;
}

@media(max-width: 1280px) {
  .period-card {
    .text-background {
      width: 34%;
    }

    .white-stripe {
      width: 36%;
    }

    .period-text {
      font-size: 1.6rem;
    }
  }
}

@media(max-width: 960px) {
  .period-card {
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
      width: 53%;
    }

    .white-stripe {
      height: calc(63vh/6.6);
      width: 56%;
    }

    .period-text {
      font-size: 1.4rem;
    }
  }
}

@media(max-width: 600px) {
  .periods-container {
    padding: 0 0.5rem 0 2.2rem;
  }

  .period-card {
    height: calc(60vh/6.7);
    .text-background {
      height: calc(60vh/6.7);
      width: 63%;
    }

    .white-stripe {
      height: calc(60vh/6.6);
      width: 67%;
    }

    .period-text {
      font-size: 1.2rem;
    }
  }
}

@media(max-width: 400px) {
  .period-card {
    height: calc(60vh/6.7);
    .text-background {
      height: calc(60vh/6.7);
      width: 86%;
    }

    .white-stripe {
      height: calc(60vh/6.6);
      width: 90%;
    }

    .period-text {
      font-size: 1.1rem;
      width: 250px;
    }
  }
}
</style>