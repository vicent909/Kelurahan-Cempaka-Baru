import { Image, StyleSheet, Text, TouchableOpacity, View, Linking} from 'react-native'
import React from 'react'
import {colors, fonts} from '../../utils'
import {Kantor, Map1, Map2, Map3} from '../../assets'
import { ScrollView } from 'react-native-gesture-handler'
 
const Home = () => {
  return (
    <View style={styles.back} >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
        <View style={styles.container2} >
          <Text style={styles.title} >Selamat datang, di App Kelurahan Cempaka Baru</Text>
          <View style={styles.containerDalam}>
            <Image source={Kantor} style={styles.kantor} />
            <Text style={styles.textKantor} >Kantor Kelurahan Cempaka Baru</Text>
          </View>
        </View>
        <View style={styles.containerBawah} >
          <Text style={styles.alamat} >Alamat:</Text>
          <Text style={styles.detilText} >Jl. Cempaka Baru II No. 1, Cempaka Baru, Kemayoran, Jakarta Pusat. </Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/place/Kelurahan+Cempaka+Baru/@-6.1697673,106.8572518,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f5c0f1e31ca7:0x97c0cb922eede60f!8m2!3d-6.1697673!4d106.8594405')} >
            <Image source={Map2} style={styles.image}  />
          </TouchableOpacity >
          <Text style={styles.detilText} >Batas Wilayah</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/place/Cempaka+Baru,+Kemayoran,+Central+Jakarta+City,+Jakarta/@-6.16795,106.8595926,16z/data=!3m1!4b1!4m5!3m4!1s0x2e69f5a9ced72f8f:0x7ab9e70a05e39c1c!8m2!3d-6.1687781!4d106.8635643')} >
            <Image source={Map3} style={styles.image} />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  container2:{
    backgroundColor: colors.cardLight,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200
  },
  containerDalam:{
    alignItems: 'center'
  },
  title:{
    fontSize: 22,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 250,
  },
  kantor:{
    height: 200,
    width: 200,
    marginTop: 20,
    marginBottom: 12
  },
  textKantor: {
    color: colors.text.primary,
    marginBottom: 10,
    maxWidth: 100, 
    textAlign: 'center'
  },
  containerBawah: {
    padding: 20,
  },
  alamat:{
    color: colors.text.primary,
    fontSize: 17,
    fontFamily: fonts.primary[600]
  },
  detilText:{
    color: colors.text.primary,
    fontSize: 12,
    fontFamily: fonts.primary[400],
    marginVertical: 10
  },
  image:{
    width: '100%',
    resizeMode: 'contain',
    height: 200
  }
})