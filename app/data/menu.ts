export type SelectedItem = {
  name: string;
  description: string;
  image: string;
};

export type MenuItem = {
  name: string;
  clickable?: boolean;
  description?: string;
  image?: string;
};

export type PackageItem = {
  name: string;
  skewers: string;
  time: string;
};

export const packages: PackageItem[] = [
  {
    name: "Package A",
    skewers: "200 skewers",
    time: "2 hours of live grilling service",
  },
  {
    name: "Package B",
    skewers: "300 skewers",
    time: "2 hours of live grilling service",
  },
  {
    name: "Package C",
    skewers: "500 skewers",
    time: "2–3 hours of live grilling service",
  },
  {
    name: "Package D",
    skewers: "700 skewers",
    time: "2–3 hours of live grilling service",
  },
  {
    name: "Package E",
    skewers: "1000 skewers",
    time: "3+ hours of live grilling service",
  },
];

export const menuA: MenuItem[] = [
  {
    name: "Negima (Chicken Thigh & Japanese Scallion)",
    clickable: true,
    description:
      "Juicy chicken thigh and Japanese scallion grilled over binchotan.",
    image: "/negimav3.jpg",
  },
  {
    name: "Tsukune (Chicken Meatball)",
    clickable: true,
    description:
      "Hand-formed chicken meatball glazed with tare and grilled over binchotan.",
    image: "/tsukunev3.jpg",
  },
  {
    name: "Chicken Heart",
    clickable: true,
    description: "Tender chicken heart grilled over binchotan.",
    image: "/chickenheartsv2.jpg",
  },
  {
    name: "Chicken Gizzard",
    clickable: true,
    description: "Tender chicken gizzard grilled over binchotan.",
    image: "/chicken-gizzardv2.jpg",
  },
  {
    name: "Mushroom",
    clickable: true,
    description: "Fresh mushroom grilled over binchotan.",
    image: "/mushroomv2.jpg",
  },
  {
    name: "Cherry Tomatoes",
    clickable: true,
    description: "Juicy cherry tomatoes grilled over binchotan.",
    image: "/cherry-tomatoesv2.jpg",
  },
  {
    name: "Shishito Peppers",
    clickable: true,
    description: "Delicate shishito peppers grilled over binchotan.",
    image: "/shishito2.jpg",
  },
];

export const menuB: MenuItem[] = [
  {
    name: "Top Sirloin Beef Cubes",
    clickable: true,
    description: "Tender top sirloin beef cubes grilled over binchotan.",
    image: "/beef-cubesv2.jpg",
  },
  {
    name: "Pork Belly",
    clickable: true,
    description: "Tender pork belly grilled over binchotan.",
    image: "/pork-bellyv2.jpg",
  },
  {
    name: "Bacon-Wrapped Shishito Peppers",
    clickable: true,
    description:
      "Delicate shishito peppers wrapped in bacon and grilled over binchotan.",
    image: "/bacon-wrapped-shishito-peppersv2.jpg",
  },
];