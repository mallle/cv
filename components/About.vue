<template>
  <div id="about" class="cv-section">
    <h1>Malene Klit</h1>
    <h4 class="text-xl md:text-3xl font-bold pb-3 uppercase tracking-wider">
      {{ $t('about.subtitle') }}
    </h4>
    <p class="italic text-lg md:text-2xl my-8">
      {{ $t('about.location') }} -
      <a href="mailto:maleneklit@hotmail.com">maleneklit@hotmail.com</a>
    </p>
    <div class="mt-5">
      <AppLink href="https://github.com/mallle"
        ><i class="devicon-github-original icon mr-8"></i
      ></AppLink>
      <AppLink href="https://www.linkedin.com/in/malene-klit/">
        <i class="devicon-linkedin-plain icon"></i>
      </AppLink>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.icon {
  @apply text-5xl text-purple-300 md:hover:text-blue-200;
}
</style>
