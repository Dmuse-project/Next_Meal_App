"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideShow() {
  const [currentSlider, setCurrentSlider] = useState();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prevImage) => {
        return prevImage < images.length - 1 ? prevImage + 1 : 0;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => {
        return (
          <Image
            key={index}
            id={index}
            src={image.image}
            alt={image.alt}
            className={index === currentSlider ? classes.active : ""}
          />
        );
      })}
    </div>
  );
}


