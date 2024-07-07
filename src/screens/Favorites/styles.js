import styled from "styled-components/native";
import { Theme } from "./../../theme/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${Theme.backgroundColor.background};
`;
export const ContainerHeader = styled.View`
  flex-direction: row;
  margin-top: 12%;
  padding-left: 10px;
  margin-bottom: 25px;
  gap: 20px;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-family: Roboto;
  font-weight: 700;
  color: ${Theme.backgroundColor.text};
`;
