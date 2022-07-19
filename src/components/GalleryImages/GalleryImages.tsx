import { useEffect, useState } from "react";
import { Fruits } from "../../utils/utils";
import GalleryImagesStyle from "./GalleryImagesStyle";

interface IFruits {
  name: string;
  url: string;
  description: string;
  price: number;
}

const GalleryImages = () => {
  const [fruit, setFruits] = useState<IFruits>(Fruits);

  useEffect(() => {
    (() => {
      setFruits(Fruits);
    })();
  });

  return (
    <GalleryImagesStyle>
      <h3>Search for photos in our image bank for commercial use</h3>
      <h4>
        Find the perfect stock photo! High quality images for websites, blogs,
        flyers, social media, ads, marketing or design projects.
      </h4>
      <p>Better Quality</p>
      <h2>{fruit.name}</h2>
      <img src={fruit.url} alt={fruit.name} />
      <p>{fruit.description}</p>
      <p>{fruit.price}</p>
    </GalleryImagesStyle>
  );
};

export default GalleryImages;
