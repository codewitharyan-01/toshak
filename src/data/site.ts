/**
 * Site-wide configuration for Toshak Ancillary.
 * All contact details below were taken from the live website
 * (toshakancillary.com) — edit here to change them everywhere.
 */

export const site = {
  name: "Toshak Ancillary",
  url: "https://toshakancillary.com",
  tagline: "Empowering Industrial Efficiency with Advanced Auxiliary Solutions",
  description:
    "Toshak Ancillary is an Ahmedabad-based manufacturer, supplier and exporter of auxiliary equipment for the plastics industry — chillers, hopper dryers, dosing and blending systems, mixers, mould temperature controllers and process controllers.",
  yearsExperience: 15,
  address: {
    line1: "Shad No 59, Ground Floor, Raghuveer Industrial Estate Part 3,",
    line2: "SLM Mil Compound, Vatva, Ahmedabad – 382445, Gujarat, India",
    locality: "Ahmedabad",
    region: "Gujarat",
    postalCode: "382445",
    country: "India",
    countryCode: "IN",
  },
  contacts: [
    {
      label: "Sales & Marketing",
      phone: "+91 99788 33984",
      phoneRaw: "+919978833984",
      email: "sales.toshakancillary@gmail.com",
    },
    {
      label: "Technical Support",
      phone: "+91 96877 31561",
      phoneRaw: "+919687731561",
      email: "info.toshakancillary@gmail.com",
    },
    {
      label: "Commercial",
      phone: "+91 99788 33960",
      phoneRaw: "+919978833960",
      email: "info.toshakancillary@gmail.com",
    },
  ],
  /** WhatsApp click-to-chat — uses the sales number. Confirm before go-live. */
  whatsapp: "919978833984",
  /**
   * Social profile URLs — the live site links Facebook, Twitter, YouTube,
   * Instagram and Pinterest but the profile URLs were not extractable.
   * Fill these in and the footer icons appear automatically.
   */
  social: {
    facebook: "",
    twitter: "",
    youtube: "",
    instagram: "",
    pinterest: "",
  } as Record<string, string>,
  certification: {
    name: "ISO 9001:2015",
    scope:
      "Certified for the manufacturing, sale and services of plastic auxiliary products, demonstrating our commitment to quality management and continuous improvement.",
  },
} as const;

export const stats = [
  { value: "14", suffix: "+", label: "Product solutions" },
  { value: "15", suffix: "+", label: "Years of experience" },
  { value: "4", suffix: "", label: "Industry verticals served" },
  { value: "24", suffix: "/7", label: "Client support" },
] as const;

export const strengths = [
  {
    title: "Energy-Efficient Cooling Systems",
    description:
      "Water and air cooled chillers engineered with optimised compressors and smart controls to cut power draw during continuous operation.",
  },
  {
    title: "Engineering-Driven Industrial Solutions",
    description:
      "Every machine is configured around real process requirements — capacity, material and application — not one-size-fits-all specs.",
  },
  {
    title: "Reliable Performance in Operations",
    description:
      "Rugged industrial construction and proven components keep production lines running with minimal unplanned downtime.",
  },
  {
    title: "Customised Solutions for Industries",
    description:
      "Configurable capacities, materials, heating and control options to match the exact needs of your processing line.",
  },
  {
    title: "Timely Delivery & Dependable Service",
    description:
      "Structured manufacturing and dispatch planning, backed by responsive technical support across India.",
  },
  {
    title: "Built for Lasting Durability",
    description:
      "Industrial-grade materials, stainless steel contact parts and accessible designs deliver a long, dependable service life.",
  },
] as const;

export const industries = [
  {
    slug: "plastic-processing-plants",
    name: "Complete Plastic Processing Plants",
    image: "/img/industries/plastic-processing-plants.jpg",
    description:
      "End-to-end auxiliary support for integrated plastics plants — material handling, drying, dosing, mixing, cooling and size reduction from a single supplier, so every machine in the line works as one system.",
    products: [
      "hopper-dryer",
      "vacuum-hopper-loader",
      "air-cooled-water-chiller",
      "vertical-mixer",
    ],
  },
  {
    slug: "blown-film-extrusion",
    name: "Blown Film & Extrusion Industry",
    image: "/img/industries/blown-film-extrusion.jpg",
    description:
      "Process controllers, dosing systems and chillers that keep extrusion lines stable — consistent melt temperature, accurate masterbatch dosing and reliable cooling for uniform film and profile output.",
    products: [
      "extrusion-process-controller",
      "volumetric-doser-feeder",
      "water-cooled-water-scroll-chiller",
      "hopper-dryer",
    ],
  },
  {
    slug: "injection-molding",
    name: "Injection Molding Units",
    image: "/img/industries/injection-molding.jpg",
    description:
      "Mould temperature control, chillers, dryers and gravimetric dosing for repeatable, high-quality moulded parts — shorter cycles, defect-free surfaces and consistent shot weight.",
    products: [
      "mold-temperature-controller",
      "air-cooled-water-chiller",
      "hopper-dryer",
      "gravimetric-dosing-blending",
    ],
  },
  {
    slug: "compounding-recycling",
    name: "Plastic Compounding & Recycling Units",
    image: "/img/industries/compounding-recycling.jpg",
    description:
      "Grinders, mixers and blending systems for regrind recovery and compounding — clean, uniform flakes and accurately dosed recipes that keep recycled material within specification.",
    products: [
      "grinder-flake-cutter",
      "vertical-mixer-with-dryer",
      "gravimetric-dosing-blending",
      "volumetric-master-batch-doser",
    ],
  },
] as const;

/** "What we do" blurbs from the live About page. */
export const whatWeDo = [
  {
    name: "Hopper Dryer",
    description: "Ensuring optimal moisture control for high-quality plastic processing.",
  },
  {
    name: "Vacuum Hopper Loader",
    description: "Automating material handling to increase production speed.",
  },
  {
    name: "Volumetric Doser/Feeder",
    description: "Enabling accurate material blending for consistent results.",
  },
  {
    name: "Mold Temperature Controller",
    description: "Maintaining stable mould temperatures for defect-free output.",
  },
  {
    name: "Batch Mixer",
    description: "Delivering uniform mixtures to meet your stringent quality standards.",
  },
  {
    name: "Air Cooled Water Chiller",
    description: "Providing precision cooling solutions for stable performance.",
  },
  {
    name: "Vertical Mixer with Heater",
    description: "Efficient material mixing with controlled heating.",
  },
  {
    name: "Extrusion Process Controller",
    description: "Precise extrusion control, consistent product quality and efficient production.",
  },
  {
    name: "Gravimetric Dosing & Blending",
    description: "Accurate material dosing, uniform blending and reduced material wastage.",
  },
] as const;

export type NavItem = { label: string; href: string; mega?: boolean };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Products", href: "/products", mega: true },
  { label: "Application", href: "/application" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];
