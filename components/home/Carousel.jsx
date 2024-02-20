import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'

const Carousel = () => {

    const sliders = [
        'https://i.pinimg.com/564x/69/35/2e/69352e36b46fcffe5a033b0881460872.jpg',
        'https://i.pinimg.com/564x/b1/6c/10/b16c10c379919a5ab0421ebd3d4ba0ed.jpg',
        'https://i.pinimg.com/564x/87/c6/33/87c633468ddfbc3cae3ddadba19cadfd.jpg',
        'https://i.pinimg.com/564x/f9/f3/84/f9f384614c50129d545eb17a3cb192dc.jpg',
        'https://i.pinimg.com/736x/9c/25/25/9c25256089c1dcc798fbe74c9673d26c.jpg'
    ]

  return (
    <View className="flex-1 items-center  justify-center">
        <SliderBox images={sliders}
        sliderBoxHeight={200}
        dotColor="#2A4D50"
        inactiveDotColor="#90A4AE"
        autoplay
        ImageComponentStyle={{borderRadius: 15, width: "95%", marginTop: "3%"}}
        circleLoop
        

/>



    </View>
  )
}

export default Carousel