<template>
  <div id="about" class="cv-section">
    <h1>Malene Klit</h1>
    <h2 class="text-xl md:text-3xl font-bold pb-3 uppercase tracking-wider">
      {{ $t('about.subtitle') }}
    </h2>
    <p class="italic text-lg md:text-2xl my-8">
      {{ $t('about.location') }} -
      <a href="mailto:maleneklit@hotmail.com">maleneklit@hotmail.com</a>
    </p>
    <div class="mt-5">
      <Link href="https://github.com/mallle"
        ><i class="devicon-github-original text-5xl mr-8"></i
      ></Link>
      <Link href="https://www.linkedin.com/in/malene-klit/">
        <i class="devicon-linkedin-plain text-5xl"></i>
      </Link>
    </div>
  </div>
</template>
