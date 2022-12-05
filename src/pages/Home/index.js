import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {colors} from '../../utils'
 
const Home = () => {
  return (
    <View style={styles.back} >
      <View style={styles.container} >
        <Text>halaman Home</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  back:{
    flex: 1,
    backgroundColor: colors.secondary
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35
  }
})