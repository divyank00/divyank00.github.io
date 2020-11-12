module.exports = {
  siteTitle: 'Divyank Lunkad\'s Portfolio',
  siteDescription:
    'Divyank Lunkad is an incoming Software Developer, based in India, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Divyank Lunkad, Divyank, Lunkad, divyank00, software engineer, android developer',
  siteUrl: 'https://divyank00.github.io',
  siteLanguage: 'en_US',
  name: 'Divyank Lunkad',
  location: 'Nasik, India',
  email: 'lunkaddivyank@gmail.com',
  phone: '+917020322459',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/divyank00',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/divyank00/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
