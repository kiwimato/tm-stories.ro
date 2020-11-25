<template>
  <div class="language-select-wrapper">
    <label class="medium-text pr-1">
      <font-awesome-icon icon="globe" />
    </label>
    <select
      v-model="$i18n.locale"
      class="select-language"
    >
      <option
        v-for="language in languages"
        :key="language.value"
        :value="language.value"
      >
        {{ language.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelect',
  data() {
    return {
      languages: [
        {
          value: 'en',
          text: 'English'
        },
        {
          value: 'ro',
          text: 'Română'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.language-select-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.select-langauge {
  font-size: 1.1rem;
}
</style>