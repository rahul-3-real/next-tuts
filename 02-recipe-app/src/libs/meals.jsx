import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

// * Get Meals
export const getMeals = () => {
  return db.prepare("SELECT * FROM meals").all();
};

// * Get Detail Meal
export const getDetailMeal = (slug) => {
  return db.prepare("SELECT * FROM meals WHERE slug =?").get(slug);
};

// * Save Meal
export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.title = xss(meal.title);
  meal.summary = xss(meal.summary);
  meal.instructions = xss(meal.instructions);
  meal.creator = xss(meal.creator);
  meal.creator_email = xss(meal.creator_email);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(meal);
};
