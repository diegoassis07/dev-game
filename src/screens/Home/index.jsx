import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { LoadingCategory } from "../../components/LoadingCategory";
import { LoadingGames } from "../../components/LoadingGames";
import { Loading } from "../../components/Loading";
import AntDesign from "@expo/vector-icons/AntDesign";
import GamesServices from "../../services/games.services";
import Categorys from "../../components/Categorys";
import ListAllGame from "../../components/ListAllGame";
import * as Native from "react-native";
import * as S from "./styles";

export default function Home() {
  const navigation = useNavigation();
  const [category, setCategory] = useState([]);
  const [isButton, setIsButton] = useState(false);
  const [games, setGames] = useState([]);
  const [getGames, setGetGames] = useState("");
  const [loadingGames, setLoadingGames] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSearchGames = () => {
    setGetGames("");
    navigation.navigate("Search", {
      input: getGames,
    });
  };

  const handleGetGames = async () => {
    try {
      const RESULT_GET_GAMES = await GamesServices.getGames("20");

      const GET_GAMES = RESULT_GET_GAMES?.map((allGames) => {
        return {
          id: allGames?.id,
          name: allGames?.name,
          image: allGames?.background_image,
          rating_top: allGames?.rating_top,
          ratings: allGames?.rating,
          slug: allGames?.slug,
        };
      });

      const SORTED_GAMES = GET_GAMES.sort((a, b) => b.ratings - a.ratings);

      setGames(SORTED_GAMES);
      setLoadingGames(false);
    } catch (error) {
      console.log("Erro ao buscar jogos:", error);
    }
  };

  useEffect(() => {
    handleGetGames();
  }, []);

  const handleGetCategory = async () => {
    try {
      const RESULT_CATEGORY_GAMES = await GamesServices?.getCategorys("20");
      const CATEGORY_GAMES = RESULT_CATEGORY_GAMES?.map((category) => ({
        id: category?.id,
        name: category?.name,
        rating_top: category?.rating_top,
        ratings: category?.rating,
      }));
      const OBJECT_ALL_GAMES = {
        id: 0,
        name: "All games",
      };
      CATEGORY_GAMES.unshift(OBJECT_ALL_GAMES);
      setCategory(CATEGORY_GAMES);
      setLoadingCategories(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    handleGetCategory();
  }, []);

  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>
          Dev<Native.Text style={{ color: "#FF455F" }}>Games</Native.Text>
        </S.Title>
        <S.ButtonSave onPress={() => navigation.navigate("Favorites")}>
          <Feather name="bookmark" size={25} color="#FFF" />
        </S.ButtonSave>
      </S.ContainerTitle>

      <S.ContainerInput>
        <S.Input
          placeholder="Looking for a game?"
          placeholderTextColor="#DDD"
          value={getGames}
          onChangeText={(text) => setGetGames(text)}
        />
        <Native.TouchableOpacity onPress={handleSearchGames}>
          <AntDesign name="search1" size={29} color="#FF455F" />
        </Native.TouchableOpacity>
      </S.ContainerInput>

      <Native.View style={{ paddingBottom: 13 }}>
        {loadingCategories ? (
          <LoadingCategory />
        ) : (
          <Native.FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={category}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <Categorys data={item} />}
            contentContainerStyle={{
              gap: 12,
            }}
          />
        )}
      </Native.View>

      <S.Label>Trending games</S.Label>
      {loadingGames ? (
        <LoadingGames />
      ) : (
        <Native.FlatList
          showsVerticalScrollIndicator={false}
          data={games}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ListAllGame data={item} IsButton={() => setIsButton(true)} />
          )}
          contentContainerStyle={{
            gap: 15,
            paddingHorizontal: 3,
          }}
        />
      )}
    </S.Container>
  );
}
