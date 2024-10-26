import fs from "node:fs";
import xss from "xss";
import sql from "better-sqlite3";
import slugify from "slugify";

const db = sql("meals.db");

// Get Meals
export const getMeals = () => {
  return db.prepare("SELECT * FROM meals").all();
};

// Get Meal Detail
export const getMealDetail = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

// Save Meal
export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) throw new Error("Saving image failed!");
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug)
    VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)
    `
  ).run(meal);
};
