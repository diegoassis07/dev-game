import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

export default function Categorys({ data, games }) {
  const navigation = useNavigation();

  const handleTypeGamesCategory = async () => {
    navigation.navigate("GamesCategory", { genre_selected: data });
  };

  return (
    <S.Container>
      <S.ButtonCategory onPress={handleTypeGamesCategory}>
        <S.CategoryText style={{ color: "#fff" }}>{data.name}</S.CategoryText>
      </S.ButtonCategory>
    </S.Container>
  );
}
