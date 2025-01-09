import React, { useMemo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {COLORS , FONTS, SIZES} from "@constants/index";
import {Option} from "@components/howDidYouHear";
import {ListRenderer} from "@components/utils";
import Skip from '@components/utils/Skip';
import { useRouter } from 'expo-router';



export default function HowDidYouHear() {
    const router = useRouter();
    
    const data = useMemo(() => [
        { title: '١٣ إلى ١٧', onPress: () => {} },
        { title: '١٨ إلى ٢٤', onPress: () => {} },
        { title: '٢٥ إلى ٣٤', onPress: () => {} },
        { title: '٣٥ إلى ٤٤', onPress: () => {} },
        { title: '٤٥ إلى ٥٤', onPress: () => {} },
        { title: '٥٥ فما فوق', onPress: () => {} },
      ], []);       

  return (
    <View style={styles.container}>
        <Skip onPress={() => router.push('howOldAreYou') }/>
        <Text style = {styles.header}>ما هو عمرك</Text>
        <Text style = {styles.subHeader}>سيتم استخدام عمرك لتخصيص المحتوى بحيث يتناسب معك</Text>
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
        fontSize: SIZES.text3xl,
        fontWeight: "bold",
        textAlign: 'center',
        width: '70%',
        marginTop: 20,
    },
    subHeader: {
        flex: 1,
        fontSize: SIZES.textXl,
        fontWeight: '500',
        textAlign: 'center',
        width: '60%',
        marginBottom: 10,
    },
    optionsContainer: {
        color: "white",
        width: "100%",
        alignItems: 'center',
        flex: 20,
        gap: "4%",
    },

});
