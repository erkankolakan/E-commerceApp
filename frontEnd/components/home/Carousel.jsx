import { View, Text } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const sliders = [
    "https://mobirise.com/extensions/commercem4/assets/images/gallery03.jpg",
    "https://mobirise.com/extensions/commercem4/assets/images/gallery07.jpg",
    "https://mobirise.com/extensions/commercem4/assets/images/gallery04.jpg",
    "https://www.sliderrevolution.com/wp-content/uploads/2023/06/sneaker-woocommerce-slider.gif",
    "https://images.pexels.com/photos/1879061/pexels-photo-1879061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <View className="flex-1 items-center  justify-center">
      <SliderBox
        images={sliders}
        sliderBoxHeight={200}
        dotColor="#2A4D50"
        inactiveDotColor="#90A4AE"
        autoplay
        ImageComponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: "3%",
        }}
        circleLoop
      />
    </View>
  );
};

export default Carousel;
