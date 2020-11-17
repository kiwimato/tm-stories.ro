<template>
  <div class="menu">
    <div class="utilities">
      <div class="useful-links flex align-start space-between">
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
      <social-links />
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
    <periods
      class="periods"
      @open-page="$emit('open-page', $event)"
    />
  </div>
</template>

<script>
import LanguageSelect from '../generic/LanguageSelect.vue'
import Periods from './Periods.vue'
import SocialLinks from './SocialLinks.vue'

export default {
  name: 'Menu',
  components: {
    languageSelect: LanguageSelect,
    periods: Periods,
    socialLinks: SocialLinks
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
  display: grid;
  grid-template-columns: 1.5rem 30% 50% auto 1.5rem;
  grid-template-rows: 10% 50% auto 10%;
}

.utilities {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 2.2rem 0 0 2rem;
  grid-row-start: 2;
  grid-column-start: 2;
}

.periods {
  grid-row-start: 1;
  grid-column-start: 3;
}

.email, .social-media-links, .language-select {
  margin-top: 2rem;
  font-size: 1.2rem;
}

.link {
  padding-right: 1.5rem;
  font-size: 1.2rem;
}

.link, .email, .language-select {
  &:hover {
    color: $deep-blush;
  }
}

.language-select {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.cjt {
  position: absolute;
  bottom: 2rem;
  left: 3rem;
  grid-row-start: 4;
}

.cjt-text {
  font-size: 1rem;
  width: 15rem;
  line-height: 1.8;
  font-weight: 500;
}

.cjt-logo {
  background: url('../../assets/images/cjt.jpg') no-repeat top/cover;
  width: 2.4rem;
  height: 2.8rem;
}

@media(max-width: 1280px) {
  .menu {
    grid-template-columns: 1.5rem 30% auto 1.5rem;
    grid-template-rows: 10% auto 10%;
  }
}

@media (max-width: 960px) {
  .utilities {
    padding: 1rem 0.5rem 0 1rem;
  }

  .cjt {
    left: 1.8rem;
  }
}

@media (max-width: 768px) {
  .cjt {
    bottom: 1rem;
    left: 2rem;
  }

  .utilities {
    padding: 1rem 0.5rem 0 1rem;
  }

  .email, .social-media-links, .language-select {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  .menu {
    grid-template-columns: 1.5rem auto 1.5rem;
    grid-template-rows: 10% 30% 40% 10%;
  }

  .periods {
    grid-row-start: 3;
    grid-column-start: 2;
  }
}
</style>