import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts } from '../../utils'
import { DocumentItem } from '../../component'
import { Fire } from '../../config'

const Document = ({navigation}) => {

  const [data, setData] = useState([])

  useEffect(() => {
    Fire.database()
      .ref('dokumen/')
      .once('value')
      .then(res => {
        console.log('res: ', res.val())
        if(res.val()){
          setData(res.val())
        }
      })
  })

  return (
    <View style={styles.backcontainer}>
      <View style={styles.container}>
        <Text style={styles.text} >Mau mengurus dokumen apa hari ini?</Text>
        {data.map(item => {
          return(
            <DocumentItem title={item.category} onPress={() => navigation.navigate('DocumentDetail')}  />
          )
        })}
      </View>
    </View>
  )
}

export default Document

const styles = StyleSheet.create({
  backcontainer:{
    backgroundColor: colors.secondary,
    flex: 1
  },
  container:{
    backgroundColor: colors.white,
    flex:1,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    padding: 20
  },
  text:{
    color: colors.text.primary,
    fontFamily: fonts.primary[700],
    fontSize: 22,
    maxWidth: 235,

  }
})