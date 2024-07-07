import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import * as Native from "react-native";
import * as S from "./styles";
import { Loading } from "./../Loading";
import { useState } from "react";

export default function ListAllGame({
  data,
  IsButton,
  isButtonDelete,
  handleDelete,
}) {
  const navigation = useNavigation();

  const handleDetailGames = async () => {
    navigation.navigate("GamesDetails", { Game: data });
  };

  return (
    <S.Container>
      {IsButton ? (
        <Native.TouchableOpacity onPress={handleDetailGames}>
          <S.ContentContainer>
            <S.ContentTitleAndRattings>
              <S.TitleGames>{data?.name}</S.TitleGames>
              <S.ContentRattings>
                <Native.Image source={require("./../../assets/Star.png")} />
                <S.Ratings>
                  {data?.ratings}/{data?.rating_top}
                </S.Ratings>
              </S.ContentRattings>
            </S.ContentTitleAndRattings>

            <S.AreaImage>
              {data?.image && <S.ImageGames source={{ uri: data?.image }} />}
              <S.BackgroundImage />
            </S.AreaImage>
          </S.ContentContainer>
        </Native.TouchableOpacity>
      ) : (
        <Native.View>
          <S.ContentContainer>
            <S.ContentTitleAndRattings>
              <S.TitleGames>{data?.name}</S.TitleGames>
              <S.ContentRattings>
                <Native.Image source={require("./../../assets/Star.png")} />
                <S.Ratings>
                  {data?.ratings}/{data?.rating_top}
                </S.Ratings>
              </S.ContentRattings>
            </S.ContentTitleAndRattings>

            <S.AreaImage>
              {data?.image && <S.ImageGames source={{ uri: data?.image }} />}
              <S.BackgroundImage />
            </S.AreaImage>
          </S.ContentContainer>
          {isButtonDelete && (
            <S.ButtonDelete onPress={() => handleDelete()}>
              <Feather name="trash" size={24} color="#FFF" />
            </S.ButtonDelete>
          )}
        </Native.View>
      )}
    </S.Container>
  );
}
