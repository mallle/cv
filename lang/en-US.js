export default {
  nav: {
    default: [
      {
        text: 'About',
        anchor: '#about',
      },
      {
        text: 'Education',
        anchor: '#education',
      },
      {
        text: 'Experience',
        anchor: '#experience',
      },
      {
        text: 'Skills',
        anchor: '#skills',
      },
      {
        text: 'Procjects',
        anchor: '#projects',
      },
      {
        text: 'Blog',
        to: 'blog'
      },
    ],
    slim: [
      {
        text: 'Start',
        to: 'index',
      },
    ],
    footer: [
      {
        text: 'Legal Notice',
        to: 'legal-notice',
      },
      {
        text: 'Privacy Policy',
        to: 'privacy',
      },
    ],
  },
  metadata: {
    start: 'CV',
    privacy: 'Privacy Policy',
    legal: 'Legal Notice',
    links: 'Links',
  },
  about: {
    subtitle: 'Mobile-/Webdeveloper',
    location: 'Munich, Germany',
  },
  education: {
    headline: 'Education',
    info: [ 
      {
        toFrom: '08.2007 – 07.2009',
        what: 'Apprenticeship - Office clerk (Certifate in Danish)',
        where: 'at Burger King® GmbH – Central Europe München',
        info: 'Department: Development und Facility/Company Operations',
      },
      {
        toFrom: '10.2013 – 07.2016',
        what: 'Human Ressource Education and Mangement',
        where: 'from the Ludwig-Maximilians-University in Munich',
        info: "Bachelor's thesis: Compare in-house training in EU.",
      },
      {
        toFrom: '09.2017 – 07.2019',
        what: 'Apprenticeship as Application Developer',
        where: 'at LINKS DER ISAR GmbH',
        info: 'Focus: PHP (Laravel), JavaSript (Vue.JS), MySql, neo4j',
      }
    ],
  },
  experience: {
    headline: 'Experience',
    info: [ 
      {
        toFrom: 'Since 03.2022',
        what: 'Mobile Developer',
        where:
          'at Tapped UG',
        info: 'App development with Dart und Flutter.',
      },
      {
        toFrom: 'Since 10.2020',
        what: 'Co-founder',
        where: 'at Fictionic UG (haftungsbeschränkt)',
        info: 'Website develeopement with Nuxt.js and Headless CMS Storyblok. Project management and developement of the Storyways app.',
      },
      {
        toFrom: '01.2021 - 02.2022',
        what: 'Solution Developer',
        where: 'at Abonnenten Service Center GmbH',
        info: 'Development and support of internal web apps with Symfony 4/5, JQuery and Bootsrap.',
      },
      {
        toFrom: '07.2019 – 12.2020',
        what: 'Junior Software Developer',
        where: 'at BurdaNews GmbH',
        info: 'Development and support of internal web apps with Symfony 4/5, JQuery and Bootsrap.',
      },
      {
        toFrom: '06.2018 – 09.2017',
        what: 'HR Manager',
        where: 'at Innoactive GmbH',
        info: 'Establishment of processes in the area of recruiting and onboarding as well as strengthening of the employer brand.',
      },
      {
        toFrom: '08.2016 – 06.2017',
        what: 'HR Manager',
        where: 'at parcelLab GmbH',
        info: 'Establishment of processes in the area of recruiting and onboarding.',
      },
      {
        toFrom: '10.2011 – 10.2013',
        what: 'Visual Merchandiser',
        where: 'at Rossmann GmbH',
        info: 'Marketing support for 40 stores in Bavaria.',
      },
    ]
  },
  skills: {
    headline: 'Skills',
    language: 'Programming languages',
    devIcons: [
      {
        icon: 'devicon-javascript-plain',
        description: 'Javascript',
      },
      {
        icon: 'devicon-php-plain',
        description: 'PHP',
      },
      {
        icon: 'devicon-mysql-plain',
        description: 'SQL',
      },
      {
        icon: 'devicon-html5-plain',
        description: 'HTML 5',
      },
      {
        icon: 'devicon-css3-plain',
        description: 'CSS/SCSS',
      },
      {
        icon: 'devicon-dart-plain',
        description: 'Dart',
      },
    ],
    frameworks: 'Frameworks',
    frameworkIcons: [
      {
        icon: 'devicon-vuejs-plain',
        description: 'Vue.js',
      },
      {
        icon: 'devicon-nuxtjs-plain',
        description: 'Nuxt.js',
      },
      {
        icon: 'devicon-symfony-plain',
        description: 'Symfony',
      },
      {
        icon: 'devicon-laravel-plain',
        description: 'Laravel',
      },
      {
        icon: 'devicon-twig-plain',
        description: 'Twig',
      },
      {
        icon: 'devicon-doctrine-plain',
        description: 'Doctrine',
      },
      {
        icon: 'devicon-bootstrap-plain',
        description: 'Bootstrap',
      },
      {
        icon: 'devicon-tailwindcss-plain',
        description: 'Tailwind',
      },
      {
        icon: 'devicon-bulma-plain',
        description: 'Bulma',
      },
      {
        icon: 'devicon-flutter-plain',
        description: 'flutter',
      },
    ],
    tools: 'Tools',
    toolsIcons: [
      {
        icon: 'devicon-github-plain',
        description: 'Github',
      },
      {
        icon: 'devicon-figma-plain',
        description: 'Figma',
      },
      {
        icon: 'devicon-vscode-plain',
        description: 'VS Code',
      },
      {
        icon: 'devicon-phpstorm-plain',
        description: 'PHP Storm',
      },
      {
        icon: 'devicon-jamstack-original',
        description: 'Jamstack',
      },
      {
        icon: 'devicon-filezilla-plain',
        description: 'FileZilla',
      },
      {
        icon: 'devicon-netlify-plain',
        description: 'Netlify',
      },
    ],
  },
  projects: {
    headline: 'Projects',
    linkToProject: 'Go to Webseite',
    items: [
      {
        image: '/projects/storyways.png',
        imageAlt: 'Image of Storyways Webseite',
        headline: 'Storyways',
        stack: 'Nuxt.js, Tailwind css, Storyblok, i18n.',
        info: 'Landingpage for Storyways.',
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
        info: 'Landingpage for Cold Case Detectives, including a database that guides you through the game.',
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
        info: 'Website where you can get the dates of the 4 seasons of the menstrual cycle and download them as .ics files to your calendar.',
        href: 'https://mallle.github.io/seasons',
      },
      {
        image: '/projects/dailys.png',
        imageAlt: 'Image of  dailys',
        headline: 'Dailys',
        stack: 'Vue.js, local storage and Bulma',
        info: 'Webapp where you can add to-dos and goals, as well as schedule your day.',
        href: 'https://dailys.netlify.app',
      },
      {
        image: '/projects/habittracker.png',
        imageAlt: 'Image of habittracker',
        headline: 'Habitttacker',
        stack: 'Symfony 4, Doctrine, Twig and Bulma',
        info: 'Webapp where you can track your habits.',
        href: 'https://github.com/mallle/dailys',
      },
      {
        image: '/projects/php-notes.png',
        imageAlt: 'Image of PHP notes',
        headline: 'Symfony Notes',
        stack: 'VanillaJS, HTML and CSS',
        info: 'Website where I added my notes for Symfony 4.',
        href: 'https://php-notes.netlify.app/',
      },
    ],
  },
  error: {
    headline: 'OOPS!',
    subtitle: 'Page was not found.',
    button: 'Back to Start',
  },
}
