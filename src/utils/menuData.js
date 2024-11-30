// Import Images
import AvocadoToast from "../assets/avocadotoast.webp";
import Beer from "../assets/beer.webp";
import BreakfastBurrito from "../assets/breakfastburrito.webp";
import CaesarSalad from "../assets/caesarsalad.jpeg";
import Cheesecake from "../assets/cheesecake.webp";
import ChocolateCake from "../assets/chocolatecake.webp";
import GarlicBread from "../assets/garlicbread.webp";
import IcedTea from "../assets/icedtea.webp";
import Lemonade from "../assets/lemonade.webp";
import Margarita from "../assets/margarita.webp";
import Mojito from "../assets/mojito.webp";
import Omelette from "../assets/omelette.jpg";
import Pancakes from "../assets/pancakes.webp";
import Pepsi from "../assets/pepsi.webp";
import RedWine from "../assets/redwine.webp";
import RootBeer from "../assets/rootbeer.webp";
import Salmon from "../assets/salmon.webp";
import Smoothie from "../assets/smoothie.webp";
import Spaghetti from "../assets/spaghetti.webp";
import SteakFrites from "../assets/steakfrites.webp";
import StuffedMushrooms from "../assets/stuffedmushrooms.webp";
import Sundae from "../assets/sundae.webp";
import WhiteWine from "../assets/whitewine.webp";
import Wings from "../assets/wings.webp";
import Cocacola from "../assets/cocacola.webp";
import sevenup from "../assets/7up.webp";
import pizza from "../assets/pizza.webp";
import kunafa from "../assets/kunafa.webp";

// Menu Data
const menuData = [
  // Food Items
  {
    id: 1,
    name: "Avocado Toast",
    category: "Food",
    price: 12.99,
    popularity: 95,
    rating: 4.5,
    numReviews: 150,
    image: AvocadoToast,
    tags: ["Breakfast", "Vegan"],
    estimatedTime: 10,
    description:
      "Deliciously creamy avocado spread generously on perfectly toasted sourdough bread, garnished with fresh tomatoes, red pepper flakes, and chives for an extra burst of flavor.",
    customizations: [
      {
        name: "Toppings",
        options: ["Tomatoes", "Red Pepper Flakes", "Chives", "Extra Avocado"],
        removable: true,
      },
    ],
  },
  {
    id: 2,
    name: "Pizza",
    category: "Food",
    price: 14.99,
    popularity: 95,
    rating: 4.5,
    numReviews: 150,
    image: pizza,
    tags: ["Lunch", "Dinner"],
    estimatedTime: 20,
    description:
      "Classic pepperoni pizza with a golden, crispy crust, topped with melted mozzarella cheese, pepperoni slices, and a vibrant tomato sauce. Perfect for a satisfying lunch or dinner.",
    customizations: [
      {
        name: "Toppings",
        options: [
          "Extra Cheese",
          "Pepperoni",
          "Mushrooms",
          "Olives",
          "Onions",
          "Green Peppers",
        ],
        removable: true,
      },
    ],
    reviews: [
      {
        username: "Charlie",
        rating: 5,
        comment: "Best pizza in town!",
        date: "2023-09-20",
      },
      {
        username: "Dana",
        rating: 4,
        comment: "Good taste but a bit too greasy.",
        date: "2023-09-22",
      },
    ],
  },
  {
    id: 3,
    name: "Breakfast Burrito",
    category: "Food",
    price: 9.99,
    popularity: 90,
    rating: 4.7,
    numReviews: 200,
    image: BreakfastBurrito,
    tags: ["Breakfast", "Spicy"],
    estimatedTime: 15,
    description:
      "A hearty flour tortilla filled with fluffy scrambled eggs, melted cheese, savory salsa, and your choice of fillings, perfect for a satisfying start to your day.",
    customizations: [
      {
        name: "Fillings",
        options: ["Beans", "Cheese", "Ham", "Bell Peppers", "Onions"],
        removable: true,
      },
      {
        name: "Salsa Level",
        options: ["Mild", "Medium", "Hot"],
        removable: false,
      },
    ],
  },
  {
    id: 4,
    name: "Caesar Salad",
    category: "Food",
    price: 10.99,
    popularity: 80,
    rating: 4.3,
    numReviews: 120,
    image: CaesarSalad,
    tags: ["Lunch", "Vegetarian"],
    estimatedTime: 10,
    description:
      "Crisp romaine lettuce tossed in our signature Caesar dressing, topped with crunchy croutons and freshly grated Parmesan cheese for a classic and refreshing meal.",
    customizations: [
      {
        name: "Add-ons",
        options: ["Grilled Chicken", "Parmesan Cheese", "Bacon Bits"],
        removable: false,
      },
      {
        name: "Croutons",
        options: ["With Croutons", "No Croutons"],
        removable: true,
      },
    ],
  },
  {
    id: 5,
    name: "Garlic Bread",
    category: "Food",
    price: 5.49,
    popularity: 85,
    rating: 4.6,
    numReviews: 180,
    image: GarlicBread,
    tags: ["Appetizer", "Vegetarian"],
    estimatedTime: 8,
    description:
      "Warm, toasted bread generously slathered with garlic butter and herbs, creating a savory side that pairs perfectly with any meal.",
    customizations: [
      {
        name: "Additional Toppings",
        options: ["Cheese", "Extra Garlic", "Herbs"],
        removable: true,
      },
    ],
  },
  {
    id: 6,
    name: "Omelette",
    category: "Food",
    price: 7.99,
    popularity: 88,
    rating: 4.4,
    numReviews: 160,
    image: Omelette,
    tags: ["Breakfast"],
    estimatedTime: 12,
    description:
      "A fluffy three-egg omelette filled with your choice of fresh ingredients, including cheese, mushrooms, ham, spinach, and onions, cooked to perfection.",
    customizations: [
      {
        name: "Fillings",
        options: ["Cheese", "Mushrooms", "Ham", "Spinach", "Onions"],
        removable: true,
      },
    ],
  },
  {
    id: 7,
    name: "Pancakes",
    category: "Food",
    price: 8.49,
    popularity: 89,
    rating: 4.8,
    numReviews: 220,
    image: Pancakes,
    tags: ["Breakfast", "Sweet"],
    estimatedTime: 10,
    description:
      "Fluffy golden pancakes stacked high and served with rich maple syrup and creamy butter, offering a delightful sweet start to your morning.",
    customizations: [
      {
        name: "Toppings",
        options: [
          "Fresh Berries",
          "Chocolate Chips",
          "Whipped Cream",
          "Bananas",
        ],
        removable: true,
      },
      {
        name: "Extra Syrup",
        options: ["Yes", "No"],
        removable: false,
      },
    ],
  },
  {
    id: 8,
    name: "Salmon",
    category: "Food",
    price: 18.99,
    popularity: 92,
    rating: 4.9,
    numReviews: 250,
    image: Salmon,
    tags: ["Dinner", "Gluten-Free"],
    estimatedTime: 25,
    description:
      "Premium grilled salmon fillet drizzled with a zesty lemon butter sauce, served alongside your choice of steamed vegetables, rice, or mashed potatoes.",
    customizations: [
      {
        name: "Sauce",
        options: ["Lemon Butter", "Teriyaki", "Garlic Herb"],
        removable: false,
      },
      {
        name: "Side Dishes",
        options: ["Steamed Vegetables", "Rice", "Mashed Potatoes"],
        removable: false,
      },
    ],
  },
  {
    id: 9,
    name: "Spaghetti",
    category: "Food",
    price: 12.49,
    popularity: 87,
    rating: 4.5,
    numReviews: 190,
    image: Spaghetti,
    tags: ["Lunch", "Spicy"],
    estimatedTime: 20,
    description:
      "Classic spaghetti noodles smothered in our homemade marinara sauce, with an option to add meatballs or grilled chicken for a protein-packed meal.",
    customizations: [
      {
        name: "Sauce",
        options: ["Marinara", "Alfredo", "Pesto"],
        removable: false,
      },
      {
        name: "Protein",
        options: ["Meatballs", "Grilled Chicken", "None"],
        removable: false,
      },
    ],
  },
  {
    id: 10,
    name: "Steak Frites",
    category: "Food",
    price: 19.99,
    popularity: 98,
    rating: 4.9,
    numReviews: 300,
    image: SteakFrites,
    tags: ["Dinner", "Gluten-Free"],
    estimatedTime: 30,
    description:
      "Juicy grilled steak cooked to your preferred doneness, served with a side of crispy golden french fries and your choice of seasoning.",
    customizations: [
      {
        name: "Seasoning",
        options: ["Salt", "Pepper", "Garlic"],
        removable: true,
      },
      {
        name: "Steak Doneness",
        options: ["Rare", "Medium Rare", "Medium", "Well Done"],
        removable: false,
      },
    ],
  },
  {
    id: 11,
    name: "Stuffed Mushrooms",
    category: "Food",
    price: 8.99,
    popularity: 81,
    rating: 4.2,
    numReviews: 130,
    image: StuffedMushrooms,
    tags: ["Appetizer", "Vegetarian"],
    estimatedTime: 15,
    description:
      "Plump mushrooms stuffed with a savory mixture of cheeses and herbs, baked to golden perfection for a delightful appetizer.",
    customizations: [
      {
        name: "Cheese Type",
        options: ["Parmesan", "Mozzarella", "Goat Cheese"],
        removable: false,
      },
    ],
  },
  {
    id: 12,
    name: "Wings",
    category: "Food",
    price: 10.99,
    popularity: 86,
    rating: 4.7,
    numReviews: 210,
    image: Wings,
    tags: ["Appetizer", "Spicy"],
    estimatedTime: 15,
    description:
      "Tender and juicy chicken wings tossed in your choice of flavorful sauces, served with creamy ranch dressing on the side.",
    customizations: [
      {
        name: "Sauce",
        options: ["Buffalo", "BBQ", "Honey Mustard", "Garlic Parmesan"],
        removable: false,
      },
      {
        name: "Spiciness Level",
        options: ["Mild", "Medium", "Hot", "Extra Hot"],
        removable: false,
      },
      {
        name: "Boneless",
        options: ["Yes", "No"],
        removable: false,
      },
    ],
  },

  // Desserts
  {
    id: 13,
    name: "Cheesecake",
    category: "Desserts",
    price: 6.99,
    popularity: 75,
    rating: 4.6,
    numReviews: 140,
    image: Cheesecake,
    tags: ["Sweet"],
    estimatedTime: 5,
    description:
      "Rich and creamy cheesecake nestled on a buttery graham cracker crust, topped with your choice of fresh berries, chocolate sauce, or caramel.",
    customizations: [
      {
        name: "Crust Type",
        options: ["Graham Cracker", "Chocolate", "Oreo"],
        removable: false,
      },
      {
        name: "Toppings",
        options: ["Fresh Berries", "Chocolate Sauce", "Caramel", "Nuts"],
        removable: true,
      },
      {
        name: "Extra Slice",
        options: ["Yes", "No"],
        removable: false,
      },
    ],
  },
  {
    id: 14,
    name: "Kunafa",
    category: "Desserts",
    price: 12.99,
    popularity: 90,
    rating: 4.8,
    numReviews: 200,
    image: kunafa,
    tags: ["Sweet"],
    estimatedTime: 15,
    description:
      "A traditional Middle Eastern dessert made with thin, crispy shredded phyllo dough, filled with sweet cheese or cream, and soaked in a fragrant sugar syrup. Topped with crushed pistachios for a perfect finishing touch.",
    customizations: [
      {
        name: "Filling Type",
        options: ["Sweet Cheese", "Cream"],
        removable: false,
      },
      {
        name: "Toppings",
        options: ["Crushed Pistachios", "Extra Syrup", "Rose Petals"],
        removable: true,
      },
      {
        name: "Serving Size",
        options: ["Regular", "Extra Large"],
        removable: false,
      },
    ],
  },
  {
    id: 15,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 6.99,
    popularity: 80,
    rating: 4.8,
    numReviews: 170,
    image: ChocolateCake,
    tags: ["Sweet"],
    estimatedTime: 5,
    description:
      "Decadent chocolate cake layered with rich chocolate frosting, perfect for chocolate lovers seeking an indulgent treat.",
    customizations: [
      {
        name: "Frosting Type",
        options: ["Milk Chocolate", "Dark Chocolate", "White Chocolate"],
        removable: false,
      },
      {
        name: "Extra Layers",
        options: ["Yes", "No"],
        removable: false,
      },
      {
        name: "Toppings",
        options: ["Sprinkles", "Cherry", "Whipped Cream"],
        removable: true,
      },
    ],
  },
  {
    id: 16,
    name: "Sundae",
    category: "Desserts",
    price: 4.99,
    popularity: 70,
    rating: 4.3,
    numReviews: 110,
    image: Sundae,
    tags: ["Sweet"],
    estimatedTime: 5,
    description:
      "Classic vanilla ice cream topped with your choice of decadent sauces, crunchy marshmallows, and Oreo crumbles for a delightful dessert experience.",
    customizations: [
      {
        name: "Toppings",
        options: [
          "Caramel Sauce",
          "Strawberry Sauce",
          "Marshmallows",
          "Oreo Crumbles",
        ],
        removable: true,
      },
      {
        name: "Extra Scoop",
        options: ["Yes", "No"],
        removable: false,
      },
      {
        name: "Whipped Cream",
        options: ["Yes", "No"],
        removable: true,
      },
    ],
  },

  // Drinks
  {
    id: 17,
    name: "Beer",
    category: "Drinks",
    price: 4.99,
    popularity: 85,
    rating: 4.5,
    numReviews: 190,
    image: Beer,
    tags: ["Alcoholic"],
    estimatedTime: 2,
    description:
      "A diverse selection of local and imported beers, ranging from crisp lagers to robust stouts, perfect for any beer enthusiast.",
    customizations: [
      {
        name: "Type",
        options: ["Lager", "Ale", "IPA", "Stout", "Pilsner"],
        removable: false,
      },
      {
        name: "Size",
        options: ["Small (12oz)", "Medium (16oz)", "Large (24oz)"],
        removable: false,
      },
      {
        name: "Add Lemon",
        options: ["Yes", "No"],
        removable: false,
      },
    ],
  },
  {
    id: 18,
    name: "Iced Tea",
    category: "Drinks",
    price: 3.99,
    popularity: 70,
    rating: 4.0,
    numReviews: 90,
    image: IcedTea,
    tags: ["Non-Alcoholic", "Sweet"],
    estimatedTime: 2,
    description:
      "Refreshing iced tea brewed daily, available in various sweetness levels and enhanced with a slice of lemon for added zest.",
    customizations: [
      {
        name: "Sweetness Level",
        options: ["Unsweetened", "Less Sweet", "Regular"],
        removable: false,
      },
      {
        name: "Add Lemon",
        options: ["Yes", "No"],
        removable: false,
      },
      {
        name: "Ice Level",
        options: ["No Ice", "Less Ice", "Regular Ice", "Extra Ice"],
        removable: false,
      },
    ],
  },
  {
    id: 19,
    name: "Lemonade",
    category: "Drinks",
    price: 3.49,
    popularity: 72,
    rating: 4.4,
    numReviews: 100,
    image: Lemonade,
    tags: ["Non-Alcoholic", "Sweet"],
    estimatedTime: 2,
    description:
      "Homemade lemonade infused with a hint of fresh mint, customizable in sweetness and size to perfectly quench your thirst.",
    customizations: [
      {
        name: "Sweetness Level",
        options: ["Less Sweet", "Regular", "Extra Sweet"],
        removable: false,
      },
      {
        name: "Add Mint",
        options: ["Yes", "No"],
        removable: false,
      },
      {
        name: "Size",
        options: ["Small (12oz)", "Medium (16oz)", "Large (24oz)"],
        removable: false,
      },
    ],
  },
  {
    id: 20,
    name: "Margarita",
    category: "Drinks",
    price: 8.99,
    popularity: 90,
    rating: 4.7,
    numReviews: 220,
    image: Margarita,
    tags: ["Alcoholic"],
    estimatedTime: 5,
    description:
      "Classic margarita crafted with fresh lime juice and premium tequila, available in various flavors and sizes to suit your preference.",
    customizations: [
      {
        name: "Salt Rim",
        options: ["Yes", "No"],
        removable: false,
      },
      {
        name: "Flavor",
        options: ["Classic", "Strawberry", "Mango", "Peach"],
        removable: false,
      },
      {
        name: "Size",
        options: ["Regular (12oz)", "Large (16oz)"],
        removable: false,
      },
    ],
  },
  {
    id: 21,
    name: "Mojito",
    category: "Drinks",
    price: 7.99,
    popularity: 88,
    rating: 4.6,
    numReviews: 180,
    image: Mojito,
    tags: ["Alcoholic"],
    estimatedTime: 5,
    description:
      "A refreshing blend of premium rum, fresh mint leaves, and zesty lime, customizable in flavor and sweetness to your liking.",
    customizations: [
      {
        name: "Flavor",
        options: ["Classic", "Strawberry", "Blueberry", "Pineapple"],
        removable: false,
      },
      {
        name: "Sweetness Level",
        options: ["Less Sweet", "Regular", "Extra Sweet"],
        removable: false,
      },
      {
        name: "Size",
        options: ["Regular (12oz)", "Large (16oz)"],
        removable: false,
      },
    ],
  },
  {
    id: 22,
    name: "Pepsi",
    category: "Drinks",
    price: 2.99,
    popularity: 60,
    rating: 3.8,
    numReviews: 80,
    image: Pepsi,
    tags: ["Non-Alcoholic"],
    estimatedTime: 1,
    description:
      "Chilled can of Pepsi, a classic carbonated soft drink that pairs well with any meal or snack.",
    customizations: [
      {
        name: "Size",
        options: ["Small (12oz)", "Medium (16oz)", "Large (24oz)"],
        removable: false,
      },
      {
        name: "Ice Level",
        options: ["No Ice", "Less Ice", "Regular Ice", "Extra Ice"],
        removable: false,
      },
    ],
  },
  {
    id: 23,
    name: "Red Wine",
    category: "Drinks",
    price: 9.99,
    popularity: 95,
    rating: 4.9,
    numReviews: 300,
    image: RedWine,
    tags: ["Alcoholic"],
    estimatedTime: 2,
    description:
      "A curated selection of fine red wines from renowned vineyards around the world, available by the bottle or glass with options for vintage and size.",
    customizations: [
      {
        name: "Bottle or Glass",
        options: ["Bottle", "Glass"],
        removable: false,
      },
      {
        name: "Vintage",
        options: ["2018", "2019", "2020", "2021"],
        removable: false,
      },
      {
        name: "Size",
        options: ["Standard (750ml)", "Half Bottle (375ml)"],
        removable: false,
      },
    ],
  },
  {
    id: 24,
    name: "Root Beer",
    category: "Drinks",
    price: 3.49,
    popularity: 65,
    rating: 4.1,
    numReviews: 95,
    image: RootBeer,
    tags: ["Non-Alcoholic", "Sweet"],
    estimatedTime: 1,
    description:
      "Classic root beer served chilled, offering a sweet and creamy flavor that's perfect for any occasion.",
    customizations: [
      {
        name: "Size",
        options: ["Small (12oz)", "Medium (16oz)", "Large (24oz)"],
        removable: false,
      },
      {
        name: "Ice Level",
        options: ["No Ice", "Less Ice", "Regular Ice", "Extra Ice"],
        removable: false,
      },
      {
        name: "Add Cream",
        options: ["Yes", "No"],
        removable: false,
      },
    ],
  },
  {
    id: 25,
    name: "Smoothie",
    category: "Drinks",
    price: 5.99,
    popularity: 85,
    rating: 4.5,
    numReviews: 160,
    image: Smoothie,
    tags: ["Non-Alcoholic", "Sweet", "Vegetarian"],
    estimatedTime: 5,
    description:
      "Fruit smoothie made with fresh ingredients, available in a variety of flavors and customizable with optional protein additions for an extra boost.",
    customizations: [
      {
        name: "Flavor",
        options: ["Strawberry", "Mango", "Blueberry", "Green", "Banana"],
        removable: false,
      },
      {
        name: "Add Protein",
        options: ["Yes", "No"],
        removable: false,
      },
      {
        name: "Size",
        options: ["Small (12oz)", "Medium (16oz)", "Large (24oz)"],
        removable: false,
      },
    ],
  },
  {
    id: 26,
    name: "White Wine",
    category: "Drinks",
    price: 8.99,
    popularity: 92,
    rating: 4.8,
    numReviews: 240,
    image: WhiteWine,
    tags: ["Alcoholic"],
    estimatedTime: 2,
    description:
      "A premium selection of white wines from various regions, available by the bottle or glass with options for vintage and size to suit your preference.",
    customizations: [
      {
        name: "Bottle or Glass",
        options: ["Bottle", "Glass"],
        removable: false,
      },
      {
        name: "Vintage",
        options: ["2018", "2019", "2020", "2021"],
        removable: false,
      },
      {
        name: "Size",
        options: ["Standard (750ml)", "Half Bottle (375ml)"],
        removable: false,
      },
    ],
  },
  {
    id: 27,
    name: "Coca Cola",
    category: "Drinks",
    price: 2.99,
    popularity: 92,
    rating: 4.8,
    numReviews: 240,
    image: Cocacola,
    tags: ["Non-Alcoholic"],
    estimatedTime: 1,
    description:
      "Chilled can or glass of Coca-Cola, a classic carbonated soft drink that pairs well with any meal or snack.",
    customizations: [
      {
        name: "Can or Glass",
        options: ["Can", "Glass"],
        removable: false,
      },
      {
        name: "Size",
        options: ["Small (12oz)", "Medium (16oz)", "Large (24oz)"],
        removable: false,
      },
    ],
  },
  {
    id: 28,
    name: "7 Up",
    category: "Drinks",
    price: 2.99,
    popularity: 92,
    rating: 4.8,
    numReviews: 240,
    image: sevenup,
    tags: ["Non-Alcoholic"],
    estimatedTime: 1,
    description:
      "Chilled can or glass of 7Up, a classic carbonated soft drink that pairs well with any meal or snack.",
    customizations: [
      {
        name: "Can or Glass",
        options: ["Can", "Glass"],
        removable: false,
      },
      {
        name: "Size",
        options: ["Small (12oz)", "Medium (16oz)", "Large (24oz)"],
        removable: false,
      },
    ],
  },
];

const validateMenuData = (data) => {
  if (!Array.isArray(data)) {
    console.error("menuData should be an array.");
    return [];
  }

  return data.filter((item) => {
    const hasRequiredFields =
      typeof item.id === "number" &&
      typeof item.name === "string" &&
      typeof item.category === "string" &&
      typeof item.price === "number" &&
      Array.isArray(item.tags) &&
      typeof item.description === "string" &&
      Array.isArray(item.customizations) &&
      typeof item.estimatedTime === "number";

    if (!hasRequiredFields) {
      console.warn(`Menu item with id ${item.id} is missing required fields.`);
    }

    return hasRequiredFields;
  });
};

export default menuData;
