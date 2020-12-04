<template>
  <period-overview
    :stories="stories"
    @open-story="openStory($event)"
  >
    <template #title-container>
      <div class="title-container">
        <div class="title">
          <div class="text-white animate__animated animate__slideInLeft">
            {{ $t('ah.title') }}
          </div>
        </div>
      </div>
    </template>
  </period-overview>
</template>

<script>
import PeriodOverview from '../generic/PeriodOverview.vue'

export default {
  name: 'AustroHabsburg',
  components: {
    periodOverview: PeriodOverview
  },
  data() {
    return {
      stories: [
        {
          title: this.$t('ah.stories.story1.title'),
          intro: this.$t('ah.stories.story1.intro'),
          path: 'story1'
        }, {
          title: this.$t('ah.stories.story2.title'),
          intro: this.$t('ah.stories.story2.intro'),
          path: 'story2'
        }
      ]
    }
  },
  methods: {
    openStory(event) {
      this.$router.push(`${this.$route.path}/${event}`)	
    }
  }
}
</script>

<style lang="scss" scoped>
.title-container {
  background-color: $coral;
}
</style>