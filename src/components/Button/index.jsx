import * as Native from "react-native";

export default function Button({ Children, ...rest }) {
  return (
    <Native.TouchableOpacity {...rest}>{Children}</Native.TouchableOpacity>
  );
}
