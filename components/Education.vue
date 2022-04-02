<template>
  <section id="education" class="cv-section">
    <h3>{{ $t('education.headline') }}</h3>

    <EducationInfo
      v-for="(education, i) in $t('education.info')"
      :key="i"
      :what="education.what"
      :to-from="education.toFrom"
      :where="education.where"
      :info="education.info"
    />

  </section>
</template>
