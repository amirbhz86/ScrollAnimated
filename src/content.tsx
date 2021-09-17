import React from 'react'
import { View, Text , StyleSheet , Image , Dimensions } from 'react-native'
import { width , height } from '../App'

const Content = () => {
  const {
    kitchenImage, titleText, profileRow, starContainer,
    avatarImage, profileLeftPart, starImage, mapImage,
    voteNumber, lineView, text1, text2, text3, starAndText ,
  } = styles()

  return (
    <>
      <Image style={kitchenImage} source={require('../src/assets/images/kitchen.jpeg')} />
      <Text style={titleText}>Centric studio with roof top terrace</Text>
      <View style={profileRow}>
        <View style={profileLeftPart}>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>
            Entire aparment
          </Text>
          <Text style={{ fontSize: 17 }}>
            Hosted by Christina
          </Text>
        </View>
        <Image style={avatarImage} source={require('../src/assets/images/avatar.png')} />
      </View>
      <View style={starAndText}>
        <Text style={{ fontSize: 16 }}>
          85 CHF per night
        </Text>
        <View style={starContainer}>
          {[0,0,0,0,0].map(() => {
            return (
              <Image style={starImage} source={require('../src/assets/icons/star.png')} />
            )
          })}
          <Text style={voteNumber}>34 votes</Text>
        </View>
      </View>
      <View style={lineView} />
      <Text style={text1}>
        Small and crazy top floor studio with its own roof top terrace.
      </Text>
      <Text style={text2}>
        The studio has been redone in 2017, so it' all new and fresh! it' perfect for 1-2 if you are looking for a very centric location to overnight
      </Text>
      <Text style={text3}>
        it's on the 4th floor (no elevator) with a terrace only for yourself! Has a ladder ro climp up and you will be rewarded with fantastic view your Zurich
      </Text>
      <Image style={mapImage} source={require('../src/assets/images/map.jpeg')} />
    </>
  )
}

export default Content

const styles = () => {
  return (
    StyleSheet.create({
      kitchenImage: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: height,
        width: width,
      },
      mapImage: {
        width: '100%',
        height: 200,
      },
      titleText: {
        fontSize: 29,
        marginLeft: Dimensions.get('window').width * 0.05,
        marginRight: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').width * 0.07,
        marginBottom: 30,
      },
      starContainer: {
        flexDirection: 'row',
      },
      starImage: {
        width: 20,
        height: 20
      },
      profileRow: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center' ,
        paddingHorizontal: Dimensions.get('window').width * 0.05,
      },
      voteNumber: {
        color: '#78b4dd',

      },
      starAndText: {
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: 20,
        height: 50,
        justifyContent: 'space-between'
      },
      avatarImage: {
        width: 40,
        height: 50,
        borderRadius: 20,
      },
      profileLeftPart: {
        height: '100%',
        justifyContent: 'space-between',
      },
      lineView: {
        width: '90%',
        height: 0.6,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignSelf: 'center',
        marginVertical: 40,
      },
      text3: {
        marginHorizontal: Dimensions.get('window').width * 0.05,
        marginVertical: 40,
        fontSize: 19,
      },
      text1: {
        marginHorizontal: Dimensions.get('window').width * 0.05,
        marginBottom: 40,
        fontSize: 19,
      },
      text2: {
        marginHorizontal: Dimensions.get('window').width * 0.05,
        fontSize: 19,
      },
    })
  )
}