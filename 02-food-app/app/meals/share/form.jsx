"use client";

import { useState } from "react";
import { useFormStatus, useFormState } from "react-dom";
import Image from "next/image";

const ShareForm = ({ formAction }) => {
  const [pickedImage, setPickedImage] = useState();
  const { pending } = useFormStatus();
  const [state, stateFormAction] = useFormState(formAction, {
    message: null,
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setPickedImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form className="grid grid-cols-6" action={stateFormAction}>
      <div className="col-span-3">
        <div className="grid grid-cols-2 gap-7">
          <div>
            <label htmlFor="name" className="block mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="block w-full text-sm rounded-md border-0 outline-none bg-slate-50 p-2 text-slate-950"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="block w-full text-sm rounded-md border-0 outline-none bg-slate-50 p-2 text-slate-950"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="title" className="block mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter recipe title"
              className="block w-full text-sm rounded-md border-0 outline-none bg-slate-50 p-2 text-slate-950"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="summary" className="block mb-2">
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              placeholder="Enter short summary"
              className="block w-full text-sm rounded-md border-0 outline-none bg-slate-50 p-2 text-slate-950"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="instruction" className="block mb-2">
              Instructions
            </label>
            <textarea
              name="instruction"
              id="instruction"
              placeholder="Enter short summary"
              className="block w-full text-sm rounded-md border-0 outline-none bg-slate-50 p-2 text-slate-950"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="col-span-2">
            <label htmlFor="image" className="block mb-2">
              Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              accept="image/png, image/jpg, image/jpeg, image/webp"
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-slate-700 hover:file:bg-violet-100"
              onChange={handleImageChange}
              required
            />
            {pickedImage && (
              <div className="relative h-24 w-24 rounded-md overflow-hidden mt-5">
                <Image
                  src={pickedImage}
                  alt="Meal Image"
                  fill
                  className="h-full wi-full !static"
                />
              </div>
            )}
            {!pickedImage && (
              <p className="mt-5 text-sm text-slate-500">No image selected!</p>
            )}
          </div>
          {state.message && (
            <div className="col-span-2">
              <p className="text-red-500">{state.message}</p>
            </div>
          )}
          <div className="col-span-2">
            <button
              type="submit"
              className="py-2 px-4 rounded-md bg-slate-500 text-md font-semibold cursor-pointer"
            >
              {pending ? "Submitting..." : "Share Meal"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ShareForm;
