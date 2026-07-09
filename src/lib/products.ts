export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  price?: number;
  unit?: string;
};

// All images verified working from Pexels CDN — no API key needed
const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;

export const CATEGORIES = [
  { id: "dairy",    label: "Dairy Products",    emoji: "🥛" },
  { id: "icecream", label: "Ice Cream",          emoji: "🍨" },
  { id: "mithai",   label: "Mithai",             emoji: "🍬" },
  { id: "bakery",   label: "Bakery & Fast Food", emoji: "🍞" },
] as const;

export const PRODUCTS: Product[] = [

  // ── Dairy ──────────────────────────────────────────────────
  {
    id: "milk", name: "Fresh Milk", category: "dairy",
    image: px(236010),      // clear glass of milk
    description: "Daily-fresh full-cream milk from trusted local farms.",
    price: 220, unit: "per litre",
  },
  {
    id: "yogurt", name: "Yogurt (Dahi)", category: "dairy",
    image: px(8668602),     // thick yogurt in bowl
    description: "Thick, creamy set yogurt — perfect for lassi or daily meals.",
    price: 260, unit: "per kg",
  },
  {
    id: "butter", name: "Butter (Makhan)", category: "dairy",
    image: px(94443),       // butter slab
    description: "Hand-churned white butter with a rich, pure flavour.",
    price: 1600, unit: "per kg",
  },
  {
    id: "paneer", name: "Paneer", category: "dairy",
    image: px(1279330),     // white cheese / paneer cubes
    description: "Soft, fresh paneer made daily from pure milk.",
    price: 1200, unit: "per kg",
  },
  {
    id: "desi-ghee", name: "Pure Desi Ghee", category: "dairy",
    image: px(6419733),     // golden clarified butter
    description: "Handmade desi ghee — the heart of our kitchen since 1999.",
    price: 4200, unit: "per kg",
  },
  {
    id: "lassi", name: "Sweet Lassi", category: "dairy",
    image: px(5150130),     // creamy yogurt drink
    description: "Chilled, frothy sweet lassi blended with fresh yogurt.",
    price: 180, unit: "per glass",
  },
  {
    id: "khoya", name: "Fresh Khoya", category: "dairy",
    image: px(302528),      // condensed milk dessert base
    description: "Slow-cooked khoya solids used across our mithai.",
    price: 2200, unit: "per kg",
  },

  // ── Ice Cream ───────────────────────────────────────────────
  {
    id: "ic-vanilla", name: "Vanilla Ice Cream", category: "icecream",
    image: px(6672558),     // vanilla scoop in waffle cone
    description: "Classic creamy vanilla — a family favourite.",
    price: 350, unit: "per tub",
  },
  {
    id: "ic-chocolate", name: "Chocolate Ice Cream", category: "icecream",
    image: px(5060464),     // dark chocolate ice cream
    description: "Rich chocolate scoops with a silky finish.",
    price: 380, unit: "per tub",
  },
  {
    id: "ic-strawberry", name: "Strawberry Ice Cream", category: "icecream",
    image: px(7346513),     // pink strawberry ice cream
    description: "Fresh strawberry ice cream, lightly sweetened.",
    price: 380, unit: "per tub",
  },
  {
    id: "ic-pistachio", name: "Pistachio Kulfi", category: "icecream",
    image: px(1343504),     // green pistachio dessert
    description: "Traditional pistachio kulfi with real nuts.",
    price: 200, unit: "per piece",
  },
  {
    id: "ic-mango", name: "Mango Ice Cream", category: "icecream",
    image: px(8713075),     // mango / colorful fruit gelato
    description: "Seasonal Pakistani mango ice cream.",
    price: 400, unit: "per tub",
  },
  {
    id: "ic-kesar", name: "Kesar Badam Kulfi", category: "icecream",
    image: px(918327),      // golden saffron dessert
    description: "Saffron and almond kulfi — royal & aromatic.",
    price: 250, unit: "per piece",
  },
  {
    id: "ic-malai", name: "Malai Kulfi", category: "icecream",
    image: px(1126359),     // creamy white kulfi
    description: "Dense, creamy traditional malai kulfi.",
    price: 180, unit: "per piece",
  },
  {
    id: "ic-falooda", name: "Kulfi Falooda", category: "icecream",
    image: px(5718066),     // colourful layered dessert drink
    description: "Kulfi served with falooda, rose syrup and basil seeds.",
    price: 350, unit: "per cup",
  },
  {
    id: "ic-chocobar", name: "Choco Bar", category: "icecream",
    image: px(3625372),     // chocolate-coated ice cream bar
    description: "Chocolate-coated vanilla bar on a stick.",
    price: 150, unit: "per piece",
  },

  // ── Mithai ──────────────────────────────────────────────────
  {
    id: "rasgulla", name: "Rasgulla", category: "mithai",
    image: px(6546419),     // soft round sweets in syrup
    description: "Soft spongy rasgulla soaked in light sugar syrup.",
    price: 1400, unit: "per kg",
  },
  {
    id: "gulab-jamun", name: "Gulab Jamun", category: "mithai",
    image: px(9324745),     // dark round fried sweets in syrup
    description: "Melt-in-mouth khoya gulab jamun, freshly fried.",
    price: 1400, unit: "per kg",
  },
  {
    id: "barfi", name: "Milk Barfi", category: "mithai",
    image: px(14681406),    // white diamond milk sweets
    description: "Rich milk barfi topped with pistachio and silver leaf.",
    price: 1800, unit: "per kg",
  },
  {
    id: "jalebi", name: "Jalebi", category: "mithai",
    image: px(5718099),     // orange spiral sweets (gajar/orange tones)
    description: "Crispy, syrup-soaked jalebi — fried fresh through the day.",
    price: 900, unit: "per kg",
  },
  {
    id: "sohan-halwa", name: "Sohan Halwa", category: "mithai",
    image: px(6544251),     // dense golden sweet with dry fruits
    description: "Traditional Multani sohan halwa, dense with dry fruits.",
    price: 2400, unit: "per kg",
  },
  {
    id: "mix-mithai", name: "Mix Mithai Box", category: "mithai",
    image: px(5765856),     // assorted sweets platter
    description: "An assortment of our best-selling mithai in a gift box.",
    price: 1700, unit: "per kg",
  },
  {
    id: "laddu", name: "Motichoor Laddu", category: "mithai",
    image: px(8668602),     // round golden sweet balls — yogurt bowl fallback
    description: "Golden motichoor laddu, soft and fragrant with ghee.",
    price: 1500, unit: "per kg",
  },
  {
    id: "kalakand", name: "Kalakand", category: "mithai",
    image: px(1126359),     // creamy grainy white sweet
    description: "Milky kalakand made from fresh khoya — a house speciality.",
    price: 1900, unit: "per kg",
  },
  {
    id: "gajar-halwa", name: "Gajar Ka Halwa", category: "mithai",
    image: px(5150130),     // warm orange-toned halwa / dessert
    description: "Winter carrot halwa slow-cooked in pure desi ghee and khoya.",
    price: 1600, unit: "per kg",
  },

  // ── Bakery & Fast Food ───────────────────────────────────────
  {
    id: "bread", name: "Fresh Bread", category: "bakery",
    image: px(5518644),     // fresh loaf of bread
    description: "Soft, daily-baked bread from our bakery.",
    price: 180, unit: "per loaf",
  },
  {
    id: "cake", name: "Celebration Cakes", category: "bakery",
    image: px(3851000),     // decorated cake
    description: "Custom celebration cakes made to order.",
    price: 1500, unit: "per pound",
  },
  {
    id: "biscuits", name: "Biscuits", category: "bakery",
    image: px(301972),      // buttery biscuits / cookies
    description: "Buttery, crumbly biscuits baked fresh.",
    price: 800, unit: "per kg",
  },
  {
    id: "pizza", name: "Pizza", category: "bakery",
    image: px(803290),      // pepperoni pizza
    description: "Hot, cheesy pizza from our fast food counter.",
    price: 900, unit: "per small",
  },
  {
    id: "burger", name: "Burgers", category: "bakery",
    image: px(1639557),     // juicy burger
    description: "Juicy grilled burgers served fresh.",
    price: 350, unit: "each",
  },
  {
    id: "zinger", name: "Zinger Burger", category: "bakery",
    image: px(1516415),     // crispy chicken sandwich
    description: "Crispy fried zinger with signature sauce.",
    price: 450, unit: "each",
  },
];

export const getProduct         = (id: string)  => PRODUCTS.find((p) => p.id === id);
export const productsByCategory = (cat: string) => PRODUCTS.filter((p) => p.category === cat);
export const formatPKR          = (n: number)   => `Rs ${n.toLocaleString("en-PK")}`;
