import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { signOut } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'

const ProfileScreen = () => {
  const user = auth.currentUser
  const navigation = useNavigation()
  const u1 = user.email.substring(0, user.email.indexOf('@'))
  const uname = u1.charAt(0).toUpperCase() + u1.slice(1)
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('Login')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Pressable style={{ marginVertical: 10 }}>
        <Text>Welcome {uname}</Text>
      </Pressable>
      <Pressable onPress={signOutUser}>
        <Text>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
