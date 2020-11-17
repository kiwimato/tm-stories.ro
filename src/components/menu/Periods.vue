<template>
  <div class="periods-container">
    <div
      class="period-card img-1 pointer flex align-end justify-center text-black"
    >
      <div class="text-background" />
      <div class="period-text flex align-center justify-center">
        {{ $t('periods.prehistoric') }}
      </div>
    </div>
    <div
      class="period-card img-2 pointer flex align-end justify-center text-black"
      @click="$emit('open-page', 'medieval')"
    >
      <div class="text-background" />
      <div class="period-text">
        {{ $t('medieval.title') }}
      </div>
    </div>
    <div
      class="period-card img-3 pointer flex align-end justify-center text-black"
      @click="$emit('open-page', 'otoman')"
    >
      <div class="text-background" />
      <div class="period-text">
        {{ $t('otoman.title') }}
      </div>
    </div>
    <div
      class="period-card img-4 avoid-clicks flex align-end justify-center text-black"
    >
      <div class="text-background" />
      <div class="period-text">
        {{ $t('periods.habsburgic') }}
      </div>
    </div>
    <div
      class="period-card img-5 avoid-clicks flex align-end justify-center text-black"
    >
       <div class="text-background" />
        <div class="period-text">
          {{ $t('periods.wars') }}
        </div>
    </div>
    <div
      class="period-card img-6 avoid-clicks flex align-end justify-center text-black"
    >
      <div class="text-background" />
      <div class="period-text">
        {{ $t('periods.modern') }}
      </div>
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
  height: calc(100vh/6);

  .text-background {
    position: absolute;
    width: 90%;
    height: 75px;
    background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,1) 100%);
  }
  
  .period-text {
    font-family: 'Yeseva One';
    font-size: 2rem;
    font-weight: 600;
    z-index: 30;
    margin-bottom: 12px;
    color: $black;
  }

  &:hover {
    background-size: 130%;
    transition: all 10s;
  }
}

.img-1 {
  background: url('../../assets/images/preistorie_2_min.jpg') no-repeat top/100%;
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
  background: url('../../assets/images/tm_interbelica_2.png') no-repeat top/100%;
}

.img-6 {
  background: url('../../assets/images/modern_thumbnail.png') no-repeat center/100%;
}

@media(max-width: 1280px) {
  .period-card {
    .text-background {
      width: 95%;
    }
  }
}

@media(max-width: 960px) {
  .period-card {
    .period-text {
      font-size: 1.8rem;
    }
  }
}


@media(max-width: 768px) {
  .periods-container {
    padding: 0 2rem 0 1rem;
  }

  .period-card {
    height: calc(60vh/6);
    text-align: center;

    .text-background {
      height: calc(60vh/6);
      background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,1) 100%);
    }

    .period-text {
      margin-bottom: 4px;
      font-size: 1.6rem;
    }
  }
}

@media(max-width: 500px) {
  .periods-container {
    padding: 0 1rem;
  }

  .period-card {
    .period-text {
      font-size: 1.4rem;
    }
  }
}
</style>