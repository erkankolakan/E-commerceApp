import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useColorScheme } from "nativewind";

const Profile = ({ navigation }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  const clearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to delete all saced data on your device?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel clear cache"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            /*setUserLogin(false)*/ console.log("cance cache pressed"),
        },
      ]
    );
  };

  const deleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel cache"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("delete account pressed") },
      ]
    );
  };

  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => setUserLogin(false) },
    ]);
  };

  return (
    <View className="flex-1 bg-lightWhite ">
      <View className="flex-1 bg-lightWhite dark:bg-gri2">
        <StatusBar className="bg-gray" />
        <View className="w-full">
          <Image
            className="w-full h-[290] "
            source={require("../assets/images/gradyan.jpg")}
            style={{ resizeMode: "cover" }}
          />
        </View>
        <View className="flex-1  items-center -mt-20">
          <Image
            className="w-[140] h-[140] rounded-full"
            source={require("../assets/images/user.jpg")}
            style={{ resizeMode: "cover", borderColor: "#fff", borderWidth: 3 }}
          />
          <Text className="text-base dark:text-white font-semibold ">
            {userLogin === true
              ? "Erkan Kolakan"
              : "Please login intor your account"}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View className="bg-secondary   p-1.5 px-6 border-2 mt-1 border-secondaryDark rounded-full">
                <Text className="text-gray font-semibold">L O G I N</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View className="bg-secondary p-1.5 px-6 border-2 mt-1 border-secondaryDark rounded-full">
              <Text className="text-gray font-semibold">
                erkankolakan@gmail.com
              </Text>
            </View>
          )}

          {userLogin === false ? (
            <View></View>
          ) : (
            <View className="w-full mt-3 bg-lightWhite dark:bg-gri2 rounded-md">
              <TouchableOpacity
                onPress={() => navigation.navigate("Favorites")}
              >
                <View className="flex-row items-center gap-x-4 p-3 border-b border-gray2/30">
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "#83829A"}
                  />
                  <Text className="text-gray dark:text-white  font-semibold">
                    Favorite
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                <View className="flex-row items-center gap-x-4 p-3 border-b border-gray2/30">
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "#83829A"}
                  />
                  <Text className="text-gray dark:text-white font-semibold">
                    Orders
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <View className="flex-row items-center gap-x-4 p-3 border-b border-gray2/30">
                  <SimpleLineIcons
                    name="bag"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "#83829A"}
                  />
                  <Text className="text-gray dark:text-white font-semibold">
                    Cart
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => clearCache()}>
                <View className="flex-row items-center gap-x-4 p-3 border-b border-gray2/30">
                  <MaterialCommunityIcons
                    name="cached"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "#83829A"}
                  />
                  <Text className="text-gray dark:text-white font-semibold">
                    Clear Cache
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteAccount()}>
                <View className="flex-row items-center gap-x-4 p-3 border-b border-gray2/30">
                  <AntDesign
                    name="deleteuser"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "#83829A"}
                  />
                  <Text className="text-gray dark:text-white font-semibold">
                    Delete Account
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => logout()}>
                <View className="flex-row items-center gap-x-4 p-3 border-b border-gray2/30">
                  <AntDesign
                    name="logout"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "#83829A"}
                  />
                  <Text className="text-gray dark:text-white font-semibold">
                    Logout
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});

// gradyan
