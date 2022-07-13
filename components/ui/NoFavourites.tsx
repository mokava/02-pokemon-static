import { Container, Text, Image } from "@nextui-org/react";
import React from "react";

type Props = {};

export const NoFavourites = (props: Props) => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        // minHeight: "90vh",
      }}
    >
      <Text h1>There no are favourites</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png "
        alt="poke"
        width={250}
        height={250}
        css={{
          opacity: 0.1,
        }}
      />
    </Container>
  );
};
