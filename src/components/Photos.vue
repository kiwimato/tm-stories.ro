<template>
  <div>
    <div class="page-container">
      <div class="intro-container">
        <div class="photo-container">
          <div class="building-1" />
          <div class="building-3" /> 
        </div>
        <div class="intro-text">
          <h2 class="text-white page-title">
            {{ $t('menu.photos')}}
          </h2>
        </div>
        <div
          class="main-image animated avoid-clicks"
          key="main-image"
        />
      </div>
      <div class="content-container">
      <masonry
        :items="imgsArr"
        :loading="loading"
      />
    </div>
    </div>
  </div>
</template>

<script>
import urls from '../data/images.json'
import axios from 'axios';
import Masonry from './generic/Masonry'

export default {
  name: 'Photos',
  components: {
    masonry: Masonry
  },
  data() {
    return {
      imagesPerPage: 12,
      imgsArr: [],
      loading: false,
      page: 0,
      urls
    }
  },
  watch: {
    page(val) {
      this.getData(val);
    }
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
    this.getData(0);
    this.urls = urls;
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    async onScroll() {
     const scrolled = window.scrollY > 0;

      if (scrolled){
        if (this.imgsArr.length === urls.length) {
          return;
        } else {
          const numberOfPages = Math.round(this.urls.length / this.imagesPerPage);

          if (this.page < numberOfPages) {
            this.page = this.page + 1;
          } else {
            return;
          }
        }
      } else {
        return;
      }
    },
    async getData(page) {
      const promises = [];
      let startIndex = 0;
      this.loading = true;
      let response;

      if (page > 0) {
        startIndex = page * this.imagesPerPage;
      }
      let endIndex = (startIndex + this.imagesPerPage) - 1;
      if (endIndex > this.urls.length - 1) {
        endIndex = this.urls.length - 1
      }

      for(let i = startIndex; i <= endIndex; i++) {
        const request = axios.get(`${window.location.origin}${urls[i].url}`, {
          responseType: 'arraybuffer'
        })
        promises.push(request);
      }

      
      try {
        response = await Promise.all(promises);
        response.forEach((res) => {
          const image = Buffer.from(res.data, 'binary').toString('base64')
          this.imgsArr.push(image);
        })
      } catch(e) {
        console.error('There was an error', e);
        this.loading = false;
        return;
      }
      
      this.loading = false;
    },
  }
}
</script>

<style lang="scss" scoped>
.intro-container {
  background-color: lighten($gold, 10%);
}

.photo {
  width: 400px;
  height: 300px;
  margin: 12px;

  img {
    width: 400px;
    height: 300px;
  }
}

.photo-container {
  display: grid;
  grid-template-columns: 45% auto 45%;
  width: inherit;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 2;

  .building-1 {
    background: url('../assets/images/building_1.png') no-repeat top/contain;
    height: 100vh;
    opacity: 40%;
    grid-column-start: 1;
  }

  .building-2 {
    background: url('../assets/images/building_2.png') no-repeat top/contain;
    width: 40vw;
    height: 90vh;
    opacity: 40%;
  }

  .building-3 {
    background: url('../assets/images/building_3.png') no-repeat top/contain;
    height: 90vh;
    opacity: 40%;
    grid-column-start: 3;
  }
}
</style>