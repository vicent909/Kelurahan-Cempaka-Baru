import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { IcBlank, IcKartuKeluarga, IcSuratKawin, IcSuratPindah, IdCard } from '../../../assets'

const DocumentItem = ({title, onPress}) => {

    const Icon = () => {
        if(title === 'Pengurusan KTP'){ 
            return(
                <Image source={IdCard} style={styles.icon} />
            )
        }
        if(title === 'Pengurusan Surat Pindah'){ 
            return(
                <Image source={IcSuratPindah} style={styles.icon} />
            )
        }
        if(title === ['Pengurusan Kartu Keluarga Baru' , 'Perubahan Kartu Keluarga']){ 
            return(
                <Image source={IcKartuKeluarga} style={styles.icon} />
            )
        }
        if(title === 'Pengurusan Surat Kawin'){ 
            return(
                <Image source={IcSuratKawin} style={styles.icon} />
            )
        }
        else{
            return(
                <Image source={IcBlank} style={styles.icon} />
            )
        }

    }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
        <Icon />
        <View style={styles.textWrapper} >
            <Text style={styles.text} >{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default DocumentItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.cardLight,
        padding:10,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop:10,
        flexDirection: 'row',
    },
    icon:{
        width: 46,
        height: 46
    },
    textWrapper: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    text:{
        color: colors.text.primary,
        fontSize: 14,
        fontFamily: fonts.primary[600],
    }
})