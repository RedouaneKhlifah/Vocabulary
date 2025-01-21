import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Divider } from '@components/utils';
import { COLORS } from '@constants/themes';

interface TimeRangeSelectorProps {
  initialStartTime?: number;
  initialEndTime?: number;
  onTimeChange?: (startTime: Date, endTime: Date) => void;
  is24Hour?: boolean;
}

interface TimeChangeEvent {
  type: string;
  nativeEvent: {
    timestamp: number;
  };
}

const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({
  initialStartTime = new Date().setHours(9, 0, 0),
  initialEndTime = new Date().setHours(22, 0, 0),
  onTimeChange,
  is24Hour = true,
}) => {
  const [startTime, setStartTime] = useState<number>(initialStartTime);
  const [endTime, setEndTime] = useState<number>(initialEndTime);
  const [isStartPickerVisible, setStartPickerVisible] = useState<boolean>(false);
  const [isEndPickerVisible, setEndPickerVisible] = useState<boolean>(false);

  const formatTime = useCallback((date: number): string => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: !is24Hour
    });
  }, [is24Hour]);

  const formattedStartTime = useMemo(() => 
    formatTime(startTime), [startTime, formatTime]
  );
  
  const formattedEndTime = useMemo(() => 
    formatTime(endTime), [endTime, formatTime]
  );

  const handleStartTimeChange = useCallback((
    event: TimeChangeEvent, 
    selectedTime?: Date
  ): void => {
    setStartPickerVisible(false);
    if (selectedTime && event.type === 'set') {
      const newStartTime = selectedTime.getTime();
      setStartTime(newStartTime);
      
      if (newStartTime > endTime) {
        const newEndTime = new Date(selectedTime);
        newEndTime.setHours(selectedTime.getHours() + 1);
        const newEndTimeMs = newEndTime.getTime();
        setEndTime(newEndTimeMs);
        onTimeChange?.(new Date(newStartTime), new Date(newEndTimeMs));
      } else {
        onTimeChange?.(new Date(newStartTime), new Date(endTime));
      }
    }
  }, [endTime, onTimeChange]);

  const handleEndTimeChange = useCallback((
    event: TimeChangeEvent, 
    selectedTime?: Date
  ): void => {
    setEndPickerVisible(false);
    if (selectedTime && event.type === 'set') {
      const newEndTime = selectedTime.getTime();
      if (newEndTime < startTime) {
        alert('End time must be after start time');
        return;
      }
      setEndTime(newEndTime);
      onTimeChange?.(new Date(startTime), new Date(newEndTime));
    }
  }, [startTime, onTimeChange]);

  const toggleStartPicker = useCallback((): void => {
    setStartPickerVisible(prev => !prev);
    if (isEndPickerVisible) setEndPickerVisible(false);
  }, [isEndPickerVisible]);

  const toggleEndPicker = useCallback((): void => {
    setEndPickerVisible(prev => !prev);
    if (isStartPickerVisible) setStartPickerVisible(false);
  }, [isStartPickerVisible]);

  return (
    <View style={styles.container}>
      <View style={styles.timeRow}>
        <TouchableOpacity 
          style={styles.timeBox}
          onPress={toggleStartPicker}
        >
          <Text style={styles.timeText}>{formattedStartTime}</Text>
        </TouchableOpacity>
        <Text style={styles.label}>تبدأ عند</Text>
      </View>

      <Divider color={COLORS.white}/>

      <View style={styles.timeRow}>
        <TouchableOpacity 
          style={styles.timeBox}
          onPress={toggleEndPicker}
        >
          <Text style={styles.timeText}>{formattedEndTime}</Text>
        </TouchableOpacity>
        <Text style={styles.label}>تنتهي عند</Text>
      </View>

      {isStartPickerVisible && (
        <DateTimePicker
          value={new Date(startTime)}
          mode="time"
          is24Hour={is24Hour}
        //   display="spinner"
          onChange={handleStartTimeChange}
          textColor="black"
          maximumDate={new Date(endTime)}
        />
      )}

      {isEndPickerVisible && (
        <DateTimePicker
          value={new Date(endTime)}
          mode="time"
          is24Hour={is24Hour}
        //   display="spinner"
          onChange={handleEndTimeChange}
          textColor="black"
          minimumDate={new Date(startTime)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    width: '100%',
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
    paddingInline: 20,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
  timeBox: {
    backgroundColor: COLORS.brown,
    padding: 8,
    borderRadius: 8,
    minWidth: 70,
    alignItems: 'center',
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default React.memo(TimeRangeSelector);