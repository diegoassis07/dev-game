import styled from "styled-components/native";
import { Theme } from "./../../theme/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${Theme.backgroundColor.background};
`;
export const ContainerContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
export const BackgroundImage = styled.Image`
  position: absolute;
  width: 100%;
  height: 250px;
`;
export const ButtonArrowLeft = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  width: 50px;
  height: 50px;
  background-color: ${Theme.backgroundColor.background};
  border-radius: 99px;
  margin-left: 10px;
`;
export const ButtonBookMark = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  width: 50px;
  height: 50px;
  background-color: ${({background}) => background || "transparent"};
  border-radius: 99px;
  margin-right: 10px;
`;
export const Link = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: #e72f49;
  border-radius: 99px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 3.5%;
  top: 220px;
`;
