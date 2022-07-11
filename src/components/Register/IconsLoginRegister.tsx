import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


const styles = StyleSheet.create({
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content: {
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: "white",
        width: '48%',
        borderRadius: 10
    },
    imageStyle: {
        width: 30,
        height: 30
    }
  });

const IconsLoginRegister = () => {
  return (
    <View style={styles.iconsContainer}>
        <View style={styles.content}>
            <Image style={styles.imageStyle} source={require('../../../assets/GlobalImages/google-logo.png')} />
        </View>

        <View style={styles.content}>
            <Image style={styles.imageStyle} source={require('../../../assets/GlobalImages/facebook-logo.png')} />
        </View>

    </View>
  )
}

export default IconsLoginRegister