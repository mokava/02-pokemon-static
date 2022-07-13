import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  pokemonId: number;
}

export const FavouriteCardPokemon = ({ pokemonId }: Props) => {
  const router = useRouter();
  const onFavouriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`);
  };
  return (
    <Grid
      xs={6}
      sm={3}
      md={2}
      xl={1}
      key={pokemonId}
      onClick={onFavouriteClicked}
    >
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
