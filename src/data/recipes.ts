import { Recipe } from '../types/Recipe';

export const recipes: Recipe[] = [
  {
    id: "classic-spaghetti-carbonara",
    title: "Classic Spaghetti Carbonara",
    description: "A traditional Italian pasta dish with crispy pancetta, eggs, Pecorino Romano cheese, and plenty of black pepper. Simple yet incredibly satisfying!",
    imageUrl: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Pasta",
    prepTime: 15,
    cookingTime: 20,
    difficulty: "Easy",
    rating: 4.8,
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmigiano Reggiano, grated",
      "4 garlic cloves, minced",
      "Freshly ground black pepper",
      "Salt to taste"
    ],
    instructions: [
      "Bring a large pot of salted water to a boil and cook the spaghetti according to package instructions until al dente.",
      "While the pasta is cooking, heat a large skillet over medium heat. Add the diced pancetta and cook until crispy and golden, about 5-7 minutes.",
      "In a bowl, whisk together the eggs, grated Pecorino Romano, and Parmigiano Reggiano. Season with plenty of freshly ground black pepper.",
      "When the pasta is done, reserve 1 cup of the pasta water, then drain the pasta.",
      "Working quickly, add the hot pasta to the skillet with the pancetta. Toss to combine. Remove from heat.",
      "Immediately add the egg and cheese mixture to the hot pasta, stirring vigorously to create a creamy sauce. If needed, add a splash of the reserved pasta water to loosen the sauce.",
      "Serve immediately with additional grated cheese and freshly ground black pepper on top."
    ],
    tips: [
      "The key to carbonara is working quickly once the pasta is done to ensure the eggs create a creamy sauce rather than scrambling.",
      "Traditional carbonara doesn't include cream - the creaminess comes from the eggs and cheese.",
      "For authentic flavor, try to find guanciale instead of pancetta if possible.",
      "Freshly grated cheese makes a big difference in this recipe compared to pre-grated."
    ]
  },
  {
    id: "avocado-toast-with-poached-egg",
    title: "Avocado Toast with Poached Egg",
    description: "Creamy avocado spread on toasted artisan bread, topped with a perfectly poached egg, red pepper flakes, and microgreens. A trendy breakfast that's as nutritious as it is delicious!",
    imageUrl: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Breakfast",
    prepTime: 10,
    cookingTime: 5,
    difficulty: "Easy",
    rating: 4.6,
    ingredients: [
      "2 slices of artisan bread (sourdough works well)",
      "1 ripe avocado",
      "2 fresh eggs",
      "1 tablespoon white vinegar",
      "1/2 lemon, juiced",
      "Red pepper flakes",
      "Microgreens or fresh herbs (optional)",
      "Salt and freshly ground black pepper",
      "Extra virgin olive oil"
    ],
    instructions: [
      "Toast the bread slices until golden and crisp.",
      "In a small bowl, mash the avocado with lemon juice, salt, and pepper to taste.",
      "Fill a medium pot with water (about 3 inches deep) and bring to a gentle simmer. Add vinegar.",
      "Crack each egg into a small bowl. Create a gentle whirlpool in the simmering water and carefully slide in an egg. Cook for 3 minutes for a runny yolk. Repeat with the second egg.",
      "Spread the mashed avocado evenly on the toasted bread slices.",
      "Using a slotted spoon, remove the poached eggs, letting excess water drain off, and place on top of the avocado toast.",
      "Sprinkle with red pepper flakes, salt, pepper, and a drizzle of olive oil.",
      "Top with microgreens or fresh herbs if using. Serve immediately."
    ],
    tips: [
      "The vinegar helps the egg whites coagulate more quickly in the water.",
      "For the perfect poached egg, use the freshest eggs possible.",
      "If you're not confident in your poaching skills, you can use silicone egg poaching cups.",
      "Add a sprinkle of everything bagel seasoning for extra flavor.",
      "For a dairy-free option, omit the cheese; for a vegan version, replace the egg with roasted tomatoes or chickpeas."
    ]
  },
  {
    id: "berry-banana-smoothie-bowl",
    title: "Berry Banana Smoothie Bowl",
    description: "A refreshing and nutritious smoothie bowl packed with mixed berries, banana, and topped with granola, fresh fruit, and seeds. Perfect for a healthy breakfast or snack!",
    imageUrl: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Breakfast",
    prepTime: 10,
    cookingTime: 0,
    difficulty: "Easy",
    rating: 4.7,
    ingredients: [
      "1 frozen banana",
      "1 cup mixed frozen berries (strawberries, blueberries, raspberries)",
      "1/4 cup Greek yogurt",
      "1/4 cup almond milk (or milk of choice)",
      "1 tablespoon honey or maple syrup (optional)",
      "Toppings: fresh berries, sliced banana, granola, chia seeds, coconut flakes, chopped nuts"
    ],
    instructions: [
      "Place frozen banana, mixed berries, Greek yogurt, and almond milk in a blender.",
      "Blend until smooth and creamy. Add more milk if needed, but keep it thick enough to eat with a spoon.",
      "Taste and add honey or maple syrup if desired.",
      "Pour the smoothie into a bowl.",
      "Arrange toppings attractively on top of the smoothie base.",
      "Serve immediately while cold."
    ],
    tips: [
      "Freeze ripe bananas in advance for smoothie bowls – they add natural sweetness and creaminess.",
      "If you don't have frozen fruit, use fresh fruit and add a few ice cubes.",
      "For a protein boost, add a scoop of your favorite protein powder or a tablespoon of nut butter.",
      "Make it vegan by using plant-based yogurt and sweetener.",
      "The key to a good smoothie bowl is keeping it thick enough to support the toppings."
    ]
  },
  {
    id: "thai-green-curry",
    title: "Thai Green Curry with Vegetables",
    description: "A fragrant and spicy Thai green curry filled with colorful vegetables, served over steamed jasmine rice. This aromatic dish brings the authentic flavors of Thailand to your home kitchen.",
    imageUrl: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Dinner",
    prepTime: 20,
    cookingTime: 25,
    difficulty: "Easy",
    rating: 4.9,
    ingredients: [
      "2 tablespoons vegetable oil",
      "3 tablespoons Thai green curry paste",
      "1 can (14 oz) coconut milk",
      "1 cup vegetable broth",
      "2 tablespoons fish sauce (or soy sauce for vegetarian)",
      "1 tablespoon palm sugar or brown sugar",
      "1 eggplant, cut into chunks",
      "1 red bell pepper, sliced",
      "1 cup snap peas",
      "1 zucchini, sliced",
      "1 can (8 oz) bamboo shoots, drained",
      "1 tablespoon lime juice",
      "1/2 cup Thai basil leaves",
      "Steamed jasmine rice, for serving",
      "Lime wedges, for serving"
    ],
    instructions: [
      "Heat the oil in a large pot or wok over medium heat. Add the curry paste and cook for 1-2 minutes until fragrant.",
      "Add 1/4 of the coconut milk and stir until the oil separates and the mixture is fragrant, about 2-3 minutes.",
      "Pour in the remaining coconut milk, vegetable broth, fish sauce, and sugar. Stir well and bring to a simmer.",
      "Add the eggplant and cook for 5 minutes, then add the bell pepper, snap peas, zucchini, and bamboo shoots.",
      "Simmer for 10-15 minutes until the vegetables are tender but not overcooked.",
      "Stir in the lime juice and Thai basil leaves just before serving.",
      "Serve hot over steamed jasmine rice with lime wedges on the side."
    ],
    tips: [
      "For a protein version, add chicken, shrimp, or tofu before the vegetables.",
      "The curry paste's spiciness varies by brand, so adjust according to your taste preference.",
      "Use full-fat coconut milk for the most authentic flavor and creaminess.",
      "Thai basil has a different flavor than Italian basil, but if you can't find it, you can use regular basil.",
      "Fresh kaffir lime leaves make a wonderful aromatic addition if you can find them."
    ]
  },
  {
    id: "chocolate-lava-cake",
    title: "Chocolate Lava Cake",
    description: "Decadent individual chocolate cakes with a gooey, molten chocolate center. Served warm with a dusting of powdered sugar or a scoop of vanilla ice cream, this dessert is pure chocolate bliss!",
    imageUrl: "https://images.pexels.com/photos/3992131/pexels-photo-3992131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Desserts",
    prepTime: 15,
    cookingTime: 12,
    difficulty: "Easy",
    rating: 4.9,
    ingredients: [
      "113g (1/2 cup) unsalted butter, plus extra for greasing",
      "113g (4 oz) high-quality dark chocolate, chopped",
      "2 large eggs",
      "2 large egg yolks",
      "100g (1/2 cup) granulated sugar",
      "1 teaspoon vanilla extract",
      "Pinch of salt",
      "30g (1/4 cup) all-purpose flour",
      "Powdered sugar, for dusting",
      "Vanilla ice cream or whipped cream, for serving (optional)"
    ],
    instructions: [
      "Preheat the oven to 425°F (220°C). Butter and lightly flour four 6-ounce ramekins, tapping out excess flour.",
      "In a microwave-safe bowl, combine the butter and chocolate. Microwave in 30-second intervals, stirring between each, until melted and smooth.",
      "In a medium bowl, whisk together the eggs, egg yolks, sugar, vanilla, and salt until light and frothy, about 2-3 minutes.",
      "Fold the melted chocolate mixture into the egg mixture until combined.",
      "Gently fold in the flour until just incorporated, being careful not to overmix.",
      "Divide the batter evenly among the prepared ramekins, filling each about 3/4 full.",
      "Place the ramekins on a baking sheet and bake for 10-12 minutes, until the edges are firm but the centers are still soft.",
      "Let cool for 1 minute, then run a knife around the edge of each cake and invert onto serving plates.",
      "Dust with powdered sugar and serve immediately, with ice cream or whipped cream if desired."
    ],
    tips: [
      "The key to perfect lava cakes is timing - underbake slightly for the molten center.",
      "You can prepare the batter ahead of time and refrigerate until ready to bake.",
      "Make sure your ramekins are well-greased to ensure the cakes release easily.",
      "For a flavor variation, add a pinch of espresso powder or a splash of liqueur like Grand Marnier to the batter.",
      "If you don't have ramekins, you can use a muffin tin, adjusting the baking time slightly."
    ]
  },
  {
    id: "classic-beef-wellington",
    title: "Classic Beef Wellington",
    description: "A stunning centerpiece dish featuring tender beef fillet coated with mushroom duxelles, wrapped in prosciutto and flaky puff pastry. This elegant recipe is perfect for special occasions.",
    imageUrl: "https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Dinner",
    prepTime: 60,
    cookingTime: 40,
    difficulty: "Hard",
    rating: 4.9,
    ingredients: [
      "900g (2 lb) center-cut beef tenderloin (fillet mignon)",
      "2 tablespoons vegetable oil",
      "Salt and freshly ground black pepper",
      "2 tablespoons Dijon mustard",
      "450g (1 lb) mushrooms (cremini or button), finely chopped",
      "2 shallots, finely chopped",
      "2 cloves garlic, minced",
      "2 tablespoons fresh thyme leaves",
      "3 tablespoons butter",
      "100ml (1/2 cup) dry white wine",
      "8-10 slices of prosciutto",
      "1 package (500g) frozen puff pastry, thawed",
      "1 large egg, beaten"
    ],
    instructions: [
      "Heat oil in a large skillet over high heat. Season the beef with salt and pepper, then sear on all sides until browned, about 2-3 minutes per side. Remove from heat, brush all over with Dijon mustard, and let cool completely.",
      "In the same skillet, melt butter over medium heat. Add mushrooms, shallots, garlic, and thyme. Cook until all moisture has evaporated, about 10 minutes. Add white wine and cook until completely reduced. Season with salt and pepper, then let cool completely.",
      "Lay a sheet of plastic wrap on your work surface and arrange prosciutto slices overlapping to form a rectangle large enough to wrap around the beef. Spread mushroom mixture (duxelles) evenly over the prosciutto.",
      "Place the cooled beef at one end of the prosciutto and use the plastic wrap to tightly roll the prosciutto and duxelles around the beef. Twist the ends of the plastic wrap to secure and refrigerate for 30 minutes.",
      "Preheat oven to 400°F (200°C). Roll out puff pastry on a lightly floured surface to a rectangle large enough to wrap around the beef.",
      "Unwrap the beef from the plastic and place on the pastry. Brush the edges of the pastry with beaten egg, then fold and seal tightly around the beef, trimming any excess. Place seam-side down on a parchment-lined baking sheet.",
      "Brush the entire pastry with beaten egg and score the top with a sharp knife, being careful not to cut all the way through. Sprinkle with flaky salt if desired.",
      "Bake for 35-40 minutes for medium-rare (internal temperature of 130-135°F/54-57°C), or until the pastry is golden brown.",
      "Let rest for 10 minutes before slicing and serving."
    ],
    tips: [
      "The key to a perfect Wellington is ensuring each component is completely cooled before assembly to prevent the pastry from becoming soggy.",
      "For extra flavor, you can add a layer of liver pâté between the beef and the duxelles.",
      "Using a meat thermometer is the most reliable way to check doneness without cutting into the Wellington.",
      "Let the beef come to room temperature before searing for the most even cooking.",
      "Serve with a red wine sauce, roasted potatoes, and seasonal vegetables for a complete special-occasion meal."
    ]
  }
];