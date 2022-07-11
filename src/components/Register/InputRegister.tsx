import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  View,
  StyleSheet,
  Text,
} from "react-native";

interface IInputRegister {
  value: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onChangeText?: (value: string | number) => void;
  placeholder: string;
  title?: string;
  isAlreadyFocused?: boolean;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 47,
    borderRadius: 10,
    borderWidth: 1,
  },
  textContainer: {
    padding: 15,
  },
  titleStyle: {
    marginBottom: 5,
    marginLeft: 5,
    color: "#90919f",
    fontWeight: '400'
  },
});

const InputRegister: React.FC<IInputRegister> = ({
  title,
  isAlreadyFocused,
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState<boolean | undefined>(
    isAlreadyFocused || false
  );

  const onHandleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    onBlur && onBlur(e);
    setIsFocused(false);
  };

  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <View style={{...styles.container, borderColor: isFocused ? '#fc6a68' : 'white'}}>
        <View style={styles.textContainer}>
          <TextInput
            {...rest}
            onFocus={() => setIsFocused(true)}
            onBlur={onHandleBlur}
          />
        </View>
      </View>
    </View>
  );
};

export default InputRegister;
