import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcDocument, IcDocumentActive, IcHome, IcHomeActive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {

  const Icon = () => {
    if(title === 'Home'){
      return(
        active ? <IcHomeActive/> : <IcHome/>
      )
    }
    if(title === 'Document'){
      return(
        active ? <IcDocumentActive/> : <IcDocument/>
      )
    }
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
      <Icon/>
      <Text style={styles.text(active)} >{title}</Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',

  },
  text: (active) => ({
    fontSize: 10,
    fontFamily: fonts.primary[600],
    marginTop: 4,
    color: active ? colors.text.menuActive : colors.text.menuInactive
  })
})