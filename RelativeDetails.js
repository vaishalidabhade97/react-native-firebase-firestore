import React from "react";
import { Text, View } from "react-native";

function RelativeDetails(props) {
  const { relative } = props;

  return (
    <View>
      <Text>First Name:- {relative?.fname}</Text>
      <Text>Email:- {relative?.email}</Text>
      <Text>Relation:- {relative?.relation}</Text>
    </View>
  );
}

export default RelativeDetails;
