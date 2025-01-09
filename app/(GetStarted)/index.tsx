import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  Image 
} from 'react-native';
import { COLORS, SIZES, FONTS, Images } from '@constants/index';
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../../assets/abecedaire.jpg')}  
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>طور قاموسك اللغوي في دقيقة في اليوم</Text>
          <Text style={styles.subtitle}>
            تعلم أكثر من 10,000 كلمة جديدة مع عادة يومية جديدة لا تستغرق سوى دقيقة واحدة
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.startButton}
          onPress={() => router.push('howDidYouHear')}
        >
          <Text style={styles.buttonText}>هيا نبدأ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  content: {
    flex: 1,
    padding: SIZES.spaceLg,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: SIZES.spaceLg,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    maxHeight: 300,
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: SIZES.spaceXl,
  },
  title: {
    ...FONTS.heading1,
    textAlign: 'center',
    color: COLORS.black,
    marginBottom: SIZES.spaceMd,
  },
  subtitle: {
    ...FONTS.bodySm,
    textAlign: 'center',
    color: COLORS.secondary,
    marginBottom: SIZES.spaceLg,
  },
  startButton: {
    backgroundColor: '#A5C9CA',
    paddingVertical: SIZES.spaceMd,
    borderRadius: SIZES.roundedLg,
    alignItems: 'center',
    marginBottom: SIZES.spaceLg,
  },
  buttonText: {
    ...FONTS.heading3,
    color: COLORS.white,
  },
});

export default index;