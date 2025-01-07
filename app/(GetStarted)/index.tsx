import React, { useMemo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {COLORS , SIZES} from "@constants/index";
import {Option} from "@components/howDidYouHear";
import {ListRenderer} from "@components/utils";



export default function index() {
    const data = useMemo(() => [
        { title: 'من خلال الصحافة', onPress: () => {} },
        { title: 'من خلال الإعلانات', onPress: () => {} },
        { title: 'من خلال الصحافة', onPress: () => {} },
        { title: 'من خلال الصحافة', onPress: () => {} },
        { title: 'من خلال الصحافة', onPress: () => {} },
        { title: 'من خلال الإعلانات', onPress: () => {} },
      ], []);

  return (
    <View style={styles.container}>
        <Text style = {styles.header}>كيف سمعت عن المفردات؟</Text>

        <View style={styles.optionsContainer}>
            {data.map((item, index) => (
                <Option key={index} title={item.title} onPress={item.onPress} />
            ))}
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
    alignItems: 'center',
  },
    header: {
        flex: 1,
        fontSize: SIZES.text3xl,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '70%',
        marginTop: "10%",
    },
    optionsContainer: {
        color: "white",
        width: "100%",
        alignItems: 'center',
        flex: 20,
        gap: "4%",
    },

});
