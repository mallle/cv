<template>
  <section id="experience" class="cv-section">
    <h3>{{ $t('experience.headline') }}</h3>
    
    <EducationInfo
      v-for="(experience, i) in $t('experience.info')"
      :key="i"
      class="mb-4"
      :what="experience.what"
      :to-from="experience.toFrom"
      :where="experience.where"
      :info="experience.info"
    />
  </section>
</template>
