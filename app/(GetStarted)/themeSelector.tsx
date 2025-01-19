import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Dimensions
} from 'react-native';
import { COLORS, SIZES } from '@constants/index';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

interface ThemeOption {
  id: string;
  title: string;
  backgroundImage: any;
}

const THEMES: ThemeOption[] = [
  {
    id: '1',
    title: 'Abcd',
    backgroundImage: require('../../assets/anime.jpg'),
  },
  {
    id: '2',
    title: 'Abcd',
    backgroundImage: require('../../assets/chair.jpg'),
  },
  {
    id: '3',
    title: 'Abcd',
    backgroundImage: require('../../assets/snowman.jpg'),
  },
  {
    id: '4',
    title: 'Abcd',
    backgroundImage: require('../../assets/anime.jpg'),
  },
  {
    id: '5',
    title: 'Abcd',
    backgroundImage: require('../../assets/chair.jpg'),
  },
  {
    id: '6',
    title: 'Abcd',
    backgroundImage: require('../../assets/snowman.jpg'),
  }
];

const ThemeSelector: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<string>('');

  const handleThemeSelect = (id: string) => {
    setSelectedTheme(id);
  };

  const handleContinue = () => {
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>ما هو النمط الذي تريد البدء به؟</Text>
        <Text style={styles.subHeader}>
          اختر من مجموعة أكبر من السمات أو قم بإنشاء السمة الخاصة بك لاحقاً
        </Text>
        <View style={styles.headTheme}>
          <View style={styles.curveContainer}>
            <View style={styles.dot} />
            <View style={styles.mindot} />
            <View style={styles.curve} />
            <LinearGradient
              colors={[`${COLORS.primary}00`, COLORS.primary]}
              style={styles.blur}
              locations={[0, 0.8]}
            />
          </View>
        </View>

        <View style={styles.themesGrid}>
          {THEMES.map((theme) => (
            <TouchableOpacity
              key={theme.id}
              style={styles.themeCard}
              activeOpacity={0.7}
              onPress={() => handleThemeSelect(theme.id)}
            >
              <ImageBackground
                source={theme.backgroundImage}
                style={styles.themeBackground}
                imageStyle={styles.themeImage}
              >
                {selectedTheme === theme.id && (
                  <View style={styles.selectedIndicator}>
                    <MaterialIcons name="check" size={18} color="white" />
                  </View>
                )}
                <Text style={styles.themeText}>{theme.title}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.continueButton,
            !selectedTheme && styles.continueButtonDisabled
          ]}
          onPress={handleContinue}
          disabled={!selectedTheme}
        >
          <Text style={styles.continueText}>متابعة</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');
const cardWidth = (width - 180) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: SIZES.text3xl,
    fontWeight: "bold",
    textAlign: 'center',
    width: '100%',
    marginTop: 50,
  },
  subHeader: {
    fontSize: SIZES.textXl,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
  },
  headTheme: {
    height: 100,
    width: '100%',
    alignSelf: 'center',
    position: 'relative',
    zIndex: 1,
  },
  curveContainer: {
    width: '100%',
    height: 100,
    position: 'relative',
    alignItems: 'center',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#000',
    position: 'absolute',
    top: 40,
    zIndex: 2,
  },
  mindot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3d3d3d',
    position: 'absolute',
    top: 45,
    zIndex: 2,
  },
  curve: {
    width: '85%',
    height: 100,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderWidth: 2,
    borderColor: '#000',
    borderBottomWidth: 0,
    position: 'absolute',
    top: 20,
  },
  blur: {
    width: '100%',
    height: 30,
    position: 'absolute',
    top: 70,
    zIndex: 1,
  },
  themesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  themeCard: {
    width: cardWidth,
    height: cardWidth * 1.5,
    borderRadius: 16,
    overflow: 'hidden',
    zIndex: 2,
  },
  themeBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    position: 'relative',
  },
  themeImage: {
    borderRadius: 16,
  },
  selectedIndicator: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#7FCCBE',
    width: 45,
    height: 25,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  themeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  continueButton: {
    backgroundColor: '#7FCCBE',
    padding: 16,
    borderRadius: 100,
    marginTop: 'auto',
    marginBottom: 16,
  },
  continueButtonDisabled: {
    opacity: 0.5,
  },
  continueText: {
    color: '#1A1A1A',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ThemeSelector;