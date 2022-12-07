import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { LogBox } from 'react-native'
import Router from './router'

const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}

export default App