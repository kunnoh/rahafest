import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import StackNavigator from './StackNavigator'
import { UserContext } from './UserContext'

export default function Chat () {
  return (
    <>
      <UserContext>
        <StackNavigator />
      </UserContext>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  }
})
