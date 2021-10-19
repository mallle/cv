<template>
  <section id="experience" class="cv-section">
    <h3>{{ $t('experience.headline') }}</h3>

    <EducationInfo
      :what="$t('experience.fictionic.what')"
      :to-from="$t('experience.fictionic.toFrom')"
      :where="$t('experience.fictionic.where')"
      :info="$t('experience.fictionic.info')"
    />

    <EducationInfo
      :what="$t('experience.burda.what')"
      :to-from="$t('experience.burda.toFrom')"
      :where="$t('experience.burda.where')"
      :info="$t('experience.burda.info')"
    />

    <EducationInfo
      :what="$t('experience.burdaNews.what')"
      :to-from="$t('experience.burdaNews.toFrom')"
      :where="$t('experience.burdaNews.where')"
      :info="$t('experience.burdaNews.info')"
    />

    <EducationInfo
      :what="$t('experience.innoactive.what')"
      :to-from="$t('experience.innoactive.toFrom')"
      :where="$t('experience.innoactive.where')"
      :info="$t('experience.innoactive.info')"
    />

    <EducationInfo
      :what="$t('experience.parcellab.what')"
      :to-from="$t('experience.parcellab.toFrom')"
      :where="$t('experience.parcellab.where')"
      :info="$t('experience.parcellab.info')"
    />

    <EducationInfo
      :what="$t('experience.rossmann.what')"
      :to-from="$t('experience.rossmann.toFrom')"
      :where="$t('experience.rossmann.where')"
      :info="$t('experience.rossmann.info')"
    />
  </section>
</template>
