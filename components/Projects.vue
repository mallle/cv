<template>
  <section id="projects" class="cv-section">
    <h3>{{ $t('projects.headline') }}</h3>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
      <Project
        v-for="project in $t('projects.items')"
        :key="project.headline"
        :headline="project.headline"
        :image="project.image"
        :image-alt="project.imageAlt"
        :info="project.info"
        :border-color="project.borderColor"
        :stack="project.stack"
        :hover-color="project.hoverColor"
        :href="project.href"
      />
    </div>
  </section>
</template>
