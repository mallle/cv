export default {
  links: {
    about: 'About',
    education: 'Education',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Procjects',
  },
  about: {
    subtitle: 'Webdeveloper',
    location: 'Munich, Germany'
  },
  education: {
    headline: 'Education',
    bk: {
      toFrom: '08.2007 – 07.2009',
      what: 'Apprenticeship - Office clerk (Certifate in Danish)',
      where: 'at Burger King® GmbH – Central Europa München',
      info: 'Department: Development und Facility/Company Operations',
    },
    study: {
      toFrom: '10.2013 – 07.2016',
      what: 'Human Recource Education and Mangement',
      where: 'from the Ludwig-Maximilians-Universität in Munich',
      info: 'Bachelor\'s thesis: Compare in-house training in EU.'
    },
    ldi: {
      toFrom: '09.2017 – 07.2019',
      what: 'Apprenticeship as Application Developer',
      where: 'at LINKS DER ISAR GmbH',
      info: 'Focus: PHP (Laravel), JavaSript (Vue.JS), MySql, neo4j'
    }
  },
  experience: {
    headline: 'Experience',
    fictionic: {
      toFrom: 'Since  01.10.2020',
      what: 'Co-founder',
      where: 'at Fictionic UG (haftungsbeschränkt)',
      info: 'Development of static websites with Nuxt.js. Among other things, a database for a mystery file game (soon to be launched). As well as www.storyways.app which is set up with the headless CMS Storyblok. Project management/development of the app Storyways.'
    },
    burda: {
      toFrom: 'Since 01.01.2021',
      what: 'Solution Developer',
      where: 'at Abonnenten Service Center GmbH',
      info: 'Development and support of internal web apps with Symfony 4/5, JQuery and Bootsrap.'
    },
    burdaNews: {
      toFrom: '15.07.2019 – 31.12.2020',
      what: 'Junior Software Developer',
      where: 'at BurdaNews GmbH.',
      info: 'Development and support of internal web apps with Symfony 4/5, JQuery and Bootsrap.'
    },
    innoactive : {
      toFrom: '16.06.2018 – 14.09.2017',
      what: 'HR Manager',
      where: 'at Innoactive GmbH',
      info: 'Establishment of processes in the area of recruiting and onboarding as well as strengthening of the employer brand.'
    },
    parcellab: {
      toFrom: '15.08.2016 – 15.06.2017',
      what: 'HR Manager',
      where: 'at parcelLab GmbH',
      info: 'Establishment of processes in the area of recruiting and onboarding.'
    },
    rossmann: {
      toFrom: '10.2011 – 10.2013',
      what: 'Visual Merchandiser',
      where: 'at Rossmann GmbH.',
      info: 'Marketing support for 40 stores in Bavaria.'
    },
  },
  skills: {
    headline: 'Skills',
    language: 'Programming languages',
    devIcons: [
      {
        icon: 'devicon-javascript-plain',
        description: 'Javascript'
      },
      {
        icon: 'devicon-php-plain',
        description: 'PHP'
      },
      {
        icon: 'devicon-mysql-plain',
        description: 'SQL'
      },
      {
        icon: 'devicon-html5-plain',
        description: 'HTML 5'
      },
      {
        icon: 'devicon-css3-plain',
        description: 'CSS/SCSS'
      },
      {
        icon: 'devicon-dart-plain',
        description: 'Dart'
      },
    ],
    frameworks: 'Frameworks',
    frameworkIcons: [
      {
        icon: 'devicon-vuejs-plain',
        description: 'Vue.js'
      },
      {
        icon: 'devicon-nuxtjs-plain',
        description: 'Nuxt.js'
      },
      {
        icon: 'devicon-symfony-plain',
        description: 'Symfony'
      },
      {
        icon: 'devicon-laravel-plain',
        description: 'Laravel'
      },
      {
        icon: 'devicon-twig-plain',
        description: 'Twig'
      },
      {
        icon: 'devicon-doctrine-plain',
        description: 'Doctrine'
      },
      {
        icon: 'devicon-bootstrap-plain',
        description: 'Bootstrap'
      },
      {
        icon: 'devicon-tailwindcss-plain',
        description: 'Tailwind'
      },
      {
        icon: 'devicon-bulma-plain',
        description: 'Bulma'
      },
      {
        icon: 'devicon-flutter-plain',
        description: 'flutter'
      },
    ],
    tools: 'Tools',
    toolsIcons: [     
      {
        icon: 'devicon-github-plain',
        description: 'Github'
      },
      {
        icon: 'devicon-figma-plain',
        description: 'Figma'
      },
      {
        icon: 'devicon-vscode-plain',
        description: 'VS Code'
      },
      {
        icon: 'devicon-phpstorm-plain',
        description: 'PHP Storm'
      },
      {
        icon: 'devicon-jamstack-original',
        description: 'Jamstack'
      },
      {
        icon: 'devicon-filezilla-plain',
        description: 'FileZilla'
      },
      {
        icon: 'devicon-netlify-plain',
        description: 'Netlify'
      },
    ],
  },
  projects: {
    headline: 'Projectes',
    linkToProject: 'Go to Webseite',
    items: [ 
      {
        image: '/projects/storyways.png',
        imageAlt: 'Image of Storyways Webseite',
        headline: 'Storyways',
        stack: 'Nuxt.js, Tailwind css, Storyblok, i18n.',
        info: 'Landingpage for Storyways. An App developed together with Fictionic UG und Tapped UG.',
        href: 'https://www.storyways.app',
      },
      {
        image: '/projects/storyways-wiki-de.png',
        imageAlt: 'Image of Storyways Wiki Webseite',
        headline: 'Storyways Wiki',
        stack: 'Nuxt/Content.',
        info: 'Documentation for writers of Storyways.',
        href: 'https://wiki.storyways.app',

      },
      {
        image: '/projects/ccd.png',
        imageAlt: 'Image of Cold Case Detectives',
        headline: 'Cold Case Detectives',
        stack: 'Nuxt.js, Tailwind, Vuex, i18n.',
        info: 'Landingpage for Cold Case Detectives and a Database what guides you through the game.',
        href: 'https://www.coldcasedetectives.de',
      },
      {
        image: '/projects/mbt.png',
        imageAlt: 'Image of Mord bei Tisch',
        headline: 'Mord bei Tisch',
        stack: 'Nuxt.js and Bulma.',
        info: 'Website for Murder Mystery Games by Mord bei Tisch.',
        href: 'https://www.mordbeitisch.de',
      },
      {
        image: '/projects/darianina.png',
        imageAlt: 'Image of Webseite for Daria Nina',
        headline: 'Daria Nina',
        stack: 'Nuxt.js, Tailwind css, i18n.',
        info: 'Landingpage for Daria Nina.',
        href: 'https://www.darianina.com',
      },
      {
        image: '/projects/seasons.png',
        imageAlt: 'Image of Seasons',
        headline: 'Seasons',
        stack: 'VanillaJS and Bulma',
        info: 'Website where you can get the dates of the 4 seasons of the female cycle and download them as .ics files to your calendar',
        href: 'https://mallle.github.io/seasons',
      },
      {
        image: '/projects/dailys.png',
        imageAlt: 'Image of  dailys',
        headline: 'Dailys',
        stack: 'Vue.js, local storage and Bulma',
        info: 'Webapp where you can add todos and goals, aswell as schedule your day..',
        href: 'https://dailys.netlify.app',
      },
      {
        image: '/projects/habittracker.png',
        imageAlt: 'Image of habittracker',
        headline: 'Habitttacker',
        stack: 'Symfony 4, Doctrine, Twig and Bulma',
        info: 'Webapp where you can track one or more habits.',
        href: 'https://github.com/mallle/dailys',
      },
      {
        image: '/projects/php-notes.png',
        imageAlt: 'Image of PHP notes',
        headline: 'Symfony Notes',
        stack: 'VanillaJS, HTML and CSS',
        info: 'Website where I added my notices while learning Symfony 4.',
        href: 'https://php-notes.netlify.app/',
      },
    ]
  }
}