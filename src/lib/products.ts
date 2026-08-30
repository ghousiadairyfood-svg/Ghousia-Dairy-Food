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
import pizzaImg from "@/assets/pizza.jpg";
import burgerImg from "@/assets/burger.jpg";
import wingsImg from "@/assets/wings.jpg";
import friesImg from "@/assets/fries.jpg";
import shawarmaImg from "@/assets/shawarma.jpg";
import pastaImg from "@/assets/pasta.jpg";
import sandwichImg from "@/assets/sandwich.jpg";
import rollWrapImg from "@/assets/roll-wrap.jpg";
import coldDrinkImg from "@/assets/cold-drink.jpg";
import appetizerImg from "@/assets/appetizer.jpg";
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
  { id: "pizza",    label: "Pizza",                          emoji: "", group: "fastfood" },
  { id: "zingers",  label: "Zingers",                        emoji: "", group: "fastfood" },
  { id: "wings",    label: "Wings",                          emoji: "", group: "fastfood" },
  { id: "shawarma", label: "Shawarma",                       emoji: "", group: "fastfood" },
  { id: "fries",    label: "Fries",                          emoji: "", group: "fastfood" },
  { id: "sandwiches",label: "Sandwiches",                    emoji: "", group: "fastfood" },
  { id: "pasta",    label: "Pasta",                          emoji: "", group: "fastfood" },
] as const;

export const PRODUCTS: Product[] = [
  // ── Dairy ──────────────────────────────────────────────────
  {
    id: "milk",
    name: "Fresh Milk",
    category: "dairy",
    image: freshMilkImg,
    description: "Daily-fresh full-cream milk from trusted local farms.",
    price: 220,
    unit: "per litre",
  },
  {
    id: "yogurt",
    name: "Yogurt (Dahi)",
    category: "dairy",
    image: yogurtImg,
    description: "Thick, creamy set yogurt — perfect for lassi or daily meals.",
    price: 260,
    unit: "per kg",
  },
  {
    id: "butter",
    name: "Butter (Makhan)",
    category: "dairy",
    image: butterImg,
    description: "Hand-churned white butter with a rich, pure flavour.",
    price: 1600,
    unit: "per kg",
  },

  {
    id: "desi-ghee",
    name: "Pure Desi Ghee",
    category: "dairy",
    image: pureDesiGheeImg,
    description: "Handmade desi ghee — the heart of our kitchen since 1999.",
    price: 4200,
    unit: "per kg",
  },
  {
    id: "fresh-cream",
    name: "Fresh Cream",
    category: "dairy",
    image: freshCreamImg,
    description: "Rich, pure fresh cream — perfect for desserts and cooking.",
    price: 800,
    unit: "per kg",
  },
  {
    id: "khoya",
    name: "Fresh Khoya",
    category: "dairy",
    image: freshKhoyaImg,
    description: "Slow-cooked khoya solids used across our mithai.",
    price: 2200,
    unit: "per kg",
  },

  // ── Ice Cream ───────────────────────────────────────────────
  {
    id: "milk-bottle",
    name: "Milk | دودھ کی ٹھنڈی بوتل",
    category: "icecream",
    image: freshMilkImg,
    description: "Pure chilled milk — fresh, cold and ready to drink.",
    price: 120,
    unit: "per bottle",
  },
  {
    id: "qulfa",
    name: "Qulfa",
    category: "icecream",
    image: iceCreamImg, // kulfi ice cream
    description: "Traditional Pakistani qulfa — rich, creamy and made fresh daily.",
    price: 150,
    unit: "per piece",
  },

  // ── Mithai ──────────────────────────────────────────────────

  // Sohan Halwa
  {
    id: "akhroti-sohan-halwa",
    name: "Akhroti Sohan Halwa",
    category: "mithai",
    image: akhrotiSohanHalwaImg,
    description: "Dense Multani sohan halwa loaded with walnuts and dry fruits.",
    price: 2800,
    unit: "per kg",
  },

  // Barfi
  {
    id: "special-barfi",
    name: "Special Barfi",
    category: "mithai",
    image: specialBarfiImg,
    description: "Rich khoya barfi with pistachio and silver leaf — our house special.",
    price: 2200,
    unit: "per kg",
  },
  {
    id: "simple-barfi",
    name: "Simple Barfi",
    category: "mithai",
    image: simpleBarfiImg,
    description: "Classic plain milk barfi, soft and melt-in-mouth.",
    price: 1600,
    unit: "per kg",
  },
  {
    id: "roll-barfi",
    name: "Roll Barfi",
    category: "mithai",
    image: rollBarfiImg,
    description: "Layered roll barfi with a beautiful swirl — great for gifting.",
    price: 1800,
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
    price: 1600,
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
    price: 1400,
    unit: "per kg",
  },
  {
    id: "white-cham-cham",
    name: "White Cham Cham Rasgulla",
    category: "mithai",
    image: whiteChamChamImg,
    description: "Soft white cham cham — delicate and fresh.",
    price: 1600,
    unit: "per kg",
  },
  {
    id: "white-rasgulla",
    name: "White Rasgulla",
    category: "mithai",
    image: whiteRasgullaImg,
    description: "Light white rasgulla in sugar syrup — delicate and fresh.",
    price: 1300,
    unit: "per kg",
  },
  {
    id: "gulabi-rasgulla",
    name: "Gulabi Rasgulla",
    category: "mithai",
    image: gulabiRasgullaImg,
    description: "Pretty pink gulabi rasgulla — soft and fresh.",
    price: 1400,
    unit: "per kg",
  },
  {
    id: "khoya-rasgulla",
    name: "Khoya Rasgulla",
    category: "mithai",
    image: khoyaRasgullaImg,
    description: "Rich khoya-filled rasgulla — indulgent and creamy.",
    price: 1600,
    unit: "per kg",
  },

  // Single items
  {
    id: "kalakand",
    name: "Kalakand",
    category: "mithai",
    image: kalakandImg,
    description: "Milky kalakand made from fresh khoya — a house speciality.",
    price: 1900,
    unit: "per kg",
  },
  {
    id: "pera",
    name: "Peda",
    category: "mithai",
    image: pedaImg,
    description: "Soft traditional peda made from pure khoya and sugar.",
    price: 1400,
    unit: "per kg",
  },
  {
    id: "gajar-halwa",
    name: "Gajar Ka Halwa",
    category: "mithai",
    image: gajarKaHalwaImg,
    description: "Winter carrot halwa slow-cooked in pure desi ghee and khoya.",
    price: 1600,
    unit: "per kg",
  },

  // Laddu
  {
    id: "special-laddu",
    name: "Special Laddu",
    category: "mithai",
    image: specialLadduImg,
    description: "Our signature special laddu — rich, aromatic and handmade.",
    price: 1800,
    unit: "per kg",
  },
  {
    id: "besan-laddu",
    name: "Besan Laddu",
    category: "mithai",
    image: besanLadduImg,
    description: "Classic gram flour laddu roasted in pure ghee.",
    price: 1400,
    unit: "per kg",
  },
  {
    id: "motichoor-laddu",
    name: "Moti Choor Laddu (On Order)",
    category: "mithai",
    image: motiChoorLadduImg,
    description: "Delicate motichoor laddu made fresh on order.",
    price: 1600,
    unit: "per kg",
  },

  // ── Bakery ───────────────────────────────────────────────────
  { id: "bread",     name: "Fresh Bread", category: "bakery", image: freshBreadImg, description: "Soft, daily-baked bread from our bakery.", price: 180, unit: "per loaf" },
  { id: "biscuits",  name: "Biscuits",    category: "bakery", image: biscuitsImg,   description: "Buttery, crumbly biscuits baked fresh.", price: 800, unit: "per kg" },
  { id: "rusk-cake", name: "Cake Rusk",   category: "bakery", image: cakeRuskImg,   description: "Crispy, golden cake rusk — perfect with tea.", price: 400, unit: "per pack" },
  { id: "eggs",      name: "Eggs",        category: "bakery", image: eggsImg,       description: "Fresh farm eggs — available daily.", price: 360, unit: "per dozen" },

  // ── Pizza ────────────────────────────────────────────────────
  // Regular Pizza — Small Rs 499 · Medium Rs 799 · Large Rs 1399
  { id: "tikka-pizza",         name: "Tikka Pizza",         category: "pizza", image: pizzaImg, description: "Zesty tikka chicken on a crispy base. Small Rs 499 · Medium Rs 799 · Large Rs 1399" },
  { id: "fajita-pizza",        name: "Fajita Pizza",        category: "pizza", image: pizzaImg, description: "Loaded fajita chicken with peppers. Small Rs 499 · Medium Rs 799 · Large Rs 1399" },
  { id: "chicken-lover-pizza", name: "Chicken Lover Pizza", category: "pizza", image: pizzaImg, description: "Double chicken topping for the ultimate fan. Small Rs 499 · Medium Rs 799 · Large Rs 1399" },
  { id: "cheese-lover-pizza",  name: "Cheese Lover Pizza",  category: "pizza", image: pizzaImg, description: "Extra cheese pull in every bite. Small Rs 499 · Medium Rs 799 · Large Rs 1399" },
  { id: "vegi-lover-pizza",    name: "Vegi Lover Pizza",    category: "pizza", image: pizzaImg, description: "Fresh garden veggies on a tomato base. Small Rs 499 · Medium Rs 799 · Large Rs 1399" },
  { id: "bbq-pizza",           name: "BBQ Pizza",           category: "pizza", image: pizzaImg, description: "Smoky BBQ sauce with grilled chicken. Small Rs 499 · Medium Rs 799 · Large Rs 1399" },
  { id: "hot-spicy-pizza",     name: "Hot and Spicy Pizza", category: "pizza", image: pizzaImg, description: "Fiery toppings for spice lovers. Small Rs 499 · Medium Rs 799 · Large Rs 1399" },
  { id: "achari-pizza",        name: "Achari Pizza",        category: "pizza", image: pizzaImg, description: "Tangy achari masala with chicken. Small Rs 499 · Medium Rs 799 · Large Rs 1399" },
  { id: "sacilian-pizza",      name: "Sacilian Pizza",      category: "pizza", image: pizzaImg, description: "Classic Sicilian style with rich toppings. Small Rs 499 · Medium Rs 799 · Large Rs 1399" },
  // Special Pizza — Small Rs 599 · Medium Rs 899 · Large Rs 1599
  { id: "mq-special-pizza",       name: "MQ Special Pizza",       category: "pizza", image: pizzaImg, description: "Our chef's signature creation. Small Rs 599 · Medium Rs 899 · Large Rs 1599" },
  { id: "behari-kabab-pizza",     name: "Behari Kabab Pizza",     category: "pizza", image: pizzaImg, description: "Tender behari kabab on a rich base. Small Rs 599 · Medium Rs 899 · Large Rs 1599" },
  { id: "shahi-pizza",            name: "Shahi Pizza",            category: "pizza", image: pizzaImg, description: "Royal Shahi toppings — rich and indulgent. Small Rs 599 · Medium Rs 899 · Large Rs 1599" },
  { id: "bone-fire-pizza",        name: "Bone Fire Pizza",        category: "pizza", image: pizzaImg, description: "Bold smoky flavours with a fiery kick. Small Rs 599 · Medium Rs 899 · Large Rs 1599" },
  { id: "crown-crust-pizza",      name: "Crown Crust Pizza",      category: "pizza", image: pizzaImg, description: "Stuffed crown crust all around the edge. Small Rs 599 · Medium Rs 899 · Large Rs 1599" },
  { id: "afghani-pizza",          name: "Afghani Pizza",          category: "pizza", image: pizzaImg, description: "Aromatic Afghani spices with tender chicken. Small Rs 599 · Medium Rs 899 · Large Rs 1599" },
  { id: "kabab-special-pizza",    name: "Kabab Special Pizza",    category: "pizza", image: pizzaImg, description: "Loaded with juicy kabab pieces. Small Rs 599 · Medium Rs 899 · Large Rs 1599" },
  { id: "supreme-pizza",          name: "Supreme Pizza",          category: "pizza", image: pizzaImg, description: "Everything on one pizza — the works. Small Rs 599 · Medium Rs 899 · Large Rs 1599" },
  { id: "creamy-chicken-pizza",   name: "Creamy Chicken Pizza",   category: "pizza", image: pizzaImg, description: "Creamy white sauce with tender chicken. Small Rs 599 · Medium Rs 899 · Large Rs 1599" },
  { id: "kababish-pizza",         name: "Kababish Pizza",         category: "pizza", image: pizzaImg, description: "Packed with kababish style minced meat. Small Rs 599 · Medium Rs 899 · Large Rs 1599" },
  { id: "malai-boti-pizza",       name: "Malai Boti Pizza",       category: "pizza", image: pizzaImg, description: "Creamy malai boti pieces on a rich base. Small Rs 599 · Medium Rs 899 · Large Rs 1599" },
  // Stuffer Crust Pizza — Medium Rs 1099 · Large Rs 1799
  { id: "kabab-stuffer",          name: "Kabab Stuffer Pizza",          category: "pizza", image: pizzaImg, description: "Stuffed crust loaded with kabab. Medium Rs 1099 · Large Rs 1799" },
  { id: "cheese-stuffer",         name: "Cheese Stuffer Pizza",         category: "pizza", image: pizzaImg, description: "Stuffed crust oozing with cheese. Medium Rs 1099 · Large Rs 1799" },
  { id: "chicken-stuffer",        name: "Chicken Stuffer Pizza",        category: "pizza", image: pizzaImg, description: "Stuffed crust with seasoned chicken. Medium Rs 1099 · Large Rs 1799" },
  { id: "chicken-cheese-stuffer", name: "Chicken Cheese Stuffer Pizza", category: "pizza", image: pizzaImg, description: "Double stuffed — chicken and cheese. Medium Rs 1099 · Large Rs 1799" },

  // ── Zingers ──────────────────────────────────────────────────
  { id: "special-zinger-burger",  name: "Special Zinger Burger",   category: "zingers", image: burgerImg, description: "Our signature crispy zinger — extra special.", price: 399 },
  { id: "zinger-burger",          name: "Zinger Burger",           category: "zingers", image: burgerImg, description: "Classic crispy zinger burger.", price: 319 },
  { id: "chicken-petty-burger",   name: "Chicken Patty Burger",    category: "zingers", image: burgerImg, description: "Juicy grilled chicken patty burger.", price: 269 },
  { id: "pizza-burger",           name: "Pizza Burger",            category: "zingers", image: burgerImg, description: "Pizza flavours packed in a burger bun.", price: 399 },
  { id: "double-daiker-burger",   name: "Double Daiker Burger",    category: "zingers", image: burgerImg, description: "Double patty stacked burger.", price: 449 },
  { id: "mighty-burger",          name: "Mighty Burger",           category: "zingers", image: burgerImg, description: "Our biggest, boldest burger.", price: 599 },
  { id: "crispy-bite",            name: "Crispy Bite (10 pcs)",    category: "zingers", image: appetizerImg, description: "Crispy bite-sized chicken pieces.", price: 350 },
  { id: "nuggets-5",              name: "Nuggets (5 pcs)",         category: "zingers", image: appetizerImg, description: "Tender golden chicken nuggets.", price: 250 },
  { id: "nuggets-10",             name: "Nuggets (10 pcs)",        category: "zingers", image: appetizerImg, description: "Tender golden chicken nuggets — large.", price: 450 },
  { id: "chicken-zone",           name: "Chicken Zone",            category: "zingers", image: appetizerImg, description: "A zone full of crispy chicken.", price: 400 },
  { id: "kabab-zone",             name: "Kabab Zone",              category: "zingers", image: appetizerImg, description: "A zone full of juicy kabab.", price: 450 },
  { id: "cheesy-bread-stick",     name: "Cheesy Bread Stick",      category: "zingers", image: appetizerImg, description: "Oven-baked cheesy bread sticks.", price: 400 },
  { id: "zinger-paratha-roll",    name: "Zinger Paratha Roll",     category: "zingers", image: rollWrapImg,  description: "Crispy zinger wrapped in a paratha.", price: 300 },
  { id: "chicken-cheese-roll",    name: "Chicken Cheese Paratha Roll", category: "zingers", image: rollWrapImg, description: "Chicken and cheese paratha roll.", price: 350 },
  { id: "kababish-paratha-roll",  name: "Kababish Paratha Roll",   category: "zingers", image: rollWrapImg,  description: "Kababish filling in a paratha roll.", price: 300 },
  { id: "behari-roll",            name: "Behari Roll",             category: "zingers", image: rollWrapImg,  description: "Juicy behari kabab roll.", price: 500 },
  { id: "tempeeli-roll",          name: "Tempeeli Roll",           category: "zingers", image: rollWrapImg,  description: "Special tempeeli flavoured roll.", price: 500 },
  { id: "twister-roll",           name: "Twister Roll",            category: "zingers", image: rollWrapImg,  description: "Twisted chicken roll.", price: 250 },
  { id: "tikka-wrap",             name: "Tikka Wrap",              category: "zingers", image: rollWrapImg,  description: "Tikka spiced chicken wrap.", price: 300 },
  { id: "zinger-wrap",            name: "Zinger Wrap",             category: "zingers", image: rollWrapImg,  description: "Crispy zinger wrap.", price: 300 },
  { id: "cold-drink-1ltr",        name: "Cold Drink 1 Ltr",        category: "zingers", image: coldDrinkImg, description: "Chilled 1 litre cold drink.", price: 160 },
  { id: "cold-drink-1-5ltr",      name: "Cold Drink 1.5 Ltr",      category: "zingers", image: coldDrinkImg, description: "Chilled 1.5 litre cold drink.", price: 200 },

  // ── Wings ────────────────────────────────────────────────────
  { id: "fried-wings-6",    name: "Fried Crispy Wings (6 pcs)",  category: "wings", image: wingsImg, description: "Crispy golden fried wings.", price: 300 },
  { id: "fried-wings-12",   name: "Fried Crispy Wings (12 pcs)", category: "wings", image: wingsImg, description: "Crispy golden fried wings — party size.", price: 600 },
  { id: "flaming-wings-6",  name: "Flaming Wings (6 pcs)",       category: "wings", image: wingsImg, description: "Hot and fiery flaming wings.", price: 350 },
  { id: "flaming-wings-12", name: "Flaming Wings (12 pcs)",      category: "wings", image: wingsImg, description: "Hot and fiery flaming wings — party size.", price: 600 },
  { id: "buffalo-wings-6",  name: "Hot Buffalo Wings (6 pcs)",   category: "wings", image: wingsImg, description: "Tangy buffalo sauce wings.", price: 350 },
  { id: "buffalo-wings-12", name: "Hot Buffalo Wings (12 pcs)",  category: "wings", image: wingsImg, description: "Tangy buffalo sauce wings — party size.", price: 600 },

  // ── Shawarma ─────────────────────────────────────────────────
  { id: "chicken-shawarma",       name: "Chicken Shawarma",       category: "shawarma", image: shawarmaImg, description: "Classic chicken shawarma wrap.", price: 220 },
  { id: "cheese-shawarma",        name: "Cheese Shawarma",        category: "shawarma", image: shawarmaImg, description: "Chicken shawarma with extra cheese.", price: 270 },
  { id: "zinger-shawarma",        name: "Zinger Shawarma",        category: "shawarma", image: shawarmaImg, description: "Crispy zinger inside a shawarma wrap.", price: 280 },
  { id: "zinger-cheese-shawarma", name: "Zinger Cheese Shawarma", category: "shawarma", image: shawarmaImg, description: "Zinger shawarma loaded with cheese.", price: 320 },

  // ── Fries ────────────────────────────────────────────────────
  { id: "plain-fries",          name: "Plain Fries",          category: "fries", image: friesImg, description: "Classic salted fries.", price: 150 },
  { id: "masala-fries",         name: "Masala Fries",         category: "fries", image: friesImg, description: "Fries tossed in spicy masala.", price: 200 },
  { id: "special-loaded-fries", name: "Special Loaded Fries", category: "fries", image: friesImg, description: "Small Rs 349 · Large Rs 599" },
  { id: "cheesy-fries",         name: "Cheesy Fries",         category: "fries", image: friesImg, description: "Small Rs 299 · Large Rs 499" },
  { id: "garlic-mayo-fries",    name: "Garlic Mayo Fries",    category: "fries", image: friesImg, description: "Small Rs 299 · Large Rs 499" },
  { id: "pizza-fries",          name: "Pizza Fries",          category: "fries", image: friesImg, description: "Small Rs 299 · Large Rs 549" },

  // ── Sandwiches ───────────────────────────────────────────────
  { id: "club-sandwich",           name: "Club Sandwich",           category: "sandwiches", image: sandwichImg, description: "Classic triple-decker club sandwich.", price: 450 },
  { id: "chicken-sandwich",        name: "Chicken Sandwich",        category: "sandwiches", image: sandwichImg, description: "Grilled chicken in a toasted sandwich.", price: 500 },
  { id: "kamera-sandwich",         name: "Kamera Sandwich",         category: "sandwiches", image: sandwichImg, description: "Special Kamera style sandwich.", price: 650 },
  { id: "mexican-sandwich",        name: "Mexican Sandwich",        category: "sandwiches", image: sandwichImg, description: "Spicy Mexican flavoured sandwich.", price: 650 },
  { id: "chicken-cheese-sandwich", name: "Chicken Cheese Sandwich", category: "sandwiches", image: sandwichImg, description: "Chicken and cheese layered sandwich.", price: 550 },
  { id: "twister-sandwich",        name: "Twister Sandwich",        category: "sandwiches", image: sandwichImg, description: "Twisted flavours in every bite.", price: 650 },

  // ── Pasta ────────────────────────────────────────────────────
  { id: "mq-special-pasta",     name: "MQ Special Pasta",    category: "pasta", image: pastaImg, description: "Small Rs 399 · Large Rs 749" },
  { id: "flaming-pasta",        name: "Flaming Pasta",       category: "pasta", image: pastaImg, description: "Small Rs 349 · Large Rs 649" },
  { id: "creamy-pasta",         name: "Creamy Pasta",        category: "pasta", image: pastaImg, description: "Small Rs 349 · Large Rs 649" },
  { id: "cruncher-pasta",       name: "Cruncher Pasta",      category: "pasta", image: pastaImg, description: "Small Rs 399 · Large Rs 749" },
  { id: "chicken-cheese-pasta", name: "Chicken Cheese Pasta",category: "pasta", image: pastaImg, description: "Small Rs 349 · Large Rs 649" },
];

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);
export const productsByCategory = (cat: string) => PRODUCTS.filter((p) => p.category === cat);
export const formatPKR = (n: number) => `Rs ${n.toLocaleString("en-PK")}`;
