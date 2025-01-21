import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Slider from '@react-native-community/slider';
import { COLORS, SIZES } from '@constants/index'; 

const SliderForm = () => {
  const [value, setValue] = useState(10);
  const [scaleValue] = useState(new Animated.Value(1));

  const handleSliderStart = () => {
    Animated.spring(scaleValue, {
      toValue: 1.1,
      useNativeDriver: true,
    }).start();
  };

  const handleSliderEnd = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedValueStyle = {
    transform: [{ scale: scaleValue }]
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Animated.View style={[styles.valueContainer, animatedValueStyle]}>
          <Text style={styles.valueText}>{value}x</Text>
        </Animated.View>
        <Text style={styles.label}>كم عدد</Text>
      </View>

      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={20}
          step={1}
          value={value}
          onValueChange={setValue}
          onSlidingStart={handleSliderStart}
          onSlidingComplete={handleSliderEnd}
          minimumTrackTintColor={COLORS.gray || "#00ACC1"}
          maximumTrackTintColor="rgba(255, 255, 255, 0.3)"
          thumbTintColor={COLORS.white}
          
        />
      </View>

      <View style={styles.rangeContainer}>
        <Text style={styles.rangeText}>0</Text>
        <View style={styles.tickMarksContainer}>
          {[...Array(5)].map((_, index) => (
            <View key={index} style={styles.tickMark} />
          ))}
        </View>
        <Text style={styles.rangeText}>20</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    color: COLORS.white,
    fontSize: SIZES.textLg || 16,
    fontWeight: '500',
  },
  valueContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  valueText: {
    color: COLORS.white,
    fontSize: SIZES.textLg || 16,
    fontWeight: '600',
  },
  sliderContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  rangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  tickMarksContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  tickMark: {
    width: 2,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 1,
  },
  rangeText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: SIZES.textSm || 12,
    fontWeight: '500',
  },
});

export default SliderForm;