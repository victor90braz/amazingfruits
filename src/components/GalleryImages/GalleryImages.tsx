import { useState } from "react";
import GalleryImagesStyle from "./GalleryImagesStyle";

const Fruits {
  name: "Smoothie bowl";
  url: "https://media.istockphoto.com/photos/smoothie-bowl-with-frozen-berriesand-flowers-on-white-background-very-picture-id1364075968?s=612x612";
  description: "Smoothie bowl with frozen berries,and flowers on white background. Very Peri color of the year 2022. top view. healthy breakfast";
  price: 8.50;
}

interface IFruits {
  name: string;
  url: string;
  description: string;
  price: number;
}

const GalleryImages = () => {
  const {fruit, setFruits} = useState<IFruits>(Fruits)
  return (
    <GalleryImagesStyle>
      <h3>Search for photos in our image bank for commercial use</h3>
      <h4>
        Find the perfect stock photo! High quality images for websites, blogs,
        flyers, social media, ads, marketing or design projects.
      </h4>
      <p>Better Quality</p>
    </GalleryImagesStyle>
  );
};

export default GalleryImages;
