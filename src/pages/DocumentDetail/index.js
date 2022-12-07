import { Image, Linking, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Header } from '../../component'
import { colors, fonts } from '../../utils'
import { IcPdf } from '../../assets'
import RenderHTML from 'react-native-render-html'

const DocumentDetail = ({navigation, route}) => {

  const data = route.params
  // const isi = data.isi
  const source = {html: data.isi}
  const width = useWindowDimensions()

  return (
    <View style={styles.mainContainer}>
      <Header title="Document Detail" onPress={() => navigation.goBack()} />
      <View style={styles.container} >
        <Text style={styles.title} >{data.category}</Text>
        <Text style={styles.syarat} >Syarat Pembuatan:</Text>
        <RenderHTML source={source} contentWidth={width} />
        <Text style={styles.title} >Formulir:</Text>
        <View style={styles.pdf}>
          <Image source={IcPdf} /> 
          <TouchableOpacity onPress={() => Linking.openURL(data.link)} >
            <Text>Klik disini</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default DocumentDetail

const styles = StyleSheet.create({
  mainContainer:{
    color: colors.white,
    flex:1
  },
  container:{
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1, 
    backgroundColor: colors.white 
  },
  title:{
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    marginBottom: 15
  },
  syarat:{
    fontSize: 15,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginBottom: 12
  },
  content:{
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginBottom: 15
  },
  pdf:{
    flexDirection: 'row',
    alignItems: 'center'
  }
})