export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "MKC - Services",
  description:
    "Intervention to help a person or family overcome problems. The goal is to improve an individual's mental health or a family's well-being and reduce or resolve troubling behaviors, beliefs, and thoughts and to improve relationships, social skills, and functioning.",
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
  ],
  links: {
    scheduleAppt: "https://marcia-kennedy.clientsecure.me/",
    evaluationAppt: "/evaluation-form",
    social: {
      facebook: "https://www.facebook.com/MKCservices/",
      linkedIn: "https://www.linkedin.com/in/mkc-services",
    },
  },
  address: {
    full: "654 N. Woodchuck, Suite F, Wichita, KS 67212",
    street: "654 N. Woodchuck, Suite F",
    city: "Wichita",
    state: "KS",
    zip: "67212",
  },
  phone: "(316) 371-7226",
  copyright: "© Copyright 2015 MKC-counseling",
};
