import styled from "styled-components/native";
import { Theme } from "./../../theme/theme";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.backgroundColor.background};
  padding: 0px 4px;
`;
export const ContainerTitle = styled.View`
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
  color: ${Theme.backgroundColor.text};
`;
export const ButtonSave = styled.TouchableOpacity`
  background-color: ${Theme.backgroundColor.input};
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;
export const ContainerInput = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;
export const Input = styled.TextInput`
  width: 85%;
  height: 45px;
  padding-left: 15px;
  font-size: 15px;
  border-radius: 25px;
  background-color: ${Theme.backgroundColor.input};
  color: ${Theme.backgroundColor.text};
`;
export const Label = styled.Text`
  font-size: 18px;
  font-weight: 700;
  font-family: sans-serif;
  line-height: 21.09px;
  color: ${Theme.backgroundColor.text};
  margin-top: 15px;
  padding-bottom: 15px;
`;
