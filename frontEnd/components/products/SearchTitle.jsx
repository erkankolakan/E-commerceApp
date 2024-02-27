import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SearchTitle = ({ item }) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity className="w-full flex-row h-20 mb-4 rounded-lg bg-white dark:bg-gri "
        onPress={() => {
            navigation.navigate("ProductDetails", item={item});
            }}
    >
      <View className="px-3 my-2 ">
        <Image
          className="w-24 h-full rounded-lg "
          source={{ uri: item.imageUrl }}
          alt="product"
          style={{ resizeMode: "cover" }}
        />
      </View>
        <View className="flex-1 justify-center">
            <Text className="text-lg text-primary dark:text-primaryDark font-bold">{item.title}</Text>
            <Text className="text-gray dark:text-beyazbo">{item.supplier}</Text>
            <Text className="text-gray dark:text-beyazbo">${item.price}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default SearchTitle;