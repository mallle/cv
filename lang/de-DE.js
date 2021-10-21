export default {
  links: {
    about: 'Über',
    education: 'Bildung',
    experience: 'Erfahrungen',
    skills: 'Kentnisse',
    projects: 'Projekte',
  },
  about: {
    subtitle: 'Webdeveloper',
    location: 'München, Deutschland'
  },
  education: {
    headline: 'Education',
    bk: {
      toFrom: '08.2007 – 07.2009',
      what: 'Ausbildung zu Bürokauffrau (Dänisches Zeugnis)',
      where:  'Burger King® GmbH – Central Europa München',
      info: 'Abteilung: Development und Facility/Company Operations',
    },
    study: {
      toFrom: '10.2013 – 07.2016',
      what: 'B.Sc. Wirtschaftpädagogik I',
      where: 'an der Ludwig-Maximilians-Universität in München',
      info: 'Schwerpunkt: Human Resources, Lehren und Lernen. Thema der Bachelorarbeit: Weiterbildung im europäischen Vergleich'
    },
    ldi: {
      toFrom: '09.2017 – 07.2019',
      what: 'Ausbildung zur Fachinformatiker als Anwendungsentwicklerin',
      where: 'bei LINKS DER ISAR GmbH',
      info: 'Schwerpunkte: PHP (Laravel), JavaSript (Vue.JS), MySql, neo4j'
    }
  },
  experience: {
    headline: 'Erfahrungen',
    fictionic: {
      toFrom: 'Seit  01.10.2020',
      what: 'Mitgründer',
      where: 'von Fictionic UG (haftungsbeschränkt)',
      info: 'Entwicklung von statischen Webseiten mit Nuxt.js. Unteranderem einer Datenbank für ein Krimi-Aktenspiel (das bald auf den Markt kommt). Sowie www.storyways.app das mit dem Headless CMS Storyblok aufgesetzt ist. Project Management/Entwicklung der App Storyways.'
    },
    burda: {
      toFrom: 'Seit 01.01.2021',
      what: 'Solution Developer',
      where: 'bei Abonnenten Service Center GmbH (Ausgelöst durch Umstrukturierungen im Unternehmen)',
      info: 'Entwicklung und Betreuung von internen Web-Apps mit Symfony 4/5, JQuery und Bootsrap.'
    },
    burdaNews: {
      toFrom: '15.07.2019 – 31.12.2020',
      what: 'Junior Software Developer',
      where: 'bei BurdaNews GmbH.',
      info: 'Entwicklung von internen Web-Apps mit Symfony, JQuery und Bootsrap.'
    },
    innoactive : {
      toFrom: '16.06.2018 – 14.09.2017',
      what: 'HR Manager',
      where: 'bei Innoactive GmbH',
      info: 'Aufbau von Prozessen im Bereich Recruiting und Onboarding sowie Stärkung des Employer Brand.'
    },
    parcellab: {
      toFrom: '15.08.2016 – 15.06.2017',
      what: 'HR Manager',
      where: 'parcelLab GmbH',
      info: 'Aufbau von Prozessen im Bereich Recruiting und Onboarding.'
    },
    rossmann: {
      toFrom: '10.2011 – 10.2013',
      what: 'Visual Merchandiser',
      where: 'im Außendienst bei Rossmann GmbH.',
      info: 'Betreuung im Bereich Marketing von 40 Läden in Bayern.'
    },
  },
  skills: {
    headline: 'Kentnisse',
    language: 'Programmiersprachen',
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
    headline: 'Projekte',
    linkToProject: 'Besuche Webseite',
    items: [ 
      {
        image: '/projects/storyways.png',
        imageAlt: 'Bild von der Webseite Storyways',
        headline: 'Storyways',
        stack: 'Nuxt.js, Tailwind css, Storyblok, i18n.',
        info: 'Landingpage für die App Storyways. Eine App entwickelt in zusammenarbeit mit Fictionic UG und Tapped UG.',
        href: 'https://www.storyways.app',
      },
      {
        image: '/projects/storyways-wiki-de.png',
        imageAlt: 'Bild von der Webseite Storyways Wiki',
        headline: 'Storyways Wiki',
        stack: 'Nuxt/Content.',
        info: 'Dokumentation für Author:innen die Geschichten verfassen für Storyways.',
        href: 'https://wiki.storyways.app',

      },
      {
        image: '/projects/ccd.png',
        imageAlt: 'Bild von der Webseite Cold Case Detectives',
        headline: 'Cold Case Detectives',
        stack: 'Nuxt.js, Tailwind, Vuex, i18n.',
        info: 'Landingpage für Cold Case Detectives sowie eine Datenbank um die Spiele von Cold Case Detectives spielen zu können.',
        href: 'https://www.coldcasedetectives.de',
      },
      {
        image: '/projects/mbt.png',
        imageAlt: 'Bild von der Webseite Mord bei Tisch',
        headline: 'Mord bei Tisch',
        stack: 'Nuxt.js and Bulma.',
        info: 'Website für Krimidinners von Mord bei Tisch. Bietet die möglichkeit Rollenhefte und Namenschilder herunterzuladen, sowie Rezepte auszusuchen.',
        href: 'https://www.mordbeitisch.de',
      },
      {
        image: '/projects/darianina.png',
        imageAlt: 'Bild von der Webseite von Daria Nina',
        headline: 'Daria Nina',
        stack: 'Nuxt.js, Tailwind css, i18n.',
        info: 'Landingpage für Daria Nina.',
        href: 'https://www.darianina.com',
      },
      {
        image: '/projects/seasons.png',
        imageAlt: 'Bild von der Webseite Seasons',
        headline: 'Seasons',
        stack: 'VanillaJS and Bulma',
        info: 'Webseite der die nutzer:in die möglichkeit gibt 4 Termine herunter zuladen, der den anfang der 4 jahrensseiten des cyklus beinhaltet.',
        href: 'https://mallle.github.io/seasons',
      },
      {
        image: '/projects/dailys.png',
        imageAlt: 'Bild von der Webseite dailys',
        headline: 'Dailys',
        stack: 'Vue.js, local storage and Bulma',
        info: 'Webapp wo man todos und Ziele festhalten kann, sowie den Tag nach Zeitlicher Ablauf planen kann.',
        href: 'https://dailys.netlify.app',
      },
      {
        image: '/projects/habittracker.png',
        imageAlt: 'Bild von der Webseite habittracker',
        headline: 'Habitttacker',
        stack: 'Symfony 4, Doctrine, Twig and Bulma',
        info: 'Webapp wo man eine oder mehere Habits tracken kann.',
        href: 'https://github.com/mallle/dailys',
      },
      {
        image: '/projects/php-notes.png',
        imageAlt: 'Bild von der Webseite PHP notes',
        headline: 'Symfony Notes',
        stack: 'VanillaJS, HTML and CSS',
        info: 'Webseite wo ich meine notitzen zu Symfony 4 notiert habe.',
        href: 'https://php-notes.netlify.app/',
      },
    ]
  }
}