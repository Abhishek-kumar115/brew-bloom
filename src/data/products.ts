import packagingGreen from "@/assets/packaging-green.jpg";
import packagingOrange from "@/assets/packaging-orange.jpg";
import packagingKraft from "@/assets/packaging-kraft.jpg";
import packagingUsa from "@/assets/packaging-usa.jpg";
import greenCoffeeBeans from "@/assets/green-coffee-beans.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  roastLevel?: string;
  origin: string;
  altitude: string;
  weight: string;
  brewingMethods?: string[];
  flavorNotes?: string[];
  image: string;
  packagingImage: string;
}

export const products: Product[] = [
  {
    id: "green-coffee-beans",
    name: "Green Coffee Beans",
    category: "Green Beans",
    shortDescription: "Premium unroasted Arabica beans for roasters",
    fullDescription: "We offer high-quality green coffee beans, ideal for roasters, cafes and entrepreneurs in the industry. We focus on providing consistent batches, with selected varieties and defined flavor profiles, always supporting fair trade and local development.",
    origin: "Chanchamayo, Peru",
    altitude: "1,400 - 1,800 m",
    weight: "12 oz (340g)",
    flavorNotes: ["Citrus", "Chocolate", "Nutty"],
    image: greenCoffeeBeans,
    packagingImage: packagingGreen,
  },
  {
    id: "roasted-coffee-beans",
    name: "Roasted Coffee Beans",
    category: "Roasted Beans",
    shortDescription: "Origin roasted coffee in small batches",
    fullDescription: "We offer origin roasted coffee, carefully selected and roasted in small batches to guarantee exceptional freshness, aroma and flavor. We have different roast profiles (light, medium, dark) and ideal presentations for homes, cafes and businesses.",
    roastLevel: "Medium",
    origin: "Villa Rica, Peru",
    altitude: "1,500 - 2,000 m",
    weight: "12 oz (340g)",
    flavorNotes: ["Caramel", "Brown Sugar", "Smooth"],
    brewingMethods: ["Espresso", "Pour Over", "French Press"],
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600&q=80",
    packagingImage: packagingOrange,
  },
  {
    id: "ground-roasted-coffee",
    name: "Ground Roasted Coffee",
    category: "Ground Coffee",
    shortDescription: "Ready to brew ground coffee blends",
    fullDescription: "Discover the real taste of coffee with our ground blends, ready to prepare in your favorite method. Ideal for French press, Italian coffee maker, filter or traditional method. Perfect for those who value a cup full of flavor, origin and authenticity.",
    roastLevel: "Medium-Dark",
    origin: "Satipo, Peru",
    altitude: "1,200 - 1,600 m",
    weight: "12 oz (340g)",
    flavorNotes: ["Dark Chocolate", "Spice", "Full Body"],
    brewingMethods: ["Drip", "French Press", "Moka Pot"],
    image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=600&q=80",
    packagingImage: packagingKraft,
  },
  {
    id: "espresso-blend",
    name: "Espresso Blend",
    category: "Roasted Beans",
    shortDescription: "Bold espresso blend with crema",
    fullDescription: "Our signature espresso blend combines beans from multiple Peruvian regions for a rich, balanced shot. Features excellent crema production and a deep, satisfying flavor profile perfect for lattes and cappuccinos.",
    roastLevel: "Dark",
    origin: "Multi-Region, Peru",
    altitude: "1,300 - 1,900 m",
    weight: "12 oz (340g)",
    flavorNotes: ["Dark Chocolate", "Walnut", "Smoky"],
    brewingMethods: ["Espresso", "Moka Pot"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
    packagingImage: packagingOrange,
  },
  {
    id: "single-origin-oxapampa",
    name: "Single Origin Oxapampa",
    category: "Roasted Beans",
    shortDescription: "High-altitude specialty from Oxapampa",
    fullDescription: "This exceptional single-origin coffee comes from the highlands of Oxapampa, known for producing some of Peru's finest specialty coffees. Grown at extreme altitudes, these beans develop complex flavors with bright acidity.",
    roastLevel: "Light-Medium",
    origin: "Oxapampa, Peru",
    altitude: "1,800 - 2,200 m",
    weight: "12 oz (340g)",
    flavorNotes: ["Citrus", "Floral", "Honey"],
    brewingMethods: ["Pour Over", "Chemex", "AeroPress"],
    image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&q=80",
    packagingImage: packagingKraft,
  },
  {
    id: "premium-export-blend",
    name: "Premium Export Blend",
    category: "Export Quality",
    shortDescription: "Our finest export-grade specialty coffee",
    fullDescription: "The Premium Export Blend represents the pinnacle of our coffee selection. Carefully curated for international markets, this blend showcases the very best of Peruvian coffee culture with exceptional cup quality scores.",
    roastLevel: "Medium",
    origin: "Central Jungle, Peru",
    altitude: "1,400 - 2,000 m",
    weight: "12 oz (340g)",
    flavorNotes: ["Berries", "Milk Chocolate", "Clean Finish"],
    brewingMethods: ["All Methods"],
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=600&q=80",
    packagingImage: packagingUsa,
  },
];
