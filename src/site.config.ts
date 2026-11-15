// Everything personal about the site lives here. Edit freely.

export const site = {
  // Shown top-left in the header and in the browser tab.
  title: 'chamalka',
  author: 'Chamalka Muwangala',
  description: 'Research notes and projects on machine learning.',

  // Home page intro. Plain HTML is allowed.
  intro:
    'This is the website and research notebook of <a href="/about/">Chamalka Muwangala</a>. ' +
    "I'm interested in machine learning research. I write up experiments, notes, and things I'm learning along the way.",

  // Header links. Leave a url empty ('') to hide that link.
  links: [
    { label: 'GitHub', url: '' },
    { label: 'X', url: '' },
    { label: 'LinkedIn', url: '' },
  ],

  // Portfolio. Shown on the home page and on /projects/. Empty list hides both.
  // `image` is the hover preview: put a screenshot in public/images/ and set
  // e.g. image: '/images/my-project.png'. Leave it '' for no preview.
  projects: [
    {
      name: 'Example project',
      description: 'Replace this with a one-line description of something you built.',
      url: 'https://github.com/',
      year: 2026,
      image: '',
    },
  ],
};
