import styled from "styled-components/native";
import { Theme } from "./../../theme/theme";

export const ContainerHeader = styled.View`
  width: 100%;
  margin-top: 6%;
  height: 85px;
  background-color: ${({backgroundColor}) => backgroundColor || "transparent" };
`;
export const ButtonBack = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 30px;
  margin-left: 10px;
  gap: 15px;
  align-items: center;
`;
export const Title = styled.Text`
  color: ${Theme.backgroundColor.text};
  font-size: 25px;
  font-family: "Roboto";
  font-weight: 700;
`;