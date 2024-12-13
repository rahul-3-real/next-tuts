"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState();
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    console.log(file);

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <>
      <label htmlFor="image" className="block text-lg mb-2">
        Image
      </label>
      <div
        className="w-32 h-32 bg-gray-900 flex items-center justify-center relative"
        onClick={handleClick}
      >
        {!pickedImage && <p className="text-white">Select Image</p>}
        {pickedImage && (
          <Image src={pickedImage} alt="The image selected by the user." fill />
        )}
      </div>
      <input
        type="file"
        id="image"
        name="image"
        accept="image/png, image/jpg"
        required
        className="hidden"
        ref={inputRef}
        onChange={handleImageChange}
      />
    </>
  );
};

export default ImagePicker;
