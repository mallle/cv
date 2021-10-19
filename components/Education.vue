<template>
  <section id="education" class="cv-section">
    <h3>{{ $t('education.headline') }}</h3>

    <EducationInfo
      :what="$t('education.ldi.what')"
      :to-from="$t('education.ldi.toFrom')"
      :where="$t('education.ldi.where')"
      :info="$t('education.ldi.info')"
    />

    <EducationInfo
      :what="$t('education.study.what')"
      :to-from="$t('education.study.toFrom')"
      :where="$t('education.study.where')"
      :info="$t('education.study.info')"
    />

    <EducationInfo
      :what="$t('education.bk.what')"
      :to-from="$t('education.bk.toFrom')"
      :where="$t('education.bk.where')"
      :info="$t('education.bk.info')"
    />
  </section>
</template>
