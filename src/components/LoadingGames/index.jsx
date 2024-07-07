import * as Native from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

export const LoadingGames = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  return (
    <Native.View style={{ flex: 1, padding: 3 }}>
      <Native.FlatList
        showsVerticalScrollIndicator={false}
        data={Array(10).fill(null)}
        contentContainerStyle={{ gap: 14 }}
        renderItem={() => (
          <ShimmerPlaceholder
            height={154}
            delay={0}
            duration={750}
            shimmerColors={["#6c7786", "#666f7d", "#778290a7"]}
            location={[0.3, 0.5, 0.7]}
            style={{ width: "100%", borderRadius: 12 }}
            shimmerStyle={{ borderRadius: 20, width: 200 }}
          />
        )}
      />
    </Native.View>
  );
};
