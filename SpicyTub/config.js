/**
 * SPICYTUB - RESTAURANT CONFIGURATION & DATA
 * Easily edit restaurant information, contact links, opening hours,
 * menu items, signature dishes, offers, gallery, and reviews here.
 */

const SPICYTUB_CONFIG = {
  // General Restaurant Info
  restaurantName: "SpicyTub",
  tagline: "Authentic Indian Flavours, Served with Passion",
  shortDesc: "Experience rich spices, traditional hand-ground masalas, age-old dum techniques, and unforgettable culinary craftsmanship in a luxury Indian dining atmosphere.",
  
  // Contact Details
  phone: "+91 63851 51563",
  phoneRaw: "+916385151563", // for tel: links
  whatsappNumber: "916385151563", // International format without +
  email: "reservations@spicytub.com",
  address: {
    line1: "Near Central Railway Station, Kannappar Thidal",
    line2: "Periamet, Chennai, Tamil Nadu 600003",
    city: "Chennai",
    country: "India"
  },
  
  // Opening Hours
  timings: {
    lunch: "12:00 PM – 03:30 PM",
    dinner: "07:00 PM – 11:30 PM",
    days: "Monday – Sunday (All 7 Days)"
  },
  
  // Social Links
  socialLinks: {
    instagram: "https://instagram.com/spicytub_restaurant",
    facebook: "https://facebook.com/spicytub",
    maps: "https://maps.google.com/?q=Central+Railway+Station+Chennai",
    tripadvisor: "https://tripadvisor.com"
  },
  
  // Google Maps Embed URL (Central Railway Station, Chennai)
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0076722822765!2d80.2729962758434!3d13.08268011278144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265fa1a8f0969%3A0xc4eb02334dbf22c5!2sPuratchi%20Thalaivar%20Dr.%20M.G.%20Ramachandran%20Central%20Railway%20Station!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // Stats for About Section
  stats: [
    { number: 20, suffix: "+", label: "Signature Dishes" },
    { number: 10, suffix: "+", label: "Years of Flavour" },
    { number: 1000, suffix: "k+", label: "Happy Guests" },
    { number: 4.8, suffix: "★", label: "Customer Rating", isDecimal: true }
  ],

  // Specialities / Categories Showcase
  specialities: [
    {
      id: "biriyani",
      name: "Dum Biriyani",
      desc: "Fragrant long-grain basmati slow-cooked in sealed clay pots with royal saffron & spices.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
      badge: "Royal Dum"
    },
    {
      id: "tandoori",
      name: "Charcoal Tandoor",
      desc: "Marinated overnight in Kashmiri chilies, curd and mustard oil, roasted in clay ovens.",
      image: "images/royal-tandoori-chicken.jpg",
      badge: "Smoky & Tender"
    },
    {
      id: "south-indian",
      name: "South Indian Feasts",
      desc: "Crispy ghee roasts, fluffy idlis, Malabar parottas & Chettinad peppery curries.",
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
      badge: "Traditional"
    },
    {
      id: "north-indian",
      name: "North Indian Delicacies",
      desc: "Rich Mughlai gravies, velvet butter chicken, dal makhani & garlic butter naans.",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
      badge: "Rich & Creamy"
    },
    {
      id: "starters",
      name: "Sizzling Starters",
      desc: "Fiery Chicken 65, crispy Paneer Koliwada, Gobi Manchurian & Andhra Chilli Chicken.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      badge: "Crispy & Zesty"
    },
    {
      id: "curries",
      name: "Aromatic Curries",
      desc: "Simmered for hours in whole spices, caramelized onions, rich cashew nut pastes & ghee.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
      badge: "Hand-Crafted"
    },
    {
      id: "desserts",
      name: "Royal Desserts",
      desc: "Hot Gulab Jamuns, Shahi Tukda, saffron Rasmalai & artisanal Matka Kulfis.",
      image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
      badge: "Sweet Indulgence"
    },
    {
      id: "beverages",
      name: "Refreshing Beverages",
      desc: "Thick Mango Mastani, spiced Masala Chaas, Royal Rose Falooda & South Indian Filter Coffee.",
      image: "https://images.unsplash.com/photo-1571006682866-a590c883163d?auto=format&fit=crop&w=800&q=80",
      badge: "Cooling & Spicy"
    }
  ],

  // Signature Dishes
  signatureDishes: [
    {
      name: "SpicyTub Special Chicken Biriyani",
      category: "biriyani",
      price: "₹380",
      isVeg: false,
      tag: "Chef's Signature",
      desc: "Our crowd-favorite slow-cooked Dum biriyani prepared with tender marinated chicken, saffron rice, caramelized onions, boiled egg, served with mirchi ka salan and burani raita.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Royal Tandoori Chicken",
      category: "tandoor",
      price: "₹420",
      isVeg: false,
      tag: "Charcoal Clay Oven",
      desc: "Spring chicken infused with hung curd, royal Kashmiri degi mirch, and hand-ground garam masala, charcoal-roasted to succulent perfection with mint chutney and pickled onions.",
      image: "images/royal-tandoori-chicken.jpg"
    },
    {
      name: "Old Delhi Butter Chicken",
      category: "main-course",
      price: "₹395",
      isVeg: false,
      tag: "Crowd Favorite",
      desc: "Tender tandoor-roasted chicken tikka simmered in a velvety sauce of ripe sun-dried tomatoes, farm butter, organic cashews, and aromatic kasuri methi.",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Paneer Tikka Angara",
      category: "starters",
      price: "₹320",
      isVeg: true,
      tag: "Vegetarian Delight",
      desc: "Thick cubes of fresh malai paneer marinated in yellow mustard, bishop's weed (ajwain), and roasted gram flour, charred over hot coals with crunchy bell peppers.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Hyderabad Chicken 65",
      category: "starters",
      price: "₹340",
      isVeg: false,
      tag: "Fiery & Crispy",
      desc: "Crispy morsels of chicken tossed in fresh curry leaves, crushed black pepper, fiery green chillies, garlic flakes, and home-ground South Indian spices.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Grand South Indian Thali",
      category: "south-indian",
      price: "₹350",
      isVeg: true,
      tag: "Traditional Feast",
      desc: "Served on fresh banana leaf with aromatic Sona Masoori rice, drumstick sambar, rasam, kootu, poriyal, Malabar parotta, appalam, curd, pickle and warm payasam.",
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Interactive Menu Database
  menu: [
    // Starters
    {
      id: "m1",
      name: "Paneer Tikka Angara",
      category: "starters",
      price: "₹320",
      isVeg: true,
      desc: "Charcoal-roasted cottage cheese skewers infused with Kashmiri chili and ajwain spices.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m2",
      name: "Fiery Chicken 65",
      category: "starters",
      price: "₹340",
      isVeg: false,
      desc: "Crisp chicken bites tossed with fresh curry leaves, red chili paste and cracked cumin.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m3",
      name: "Dahi Ke Kebab",
      category: "starters",
      price: "₹290",
      isVeg: true,
      desc: "Melt-in-mouth hung curd patties seasoned with crushed coriander, green chili and mint.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m4",
      name: "Mutton Sukka Fry",
      category: "starters",
      price: "₹420",
      isVeg: false,
      desc: "Tender goat morsels pan-roasted with shallots, crushed pepper, curry leaves and coconut slices.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m5",
      name: "Gobi Manchurian Crispy",
      category: "starters",
      price: "₹260",
      isVeg: true,
      desc: "Cauliflower florets glazed in dark soy, garlic, spring onions and tangy chili relish.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m6",
      name: "Fish Amritsari",
      category: "starters",
      price: "₹410",
      isVeg: false,
      desc: "Fresh river fish fillets crisp-fried in spiced carom seed gram flour batter.",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
    },

    // Biriyani
    {
      id: "m7",
      name: "SpicyTub Special Chicken Biriyani",
      category: "biriyani",
      price: "₹380",
      isVeg: false,
      desc: "Aromatic dum basmati rice slow-cooked with tender spiced chicken, mint, saffron and fried onions.",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m8",
      name: "Royal Mutton Dum Biriyani",
      category: "biriyani",
      price: "₹490",
      isVeg: false,
      desc: "Succulent bone-in lamb pieces simmered in hand-ground spices layered with long grain rice.",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m9",
      name: "Hyderabadi Veg Dum Biriyani",
      category: "biriyani",
      price: "₹310",
      isVeg: true,
      desc: "Garden fresh seasonal vegetables, paneer cubes, saffron milk and sealed pot dum aroma.",
      image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m10",
      name: "Prawn Ghee Roast Biriyani",
      category: "biriyani",
      price: "₹520",
      isVeg: false,
      desc: "Juicy bay prawns tossed in Mangalorean ghee masala tossed with spiced fragrant rice.",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=600&q=80"
    },

    // Main Course
    {
      id: "m11",
      name: "Old Delhi Butter Chicken",
      category: "main-course",
      price: "₹395",
      isVeg: false,
      desc: "Charcoal-grilled chicken chunks folded in velvet tomato cream and aromatic dried fenugreek.",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m12",
      name: "Dal Makhani 24-Hour Simmer",
      category: "main-course",
      price: "₹290",
      isVeg: true,
      desc: "Black urad lentils slow-cooked overnight with churned butter and ripe tomatoes.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m13",
      name: "Paneer Lababdar",
      category: "main-course",
      price: "₹340",
      isVeg: true,
      desc: "Soft cottage cheese simmered in rich onion-tomato gravy enriched with grated paneer.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m14",
      name: "Chettinad Pepper Chicken Curry",
      category: "main-course",
      price: "₹370",
      isVeg: false,
      desc: "Traditional Tamil Nadu recipe with freshly roasted black pepper, star anise and curry leaves.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80"
    },

    // South Indian
    {
      id: "m15",
      name: "Ghee Roast Masala Dosa",
      category: "south-indian",
      price: "₹180",
      isVeg: true,
      desc: "Golden crispy crepe smeared with pure desi ghee, spiced potato mash, served with trio chutneys & sambar.",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m16",
      name: "Malabar Parotta with Korma",
      category: "south-indian",
      price: "₹240",
      isVeg: true,
      desc: "Flaky layered Kerala parottas paired with aromatic vegetable coconut milk korma.",
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m17",
      name: "Appam with Chicken Stew",
      category: "south-indian",
      price: "₹330",
      isVeg: false,
      desc: "Fermented rice hoppers with lace edges, served with fragrant Kerala coconut chicken stew.",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m18",
      name: "Grand South Indian Meals",
      category: "south-indian",
      price: "₹350",
      isVeg: true,
      desc: "Banana leaf meal with rice, drumstick sambar, pepper rasam, avial, poriyal, curd & dessert.",
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80"
    },

    // North Indian
    {
      id: "m19",
      name: "Amritsari Kulcha with Chole",
      category: "north-indian",
      price: "₹260",
      isVeg: true,
      desc: "Crispy tandoori stuffed bread with spiced potato & paneer, served with spicy Punjabi chole.",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m20",
      name: "Mutton Rogan Josh",
      category: "north-indian",
      price: "₹460",
      isVeg: false,
      desc: "Kashmiri slow-braised lamb shanks infused with alkanet flower, fennel powder and dry ginger.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m21",
      name: "Garlic Butter Naan Basket",
      category: "north-indian",
      price: "₹180",
      isVeg: true,
      desc: "Assortment of Garlic Naan, Laccha Paratha and Missi Roti charred in charcoal tandoor.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    },

    // Tandoor
    {
      id: "m22",
      name: "Royal Tandoori Chicken (Full)",
      category: "tandoor",
      price: "₹420",
      isVeg: false,
      desc: "Marinated overnight in Kashmiri degi mirch, hung curd and mustard oil, roasted in clay oven.",
      image: "images/royal-tandoori-chicken.jpg"
    },
    {
      id: "m23",
      name: "Murgh Malai Tikka",
      category: "tandoor",
      price: "₹380",
      isVeg: false,
      desc: "Melt-in-mouth chicken chunks marinated in cashew paste, cream, cheese and mild white pepper.",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m24",
      name: "Tandoori Soya Chaap",
      category: "tandoor",
      price: "₹290",
      isVeg: true,
      desc: "Succulent soya chops in robust Punjabi tandoori marinade charred to perfection.",
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80"
    },

    // Desserts
    {
      id: "m25",
      name: "Shahi Angoori Rasmalai",
      category: "desserts",
      price: "₹180",
      isVeg: true,
      desc: "Delicate chenna dumplings soaked in thickened saffron cardamom milk, topped with pistachios.",
      image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m26",
      name: "Warm Gulab Jamun with Rabdi",
      category: "desserts",
      price: "₹190",
      isVeg: true,
      desc: "Golden khoya spheres steeped in rose syrup paired with thick slow-reduced Varanasi rabdi.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m27",
      name: "Matka Kesar Pista Kulfi",
      category: "desserts",
      price: "₹160",
      isVeg: true,
      desc: "Traditional Indian slow-reduced frozen milk dessert served in an earthen clay pot.",
      image: "https://images.unsplash.com/photo-1571006682866-a590c883163d?auto=format&fit=crop&w=600&q=80"
    },

    // Beverages
    {
      id: "m28",
      name: "Alphonso Mango Lassi",
      category: "beverages",
      price: "₹150",
      isVeg: true,
      desc: "Thick, creamy churned yogurt blended with authentic Ratnagiri Alphonso mango pulp.",
      image: "https://images.unsplash.com/photo-1571006682866-a590c883163d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m29",
      name: "Royal Rose Falooda",
      category: "beverages",
      price: "₹220",
      isVeg: true,
      desc: "Layers of rose syrup, basil seeds, vermicelli, chilled milk topped with vanilla kulfi and nuts.",
      image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "m30",
      name: "South Indian Degree Filter Coffee",
      category: "beverages",
      price: "₹90",
      isVeg: true,
      desc: "Freshly brewed peaberry chicory decoction with frothed whole milk in brass davarah.",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // Promotional Offers
  offers: [
    {
      title: "Royal Family Feast Combo",
      subtitle: "Feeds 4-5 Persons",
      price: "₹1,499",
      originalPrice: "₹1,850",
      discount: "Save 20%",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
      desc: "Includes 2 Chicken Dum Biriyanis, 1 Butter Chicken, 4 Butter Naans, Chicken 65, Raita, Salan & 4 Gulab Jamuns."
    },
    {
      title: "Weekend Tandoori Special",
      subtitle: "Saturday & Sunday Exclusive",
      price: "₹799",
      originalPrice: "₹999",
      discount: "Save 20%",
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
      desc: "Full Charcoal Tandoori Chicken, Murgh Malai Tikka (4 pcs), Garlic Naan (2 pcs) and complimentary Mint Chaas."
    },
    {
      title: "Executive Lunch Combo",
      subtitle: "Mon - Fri | 12:00 PM – 03:30 PM",
      price: "₹299",
      originalPrice: "₹420",
      discount: "Flat 28% Off",
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
      desc: "Choice of Paneer Lababdar or Butter Chicken, Dal Makhani, Jeera Rice, 2 Rotis, Gulab Jamun & Crisp Papad."
    },
    {
      title: "Couple Candlelight Feast",
      subtitle: "Special Dinner Experience",
      price: "₹999",
      originalPrice: "₹1,250",
      discount: "Save ₹250",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      desc: "2 Starters, 1 Signature Curry, 1 Dum Biriyani, 2 Beverages & Matka Kesar Pista Kulfi for two."
    },
    {
      title: "Grand Biriyani Bonanza",
      subtitle: "Every Tuesday Special",
      price: "Buy 1 Get 1 at 50%",
      originalPrice: "Regular Rates",
      discount: "Best Value",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
      desc: "Order any Signature Dum Biriyani and get the second biriyani of equal or lesser value at half price!"
    }
  ],

  // Gallery Photos
  gallery: [
    {
      title: "Hand-Crafted Clay Pot Dum Biriyani",
      category: "Special Dishes",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Spicy Charcoal Tandoori Preparation",
      category: "Tandoor",
      image: "images/royal-tandoori-chicken.jpg"
    },
    {
      title: "Royal Amber Dining Lounge",
      category: "Restaurant Interior",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Master Chef Plating Signature Gravies",
      category: "Chef in Action",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Golden Desi Ghee Dosa & Chutneys",
      category: "South Indian",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Warm Shahi Rasmalai & Pistachios",
      category: "Desserts",
      image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Warm Hospitality & Group Gatherings",
      category: "Dining Area",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85"
    },
    {
      title: "Fiery Chicken 65 Sizzler",
      category: "Starters",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=85"
    }
  ],

  // Customer Reviews
  reviews: [
    {
      name: "Vikramaditya Sharma",
      role: "Food Connoisseur",
      rating: 5,
      date: "2 days ago",
      comment: "SpicyTub's Dum Biriyani is hands down the best in the city. The aroma when the earthen seal was cracked open at our table was pure magic. The spices are nuanced and rich, not just burning hot. Exceptional service!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Pooja Hegde & Family",
      role: "Regular Diners",
      rating: 5,
      date: "1 week ago",
      comment: "Celebrated my parents' 30th anniversary here. The staff took such great care of our table reservation and customized the spice level for my mother. The Butter Chicken and Garlic Naan melt in your mouth!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Arjun Nair",
      role: "Tech Lead & Weekend Foodie",
      rating: 5,
      date: "2 weeks ago",
      comment: "Authentic South Indian flavours alongside rich Mughlai curries. Usually restaurants fail when mixing cuisines, but SpicyTub masters both with perfection. Highly recommend the Mutton Sukka and Ghee Roast!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Ananya Deshmukh",
      role: "Corporate Event Host",
      rating: 5,
      date: "3 weeks ago",
      comment: "Reserved the dining lounge for a team of 18 people. Every single dish came out hot, fresh, and bursting with flavour. Seamless WhatsApp reservation support made coordination effortless.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Karan Johar Patel",
      role: "Biriyani Enthusiast",
      rating: 5,
      date: "1 month ago",
      comment: "The ambiance is stunning with dark charcoal walls, warm brass lamps, and gentle Indian instrumental tunes. Truly a fine-dining jewel with honest prices.",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80"
    }
  ],

  // Instagram Feed Photos
  instagramPosts: [
    {
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=500&q=80",
      likes: "1.2k",
      caption: "Layered to perfection: Dum Biriyani secrets from the royal kitchen #SpicyTub"
    },
    {
      image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=500&q=80",
      likes: "940",
      caption: "Charred over red coals. The tandoor is roaring tonight! 🔥"
    },
    {
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=500&q=80",
      likes: "1.5k",
      caption: "Crispy ghee roast goodness for your Sunday soul #DosaLovers"
    },
    {
      image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=500&q=80",
      likes: "2.1k",
      caption: "Velvet Butter Chicken with smoky butter garlic naan ✨"
    },
    {
      image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=500&q=80",
      likes: "890",
      caption: "Pure saffron and fresh milk dessert heaven 🍨 #Rasmalai"
    },
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=500&q=80",
      likes: "1.8k",
      caption: "Warm ambiance awaits your next dinner celebration at SpicyTub."
    }
  ]
};

// Export to window
window.SPICYTUB_CONFIG = SPICYTUB_CONFIG;
