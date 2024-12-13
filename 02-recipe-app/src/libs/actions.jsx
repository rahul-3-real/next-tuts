"use server";

import { redirect } from "next/navigation";

import { saveMeal } from "./meals";

const isInvalidText = (text) => {
  return !text || text.trim() === "";
};

const isInvalidEmail = (email) => {
  return !email || !email.includes("@");
};

export const shareMeal = async (prevState, formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidEmail(meal.creator_email) ||
    !meal.image
  ) {
    throw new Error("Invalid input");
  }

  await saveMeal(meal);
  redirect("/meals");
};
