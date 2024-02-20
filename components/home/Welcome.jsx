import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View className="mx-3">
      <View className="w-full ">
        <Text className="font-bold text-[45px] mt-5 dark:text-white">
          Find The Most
        </Text>
        <Text className="font-bold text-[42px]  text-primary dark:text-primaryDark ">
          Lucurious Furniture
        </Text>
      </View>
      <View className="flex-row  justify-center px-2 items-center h-14 bg-secondary  rounded-md my-4">
        <TouchableOpacity className="mr-4">
          <Feather name="search" size={24} color={"gray"} />
        </TouchableOpacity>
        <View className="flex-1 bg-secondary mr-2 rounded-md">
          <TextInput
            value=""
            onPressIn={() => navigation.navigate("Search")}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity className="bg-primary dark:bg-primaryDark h-12 w-12 rounded-md items-center justify-center">
          <Feather name="camera" size={24} color={"#F3F4F8"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
