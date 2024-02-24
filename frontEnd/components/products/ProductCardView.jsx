import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ProductCardView = () => {
    const navigation = useNavigation()
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View className="w-[182px] h-[240px] rounded-xl bg-secondary  ">
        <View className="flex-1 w[170px] m-1 rounded-lg overflow-hidden">
          <Image
            source={{
              uri: "https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
            resizeMode="contain"
            style={{ resizeMode: "cover", aspectRatio: 1 }}
          />
        </View>
        <View className="p-2 pt-1">
          <Text className="font-bold text-base" numberOfLines={1}>
            Prodcts lorem
          </Text>
          <Text className="font-medium text-gray text-xs" numberOfLines={1}>
            Prodcts
          </Text>
          <Text className="font-bold text-base" numberOfLines={1}>
            $250
          </Text>
        </View>
        <TouchableOpacity className="rounded-full absolute bottom-2 right-2 w-7 h-w-7 bg-primary dark:bg-primaryDark justify-center items-center">
          <Ionicons name="add" size={27} color={"white"} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
