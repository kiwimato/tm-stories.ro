<template>
  <div class="menu">
    <div class="utilities">
      <div class="left-side">
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
      </div>
      <div class="right-side">
        <social-links class="social-media-links" />
        <div class="language-select">
          <language-select />
        </div>
      </div>
    </div>
    <periods
      class="periods"
      @open-page="$emit('open-page', $event)"
    />
    <div class="cjt flex align-center justify-end">
      <div class="cjt-logo mr-1" />
      <div class="cjt-text">
        <div>{{ $t('about.financed') }}</div>
        <div class="uppercase">Consiliul Judeţean Timiş</div>
      </div>
    </div>
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
        }, {
          text: this.$t('menu.photos'),
          value: 'photos'
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
  grid-template-columns: 1.5rem 400px auto;
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

.useful-links, .email, .social-media-links, .language-select {
  margin-bottom: 2rem;
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
    grid-template-rows: 10% auto 10%;
  }
}

@media (max-width: 960px) {
  .menu {
    grid-template-columns: 1.5rem 350px auto;;
  }

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
    padding: 1rem 1rem 0 1rem;
    flex-direction: row;
    justify-content: space-between;

    .left-side {
      width: 60%;
    }

    .right-side {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: flex-end;
    }
  }

  .useful-links, .email, .social-media-links, .language-select {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .language-select {
    margin-right: 14px;
  }

  .email {
    line-height: 32px;
  }

  .menu {
    grid-template-columns: 1.5rem auto;
    grid-template-rows: 10% 15% 55% 10%;
  }

  .periods {
    grid-row-start: 3;
    grid-column-start: 2;
  }
}

@media (max-width: 500px) {
  .menu {
    grid-template-columns: 0.5rem auto 0.5rem;
    grid-template-rows: 10% 15% 55% 10%;
  }

  .cjt {
    left: 1rem;
  }

  .utilities {
    justify-content: flex-start;
    flex-direction: column;
    padding: 0 1rem;
    
    .left-side {
      width: 100%;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .right-side {
      width: 100%;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }

  .link, .email, .language-select {
    font-size: 1rem;
  }

  .language-select {
    position: absolute;
    top: 1.3rem;
    right: 1rem;
  }

  .email {
    line-height: 1;
  }

  .useful-links, .email, .social-media-links {
    margin-bottom: 1rem;
  }

  .link {
    padding-right: 1.1rem;
  }

  .cjt-text {
    font-size: 0.8rem;
  }
}

@media (max-width: 400px) {
  .utilities {
    justify-content: space-between;

    .left-side {
      width: 70%;
    }

    .right-side {
      width: 30%;
    }
  }
}
</style>