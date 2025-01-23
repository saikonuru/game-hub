import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
    {/* <Show above="base"> */}
    <GridItem area="aside" bg="gold">
      Aside
    </GridItem>
    {/* </Show> */}
    <GridItem area="main" bg="dodgerblue">
      Main
    </GridItem>
  </Grid>
);

export default App;
