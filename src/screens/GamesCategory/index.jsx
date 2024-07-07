import Header from "../../components/Header";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import GamesServices from "./../../services/games.services";
import ListAllGame from "../../components/ListAllGame";
import * as Native from "react-native";
import * as S from "./styles";

export default function GamesCategory() {
  const route = useRoute();
  const { genre_selected } = route.params;
  const [typeGames, setTypeGames] = useState([]);

  const handleAllGames = async () => {
    const getAllGames = await GamesServices.getGames();
    const resultsGames = getAllGames.map((games) => {
      return {
        id: games?.id,
        name: games?.name,
        image: games?.background_image,
        rating_top: games?.rating_top,
        ratings: games?.rating,
      };
    });

    setTypeGames(resultsGames);
  };

  const handleTypeGamesCategory = async () => {
    try {
      const TYPE_GAME = await GamesServices.ListTypeGamesCategory(
        genre_selected.id
      );

      const resultsGames = TYPE_GAME.map((games) => {
        return {
          id: games?.id,
          name: games?.name,
          image: games?.background_image,
          rating_top: games?.rating_top,
          ratings: games?.rating,
        };
      });
      setTypeGames(resultsGames);
    } catch (error) {
      console.log("ERROR AO BUSCAR TIPO DO GAME =>", error);
    }
  };

  useEffect(() => {
    const IS_ALL_GAMES = genre_selected.id === 0;
    IS_ALL_GAMES ? handleAllGames() : handleTypeGamesCategory();
  }, []);

  return (
    <S.Container>
      <Header typeGame={genre_selected.name} />

      <Native.FlatList
        showsVerticalScrollIndicator={false}
        data={typeGames}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListAllGame data={item} />}
        contentContainerStyle={{
          paddingHorizontal: 7,
          paddingVertical: 15,
          gap: 15,
        }}
      />
    </S.Container>
  );
}
