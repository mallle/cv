<template>
  <section id="skills" class="cv-section">
    <h3>{{ $t('skills.headline') }}</h3>
    <h4>{{ $t('skills.language') }}:</h4>
    <div class="icon-wrapper">
      <Skill
        v-for="icon in $t('skills.devIcons')"
        :key="icon.icon"
        :icon="icon.icon"
        :description="icon.description"
      ></Skill>
    </div>

    <h4>{{ $t('skills.frameworks') }}:</h4>
    <div class="icon-wrapper">
      <skill
        v-for="icon in $t('skills.frameworkIcons')"
        :key="icon.icon"
        :icon="icon.icon"
        :description="icon.description"
      ></skill>
    </div>

    <h4>{{ $t('skills.tools') }}:</h4>
    <div class="icon-wrapper">
      <skill
        v-for="icon in $t('skills.toolsIcons')"
        :key="icon.icon"
        :icon="icon.icon"
        :description="icon.description"
      ></skill>
    </div>
  </section>
</template>

<style scoped>
.icon-wrapper {
  @apply flex flex-row mb-8 flex-wrap;
}
</style>
