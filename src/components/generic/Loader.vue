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
    }
  },
  computed: {
    computedStyle() {   
      return {
        width: `${this.width}px`, 
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
  height: 100%;
}

.animation {
  background: url('../../assets/images/loader.gif') no-repeat center/cover;
  height: 200px;
  width: 200px;
}
</style>