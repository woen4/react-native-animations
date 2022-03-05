import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import Item, { MAX_HEIGHT } from "./Item";
import { items } from "./Model";

const styles = StyleSheet.create({
  container: {
    height: items.length * MAX_HEIGHT,
    backgroundColor: "black",
  },
});

const Channel = () => {
  const y = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      y.value = e.contentOffset.y;
    },
  });
  return (
    <>
      <StatusBar hidden />
      <Animated.ScrollView
        style={{ backgroundColor: "#000" }}
        contentContainerStyle={{ height: (items.length + 1) * MAX_HEIGHT }}
        scrollEventThrottle={16}
        onScroll={onScroll}
        decelerationRate="normal"
      >
        {items.map((item, index) => (
          <Item index={index} y={y} item={item} key={index} />
        ))}
      </Animated.ScrollView>
    </>
  );
};

export default Channel;
