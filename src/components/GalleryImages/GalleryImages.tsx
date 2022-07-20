import { useEffect, useState } from "react";
import { Fruits } from "../../utils/utils";
import GalleryImagesStyle from "./GalleryImagesStyle";
import axios from "axios";

interface IFruits {
  name: string;
  url: string;
  description: string;
  price: number;
}

const GalleryImages = () => {
  const [fruit, setFruits] = useState<IFruits>(Fruits);

  useEffect(() => {
    (async () => {
      const { data: pokemons } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/"
      );
      console.log(pokemons);
      setFruits(Fruits);
    })();
  });

  return (
    <GalleryImagesStyle>
      <header>
        <h1>Search for photos in our image bank for commercial use</h1>
        <p>
          Find the perfect stock photo! High quality images for websites, blogs,
          flyers, social media, ads, marketing or design projects.
        </p>
        <p>Better Quality</p>
      </header>
      <main>
        <section className="element-left">
          <h2>{fruit.name}</h2>
          <img src={fruit.url} alt={fruit.name} />
        </section>
        <section className="element-right">
          <p>{fruit.description}</p>
          <span>
            {fruit.name} = {fruit.price}€
          </span>
        </section>
      </main>
    </GalleryImagesStyle>
  );
};

export default GalleryImages;
