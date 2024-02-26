import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { useNavigation } from "@react-navigation/native";

const Heading = () => {
  const navigation = useNavigation();
  const { colorScheme } = useColorScheme();
  return (
    <View className="mt-4 mx-3 ">
      <View className="flex-row justify-between items-center">
        <Text className="font-semibold text-2xl text-black dark:text-white">
          New Rivals
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
          <Ionicons
            name="grid"
            size={24}
            color={colorScheme === "dark" ? "#007984" : "#2A4D50"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
