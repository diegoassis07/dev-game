import { useEffect, useState } from "react";
import { MMKV } from "react-native-mmkv";
import { useNavigation } from "@react-navigation/native";
import ListAllGame from "./../../components/ListAllGame";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as Native from "react-native";
import * as S from "./styles";

export default function Favorites() {
  const [gameFavorite, setGameFavorite] = useState([]);
  const [backgroundFavorite, setBackgroundFavorite] = useState(false);
  const storage = new MMKV();
  const navigation = useNavigation();

  useEffect(() => {
    const JSON_GAME_FAVORITES = storage.getString("gameFavorites");

    if (JSON_GAME_FAVORITES) {
      try {
        const OBJECT_GAME_FAVORITES = JSON.parse(JSON_GAME_FAVORITES);
        if (Array.isArray(OBJECT_GAME_FAVORITES)) {
          const uniqueGames = [
            ...new Map(
              OBJECT_GAME_FAVORITES.map((game) => [game.id, game])
            ).values(),
          ];
          setGameFavorite(uniqueGames);
          setBackgroundFavorite(true);
        } else {
          setGameFavorite([]);
        }
      } catch (error) {
        console.log("Error favoritos existentes:", error);
        setGameFavorite([]);
      }
    } else {
      setGameFavorite([]);
    }
  }, []);

  const handleDeleteFavorite = (id) => {
    const updatedFavorites = gameFavorite.filter((game) => game.id !== id);
    setGameFavorite(updatedFavorites);
    storage.set("gameFavorites", JSON.stringify(updatedFavorites));
    setBackgroundFavorite(false);
  };

  return (
    <S.Container>
      <S.ContainerHeader>
        <Native.TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={45} color="#fff" />
        </Native.TouchableOpacity>
        <S.Title>My favorites</S.Title>
      </S.ContainerHeader>

      <Native.FlatList
        data={gameFavorite}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListAllGame
            data={item}
            isButtonDelete={true}
            handleDelete={() => handleDeleteFavorite(item.id)}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 5, gap: 12 }}
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
