import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";
import * as Native from "react-native";

export const LoadingCategory = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  return (
    <Native.View>
      <Native.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Array(10).fill(null)}
        contentContainerStyle={{ gap: 10, padding: 2, marginTop: 25 }}
        renderItem={() => (
          <ShimmerPlaceholder
            height={34}
            delay={0}
            duration={850}
            shimmerColors={["#6c7786", "#676e7b", "#95a3b6a0"]}
            style={{ width: 95, borderRadius: 10 }}
          />
        )}
      />
    </Native.View>
  );
};
