import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@constants/index';
import Skip from '@components/utils/Skip';
import { useRouter } from 'expo-router';

export default function YourName() {
  const [name, setName] = useState('');
  const router = useRouter();
  const handleContinue = () => {
    if (name.trim()) {
    
    }
  };

  return (
    <View style={styles.container}>
      <Skip onPress={() => router.push('yourName')} />
      <Text style={styles.header}>كيف تريد أن يتم مناداتك؟</Text>
      <Text style={styles.subHeader}>يستخدم اسمك لتخصيص تجربتك</Text>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          placeholder="اسمك"
          placeholderTextColor={COLORS.gray}
          value={name}
          onChangeText={setName}
          textAlign="right"
        />

        <TouchableOpacity
          style={[
            styles.continueButton,
            { opacity: name.trim() ? 1 : 0.5 }
          ]}
          onPress={handleContinue}
          disabled={!name.trim()}
        >
          <Text style={styles.continueText}>متابعة</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    flex: 1,
  },
  contentContainer: {
    flex: 8,
    alignItems: 'center',
  },
  header: {
    fontSize: SIZES.text3xl,
    fontWeight: "bold",
    textAlign: 'center',
    width: '100%',
    marginTop: 50,
  },
  subHeader: {
    flex: 1,
    fontSize: SIZES.textXl,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  continueButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#8cd0c3',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
  },
  continueText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});