export const products = [
  {
    id: 1,
    brand: "NIKE",
    name: "Dunk Low x Stüssy",
    price: 320,
    image: "/assets/images/products/dunk-low.jpg",
    category: "low",
    featured: true,
    description: "Iconic collaboration between Nike and Stüssy"
  },
  {
    id: 2,
    brand: "JORDAN",
    name: "Air Jordan 1 Mid",
    price: 285,
    image: "/assets/images/products/air-jordan.jpg",
    category: "mid",
    featured: true,
    description: "Classic Air Jordan silhouette"
  },
  {
    id: 3,
    brand: "ADIDAS",
    name: "Superstar Classic",
    price: 140,
    image: "/assets/images/products/superstar.jpg",
    category: "low",
    featured: true,
    description: "Timeless Adidas Superstar design"
  },
  {
    id: 4,
    brand: "CONVERSE",
    name: "Chuck 70 Hi",
    price: 110,
    image: "/assets/images/products/chuck-70.jpg",
    category: "high",
    featured: true,
    description: "Vintage-inspired Converse Chuck Taylor"
  },
  {
    id: 5,
    brand: "NIKE",
    name: "Nike React Infinity Run Flyknit",
    price: 160,
    image: "/assets/images/products/react-infinity.jpg",
    category: "low",
    featured: false,
    description: "Advanced running shoe with responsive cushioning"
  },
  {
    id: 6,
    brand: "JORDAN",
    name: "Air Jordan Retro 11",
    price: 220,
    image: "/assets/images/products/jordan-11.jpg",
    category: "mid",
    featured: false,
    description: "Premium retro Jordan basketball sneaker"
  },
  {
    id: 7,
    brand: "REEBOK",
    name: "Classic Leather Legacy",
    price: 95,
    image: "/assets/images/products/reebok-classic.jpg",
    category: "low",
    featured: false,
    description: "Clean vintage-inspired Reebok silhouette"
  },
  {
    id: 8,
    brand: "STÜSSY",
    name: "Nike SB Dunk Low Stüssy Fossil",
    price: 350,
    image: "/assets/images/products/stussy-dunk.jpg",
    category: "low",
    featured: false,
    description: "Limited edition collaboration with premium quality"
  },
];
 
export const brands = [
  { name: "Nike", logo: "/assets/images/brands/nike.png" },
  { name: "Jordan", logo: "/assets/images/brands/jordan.png" },
  { name: "Adidas", logo: "/assets/images/brands/adidas.png" },
  { name: "Converse", logo: "/assets/images/brands/converse.png" },
  { name: "Reebok", logo: "/assets/images/brands/reebok.png" },
  { name: "Stüssy", logo: "/assets/images/brands/stussy.png" },
];
 
export const allBrands = [
  { id: "all", label: "ALL", selected: true },
  { id: "nike", label: "NIKE", selected: false },
  { id: "jordan", label: "JORDAN", selected: false },
  { id: "adidas", label: "ADIDAS", selected: false },
  { id: "converse", label: "CONVERSE", selected: false },
  { id: "reebok", label: "REEBOK", selected: false },
  { id: "stussy", label: "STÜSSY", selected: false },
];
 
export const categories = [
  { id: "all", label: "ALL", selected: true },
  { id: "low", label: "LOW", selected: false },
  { id: "mid", label: "MID", selected: false },
  { id: "high", label: "HIGH", selected: false },
];
 