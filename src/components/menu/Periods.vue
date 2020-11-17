<template>
  <div class="periods-container flex align-start">
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
      class="period-card img-5 avoid-clicks flex align-center justify-center text-black"
    />
    <div
      class="period-card img-6 avoid-clicks flex align-center justify-center text-black"
    />
  </div>
</template>

<script>
export default {
  name: 'Periods'
}
</script>

<style lang="scss" scoped>
.periods-container {
  flex-wrap: wrap;
  justify-content: space-around;
}

.period-card {
  width: 300px;
  height: 200px;
  margin: 8px;

  .text-background {
    position: absolute;
    width: 300px;
    height: 75px;
    background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,1) 100%);
  }
  
  .period-text {
    font-family: 'Yeseva One';
    font-size: 1.6rem;
    font-weight: 600;
    z-index: 30;
    margin-bottom: 12px;
  }
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
  background: url('../../assets/images/habsburgic_thumbnail.png') no-repeat top/cover;
}

.img-5 {
  background: url('../../assets/images/stampa_tm_1_thumbnail.jpg') no-repeat center/cover;
}

.img-6 {
  background: url('../../assets/images/stampa_tm_4_thumbnail.jpg') no-repeat center/cover;
}

@media(max-width: 1280px) {
  .periods-container {
    padding: 2.2rem 0 0 0;
  }

  .period-card {
    width: 280px;
    height: 180px;

    .text-background {
      width: 280px;
    }
  }
}


@media(max-width: 960px) {
  .periods-container {
    padding: 1rem 0 0 0;
  }

  .period-card {
    width: 220px;
    height: 140px;
    margin: 8px;

    .text-background {
      height: 70px;
      width: 220px;
    }

    .period-text {
      font-size: 1.3rem;
    }
  }
}

@media(max-width: 768px) {
  .periods-container {
    padding: 0 1rem;
    justify-content: space-between;
  }

  .period-card {
    width: 180px;
    height: 100px;
    margin: 4px 8px 4px 0;

    .text-background {
      height: 50px;
      width: 180px;
    }

    .period-text {
      font-size: 1.1rem;
      margin-bottom: 8px;
    }
  }
}

@media(max-width: 500px) {
  .periods-container {
    padding: 0;
    justify-content: space-around;
  }

  .period-card {
    width: 150px;
    height: 100px;
    margin: 8px 4px;

    .text-background {
      height: 60px;
      width: 150px;
    }

    .period-text {
      font-size: 0.95rem;
    }
  }
}

@media(max-width: 500px) {
  .periods-container {
    padding: 0;
    justify-content: space-around;
  }

  .period-card {
    width: 140px;
    height: 90px;
    margin: 8px 4px;

    .text-background {
      height: 50px;
      width: 140px;
    }

    .period-text {
      font-size: 0.8rem;
    }
  }
}
</style>