import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

const App = () => (
  <Grid
    templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}
  >
    <GridItem area="nav">
      <NavBar></NavBar>
    </GridItem>
    <Show above="base">
      <GridItem area="aside">
        <GameGrid></GameGrid>
      </GridItem>
    </Show>
    <GridItem area="main">Main</GridItem>
  </Grid>
);

export default App;
