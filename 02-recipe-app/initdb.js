import sql from "better-sqlite3";
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Burger",
    slug: "burger",
    image: "burger.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    instructions: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.

      2. Cook the patty:
         Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.

      3. Assemble the burger:
         Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.

      4. Serve:
         Complete the assembly with the top bun and serve hot.
    `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    title: "Chicken Korma",
    slug: "chicken-korma",
    image: "chicken-korma.jpg",
    summary:
      "Looking for a Chicken Korma recipe that's the real deal? This recipe is made in the traditional Pakistani and North Indian way but without the fuss.",
    instructions: `
      1. Oil/Fat: I've used just as much as needed to give it a traditional look and taste.
      
      2. Onions: When making traditional korma, you brown, then grind the onions along with the yogurt. This gives it the signature texture and flavor. Don't worry about slicing them up perfectly, and feel free to sub pre-ground onions.
      
      3. Bone-in, cut up, skinless chicken: I buy pre-cut up pieces of a whole chicken, but bone-in chicken thighs work too. Feel free to use boneless chicken in place, though it may require a shorter cooking time.

      4. Whole spices: Authentic Chicken Korma uses whole spices like bay leaves, cumin seeds, and black peppercorns. Leave out whichever ones you don't have on hand.

      5. Garlic + Ginger: A traditional recipe will have more garlic and ginger than you're typically used to. Feel free to use paste if you'd like!

      6. Yogurt: An essential korma ingredient. As suggested by a reviewer, you can use cashew yogurt to make it dairy-free!

      7. Spice powders: This recipe uses common spices like coriander and cumin as well as a few optional spices like mace and black cardamom. Though I know not everyone has spices like mace lying around, I've added them because they're true to the classic method. However, you can easily omit them if you don't have them and I've also given substitutes!
    `,
    creator: "Izzah",
    creator_email: "izzah@example.com",
  },
  {
    title: "Ramen",
    slug: "ramen",
    image: "ramen.jpg",
    summary:
      "Take the usual ramen up a notch with this quick homemade ramen. Fresh veggies and herbs make this extra delicious, healthy, and cozy!",
    instructions: `
      1. Stir-Fry The Aromatics: Garlic and ginger, what a delicious duo. This is where the flavor is, friends.

      2. Make Your (Easy!) Broth: Add some chicken broth and dried shiitake mushrooms for some umami punch.

      3. Add Noodles: Cook your noodles right in the broth with some scallions (more flavor, please!).

      4. Add Veg: Thinly sliced kale, shredded carrots, whatever you’d like! Cook until just tender.

      5. Top It Off: Add some crunchy panko crumbs, a soft-boiled egg, chili oil, hot sauce, sesame oil, and/or soy sauce, whatever your heart desires.
    `,
    creator: "Emily Chen",
    creator_email: "emilychen@example.com",
  },
  {
    title: "Pho",
    slug: "pho",
    image: "pho.jpg",
    summary:
      "Experience the magic of one of the greatest noodle soups in the world with this easy to follow traditional Vietnamese Pho recipe!",
    instructions: `
      1. Quick boil - Remove impurities from beef with a 5 minute boil, it’s the path to a beautiful clear soup;

      2. Scum - be amazed at all the icky stuff that comes out; Wash the bones to get all the icky scum off;

      3. Simmer for 3 hours - bones, beef, water, onion, ginger and spices (cinnamon, cardamom, coriander, star anise);

      4. Remove brisket - some is used for Pho topping, see below recipe for ways to use remainder; Simmer 40 minutes further with just bones; Strain; then Ladle into bowls over noodles and pile on Toppings!
    `,
    creator: "Laura Smith",
    creator_email: "laurasmith@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
