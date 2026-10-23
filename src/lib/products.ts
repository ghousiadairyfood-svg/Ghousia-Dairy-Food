import desiGheeImg from "@/assets/desi-ghee.png";
import iceCreamImg from "@/assets/ice-cream.png";
import freshMilkImg from "@/assets/fresh-milk.png";
import yogurtImg from "@/assets/yogurt-dahi.jpg";
import butterImg from "@/assets/butter-makhan.png";
import pureDesiGheeImg from "@/assets/pure-desi-ghee.png";
import freshCreamImg from "@/assets/fresh-cream.png";
import freshKhoyaImg from "@/assets/fresh-khoya.jpg";
import freshBreadImg from "@/assets/fresh-bread.jpg";
import cakeRuskImg from "@/assets/cake-rusk.png";
import biscuitsImg from "@/assets/biscuits.jpg";
import eggsImg from "@/assets/eggs.jpg";
// Mithai images
import akhrotiSohanHalwaImg from "@/assets/akhroti-sohan-halwa.jpg";
import specialBarfiImg from "@/assets/special-barfi.png";
import simpleBarfiImg from "@/assets/simple-barfi.jpg";
import rollBarfiImg from "@/assets/roll-barfi.png";
import brownGulabJamunImg from "@/assets/brown-gulab-jamun.png";
import khoyaGulabJamunImg from "@/assets/khoya-gulab-jamun.png";
import gulabJamunImg from "@/assets/gulab-jamun.png";
import bangaliRasgullaImg from "@/assets/bangali-rasgulla.png";
import whiteChamChamImg from "@/assets/white-cham-cham.webp";
import whiteRasgullaImg from "@/assets/white-rasgulla.jpg";
import gulabiRasgullaImg from "@/assets/gulabi-rasgulla.png";
import khoyaRasgullaImg from "@/assets/khoya-rasgulla.webp";
import kalakandImg from "@/assets/kalakand.jpg";
import pedaImg from "@/assets/peda.png";
import gajarKaHalwaImg from "@/assets/gajar-ka-halwa.png";
import specialLadduImg from "@/assets/special-laddu.jpg";
import besanLadduImg from "@/assets/besan-laddu.jpg";
import motiChoorLadduImg from "@/assets/moti-choor-laddu.jpg";

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
  { id: "dairy",    label: "Dairy Products",                 emoji: "", group: "main" },
  { id: "icecream", label: "Ice Cream and Badami Milk Bottle", emoji: "", group: "main" },
  { id: "mithai",   label: "Mithai",                         emoji: "", group: "main" },
  { id: "bakery",   label: "Bakery",                         emoji: "", group: "bakery" },
] as const;

export const PRODUCTS: Product[] = [
  // ── Dairy ──────────────────────────────────────────────────
  {
    id: "milk",
    name: "Fresh Milk",
    category: "dairy",
    image: freshMilkImg,
    description: "Daily-fresh full-cream milk from trusted local farms.",
    price: 200,
    unit: "per kg",
  },
  {
    id: "yogurt",
    name: "Yogurt (Dahi)",
    category: "dairy",
    image: yogurtImg,
    description: "Thick, creamy set yogurt — perfect for lassi or daily meals.",
    price: 240,
    unit: "per kg",
  },
  {
    id: "butter",
    name: "Butter (Makhan)",
    category: "dairy",
    image: butterImg,
    description: "Hand-churned white butter with a rich, pure flavour.",
    price: 1800,
    unit: "per kg",
  },
  {
    id: "desi-ghee",
    name: "Pure Desi Ghee",
    category: "dairy",
    image: pureDesiGheeImg,
    description: "Handmade desi ghee — the heart of our kitchen since 1999.",
    price: 2200,
    unit: "per kg",
  },
  {
    id: "fresh-cream",
    name: "Fresh Cream",
    category: "dairy",
    image: freshCreamImg,
    description: "Rich, pure fresh cream — perfect for desserts and cooking.",
    price: 1000,
    unit: "per kg",
  },
  {
    id: "khoya",
    name: "Fresh Khoya",
    category: "dairy",
    image: freshKhoyaImg,
    description: "Slow-cooked khoya solids used across our mithai.",
    price: 900,
    unit: "per kg",
  },

  // ── Ice Cream ───────────────────────────────────────────────
  {
    id: "milk-bottle",
    name: "Milk | دودھ کی ٹھنڈی بوتل",
    category: "icecream",
    image: freshMilkImg,
    description: "Pure chilled milk — fresh, cold and ready to drink.",
    price: 100,
    unit: "per bottle",
  },
  {
    id: "qulfa",
    name: "Signature Kulfa Ice Cream",
    category: "icecream",
    image: iceCreamImg,
    description: "Small cup 1 scoop Rs 60 · Large cup 2 scoops Rs 120. Rich, creamy kulfa made fresh daily.",
    price: 60,
    unit: "small cup",
  },

  // ── Mithai ──────────────────────────────────────────────────

  // Sohan Halwa
  {
    id: "akhroti-sohan-halwa",
    name: "Akhroti Sohan Halwa",
    category: "mithai",
    image: akhrotiSohanHalwaImg,
    description: "Dense Multani sohan halwa loaded with walnuts and dry fruits.",
    price: 1300,
    unit: "per kg",
  },

  // Barfi
  {
    id: "special-barfi",
    name: "Special Barfi",
    category: "mithai",
    image: specialBarfiImg,
    description: "Rich khoya barfi with pistachio and silver leaf — our house special.",
    price: 1200,
    unit: "per kg",
  },
  {
    id: "mix-mithai",
    name: "Mix Mithai",
    category: "mithai",
    image: specialBarfiImg,
    description: "An assortment of our best-selling mithai — perfect for gifting.",
    price: 800,
    unit: "per kg",
  },
  {
    id: "badam-pak",
    name: "Badam Pak",
    category: "mithai",
    image: specialBarfiImg,
    description: "Rich almond sweet made with pure ghee, milk and dry fruits.",
    price: 1300,
    unit: "per kg",
  },
  {
    id: "khajoor-pak",
    name: "Khajoor Pak",
    category: "mithai",
    image: specialBarfiImg,
    description: "Wholesome date sweet packed with dry fruits and natural sweetness.",
    price: 1300,
    unit: "per kg",
  },
  {
    id: "simple-barfi",
    name: "Simple Barfi",
    category: "mithai",
    image: simpleBarfiImg,
    description: "Classic plain milk barfi, soft and melt-in-mouth.",
    price: 800,
    unit: "per kg",
  },
  {
    id: "roll-barfi",
    name: "Roll Barfi",
    category: "mithai",
    image: rollBarfiImg,
    description: "Layered roll barfi with a beautiful swirl — great for gifting.",
    price: 800,
    unit: "per kg",
  },

  // Gulab Jamun
  {
    id: "brown-gulab-jamun",
    name: "Brown Gulab Jamun",
    category: "mithai",
    image: brownGulabJamunImg,
    description: "Classic deep-fried brown gulab jamun soaked in sugar syrup.",
    price: 1200,
    unit: "per kg",
  },
  {
    id: "khoya-gulab-jamun",
    name: "Khoya Gulab Jamun",
    category: "mithai",
    image: khoyaGulabJamunImg,
    description: "Premium khoya gulab jamun — dense, rich and fresh.",
    price: 1200,
    unit: "per kg",
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    category: "mithai",
    image: gulabJamunImg,
    description: "Freshly made gulab jamun, soft and syrup-soaked.",
    price: 1200,
    unit: "per kg",
  },

  // Rasgulla
  {
    id: "bangali-rasgulla",
    name: "Bangali Rasgulla",
    category: "mithai",
    image: bangaliRasgullaImg,
    description: "Authentic Bengali-style soft spongy rasgulla.",
    price: 1200,
    unit: "per kg",
  },
  {
    id: "white-cham-cham",
    name: "White Cham Cham Rasgulla",
    category: "mithai",
    image: whiteChamChamImg,
    description: "Soft white cham cham — delicate and fresh.",
    price: 1200,
    unit: "per kg",
  },
  {
    id: "white-rasgulla",
    name: "White Rasgulla",
    category: "mithai",
    image: whiteRasgullaImg,
    description: "Light white rasgulla in sugar syrup — delicate and fresh.",
    price: 1200,
    unit: "per kg",
  },
  {
    id: "gulabi-rasgulla",
    name: "Gulabi Rasgulla",
    category: "mithai",
    image: gulabiRasgullaImg,
    description: "Pretty pink gulabi rasgulla — soft and fresh.",
    price: 1200,
    unit: "per kg",
  },
  {
    id: "khoya-rasgulla",
    name: "Khoya Rasgulla",
    category: "mithai",
    image: khoyaRasgullaImg,
    description: "Rich khoya-filled rasgulla — indulgent and creamy.",
    price: 1200,
    unit: "per kg",
  },

  // Single items
  {
    id: "kalakand",
    name: "Kalakand",
    category: "mithai",
    image: kalakandImg,
    description: "Milky kalakand made from fresh khoya — a house speciality.",
    price: 1200,
    unit: "per kg",
  },
  {
    id: "pera",
    name: "Peda",
    category: "mithai",
    image: pedaImg,
    description: "Soft traditional peda made from pure khoya and sugar.",
    price: 1200,
    unit: "per kg",
  },
  {
    id: "gajar-halwa",
    name: "Gajar Ka Halwa",
    category: "mithai",
    image: gajarKaHalwaImg,
    description: "Winter carrot halwa slow-cooked in pure desi ghee and khoya.",
    price: 900,
    unit: "per kg",
  },

  // Laddu
  {
    id: "special-laddu",
    name: "Special Laddu",
    category: "mithai",
    image: specialLadduImg,
    description: "Our signature special laddu — rich, aromatic and handmade.",
    price: 1200,
    unit: "per kg",
  },
  {
    id: "besan-laddu",
    name: "Besan Laddu",
    category: "mithai",
    image: besanLadduImg,
    description: "Classic gram flour laddu roasted in pure ghee.",
    price: 1200,
    unit: "per kg",
  },
  {
    id: "motichoor-laddu",
    name: "Moti Choor Laddu (On Order)",
    category: "mithai",
    image: motiChoorLadduImg,
    description: "Delicate motichoor laddu made fresh on order.",
    price: 1200,
    unit: "per kg",
  },

  // ── Bakery ───────────────────────────────────────────────────
  { id: "bread",     name: "Fresh Bread", category: "bakery", image: freshBreadImg, description: "Soft, daily-baked bread from our bakery.", price: 180, unit: "per loaf" },
  { id: "biscuits",  name: "Biscuits",    category: "bakery", image: biscuitsImg,   description: "Buttery, crumbly biscuits baked fresh.", price: 800, unit: "per kg" },
  { id: "rusk-cake", name: "Cake Rusk",   category: "bakery", image: cakeRuskImg,   description: "Crispy, golden cake rusk — perfect with tea.", price: 400, unit: "per pack" },
  { id: "eggs",      name: "Eggs",        category: "bakery", image: eggsImg,       description: "Fresh farm eggs — available daily.", price: 360, unit: "per dozen" },
];

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);
export const productsByCategory = (cat: string) => PRODUCTS.filter((p) => p.category === cat);
export const formatPKR = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;
