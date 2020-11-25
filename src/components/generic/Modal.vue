<template>
  <div class="modal">
    <div 
      class="background"
      @click="close"
    >
      <div
        class="modal-card animate__animated"
        :class="[ zoomIn ? 'animate__zoomIn' : 'animate__zoomOut' ]"
      >
        <img
          class="image"
          :src="`data:image/png;base64, ${img}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TMModal',
  props: {
    img: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      zoomIn: true,
    }
  },
  methods: {
    close() {
      this.zoomIn = false;
      window.setTimeout(() => {
        this.$emit('close');
      }, 300);
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  background-color: black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 100%;
  height: auto;
}

.modal-fade-enter-active {
  animation: slide-in 1s;
}

.modal-fade-leave-active {
  animation: slide-in 1s reverse;
}

@keyframes slide-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>