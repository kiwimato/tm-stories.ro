<template>
  <div>
    <loader 
      v-if="loading"
      key="loader"
      :height="computedHeight"
    />
    <div
      ref="home"
      class="home"
    >
    <div v-if="!loading">
      <img
        class="background-image"
        :src="`data:image/png;base64, ${mainImage}`"
      />
    </div>
    <div
      v-if="!loading"
      class="title-container animate__animated animate__slideInLeft"
    >
      <h1 class="hero-title">{{$t(`homePage.greeting`)}}</h1>
    </div>
    <div
      v-if="mainImage"
      class="cover"
    />
    </div>
    <div class="opacity-screen" />
  </div>
</template>

<script>
import Loader from './generic/Loader.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    loader: Loader
  },
  data() {
    return {
      loading: false,
      mainImage: null
    }
  },
  computed: {
    computedHeight() {
      return window.innerHeight * 0.9
    }
  },
  beforeMount() {
    window.setTimeout(() => this.getMainPhoto(), 500);
  },
  methods: {
    async getMainPhoto() {
      this.loading = true;
      let response;
      const request = axios.get(`${window.location.origin}/public-images/modern-min.png`, {
        responseType: 'arraybuffer'
      })
      
      try {
        response = await request;
        this.mainImage = Buffer.from(response.data, 'binary').toString('base64')
        this.loading = false;
      } catch(e) {
        console.error('There was an error', e);
        this.loading = false;
        return;
      }
      
      this.loading = false;
    }
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

.title-container {
  z-index: 12;
  width: 25%;
  grid-column-start: 2;
  grid-row-start: 2;
  display: flex;
  align-items: center;
}

.background-image {
  width: 100vw;
}

h1 {
  color: #fff;
  font-weight: 100;
  margin-block-start: 0;
}

.cover {
  position: fixed;
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

@media (max-width: 960px) {
  .home {
    grid-template-columns: 2rem auto;
  }
}

@media (max-width: 600px) {
  .cover {
    width: 20rem;
    height: 100vh;
  }
}

@media (max-width: 500px) {
  .home {
    grid-template-columns: 1rem auto;
  }
}

@media (max-width: 464px) {
  .cover {
    width: 15rem;
    height: 100vh;
  }
}
</style>
