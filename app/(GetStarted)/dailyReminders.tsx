import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '@constants/index';
import Skip from '@components/utils/Skip';
import { useRouter } from 'expo-router';
import useStorage from '@/hooks/useStorage';
// import { IUser } from '@/interfaces';
import useUserQuery from '@/queries/useUserQuery';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Spacer } from '@components/utils';
import SliderForm from '@components/dailyReminders/SliderForm';
import TimeRangeSelector from '@components/dailyReminders/TimeRangeSelector';


export default function DailyReminders() {
  const router = useRouter();
//   const {getItem ,removeItem} = useStorage()
//   const {create} = useUserQuery()

  const handleContinue = async () => {
    // const userData = await  getItem("userForm") as IUser
    //  const user = {...userData , name : name.trim()}
    //  await create(user)
    //  await removeItem("userForm")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>تعلم كلمات مع تذكيرات يومية</Text>
      <Text style={styles.subHeader}>اسمح بالإشعارات للحصول على كلمات يومية</Text>
      <View style={styles.contentContainer}>
        <View style={styles.notification}>
            <View style = {styles.notificationHeader}>
                <AntDesign name="up" size={16} color="white" />
                <View style = {{flexDirection: 'row', gap: 8 , alignItems: 'center'}}>
                    <Text style = {{fontSize: SIZES.textXl,fontWeight: '500' , color: COLORS.white}}>مفردات</Text>
                    <View style = {styles.logoContainer}>
                        <Text style = {styles.logoText}>م</Text>
                    </View>
                </View>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'flex-end' , marginTop: 10}}>
                <Text style = {styles.text}> Run - كلمة اليوم : يجري</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'flex-end' , marginTop: 10}}>
                <Text style = {styles.text}>نستعمل هذه الكلمة للجري.</Text>
            </View>

        </View>
        <Spacer height={20} />
        <View style={styles.notification}>
            <SliderForm/>
        </View>
        <Spacer height={20} />
        <View style={styles.timeRangeSelectorContainer}>
            <TimeRangeSelector/>
        </View>
        
        <TouchableOpacity
          style={[
            styles.continueButton,
          ]}
          onPress={handleContinue}
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
  logoContainer: {
    width: 30,
    height: 30,
    borderRadius: SIZES.roundedFull,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
  },
  logoText : {
    fontWeight: "900",
    fontSize: 20,
    color: COLORS.white,
    paddingBottom: 5,
  },
  notification: {
    width: '90%',
    borderRadius: 10,
    padding: 20,
    backgroundColor: COLORS.gray,
  },

  timeRangeSelectorContainer: {
    width: '90%',
    borderRadius: 10,
    paddingBlock: 20,
    backgroundColor: COLORS.gray,

  },
  notificationHeader :{flexDirection: 'row', justifyContent: 'space-between'},
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

  text : {
    color: COLORS.white,
    fontSize: SIZES.textXl,
    fontWeight: '500',
  }
});