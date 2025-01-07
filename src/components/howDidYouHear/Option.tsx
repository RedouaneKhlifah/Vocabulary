import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {COLORS , SIZES} from "@constants/index";

interface OptionProps {
    title: string;
    onPress: () => void;
}

const Option = ({title, onPress}: OptionProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style = {styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: SIZES.roundedFull,
    borderWidth: 1,
    borderColor: COLORS.black,
    width : "70%",
  },
  text: {
    fontSize: SIZES.textLg,
    textAlign: 'center',
    color: "black",
    paddingVertical: "2%",
  },
});

export default Option;