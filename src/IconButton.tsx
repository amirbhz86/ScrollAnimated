import React from 'react'
import { View, Text , Animated  } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props { 
  animated ?: boolean ,
  style ?: any ,
  color : any ,
}

const AnimatedIcon = Animated.createAnimatedComponent(Icon)

const IconButton = (props : Props) => {
  const { animated , style , color , iconStyle } = props
  console.log('props',props );
  
  let IconComp : any = animated ? AnimatedIcon : Icon
  return (
      <IconComp style={iconStyle} name="arrow-back" size={30} color={iconStyle.color} />
  )
}

export default IconButton
