<template>
  <period-overview
    :stories="stories"
    @open-story="openStory($event)"
  >
    <template #title-container>
      <div class="title-container">
        <div class="title">
          <h2 class="text-white animate__animated animate__slideInLeft">
            {{ $t('worldWars.title') }}
          </h2>
        </div>
      </div>
    </template>
  </period-overview>
</template>

<script>
import PeriodOverview from '../generic/PeriodOverview.vue'

export default {
  name: 'WorldWars',
  components: {
    periodOverview: PeriodOverview
  },
  data() {
    return {
      stories: [
        {
          title: this.$t('worldWars.stories.story1.title'),
          intro: this.$t('worldWars.stories.story1.intro'),
          path: 'story1'
        }, {
          title: this.$t('worldWars.stories.story2.title'),
          intro: this.$t('worldWars.stories.story2.intro'),
          path: 'story2'
        }, {
          title: this.$t('worldWars.stories.story3.title'),
          intro: this.$t('worldWars.stories.story3.intro'),
          path: 'story3'
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
  background-color: $cyan;
}
</style>
  