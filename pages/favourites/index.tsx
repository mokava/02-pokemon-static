import { Text, Container, Image, Grid, Card } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { FavouritePokemons } from "../../components/pokemon";
import { NoFavourites } from "../../components/ui";
import { localFavourites } from "../../utils";

type Props = {};

const Favourites = () => {
  const [favouritePokemons, setFavouritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavouritePokemons(localFavourites.pokemons());
  }, []);

  return (
    <Layout title="Favourites pokemons">
      {favouritePokemons.length === 0 ? (
        <NoFavourites />
      ) : (
        <FavouritePokemons pokemons={favouritePokemons} />
      )}
    </Layout>
  );
};

export default Favourites;
