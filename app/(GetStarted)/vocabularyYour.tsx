import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
  Dimensions
} from 'react-native';
import { COLORS, SIZES, FONTS } from '@constants/index';
import { useRouter } from 'expo-router';
import useStorage from '@/hooks/useStorage';

const { width, height } = Dimensions.get('window');

const VocabularyYour = () => {
  const router = useRouter();
  const [userName, setUserName] = useState('رضوان');
  const { getItem } = useStorage();

  // useEffect(() => {
  //   const fetchUserName = async () => {
  //     try {
  //       const userData = await getItem("userForm");
  //       if (userData) {
  //         const parsedData = typeof userData === 'string' ? JSON.parse(userData) : userData;
  //         setUserName(parsedData.name || '');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user name:', error);
  //     }
  //   };

  //   fetchUserName();
  // }, []);

  const handleContinue = async () => {

  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/background.png')}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
        <Text style={styles.title}>دعنا نجعل المفردات خاصة بك، {userName}</Text>
          <Text style={styles.subtitle}>
          خصص التطبيق للاستفادة القصوى من تجربتك
          </Text>
        </View>

        <TouchableOpacity
          style={styles.startButton}
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>متابعة</Text>
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
    height: height * 0.48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  heroImage: {
    width: width * 2,
    height: '100%',
    alignSelf: 'center',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: SIZES.spaceMd,
    marginTop: SIZES.space3xl,
  },
  title: {
    ...FONTS.heading1,
    textAlign: 'center',
    color: COLORS.black,
    marginBottom: SIZES.spaceMd,
    writingDirection: 'rtl',
  },
  subtitle: {
    ...FONTS.bodySm,
    textAlign: 'center',
    color: COLORS.secondary,
    marginBottom: SIZES.spaceLg,
    writingDirection: 'rtl',
  },
  startButton: {
    backgroundColor: '#93C1C1',
    paddingVertical: SIZES.spaceMd,
    borderRadius: SIZES.roundedLg,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: Platform.OS === 'ios' ? SIZES.spaceLg : SIZES.spaceXl,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    ...FONTS.heading3,
    color: COLORS.white,
    writingDirection: 'rtl',
  },
});

export default VocabularyYour;