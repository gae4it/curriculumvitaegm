import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Portfolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'Mission',
      href: getPermalink('/mission'),
    },
    {
      text: 'About Me',
      href: getPermalink('/about-me'),
    },
    {},
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    © ${new Date().getFullYear()} · All rights reserved.
  `,
};
