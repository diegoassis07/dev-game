import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import GamesServices from "../../services/games.services";
import Header from "./../../components/Header";
import ListAllGame from "../../components/ListAllGame";
import * as Native from "react-native";
import * as S from "./styles";

export default function Search() {
  const route = useRoute();
  const { input } = route.params;
  const [games, setGames] = useState([]);

  const gamesWanted = async () => {
    const GAMES_WANTED = await GamesServices?.searchGames(input);
    const RESULTS_GAMES_WANTED = GAMES_WANTED.map((game) => {
      return {
        id: game?.id,
        name: game?.name,
        image: game?.background_image,
        rating_top: game?.rating_top,
        ratings: game?.rating,
      };
    });
    setGames(RESULTS_GAMES_WANTED);
  };

  useEffect(() => {
    gamesWanted();
  }, []);

  return (
    <S.Container style={{ flex: 1 }}>
      <Header text="Search" />
      <Native.FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListAllGame data={item} />}
        contentContainerStyle={{
          gap: 12,
          marginTop: 10,
          paddingHorizontal: 3,
        }}
        ListEmptyComponent={
          <Native.View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Native.Text
              style={{
                color: "#fff",
                fontSize: 20,
                marginTop: 10,
                marginBottom: 20,
              }}
            >
              Not game found!
            </Native.Text>
            <Native.Image
              source={require("../../assets/rosto-triste.png")}
              style={{ width: 150, height: 150 }}
            />
          </Native.View>
        }
      />
    </S.Container>
  );
}
