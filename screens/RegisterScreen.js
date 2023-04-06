import {
  Alert,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'

const RegisterScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')

  const navigation = useNavigation()
  const register = () => {
    if (email === '' || password === '' || phone === '') {
      Alert.alert(
        'Invalide details',
        'Please fill all the details',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      )
    }
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredintial) => {
        console.log('User credintial', userCredintial)
        const user = userCredintial._tokenResponse.email
        const myUserUid = auth.currentUser.uid

        setDoc(doc(db, 'users', `${myUserUid}`), {
          email: user,
          phone: phone,
        })
      }
    )
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: '#662d91',
              fontWeight: 'bold',
            }}
          >
            Register
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginTop: 8,
              fontWeight: '600',
            }}
          >
            Create a new account
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons
              name='email-outline'
              size={24}
              color='black'
            />
            <TextInput
              placeholder='Email'
              placeholderTextColor='gray'
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                marginLeft: 13,
                width: 300,
                marginVertical: 10,
              }}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='key-outline' size={24} color='black' />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder='Password'
              placeholderTextColor='gray'
              style={{
                fontSize: password ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                marginLeft: 13,
                width: 300,
                marginVertical: 10,
              }}
            />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Feather name='phone' size={24} color='black' />
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder='Phone no'
              placeholderTextColor='gray'
              style={{
                fontSize: phone ? 18 : 18,
                borderBottomWidth: 1,
                borderBottomColor: 'gray',
                marginLeft: 13,
                width: 300,
                marginVertical: 10,
              }}
            />
          </View>
          <Pressable
            onPress={register}
            style={{
              width: 200,
              backgroundColor: 'lightblue',
              padding: 15,
              borderRadius: 7,
              marginTop: 50,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              Register
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 20 }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 17,
                color: 'gray',
                fontWeight: '500',
              }}
            >
              Already have an account? Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})
