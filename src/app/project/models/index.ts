export const projects: project[] = [
  {
    name: 'purr-coffee',
    github: 'https://github.com/Ahmed-Atef-Elnemrawi/Purr-Coffee.git',
    about: `
    This is a user-friendly website designed specifically for ordering coffee.
    `,
    poweredByTech: `
    This website runs on Angular 16, a robust web application framework. It utilizes Tailwind CSS for design, RxJS for smooth data handling, and NGRX for efficient state management.`,

    code_technologies: [
      'angular16',
      'typescript',
      'tailwind CSS',
      'RXJS',
      'NGRX',
    ],
    images_src: [
       '../assets/projects/coffee/1.png',
      '../assets/projects/coffee/2.png',
       '../assets/projects/coffee/3.png',
       '../assets/projects/coffee/mobile.gif',
       '../assets/projects/coffee/tablet.gif'
    ],
    gif: {
      mobile: '../assets/projects/coffee/mobile.gif',
      tablet: '../assets/projects/coffee/mobile.gif',
    },
  },

  {
    name: 'user_dashboard',
    github:
      'https://github.com/Ahmed-Atef-Elnemrawi/Dynamic-User-Dashboard.git',
    about: `
      An interactive user dashboard with search, and caching functionality.
      `,
    poweredByTech: `
      Built with modern tools like Angular 17, Tailwind Css, RXJS, and NGRX for a smooth experience and it achieve caching using http interceptor and it use gsap (green socks animation platform) for animation.`,

    code_technologies: [
      'angular17',
      'typescript',
      'RXJS',
      'NGRX',
      'GSAP (green socks animation platform)',
    ],
    images_src: [
       '../assets/projects/dynamicUserDashboard/1.png',
       '../assets/projects/dynamicUserDashboard/2.png',
       '../assets/projects/dynamicUserDashboard/3.png',
       '../assets/projects/dynamicUserDashboard/4.png',
       '../assets/projects/dynamicUserDashboard/5.png',
       '../assets/projects/dynamicUserDashboard/6.png',
       '../assets/projects/dynamicUserDashboard/7.png',
       '../assets/projects/dynamicUserDashboard/8.png',
       '../assets/projects/dynamicUserDashboard/8.png',
    ],
  },

  {
    name: 'quran_app',
    github: 'https://github.com/Ahmed-Atef-Elnemrawi/QuranApp.git',
    about: `
    This is a user-friendly mobile application that provides easy access to a vast collection of Quran recitations.
    `,
    poweredByTech: `
    The app is built using Angular 17, a powerful web application framework. It utilizes RXJS, a library for handling asynchronous data streams, and leverages Angular's new features like primitive reactive types (signals) and improved control flow for a robust and efficient application.`,

    code_technologies: [
      'angular17',
      'signals (new angular primitive type)',
      'RXJS',
      'typescript',
      'motion one (animation library)',
    ],
    images_src: [
       '../assets/projects/quranApp/1.png',
       '../assets/projects/quranApp/2.png',
       '../assets/projects/quranApp/3.png',
       '../assets/projects/quranApp/1.png',
       '../assets/projects/quranApp/5.png',
       '../assets/projects/quranApp/6.png',
       '../assets/projects/quranApp/7.png',
       '../assets/projects/quranApp/8.png',
       '../assets/projects/quranApp/9.png',
    ],
  },

  {
    name: 'eventHub_app',
    github: 'https://github.com/Ahmed-Atef-Elnemrawi/EventHub.git',
    about: `
    EventHub streamlines event planning with a user-friendly website for discovery, registration, and management.
    `,
    poweredByTech: `
    Built with modern tools like Angular 13, Angular Material, RXJS, and NGRX for a smooth experience.`,

    code_technologies: [
      'angular13',
      'typescript',
      'angular material',
      'RXJS',
      'NGRX',
    ],
    images_src: [
     '../assets/projects/eventHub/1.png',
     '../assets/projects/eventHub/3.png',
     '../assets/projects/eventHub/4.png',
     '../assets/projects/eventHub/5.png',
     '../assets/projects/eventHub/6.png',
     '../assets/projects/eventHub/7.png',
     '../assets/projects/eventHub/8.png',
     '../assets/projects/eventHub/9.png',
       '../assets/projects/eventHub/10.png',
       '../assets/projects/eventHub/11.png',
       '../assets/projects/eventHub/12.png',
    ]
  },
];

export interface project {
  name: string;
  github: string;
  about: string;
  poweredByTech: string;
  code_technologies: string[];
  images_src: string[];
  gif?: { [key: string]: string };
}
