import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

// * Get Meals
export const getMeals = () => {
  return db.prepare("SELECT * FROM meals").all();
};
