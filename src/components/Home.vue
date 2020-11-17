<template>
  <div>
    <loader v-if="visible" key="loader" />
    <div class='home'>
    <div
      v-if="visible"
      class="background-image animate__animated animate__fadeInRight"
      key="image"
    />
    <div
      v-if="visible"
      class="title-container animate__animated animate__slideInLeft"
      key="title"
    >
      <h1 class="page-title">{{$t(`homePage.greeting`)}}</h1>
    </div>
    <div
      v-if="visible"
      class="cover"
      key="cover"
    />
    </div>
    <div class="opacity-screen" />
  </div>
</template>

<script>
import Loader from './generic/Loader.vue'

export default {
  name: 'Home',
  components: {
    loader: Loader
  },
  data() {
    return {
      visible: false,
    }
  },
  mounted() {
    window.setTimeout(() => {
      this.visible = true
    }, 2000)
  }
}
</script>

<style scoped lang='scss'>
.home {
  height: 100vh;
  background-color: transparent;
  display: grid;
  grid-template-columns: 3rem auto;
  grid-template-rows: 5% auto;
}

.background-image {
  height: 100vh;
  width: 100vw;
  background: url('../assets/images/modern-min.png') no-repeat center/cover;
  display: flex;
  align-items: center;
}

.title-container {
  z-index: 12;
  width: 25%;
  grid-column-start: 2;
  grid-row-start: 2;
  display: flex;
  align-items: center;
}

h1 {
  color: #fff;
  font-weight: 100;
  margin-block-start: 0;
}

.cover {
  position: absolute;
  top: 0;
  left: 2%;
  background-color: $cyan;
  transform: skew(-15deg);
  height: 100vh;
  width: 30rem;
  opacity: 0.8;
  z-index: 10;
}

.opacity-screen {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.1;
  background-color: #fff;
  height: 100vh;
  width: 100%;
  z-index: 1;
}

.animate__animated.animate__fadeIn {
  --animate-duration: 1s;
}

@media (max-width: 600px) {
  .cover {
    width: 20rem;
    height: 100vh;
  }
}

@media (max-width: 500px) {
  .home {
    grid-template-columns: 2rem auto;
  }
}

@media (max-width: 464px) {
  .cover {
    width: 14rem;
    height: 100vh;
  }
}
</style>
