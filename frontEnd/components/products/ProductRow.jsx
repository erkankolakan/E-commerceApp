import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import ProductCardView from "./ProductCardView";
import useFetch from "../../hook/useFetch";

const ProductRow = () => {
  const { data, isLoading, error } = useFetch();

  return (
    <View className="mt-2  mb-20 px-2 ">
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="gray"
          style={{ marginTop: 50 }}
        />
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          horizontal
          contentContainerStyle={{ columnGap: 20 }}
          renderItem={({ item }) => <ProductCardView item={item} />}
        />
      )}
    </View>
  );
};

export default ProductRow;
