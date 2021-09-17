import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, SafeAreaView, Image, Animated } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import Content from './src/content'
import BackIcon from './src/IconButton'
const statusBarHeight = DeviceInfo.hasNotch() ? 34 : 20

export const width = Dimensions.get('window').width
export const height = width - 100

const App = () => {
  const scrollY = new Animated.Value(0)

  const onScroll = Animated.event(
    [{
      nativeEvent: {
        contentOffset: {
          y: scrollY
        }
      }
    }])

  const threshold = height - 57 - statusBarHeight

  const backgroundColor = scrollY.interpolate({
    inputRange: [0, threshold - 10, threshold],
    outputRange: ['transparent', 'transparent', 'white'],
  })

  const {
    scrollView, container, headerStyle, backIcon 
  } = styles({ backgroundColor })

  let iconStyle = {
    color: scrollY.interpolate({
      inputRange: [0, threshold - 10, threshold],
      outputRange: ['white', 'white', 'black'],
    }) ,
    ...backIcon
  }

  return (
    <View style={container}>
      <Animated.View style={headerStyle}>
        <BackIcon animated={true} {...{ iconStyle }} style={backIcon} />
      </Animated.View>
      <ScrollView style={scrollView} scrollEventThrottle={1} {...{ onScroll }} >
        <Content />
      </ScrollView>
    </View>
  )
}

export default App

const styles = ({ backgroundColor }: any) => {
  return (
    StyleSheet.create({
      scrollView: {
        width: '100%',
      },
      contentScroll: {
      },
      parentScroll: {
        height: 150,
      },
      container: {
        flex: 1,
      },
      headerStyle: {
        position: 'absolute',
        width: '100%',
        height: 57 + statusBarHeight,
        // backgroundColor: 'rgba(255,0,0,0.3)',
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        zIndex: 200,
      },
      imageContainer: {
        width: '100%',
        height: 250,
        flexWrap: 'wrap',
        backgroundColor: 'blue',
      },
      backIcon:
      {
        marginLeft: 30,
        marginTop: 30
      }
    }))
}
