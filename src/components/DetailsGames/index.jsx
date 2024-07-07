import { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as Native from "react-native";
import * as S from "./styles";

export default function DetailsGames({ data }) {
  const [isVisible, setIsVisible] = useState(false);

  const renderStores = () => {
    const STORES_ARRAY = Array.isArray(data?.store) ? data.store : [];
    const STORES_TO_SHOW = STORES_ARRAY.slice(0, 3);
    return STORES_TO_SHOW.map((store, index) => (
      <S.ContentSections
        key={index}
        background="
#0F172A"
      >
        <S.Label>{store?.store?.name}</S.Label>
      </S.ContentSections>
    ));
  };
  const renderGenres = () => {
    const GENRES_ARRAY = Array.isArray(data?.genres) ? data.genres : [];
    return GENRES_ARRAY.map((genres, index) => (
      <S.ContentSections key={index} background="#64748B">
        <S.Label fontSize="14px" fontFamily="Poppins_700Bold">
          {genres?.name}
        </S.Label>
      </S.ContentSections>
    ));
  };

  const renderPlatforms = () => {
    const PLATFORMS_ARRAY = Array.isArray(data?.platform) ? data.platform : [];
    const AMOUNT_PLATFORMS_TO_SHOW = PLATFORMS_ARRAY.slice(0, 3);
    return AMOUNT_PLATFORMS_TO_SHOW.map((platform, index) => (
      <S.ContentSections
        key={index}
        background="
      #0F172A"
      >
        <S.Label>{platform?.platform?.name}</S.Label>
      </S.ContentSections>
    ));
  };

  return (
    <S.Container>
      <S.ContentTitle>
        <S.ContainerRatings>
          <Native.Image source={require("./../../assets/Star.png")} />
          <S.Label>
            {data?.rating}/{data?.rating_top}
          </S.Label>
        </S.ContainerRatings>
        <S.SectionTitle>{data?.name}</S.SectionTitle>
      </S.ContentTitle>

      <S.ContainerGenres>
        <S.SectionTitle>Genres</S.SectionTitle>
        <S.ContentLabel>{renderGenres()}</S.ContentLabel>
      </S.ContainerGenres>

      <S.ContainerDescription>
        <S.SectionTitle>Description</S.SectionTitle>
        <S.Description numberOfLines={5}>{data?.description}</S.Description>
        <S.ButtonDescription onPress={() => setIsVisible(!isVisible)}>
          <S.ButtonText>Read full description</S.ButtonText>
        </S.ButtonDescription>
      </S.ContainerDescription>

      <S.ContainerPlatforms>
        <S.SectionTitle>Platforms</S.SectionTitle>
        <S.ContentLabel>{renderPlatforms()}</S.ContentLabel>
      </S.ContainerPlatforms>

      <S.ContainerStores>
        <S.SectionTitle>Stores</S.SectionTitle>
        <S.ContentLabel>{renderStores()}</S.ContentLabel>
      </S.ContainerStores>

      <Native.Modal visible={isVisible}>
        <S.ContainerModal>
          <S.ContentModalTitle>
            <S.ButtonBackModal onPress={() => setIsVisible(!isVisible)}>
              <AntDesign name="arrowleft" size={30} color="#fff" />
            </S.ButtonBackModal>
            <S.Label
              fontSize="27px"
              fontFamily="Poppins_600SemiBold"
              right="100px"
            >
              Description
            </S.Label>
          </S.ContentModalTitle>
          <S.Label
            fontSize="14px"
            fontFamily="Poppins_200Thin"
            numberOfLines={27}
            color="#DDD"
            paddingLeft="7px"
          >
            {data?.description}
          </S.Label>
        </S.ContainerModal>
      </Native.Modal>
    </S.Container>
  );
}
