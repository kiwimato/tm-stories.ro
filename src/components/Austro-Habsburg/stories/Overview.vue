<template>
  <div class="content-container">
    <period-overview
      :stories="stories"
      @open-story="openStory($event)"
    />
  </div>
</template>

<script>
import PeriodOverview from '../../generic/PeriodOverview.vue'

export default {
  name: 'Overview',
  components: {
    periodOverview: PeriodOverview
  },
}
</script>