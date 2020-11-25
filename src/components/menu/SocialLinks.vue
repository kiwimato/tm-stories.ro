<template>
  <div class="social-media-links flex">
    <a 
      href="https://www.facebook.com/Povestirile-Timi%C8%99oarei-TmStories-103965398155024"
      target="_blank"
    >
      <font-awesome-icon 
        :icon="['fab', 'facebook']"
        size="lg"
        class="pointer"
        id="facebook"
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
</template>

<script>
export default {
  name: 'SocialLinks'
}
</script>

<style lang="scss" scoped>
#facebook {
  padding-right: 1.5rem;
}

@media (max-width: 500px) {
  #facebook {
    padding-right: 1.1rem;
  }
}
</style>