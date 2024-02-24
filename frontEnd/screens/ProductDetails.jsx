import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons, SimpleLineIcons,MaterialCommunityIcons,Fontisto } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

const ProductDetails = ({ navigation }) => {
  const { colorScheme } = useColorScheme();
  const [count, setCount] = React.useState(1);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <View className="flex-1">
      <View className="px-4 flex-row justify-between items-center absolute top-12 w-full z-50 ">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            name="chevron-back-circle"
            size={30}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white p-2 justify-center items-center rounded-full"
          onPress={() => {}}
        >
          <Ionicons
            name="heart"
            size={30}
            color={colorScheme === "dark" ? "#007984" : "#2A4D50"}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: "https://images.pexels.com/photos/4112557/pexels-photo-4112557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        styles={{ aspectRatio: 1, resizeMode: "contain" }}
        className="w-full h-[50%]"
      />
      <View className="px-4 py-4 -mt-12 flex-1 rounded-tl-2xl rounded-tr-2xl bg-white dark:bg-gri2">
        <View className="justify-between flex-row ">
          <Text className="text-2xl font-bold text-black dark:text-white">
            Product Name
          </Text>
          <Text className="text-lg font-bold mt-1 p-1 px-4  rounded-full bg-secondary text-black">
            $100.99
          </Text>
        </View>
        <View className="justify-between flex-row my-3">
          <View className="flex-row">
            {[1, 2, 3, 4, 5].map((item) => (
              <View key={item} className="px-0.5 ">
                <Ionicons name="star" size={24} color={"gold"} />
              </View>
            ))}
            <Text className="mt-0.4 text-gray ml-2 text-base">(4.9)</Text>
          </View>
          <View className="flex-row justify-center items-center">
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons
                name="plus"
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            </TouchableOpacity>
            <Text className=" text-black dark:text-white text-base mx-2">
              {count}
            </Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons
                name="minus"
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="text-xl font-semibold text-black dark:text-white">
          Description
        </Text>
        <Text className="text-base mt-1 text-black dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut
          ac ligula sapien. Suspendisse cursus faucibus finibus. Curabitur ut
          augue ligula. Nunc in convallis turpis.
        </Text>

        <View className="flex-row px-2 py-0.5 justify-between items-center bg-secondary rounded-full mt-4 ">
          <View className="flex-row justify-center items-center">
            <Ionicons name="location-outline" size={24} color={"black"} />
            <Text className="ml-1">Dallas</Text>
          </View>
          <View className="flex-row justify-center items-center">
            <MaterialCommunityIcons name="truck-delivery-outline" size={24} color={"black"} />
            <Text className="ml-1">Free Delivery</Text>
          </View>
        </View>

        <View className="flex-row justify-between">
          <TouchableOpacity
            onPress={() => {}}
            className="bg-gri2 justify-center dark:bg-white flex-[.9]  p-1 rounded-full mt-4  items-start pl-4"
          >
            <Text className="text-white dark:text-black text-lg font-bold">Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="bg-gri2 w-10 h-10 dark:bg-white ml-2  rounded-full mt-4 justify-center items-center"
          >
            <Fontisto
              name="shopping-basket-add"
              size={18}
              color={colorScheme === "dark" ? "black" : "white"}

            />

          </TouchableOpacity>


        </View>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
