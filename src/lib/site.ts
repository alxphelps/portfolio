/** Site-wide copy and links — edit here to update the whole portfolio */
export const site = {
  name: "Alex Phelps",
  shortName: "Alex Phelps",
  businessName: "Phelps LLC",
  title: "Senior DevOps Engineer",
  tagline: "AWS, Kubernetes, Terraform & production operations",
  location: "Wilmington, North Carolina",
  email: "alxphelps11@yahoo.com",
  emailHref: "mailto:alxphelps11@yahoo.com",
  phone: "123-456-7899",
  phoneHref: "tel:+1234567889",
  linkedin: "https://www.linkedin.com/in/alxphelps/",
  github: "https://github.com/alxphelps",
  /** Large headshot in the hero */
  profileImagePath: "/headshot.png",
  /** Small headshot in the site header (top left) */
  headerImagePath: "/small.png",
  employment: [
    { company: "American Express / Kabbage", dates: "2018 — Present" },
    { company: "AT&T", dates: "2014 — 2018" },
  ],
} as const;
