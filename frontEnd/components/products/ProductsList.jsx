import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import useFetch from "../../hook/useFetch";
import ProductsCardView from "./ProductCardView";

const ProductsList = () => {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#DDF0FF" />
      </View>
    );
  }

  return (
    <View className="flex-1 items-center">
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ProductsCardView item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          columnGap: 2,
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 10,
            }}
          />
        )}
      />
    </View>
  );
};

export default ProductsList;
