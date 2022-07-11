import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  containter: {
    width: "100%",
    height: 60,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ede8ef",
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonsContainer: {
    backgroundColor: "#fefeff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    width: "50%",
  },
  textContainer: {
    padding: 15,
  },
  textButton: {
    fontWeight: '400'
  }
});

type current = "register" | "login";

type borderStyle = {
  borderTopLeftRadius?: number;
  borderBottomLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomRightRadius?: number;
};

interface IMainButtons {
  onClick: (param: current) => void;
}

const MainButtons: React.FC<IMainButtons> = ({ onClick }) => {
  const [current, setCurrent] = useState<current>("register");

  const borderStyle = (): borderStyle => {
    if (current === "register") {
      return {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
      };
    }

    return {
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    };
  };

  const onClickButton = (param: current): void => {
    setCurrent(param);
    onClick(param);
  };

  return (
    <View style={{ ...styles.containter, ...borderStyle() }}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          ...styles.buttonsContainer,
          backgroundColor: current === "register" ? "#fefeff" : "#ede8ef",
        }}
        onPress={() => onClickButton("register")}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textButton}>Register</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onClickButton("login")}
        style={{
          ...styles.buttonsContainer,
          backgroundColor: current === "login" ? "#fefeff" : "#ede8ef",
        }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textButton}>Sign in</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MainButtons;
