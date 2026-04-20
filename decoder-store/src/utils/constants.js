export const SITE_NAME = "DECODE";
export const SITE_TAGLINE = "THE SNEAKERS CULTURE";
export const SITE_DESCRIPTION = "Curated sneakers from the world's most iconic brands. 100% authentic, hand-picked, delivered fast.";
 
export const NAVIGATION = [
  { label: "HOME", path: "/" },
  { label: "SHOP", path: "/shop" },
  { label: "ABOUT", path: "/about" },
  { label: "SERVICES", path: "/services" },
  { label: "CONTACT", path: "/contact" },
];
 
export const FOOTER_LINKS = {
  shop: [
    { label: "All Sneakers", path: "/shop" },
    { label: "New Collection", path: "/shop?filter=new" },
    { label: "Brands", path: "/shop?filter=brands" },
  ],
  company: [
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ],
};
 
export const CONTACT_INFO = {
  address: "221 Culture Lane, Brooklyn, NY 11211",
  phone: "+1 (212) 555-0199",
  email: "hello@decode.shop",
  instagram: "https://instagram.com",
  twitter: "https://twitter.com",
};
 
export const PRICE_RANGES = {
  min: 0,
  max: 400,
};
 
export const SORTING_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
];
 