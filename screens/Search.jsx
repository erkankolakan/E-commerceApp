import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
const Search = () => {
  return (
    <SafeAreaView>
      <View className="flex-row m-3 my-4  justify-center px-2 items-center h-14 bg-secondary rounded-md ">
        <TouchableOpacity className="mr-4">
          <Feather name="camera" size={24} color={"gray"} />
        </TouchableOpacity>
        <View className="flex-1 bg-secondary mr-2 rounded-md">
          <TextInput
            value=""
            // onPressIn={() =>{}}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity className="bg-primary h-12 w-12 rounded-md items-center justify-center">
          <Feather name="search" size={24} color={"#F3F4F8"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};                     

export default Search;

const styles = StyleSheet.create({});
