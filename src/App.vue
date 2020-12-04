<template>
  <div id="app">
    <hamburger-menu
      :open-menu="openMenu"
      @menu="openMenu = $event"
    />
    <router-view />
    <transition name="slide-down">
      <tm-menu
        v-if="openMenu === true"
        @open-page="onOpenPage($event)"
      />
    </transition>
  </div>
</template>

<script>
import Menu from './components/menu/Menu'
import HamburgerMenu from './components/generic/HamburgerMenu.vue'

export default {
  name: 'App',
  components: {
    hamburgerMenu: HamburgerMenu,
    tmMenu: Menu
  },
  data() {
    return {
      openMenu: false,
    }
  },
  computed: {
    documentTitle() {
      return this.$t(this.$route.meta.title);
    }
  },
  watch: {
    openMenu(val) {
      const body = document.body;
      if (val === true) {
        body.classList.add('no-scroll')
      } else {
        body.classList.remove('no-scroll')
      }
    }
  },
  methods: {
    onOpenPage(event) {
      this.openMenu = false;
      this.$router.push({ name: event });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "OpenSans-Regular", Helvetica, sans-serif;
  font-size: 16px;
  color: $black;
  overflow: hidden;
}

.hero-title {
  font-family: 'YesevaOne-Regular', 'Tahoma', sans-serif;
  font-size: 10rem;
}

.container {
  max-width: 100% !important;
  padding: 0 !important;
}

.slide-down-enter-active {
  animation: new-animation .5s linear;
}
.slide-down-leave-active {
  animation: new-animation .5s linear reverse;
}

@keyframes new-animation {
  0% {
    height: 0;
    top: -400px;
  }

  50% {
    height: 50vh;
    top: -200px;
  }

  100% {
    height: 100vh;
    top: 0;
  }
}
</style>
