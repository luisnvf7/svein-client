import React from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import MainButtons from "@components/Register/MainButtons";
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { INavigationProp, RootStackParamList } from "interfaces/Navigations/RootStackParamList";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 10,
  },
  stretch: {
    width: "100%",
    height: "50%",
    borderRadius: 30,
  },
  contentContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    width: 300,
    marginBottom: "10%",
  },
  bottomContainer: {
    display: "flex",
    alignItems: "center",
  },
  baseText: {
    fontWeight: "600",
    fontSize: 35,
    maxWidth: 270,
    textAlign: "center",
    marginBottom: "5%",
  },
  childText: {
    maxWidth: 270,
    textAlign: "center",
    color: "gray",
    fontWeight: "400",
    lineHeight: 20,
  },
  textContainer: {
    marginBottom: "30%",
  },
});

const MainScreen : React.FC<INavigationProp> = ({navigation}) => {
  return (
    <View style={styles.content}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.stretch}
          source={require("../../assets/GlobalImages/3594607.jpg")}
        />
        <View style={styles.bottomContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.baseText}>Discover your Dream job here</Text>
            <Text style={styles.childText}>
              Explore all the most exiting jobs roles based on your interested
              and study major
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <MainButtons
              onClick={(value) => {
                if (value === 'register') {
                  navigation.navigate("Register")
                } else {
                  navigation.navigate("Login")
                }
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
