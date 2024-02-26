import {
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import SearchTitle from "../components/products/SearchTitle";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://172.2.1.144:3000/api/products/search/${searchKey}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.log("Failed to get products", error);
    }
  };

  return (
    <SafeAreaView className="dark:bg-gri2 flex-1">
      <View className="flex-1">
        <View className="flex-row mx-3 mt-4  justify-center px-2 items-center h-14 bg-secondary rounded-md shadow shadow-gri ">
          <TouchableOpacity className="mr-4">
            <Feather name="camera" size={24} color={"gray"} />
          </TouchableOpacity>
          <View className="flex-1 bg-secondary mr-2 rounded-md">
            <TextInput
              onChange={setSearchKey}
              value={searchKey}
              onChangeText={setSearchKey}
              placeholder="What are you looking for?"
            />
          </View>
          <TouchableOpacity
            className="bg-primary h-12 w-12 rounded-md items-center justify-center"
            onPress={() => handleSearch()}
          >
            <Feather name="search" size={24} color={"#F3F4F8"} />
          </TouchableOpacity>
        </View>

        <View className="flex-1">
          {searchResults.length > 0 ? (
            <FlatList
              data={searchResults}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => <SearchTitle item={item} />}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingTop: 20,
              }}
              style={{ marginHorizontal: 12, marginBottom: 70 }}
            />
          ) : (
            <View className="flex-1 items-center   ">
              <Image
                source={require("../assets/images/Pose23.png")}
                className="w-[80%] h-3/4 mr-8"
                style={{ resizeMode: "contain" }}
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;

