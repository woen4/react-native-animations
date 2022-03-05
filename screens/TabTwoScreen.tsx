import React, { useRef } from "react";
import {
  Swipeable,
  FlingGestureHandler,
  Directions,
  State,
  ScrollView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import Layout from "../constants/Layout";
import Animated, {
  interpolate,
  interpolateColor,
  interpolateColors,
  processColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { height, width } = Dimensions.get("window");
let y = 0;
export default function TabTwoScreen() {
  const numberOfPages = 4;
  const scrolViewRef = useRef<ScrollView>(null);
  const currentIndex = useSharedValue(0);
  const animationIsRunning = useSharedValue(false);
  const onNext = () => {
    if (numberOfPages === currentIndex.value + 1 || animationIsRunning.value)
      return;
    animationIsRunning.value = true;

    currentIndex.value = withTiming(
      currentIndex.value + 1,
      {
        duration: 1000,
      },
      () => {
        animationIsRunning!.value = false;
      }
    );
  };

  const onBack = () => {
    if (currentIndex.value === 0 || animationIsRunning.value) return;
    animationIsRunning.value = true;
    currentIndex.value = withTiming(
      currentIndex.value - 1,
      {
        duration: 1000,
      },
      () => {
        animationIsRunning.value = false;
      }
    );
  };

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      currentIndex.value,
      [0, 1, 2, 3],
      ["#f44", "#4f4", "#44f", "#f90"]
    );

    const translateY = interpolate(
      currentIndex.value,
      [0, 1, 2, 3],
      [0, height, height * 2, height * 3]
    );

    return {
      backgroundColor: backgroundColor,
      transform: [{ translateY: -translateY }],
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        
        ref={scrolViewRef}
        onTouchStart={(e) => {
          y = e.nativeEvent.pageY;
        }}
        onTouchEnd={(e) => {
          if (e.nativeEvent.pageY - y > 60) {
            onBack();
          } else if (y - e.nativeEvent.pageY > 60) {
            onNext();
          }
        }}
        scrollEnabled={false}
      >
        <Animated.View
          style={[{ flex: 1, flexDirection: "column" }, animatedBackgroundStyle]}
        >
          <View style={styles.view}>
            <Text style={{ color: "#fff", fontSize: 50 }}>Red</Text>
          </View>
          <View style={styles.view}>
            <Text style={{ color: "#fff", fontSize: 50 }}>Green</Text>
          </View>
          <View style={styles.view}>
            <Text style={{ color: "#fff", fontSize: 50 }}>Blue</Text>
          </View>
          <View style={styles.view}>
            <Text style={{ color: "#fff", fontSize: 50 }}>Orange</Text>
          </View>
         
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 150,
    height: 50,
    backgroundColor: "#333",
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
    width: width,

    height: Layout.window.height * 0.9,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
 
});
