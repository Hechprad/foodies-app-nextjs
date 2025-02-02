"use client";

import { type ChangeEvent, useRef, useState } from "react";
import Image from "next/image";

import classes from "./index.module.css";

type ImagePickerProps = {
  label: string;
  name: string;
};

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string | null);
    };

    fileReader.readAsDataURL(file);
  }

  function handlePickClick() {
    if (inputRef?.current) {
      inputRef.current.click();
    }
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
              sizes="15rem"
            />
          ) : (
            <p>No image picked yet.</p>
          )}
        </div>
        <input
          accept="image/png, image/jpeg"
          className={classes.input}
          id={name}
          name={name}
          onChange={handleImageChange}
          ref={inputRef}
          type="file"
          required
        />
        <button
          className={classes.button}
          onClick={handlePickClick}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
