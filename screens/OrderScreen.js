import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native'

const OrderScreen = () => {
  const animation = useRef(null)
  return (
    <SafeAreaView>
      <LottieView
        source={
          (uri =
            'https://assets2.lottiefiles.com/packages/lf20_dwGMPRJ7zu.json')
        }
        style={{
          height: 360,
          width: 300,
          alignSelf: 'center',
          marginTop: 40,
          justifyContent: 'center',
        }}
        autoPlay
        ref={animation}
        loop={false}
        speed={0.7}
      />

      <Text
        style={{
          marginTop: 40,
          fontSize: 19,
          fontWeight: '600',
          textAlign: 'center',
        }}
      >
        Your order has been placed
      </Text>

      <LottieView
        source={require('../assets/sparkle.json')}
        style={{
          height: 300,
          position: 'absolute',
          top: 100,
          width: 300,
          alignSelf: 'center',
        }}
        autoPlay
        loop={false}
        speed={0.7}
      />
    </SafeAreaView>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})
