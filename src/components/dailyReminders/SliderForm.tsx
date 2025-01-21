import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const SliderForm = () => {
  const [value, setValue] = useState(10);

  return (
    <>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={styles.label}>How many</Text>
        <Text style={styles.valueText}>{value}x</Text>
      </View>

      <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={20}
            step={1}
            value={value}
            onValueChange={setValue}
            minimumTrackTintColor="#00ACC1"
            maximumTrackTintColor="#d3d3d3"
            thumbTintColor="#fff"
          />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' ,}}>
          <Text style={styles.rangeText}>0</Text>
          <Text style={styles.rangeText}>20</Text>
      </View>
      </>
  );
};

const styles = StyleSheet.create({

  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  sliderContainer: {
    width: '100%',
    alignItems: 'center',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  valueText: {
    color: '#fff',
    fontSize: 16,
  },
  rangeText: {
    color: '#fff',
    fontSize: 12,

  },
});

export default SliderForm;
