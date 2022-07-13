import { Grid } from "@nextui-org/react";
import React from "react";
import { FavouriteCardPokemon } from "./FavouriteCardPokemon";

interface Props {
  pokemons: number[];
}

export const FavouritePokemons = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavouriteCardPokemon pokemonId={id} key={id} />
      ))}
    </Grid.Container>
  );
};
