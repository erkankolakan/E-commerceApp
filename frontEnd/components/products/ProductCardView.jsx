import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";




const ProductCardView = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails",{item})}>
      <View className="w-[182px] h-[240px] rounded-xl bg-secondary  ">
        <View className="flex-1 w[170px] m-1 rounded-lg overflow-hidden">
          <Image
            source={{                              
              uri: item.imageUrl,
            }}
            resizeMode="contain"
            style={{ resizeMode: "cover", aspectRatio: 1 }}
          />
        </View>
        <View className="p-2 pt-1">
          <Text className="font-bold text-base" numberOfLines={1}>
            {item.title}
          </Text>
          <Text className="font-medium text-gray text-xs" numberOfLines={1}>
            {item.supplier}
          </Text>
          <Text className="font-bold text-base" numberOfLines={1}>
            ${item.price}
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
