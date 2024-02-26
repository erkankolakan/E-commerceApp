import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import ProductsList from "../components/products/ProductsList";

const NewRivals = () => {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaView className="flex-1 dark:bg-gri2 items-center ">
      <View className="w-[98%] flex-row items-center rounded-full py-1 mt-3 px-1   bg-primary">
        <TouchableOpacity
          className=""
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back-circle" size={30} color={"white"} />
        </TouchableOpacity>
        <Text className="text-base font-semibold ml-2 text-white">
          Products
        </Text>
      </View>
      <View className="flex-1">
        <ProductsList />
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;
