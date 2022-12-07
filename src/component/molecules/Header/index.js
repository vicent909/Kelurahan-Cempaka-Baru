import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IcBack } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Header = ({onPress, title}) => {
  return (
    <View style={styles.container} >
        <TouchableOpacity onPress={onPress} >
            <IcBack/>
        </TouchableOpacity>
      <Text style={styles.title} >{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 16
    },
    title:{
        fontSize: 20,
        fontFamily: fonts.primary[700],
        color: colors.text.primary,
        marginLeft: 4
    }
})