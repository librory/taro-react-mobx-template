import React from "react";
import { View, Text } from "@tarojs/components";
import { observer } from "mobx-react-lite";
import { useStore } from "@store/hooks";
import { AtButton } from "taro-ui";
import "@taroStyle/Button.scss";
import '@taroStyle/Loading.scss'

import "./index.scss";

const index = () => {
  const counterStore = useStore("counter");

  console.log(counterStore);

  return (
    <View className="index">
      <AtButton onClick={counterStore.increment}>+</AtButton>
      <AtButton onClick={counterStore.decrement}>-</AtButton>
      <AtButton onClick={counterStore.asyncIncrement}>Add Async</AtButton>
      <Text>{counterStore.counter}</Text>
    </View>
  );
};

export default observer(index, { forwardRef: true });
