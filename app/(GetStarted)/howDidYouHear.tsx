import React, { useMemo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {COLORS , FONTS, SIZES} from "@constants/index";
import {Option} from "@components/howDidYouHear";
import Skip from '@components/utils/Skip';
import { useRouter } from 'expo-router';
import useStorage from '@/hooks/useStorage';
import { IUser } from '@/interfaces';



export default function HowDidYouHear() {
    const router = useRouter();
    const {getItem , saveItem} = useStorage()
    const data = useMemo(() => [
      { title: 'تيك توك', value : 'tiktok'},
      { title: 'إنستغرام', value : 'instagram'},
      { title: 'فيسبوك', value : 'facebook'},
      { title: 'جوجل بلاي', value : 'google'},
      { title: 'البحث على الويب', value : 'web'},
      { title: 'صديق/عائلة', value : 'friends/family'},
      { title: 'آخر', value : 'other'},
    ], []);


    const handlePress = async (value: string) => {
      const userData = await getItem("userForm") as IUser
      saveItem("userForm" , {...userData , howDidYouHear : value} as IUser)
      router.push('howOldAreYou');
    };

  return (
    <View style={styles.container}>
        <Skip onPress={() => router.push('howOldAreYou') }/>
        <Text style = {styles.header}>كيف سمعت عن المفردات؟</Text>
        <Text style = {styles.subHeader}>حدد خيارًا للمتابعة</Text>
        <View style={styles.optionsContainer}>
            {data.map((item, index) => (
                <Option key={index} title={item.title} onPress={() => handlePress(item.value)} />
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
        width: '70%',
        marginTop: 20,
    },
    subHeader: {
        fontSize: SIZES.textXl,
        fontWeight: '500',
        textAlign: 'center',
        width: '60%',
        marginBottom: 10,
    },
    optionsContainer: {
        color: "white",
        width: "100%",
        alignItems: 'center',
        flex: 1,
        gap: "2.5%",
    },

});
