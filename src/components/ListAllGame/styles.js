import styled from "styled-components/native";
import { Theme } from "../../theme/theme";

export const Container = styled.View`
  width: 100%;
  height: 169px;
`;

export const ContentContainer = styled.View`
  width: 100%;
`;

export const AreaImage = styled.View`
  position: relative;
  height: 169px;
  width: 100%;
`;

export const ImageGames = styled.Image`
  width: 100%;
  height: 169px;
  border-radius: 8px;
  position: absolute;
`;

export const BackgroundImage = styled.View`
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 169px;
  position: absolute;
`;

export const ContentTitleAndRattings = styled.View`
  bottom: 10px;
  position: absolute;
  margin-left: 10px;
  z-index: 99;
  gap: 6px;
`;
export const TitleGames = styled.Text`
  color: ${Theme.backgroundColor.text};
  font-size: 14px;
  font-weight: 700;
  line-height: 17.64px;
`;

export const ContentRattings = styled.View`
  flex-direction: row;
  gap: 5px;
`;
export const Ratings = styled.Text`
  color: ${Theme.backgroundColor.text};
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
`;
export const ButtonDelete = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: ${Theme.backgroundColor.quaternary};
  position: absolute;
  z-index: 99;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  right: 3%;
  top: 7px;
`;
