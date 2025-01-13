import React, { useMemo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from "@constants/index";
import { Option } from "@components/howDidYouHear";
import { ListRenderer } from "@components/utils";
import Skip from '@components/utils/Skip';
import { useRouter } from 'expo-router';



export default function WhichOptionYou() {
  const router = useRouter();

  const data = useMemo(() => [
    { title: 'أنثى', onPress: () => { } },
    { title: 'ذكر', onPress: () => { } },
    // { title: 'غير ذلك', onPress: () => { } },
    { title: 'أفضل عدم الإفصاح', onPress: () => { } },
  ], []);

  return (
    <View style={styles.container}>
      <Skip onPress={() => router.push('whichOptionYou')} />
      <Text style={styles.header}>أي خيار يمثلك بشكل أفضل؟</Text>
      <Text style={styles.subHeader}>اختر خياراً للمتابعة</Text>
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
    width: '100%',
    marginTop: 20,
  },
  subHeader: {
    flex: 1,
    fontSize: SIZES.textXl,
    fontWeight: '500',
    textAlign: 'center',
    width: '90%',
    marginBottom: 10,
  },
  optionsContainer: {
    color: "white",
    width: "100%",
    alignItems: 'center',
    flex: 10,
    gap: "2.5%",
  },

});
