<template>
  <div class="masonry" ref="container">
    <loader v-if="loading && !items.length" />
    <div
      class="photos-container"
      v-if="items.length"
    >
      <div
        v-for="(img, i) in items" :key="i"
        class="photo pointer"
        @click="onPhotoClick($event, i)"
      >
        <img 
          :src="`data:image/png;base64, ${img}`"
        />
        <modal :name="`image-${i}`">
          <img 
            :src="`data:image/png;base64, ${img}`"
          />
        </modal>
      </div>
    </div>
    <loader v-if="loading && items.length > 0" :width="computedWidth" />
  </div>
</template>

<script>
import Loader from './Loader'

export default {
  name: 'TmMasonry',
  components: {
    loader: Loader,
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      showPhotoModal: false
    }
  },
  computed: {
    computedWidth() {
      let width;
      if (this.items.length) {
        width = this.$refs.container.clientWidth;
      } else {
        width = window.innerWidth * 0.9;
      }
      return width;
    }
  },
  methods: {
    onPhotoClick(event, index) {
      this.$modal.show(`image-${index}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.masonry {
  display: block;
}

.photos-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  .photo {
    margin: 8px;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
}

@media(max-width: 960px) {
  .photos-container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media(max-width: 768px) {
  .photos-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media(max-width: 500px) {
  .photos-container {
    .photo {
      margin: 8px;
    }

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
  }
}
</style>
