<template>
  <div class="menu">
    <div class="utilities">
      <div class="useful-links flex">
        <div
          v-for="link in links"
          :key="link.value"
          class="link medium-text pointer"
          @click="$emit('open-page', link.value)"
        >
          {{ link.text }}
        </div>
      </div>
      <div 
        class="medium-text email pointer"
        href="mailto:povestiri@tmstories.ro"
      >
        povestiri@tmstories.ro
      </div>
      <div class="social-media-links flex">
        <a 
          href="https://www.facebook.com/Povestirile-Timi%C8%99oarei-TmStories-103965398155024"
          target="_blank"
        >
          <font-awesome-icon 
            :icon="['fab', 'facebook']"
            size="lg"
            class="pr-2 pointer"
          />
        </a>
        <a
          href="https://www.instagram.com/povestirile_timisoarei"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            size="lg"
            class="pointer"
          />
        </a>
      </div>
       <div class="language-select">
        <language-select />
      </div>
      <div class="cjt flex align-center justify-end">
        <div class="cjt-logo mr-2" />
          <div class="cjt-text">
            <div>{{ $t('about.financed') }}</div>
            <div class="uppercase">Consiliul Judeţean Timiş</div>
          </div>
        </div>
      </div>
    <slide-show
      @open-page="$emit('open-page', $event)"
    />
  </div>
</template>

<script>
import LanguageSelect from './generic/LanguageSelect.vue'
import SlideShow from './generic/SlideShow'

export default {
  name: 'Menu',
  components: {
    languageSelect: LanguageSelect,
    slideShow: SlideShow
  },
  computed: {
    links() {
      return [
        {
          text: this.$t('menu.home'),
          value: 'home'
        }, {
          text: this.$t('menu.about'),
          value: 'about'
        }
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.menu {
  height: 100%;
  width: 100%;
  z-index: 20;
  background-color: white;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}

.utilities {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 2.2rem 3rem 0 2rem;
}

.email, .social-media-links, .language-select {
  margin-top: 2rem;
  font-size: 1.2rem;
}

.link {
  padding-right: 1.5rem;
  font-size: 1.2rem;

  &:last-of-type {
    padding-right: 0;
  }
}

.link, .email, .language-select {
  &:hover {
    color: $deep-blush;
  }
}

.language-select {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 0.7rem;
}

.cjt {
  position: absolute;
  bottom: 2rem;
  left: 3rem;
}

.cjt-text {
  font-size: 1rem;
  width: 15rem;
  line-height: 1.8;
  font-weight: 500;
}

.cjt-logo {
  background: url('../assets/images/cjt.jpg') no-repeat top/cover;
  width: 2.1rem;
  height: 2.6rem;
}

@media (max-width: 768px) {
  .utilities {
    align-items: flex-start;
    justify-content: space-between;
    padding: 6rem 0 0 3.5rem;
  }

  .useful-links {
    flex-direction: column;
  }

  .email, .social-media-links, .language-select {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .link {
    padding-right: 0;
    padding-bottom: 1rem;
    font-size: 1.2rem;
  }
}

@media (max-width: 500px) {
  .utilities {
    align-items: flex-start;
    padding: 6rem 0 0 2rem;
  }

  .useful-links {
    flex-direction: column;
  }

  .cjt {
    left: 2rem;
  }
}
</style>