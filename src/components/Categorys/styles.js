import styled from "styled-components/native";
import { Theme } from "../../theme/theme";

export const Container = styled.View`
  margin-top: 25px;
`;
export const ButtonCategory = styled.TouchableOpacity`
  background-color: ${Theme.backgroundColor.primary};
  height: 34px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 0px 12px;
`;
export const CategoryText = styled.Text`
  color: ${Theme.backgroundColor.text};
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 17.64px;
`;
