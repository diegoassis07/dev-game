import styled from "styled-components/native";
import { Theme } from "./../../theme/theme";

export const Container = styled.View`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`;
export const ContentTitle = styled.View`
  margin-top: 165px;
`;
export const ContainerRatings = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  gap: 5px;
`;

export const ContainerGenres = styled.View`
  margin-top: 20px;
`;

export const ContentGenres = styled.View`
  flex-direction: row;
  margin-top: 10px;
  gap: 10px;
  width: 100%;
  align-items: center;
`;

export const ContainerDescription = styled.View`
  margin-top: 20px;
`;
export const SectionTitle = styled.Text`
  color: ${Theme.backgroundColor.text};
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
`;
export const Description = styled.Text`
  color: #c0c0c0;
  font-weight: 400;
  font-family: Roboto;
  font-size: 14px;
  margin-top: 7px;
`;
export const ButtonDescription = styled.TouchableOpacity`
  background-color: ${Theme.backgroundColor.tertiary};
  padding: 5px;
  border-radius: 4px;
  margin-top: 7px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
export const ButtonText = styled.Text`
  color: ${Theme.backgroundColor.text};
  font-size: 14px;
  font-weight: 400;
  font-family: Roboto;
`;
export const Label = styled.Text`
  color: ${({ color }) => color || `${Theme.backgroundColor.text}`};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  font-family: ${({ fontFamily }) => fontFamily || "Poppins_400Regular"};
  padding-left: ${({ paddingLeft }) => paddingLeft || "0px"};
  right: ${({right }) => right || "0px"};
`;
export const ContentSections = styled.View`
  background-color: ${({ background }) => background || "transparent"};
  padding: 0px 10px;
  border-radius: 8px;
  margin-top: 10px;
  align-items: center;
`;
export const ContentLabel = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const ContainerPlatforms = styled.View`
  margin-top: 10px;
`;

export const ContainerStores = styled.View`
  margin-top: 10px;
`;

export const ContainerModal = styled.View`
  flex: 1;
  background-color: ${Theme.backgroundColor.secondary};
  align-items: center;
`;

export const ContentModalTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
  width: 90%;
  margin-bottom: 25px;
`;

export const ButtonBackModal = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: ${Theme.backgroundColor.background};
  align-items: center;
  justify-content: center;
  border-radius: 99px;
`;
