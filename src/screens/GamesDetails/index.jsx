import { useEffect, useState } from "react";
import { MMKV } from "react-native-mmkv";
import { useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import GamesServices from "../../services/games.services";
import DetailsGames from "./../../components/DetailsGames";
import * as Native from "react-native";
import * as S from "./styles";
import { Loading } from "../../components/Loading";

export default function GamesDetails() {
  const navigation = useNavigation();
  const [details, setDetails] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [backgroundFavorite, setBackgroundFavorite] = useState(false);
  const route = useRoute();
  const { Game } = route.params;
  const storage = new MMKV();

  const handleGameFavorites = () => {
    const gameFavorites = {
      id: Game.id,
      name: Game.name,
      image: Game.image,
      ratings: Game.ratings,
      rating_top: Game.rating_top,
    };

    let favoritesArray = [];

    const existingFavorites = storage.getString("gameFavorites");
    if (existingFavorites) favoritesArray = JSON.parse(existingFavorites);

    const isFavorite = favoritesArray.some((fav) => fav.id === Game.id);

    if (isFavorite) {
      favoritesArray = favoritesArray.filter((fav) => fav.id !== Game.id);
      setBackgroundFavorite(false);
    } else {
      favoritesArray.push(gameFavorites);
      setBackgroundFavorite(true);
    }

    storage.set("gameFavorites", JSON.stringify(favoritesArray));
  };

  const checkIfFavorite = () => {
    const existingFavorites = storage.getString("gameFavorites");
    if (existingFavorites) {
      const favoritesArray = JSON.parse(existingFavorites);
      const isFavorite = favoritesArray.some((fav) => fav.id === Game.id);
      setBackgroundFavorite(isFavorite);
    }
  };

  useEffect(() => {
    checkIfFavorite();
  }, []);

  const handleDetailGames = async () => {
    try {
      const GET_DETAIL_GAMES = await GamesServices?.getDetail(Game.slug);
      const OBJ_DETAIL_GAME = {
        id: GET_DETAIL_GAMES?.id,
        name: GET_DETAIL_GAMES?.name,
        description: GET_DETAIL_GAMES?.description_raw,
        image: GET_DETAIL_GAMES?.background_image,
        rating: GET_DETAIL_GAMES?.rating,
        rating_top: GET_DETAIL_GAMES?.rating_top,
        genres: GET_DETAIL_GAMES.genres,
        platform: GET_DETAIL_GAMES.platforms,
        store: GET_DETAIL_GAMES.stores,
      };

      setDetails([OBJ_DETAIL_GAME]);
      setImage(OBJ_DETAIL_GAME.image);
      setLoading(false);
    } catch (error) {
      console.log("error ao buscar detalhes do jogo", error);
    }
  };
  useEffect(() => {
    handleDetailGames();
  }, []);

  return (
    <S.Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <S.ContainerContent>
            {image && <S.BackgroundImage source={{ uri: image }} />}
            <S.ButtonArrowLeft onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={33} color="#fff" />
            </S.ButtonArrowLeft>
            <S.ButtonBookMark
              onPress={handleGameFavorites}
              background={backgroundFavorite ? "#FF455F" : "#050B18"}
            >
              <Feather name="bookmark" size={30} color="#fff" />
            </S.ButtonBookMark>
          </S.ContainerContent>
          <S.Link>
            <AntDesign name="link" size={29} color="#FFF" />
          </S.Link>
          <Native.FlatList
            data={details}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <DetailsGames data={item} />}
          />
        </>
      )}
    </S.Container>
  );
}
