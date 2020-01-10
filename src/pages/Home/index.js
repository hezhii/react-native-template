import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Home = props => {
  const { navigation } = props
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.push('Second')}>
        <View>
          <Text>Second page</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Home
