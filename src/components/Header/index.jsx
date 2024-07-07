import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import * as S from "./styles";

export default function Header({
  typeGame,
  text,
  backgroundColor,
}) {
  const navigation = useNavigation();

  return (
    <S.ContainerHeader backgroundColor={backgroundColor}>
        <S.ButtonBack onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={40} color="#fff" />
          {typeGame ? <S.Title>{typeGame}</S.Title> : <S.Title>{text}</S.Title>}
        </S.ButtonBack>
    </S.ContainerHeader>
  );
}
