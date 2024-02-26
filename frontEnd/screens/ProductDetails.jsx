import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { useRoute } from "@react-navigation/native";

const ProductDetails = ({ navigation }) => {
  const { colorScheme } = useColorScheme();
  const [count, setCount] = React.useState(1);

  const route = useRoute();
  const { item } = route.params;
  //useRoute, bir route'un parametrelerini almak için kullanılır. Ama dikkat et ben ProductsView içinde karta tıkladığımz zaman item göndermiştim. O itemi burada almak için useRoute kullanıyorum.

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
      <View className="px-4  flex-row justify-between items-center absolute top-12 w-full z-50 ">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="bg-white/50 p-2 justify-center items-center rounded-full"
        >
          <Ionicons
            name="chevron-back-circle"
            size={30}
            color={colorScheme === "dark" ? "#007984" : "#2A4D50"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white/50 p-2 justify-center items-center rounded-full"
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
          uri: item.imageUrl,
        }}
        styles={{ aspectRatio: 1, resizeMode: "contain" }}
        className="w-full h-[50%]"
      />

      <View className=" px-4 -mt-12 flex-1 rounded-tl-2xl rounded-tr-2xl bg-white dark:bg-gri2">
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="justify-between flex-row pt-4 ">
            <Text className="text-2xl font-bold text-black dark:text-white">
              {item.title}
            </Text>
            <Text className="text-lg font-bold mt-1 p-1 px-4  rounded-full bg-secondary text-black">
              ${item.price}
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
            {item.description}
          </Text>

          <View className="flex-row px-2 py-0.5 justify-between items-center bg-secondary rounded-full mt-4 ">
            <View className="flex-row justify-center items-center">
              <Ionicons name="location-outline" size={24} color={"black"} />
              <Text className="ml-1">{item.product_location}</Text>
            </View>
            <View className="flex-row justify-center items-center">
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={24}
                color={"black"}
              />
              <Text className="ml-1">Free Delivery</Text>
            </View>
          </View>

          <View className="flex-row justify-between pb-6">
            <TouchableOpacity
              onPress={() => {}}
              className="bg-gri2 justify-center dark:bg-white flex-[.9]  p-1 rounded-full mt-4  items-start pl-4"
            >
              <Text className="text-white dark:text-black text-lg font-bold">
                Buy Now
              </Text>
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
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
