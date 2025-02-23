import { Card, CardBody } from "@chakra-ui/card";
import { Game } from "../hooks/useGames";
import { Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => (
  <Card>
    <Image src={game.background_image}></Image>
    <CardBody>
      <Heading fontSize="2xl">{game.name}</Heading>

      <HStack justifyContent="space-between">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>

        <CriticScore score={game.metacritic}></CriticScore>
      </HStack>
    </CardBody>
  </Card>
);

export default GameCard;
