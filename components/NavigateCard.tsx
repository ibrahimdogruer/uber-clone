import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Icon } from "react-native-elements";
import NavFavourites from "./NavFavourites";
import React from "react";
import { setDestination } from "../slices/navSlice";
import tw from "twrnc";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Goos Morning, Ibrahim</Text>

      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            styles={toInputBoxStyles}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}
            textInputProps={{ returnKeyType: "search" }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard" as never);
            }}
          />
        </View>

        <NavFavourites />
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full justify-between`}
          onPress={() => navigation.navigate("RideOptionsCard" as never)}
        >
          <Icon
            name="car"
            type="font-awesome"
            color="white"
            size={16}
            tvParallaxProperties={null}
          />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            name="food-outline"
            type="material-community"
            color="black"
            size={16}
            tvParallaxProperties={null}
          />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: " white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
});
