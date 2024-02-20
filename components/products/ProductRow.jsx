import { View, Text, FlatList } from "react-native";
import React from "react";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
  const products = [1, 2, 3, 4,5,6];

  return (
    <View className="mt-2  mb-20 px-2 ">
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
