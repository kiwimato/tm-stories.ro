<template>
  <div 
    class="loader"
    :style="computedStyle"
  >
    <div class="animation" />
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    width: {
      type: Number
    },
    height: {
      type: Number,
      default: 200
    }
  },
  computed: {
    computedStyle() {   
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      };
    }
  }
}
</script>

<style scoped class="scss">
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}

.animation {
  background: url('../../assets/images/loader_1.gif') no-repeat center/70%;
  height: 200px;
  width: 200px;
}
</style>