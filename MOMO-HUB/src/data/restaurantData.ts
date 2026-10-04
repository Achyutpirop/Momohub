// The Momo Hub - Butwal Data Store
// Centralized configuration for dishes, contact info, gallery, reviews, and features

export interface MenuItem {
  id: string;
  name: string;
  category: 
    | 'STEAM MOMO' 
    | 'JHOL MOMO' 
    | 'KOTHEY MOMO' 
    | 'CHICKEN MOMO' 
    | 'CHICKEN MOMO PLATTER' 
    | 'BUFF MOMO' 
    | 'FRIED MOMO' 
    | 'SPECIAL MOMO';
  description: string;
  price: number;
  formattedPrice: string;
  isNonVeg: boolean;
  meatType?: 'Chicken' | 'Buff' | 'Veg';
  isPopular?: boolean;
  image: string;
  spiciness?: 'Mild' | 'Medium' | 'Hot';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'MOMOS' | 'FOOD & DRINK' | 'VIBE' | 'RESTAURANT';
  image: string;
  caption: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  dateText: string;
  comment: string;
  verified: boolean;
}

export const RESTAURANT_INFO = {
  name: "THE MOMO HUB",
  subname: "BUTWAL",
  tagline: "Where Every Momo Tells a Story.",
  supportingText: "Freshly prepared momos, bold flavors, generous portions, and unbeatable value in the heart of Butwal.",
  address: "Horizon Chowk, Butwal, Lumbini Province 32907, Nepal",
  phone: "974-2907471",
  phoneFormatted: "974-2907471",
  phoneCallable: "tel:+9779742907471",
  openingHours: "Open until 12:00 AM",
  hoursDetail: "Monday – Sunday: 10:00 AM – 12:00 AM",
  priceRange: "Rs 1–500 per person",
  rating: 3.8,
  reviewCount: "235+",
  orderUrl: "https://menumakchha.com/the-momo-hub",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=The+Momo+Hub+Horizon+Chowk+Butwal+Nepal",
};

// Trust badges for hero and highlights
export const TRUST_BADGES = [
  { label: "3.8 Rating", sub: "Verified on Google", icon: "star" },
  { label: "235+ Reviews", sub: "Local foodies", icon: "utensils" },
  { label: "Home Delivery", sub: "Fast to your door", icon: "truck" },
  { label: "Rs 1–500", sub: "Pocket-friendly", icon: "tag" },
];

export const MENU_CATEGORIES = [
  "ALL",
  "STEAM MOMO",
  "JHOL MOMO",
  "KOTHEY MOMO",
  "CHICKEN MOMO",
  "CHICKEN MOMO PLATTER",
  "BUFF MOMO",
  "FRIED MOMO",
  "SPECIAL MOMO",
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "chicken-platter",
    name: "The Chicken Momo Platter",
    category: "CHICKEN MOMO PLATTER",
    description: "The ultimate feast featuring steamed, pan-fried kothey, and crunchy fried chicken momos served with signature fiery red achar and sesame chutney.",
    price: 360,
    formattedPrice: "Rs 360",
    isNonVeg: true,
    meatType: "Chicken",
    isPopular: true,
    image: "/src/assets/images/platter_chicken_momo_1791081578028.jpg",
    spiciness: "Medium"
  },
  {
    id: "chicken-steam",
    name: "Chicken Steamed Momo",
    category: "STEAM MOMO",
    description: "Handmade dumpling wrappers filled with finely minced local chicken, Himalayan herbs, ginger, garlic, and scallions, served with spicy tomato chutney.",
    price: 180,
    formattedPrice: "Rs 180",
    isNonVeg: true,
    meatType: "Chicken",
    isPopular: true,
    image: "/src/assets/images/hero_steaming_momos_1791081562180.jpg",
    spiciness: "Mild"
  },
  {
    id: "chicken-jhol",
    name: "Chicken Jhol Momo",
    category: "JHOL MOMO",
    description: "Juicy chicken momos submerged in a steaming bowl of traditional tangy, nutty, roasted sesame and soybean Himalayan soup with fresh coriander.",
    price: 220,
    formattedPrice: "Rs 220",
    isNonVeg: true,
    meatType: "Chicken",
    isPopular: true,
    image: "/src/assets/images/dish_jhol_momo_1791081590018.jpg",
    spiciness: "Medium"
  },
  {
    id: "chicken-kothey",
    name: "Chicken Kothey Momo",
    category: "KOTHEY MOMO",
    description: "Pan-seared momos pan-fried on a flat grill until the base is deeply golden and crispy while the top remains soft, juicy and steamed.",
    price: 210,
    formattedPrice: "Rs 210",
    isNonVeg: true,
    meatType: "Chicken",
    isPopular: true,
    image: "/src/assets/images/dish_kothey_momo_1791081603153.jpg",
    spiciness: "Mild"
  },
  {
    id: "buff-steam",
    name: "Buff Steamed Momo",
    category: "STEAM MOMO",
    description: "Authentic hearty Nepali water-buffalo minced momo infused with fragrant garam masala, onion, and red chili, served with spicy timur dip.",
    price: 160,
    formattedPrice: "Rs 160",
    isNonVeg: true,
    meatType: "Buff",
    image: "/src/assets/images/hero_steaming_momos_1791081562180.jpg",
    spiciness: "Medium"
  },
  {
    id: "veg-steam",
    name: "Paneer & Veg Steamed Momo",
    category: "STEAM MOMO",
    description: "Delicate steamed momos packed with farm-fresh cabbage, grated paneer, carrots, ginger, and aromatic Himalayan spices, served with fresh tomato achar.",
    price: 140,
    formattedPrice: "Rs 140",
    isNonVeg: false,
    meatType: "Veg",
    image: "/src/assets/images/hero_steaming_momos_1791081562180.jpg",
    spiciness: "Mild"
  },
  {
    id: "buff-jhol",
    name: "Buff Jhol Momo",
    category: "JHOL MOMO",
    description: "Flavor-packed buff momos resting in a hot aromatic broth prepared with roasted spices, garlic, green chilies, and fresh lemon essence.",
    price: 200,
    formattedPrice: "Rs 200",
    isNonVeg: true,
    meatType: "Buff",
    image: "/src/assets/images/dish_jhol_momo_1791081590018.jpg",
    spiciness: "Hot"
  },
  {
    id: "buff-kothey",
    name: "Buff Kothey Momo",
    category: "KOTHEY MOMO",
    description: "Half-fried, half-steamed classic buff momos with delicious blistered golden bottom crunch and intensely juicy meat center.",
    price: 190,
    formattedPrice: "Rs 190",
    isNonVeg: true,
    meatType: "Buff",
    image: "/src/assets/images/dish_kothey_momo_1791081603153.jpg",
    spiciness: "Medium"
  },
  {
    id: "chicken-fried",
    name: "Crispy Fried Chicken Momo",
    category: "FRIED MOMO",
    description: "Golden fried until deeply crunchy, sealing all natural chicken juices inside. Served with spicy creamy dip and tangy chili sauce.",
    price: 200,
    formattedPrice: "Rs 200",
    isNonVeg: true,
    meatType: "Chicken",
    image: "/src/assets/images/platter_chicken_momo_1791081578028.jpg",
    spiciness: "Mild"
  },
  {
    id: "buff-fried",
    name: "Crispy Fried Buff Momo",
    category: "FRIED MOMO",
    description: "Crunchy golden exterior with deeply seasoned buff filing, served alongside house-made spiced ketchup and timur pickle.",
    price: 180,
    formattedPrice: "Rs 180",
    isNonVeg: true,
    meatType: "Buff",
    image: "/src/assets/images/dish_kothey_momo_1791081603153.jpg",
    spiciness: "Medium"
  },
  {
    id: "special-c-momo",
    name: "Chilli C-Momo (Special)",
    category: "SPECIAL MOMO",
    description: "Wok-tossed momos sauteed with diced bell peppers, red onions, garlic, hot green chillies, and tangy dark sweet-and-spicy gravy.",
    price: 240,
    formattedPrice: "Rs 240",
    isNonVeg: true,
    meatType: "Chicken",
    isPopular: true,
    image: "/src/assets/images/platter_chicken_momo_1791081578028.jpg",
    spiciness: "Hot"
  },
  {
    id: "special-sadheko",
    name: "Sadheko Momo (Special)",
    category: "SPECIAL MOMO",
    description: "Crispy momos crushed and tossed with pungent mustard oil, raw red onion rings, fresh cilantro, roasted peanuts, and squeezed lime.",
    price: 230,
    formattedPrice: "Rs 230",
    isNonVeg: true,
    meatType: "Chicken",
    image: "/src/assets/images/platter_chicken_momo_1791081578028.jpg",
    spiciness: "Hot"
  },
  {
    id: "chicken-momo-basket",
    name: "Classic Chicken Momo",
    category: "CHICKEN MOMO",
    description: "Our signature chicken recipe handed down through Himalayan cooking traditions, steamed in round bamboo tiers with two distinct dipping achars.",
    price: 180,
    formattedPrice: "Rs 180",
    isNonVeg: true,
    meatType: "Chicken",
    image: "/src/assets/images/hero_steaming_momos_1791081562180.jpg",
    spiciness: "Mild"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Steaming Bamboo Basket",
    category: "MOMOS",
    image: "/src/assets/images/hero_steaming_momos_1791081562180.jpg",
    caption: "Freshly steamed momos ready for table service with vibrant house achars."
  },
  {
    id: "g2",
    title: "The Chicken Momo Platter",
    category: "MOMOS",
    image: "/src/assets/images/platter_chicken_momo_1791081578028.jpg",
    caption: "Steamed, pan-fried, and crispy fried momos on our signature sharing platter."
  },
  {
    id: "g3",
    title: "Rich Jhol Soup Momo",
    category: "FOOD & DRINK",
    image: "/src/assets/images/dish_jhol_momo_1791081590018.jpg",
    caption: "Warm roasted sesame and soybean jhol with delicate fresh dumplings."
  },
  {
    id: "g4",
    title: "Crispy Sizzling Kothey",
    category: "MOMOS",
    image: "/src/assets/images/dish_kothey_momo_1791081603153.jpg",
    caption: "Golden pan-seared bottoms with tender juicy filling straight from the pan."
  },
  {
    id: "g5",
    title: "The Momo Hub Dining Hall",
    category: "RESTAURANT",
    image: "/src/assets/images/restaurant_ambiance_1791081614792.jpg",
    caption: "Warm ambiance and cozy modern seating at Horizon Chowk, Butwal."
  },
  {
    id: "g6",
    title: "Evening Gathering & Vibe",
    category: "VIBE",
    image: "/src/assets/images/restaurant_ambiance_1791081614792.jpg",
    caption: "The bustling hangout spot for families and momo enthusiasts until midnight."
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Tika Bahadur",
    rating: 5,
    dateText: "Google Reviewer",
    comment: "Outstanding food quality, quantity, hygienic with best prices. All staffs, incharge & whole management team are very friendly, quick response. Food service is outstanding.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Mina Thapa",
    rating: 5,
    dateText: "Google Reviewer",
    comment: "Really when I visited for the first time I enjoyed the outstanding food taste, quantity, fast service and reasonable price.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Razesh Magar",
    rating: 5,
    dateText: "Google Reviewer",
    comment: "Best food at good price and also free home delivery. Thank you The Momo Hub Butwal.",
    verified: true
  }
];

export const WHY_US_FEATURES = [
  {
    id: "fresh",
    iconName: "Sparkles",
    title: "Freshly Made",
    description: "Every order is prepared with care, hand-rolled wrappers and freshly blended spices daily.",
  },
  {
    id: "flavor",
    iconName: "Flame",
    title: "Bold Flavors",
    description: "Rich sauces, fragrant sesame-timur achar, and unforgettable authentic momo flavors.",
  },
  {
    id: "price",
    iconName: "Coins",
    title: "Great Prices",
    description: "Delicious, satisfying food without breaking the budget. Complete meals starting from Rs 160.",
  },
  {
    id: "delivery",
    iconName: "Truck",
    title: "Home Delivery",
    description: "Enjoy your favorite momos hot and fresh delivered right to your doorstep across Butwal.",
  },
  {
    id: "service",
    iconName: "HeartHandshake",
    title: "Friendly Service",
    description: "A welcoming team, quick table response, and hospitable Butwal management.",
  },
  {
    id: "location",
    iconName: "MapPin",
    title: "Perfect Location",
    description: "Conveniently located at Horizon Chowk, Butwal with easy parking and late hours until 12:00 AM.",
  },
];
