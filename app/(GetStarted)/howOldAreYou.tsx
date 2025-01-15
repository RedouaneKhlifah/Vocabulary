import React, { useMemo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {COLORS , FONTS, SIZES} from "@constants/index";
import {Option} from "@components/howDidYouHear";
import {ListRenderer} from "@components/utils";
import Skip from '@components/utils/Skip';
import { useRouter } from 'expo-router';
import { IUser } from '@/interfaces';
import useStorage from '@/hooks/useStorage';



export default function HowDidYouHear() {
    const router = useRouter();
    const {getItem , saveItem} = useStorage()
    
    const data = useMemo(() => [
        { title: '١٣ إلى ١٧', value : '13-17' },
        { title: '١٨ إلى ٢٤', value : '18-24' },
        { title: '٢٥ إلى ٣٤', value : '25-34' },
        { title: '٣٥ إلى ٤٤', value : '35-44' },
        { title: '٤٥ إلى ٥٤', value : '45-54' },
        { title: '٥٥ فما فوق', value : '55+' },
      ], []);       

      const handlePress = async (value: string) => {
        const userData = await getItem("userForm") as IUser
        saveItem("userForm" , {...userData , ageGroup : value} as IUser)
        router.push('whichGenderAreYou');
      };
  

  return (
    <View style={styles.container}>
        <Skip onPress={() => router.push('whichGenderAreYou') }/>
        <Text style = {styles.header}>ما هو عمرك؟</Text>
        <Text style = {styles.subHeader}>سيتم استخدام عمرك لتخصيص المحتوى بحيث يتناسب معك</Text>
        <View style={styles.optionsContainer}>
            {data.map((item, index) => (
                <Option key={index} title={item.title} onPress={()=>handlePress(item.value)} />
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
