import { View, Text, FlatList } from "react-native";
import React from "react";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
  const products = [1, 2, 3, 4];

  return (
    <View className="mt-4">
      <FlatList
        data={products}
        horizontal
        contentContainerStyle={{ columnGap: 20 }}
        renderItem={({ item }) => <ProductCardView />}
      />
    </View>
  );
};

export default ProductRow;
