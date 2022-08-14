import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { setDestination, setOrigin } from "../slices/navSlice";

import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavFavourites from "../components/NavFavourites";
import NavOptions from "../components/NavOptions";
import React from "react";
import tw from "twrnc";
import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From?"
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          onFail={(error) => console.error(error)}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          enablePoweredByContainer={false}
          minLength={2}
          fetchDetails={true}
          textInputProps={{ returnKeyType: "search" }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
