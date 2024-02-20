import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context"; //sayfa başının içerden başlamasını sağlar
import stylels from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";
import Heading from "../components/home/Heading";
import ProductRow from "../components/products/ProductRow";

const Home = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className="dark:bg-gri2 flex-1">
      <View className="mx-[22px] mt-4 ">
        <View className="flex-row justify-between">
          <Ionicons
            name="location-outline"
            size={24}
            color={colorScheme === "dark" ? "white" : "black"}
          />
          <Text className="text-lg font-semibold text-gray ">
            Shanghai China
          </Text>

          <View className="justify-end">
            <View className="absolute bottom-5 -right-2 w-4 h-4 rounded-full items-center bg-green justify-center z-50">
              <Text className="text-xs text-lightWhite">8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto
                name="shopping-bag"
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView>
        <Welcome />
        <Carousel />
        <Heading />
        <ProductRow />
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          toggleColorScheme();
        }}
        className="w-24 top-0 h-9 m-9 rounded-full justify-center items-center bg-white dark:bg-gray absolute "
      >
        <View>
          <Text className="font-extrabold text-lg dark:text-white">
            {colorScheme == "light" ? "dark" : "light"}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
