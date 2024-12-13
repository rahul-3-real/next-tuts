"use client";

import { useActionState } from "react";

import ImagePicker from "./image-picker";
import SubmitButton from "./submit-button";
import { shareMeal } from "@/libs/actions";

const CreateMeal = () => {
  const [state, formAction] = useActionState(shareMeal, { message: null });

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-white mb-7">Create Recipes</h2>

        <form action={formAction} className="w-3/4">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2">
              <label htmlFor="title" className="block text-lg mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="rounded block w-full outline-none border p-3 text-white text-md bg-black border-slate-600"
              />
            </div>
            <div className="col">
              <label htmlFor="creator" className="block text-lg mb-2">
                Creator
              </label>
              <input
                type="text"
                id="creator"
                name="creator"
                required
                className="rounded block w-full outline-none border p-3 text-white text-md bg-black border-slate-600"
              />
            </div>
            <div className="col">
              <label htmlFor="creator_email" className="block text-lg mb-2">
                Creator Email
              </label>
              <input
                type="email"
                id="creator_email"
                name="creator_email"
                required
                className="rounded block w-full outline-none border p-3 text-white text-md bg-black border-slate-600"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="summary" className="block text-lg mb-2">
                Summary
              </label>
              <input
                type="text"
                id="summary"
                name="summary"
                required
                className="rounded block w-full outline-none border p-3 text-white text-md bg-black border-slate-600"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="instructions" className="block text-lg mb-2">
                Instructions
              </label>
              <textarea
                id="instructions"
                name="instructions"
                rows={4}
                required
                className="rounded block w-full outline-none border p-3 text-white text-md bg-black border-slate-600"
              ></textarea>
            </div>
            <div className="col-span-2">
              <ImagePicker />
            </div>
            {state.message && (
              <div className="col-span-2">
                <p className="text-white">{state.message}</p>
              </div>
            )}
            <div className="col-span-2">
              <SubmitButton />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateMeal;
