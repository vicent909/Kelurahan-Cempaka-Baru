import { Image, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { DKI } from '../../assets'
import { colors, fonts } from '../../utils'

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp')
        }, 2000)
    })

  return (
    <View style={styles.container} >
        <Image source={DKI} style={styles.logo} />
        <Text style={styles.text}>Kelurahan Cempaka Baru</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height:130,
        width:120,
    },
    text:{
        marginTop: 10,
        textAlign:'center',
        maxWidth: 120,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        fontSize:20
    }
})