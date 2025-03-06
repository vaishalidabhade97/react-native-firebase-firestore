import React, { useState } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";

import RelativeDetails from "./RelativeDetails";
import { styles } from "./styles";

function Relatives(props) {
  const { relatives } = props;
  const [relative, setRelative] = useState();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setRelative(item)}
        style={styles.listItem}
      >
        <Text>{item?.fname}</Text>
      </TouchableOpacity>
    );
  };

  const separatorComponent = () => {
    return <View style={styles.separator} />;
  };

  return (
    <View>
      <Text style={styles.header}>
        {relative ? "Relative Details" : "Relatives"}
      </Text>
      {relative ? (
        <RelativeDetails relative={relative} />
      ) : (
        <FlatList
          data={relatives}
          renderItem={renderItem}
          ItemSeparatorComponent={separatorComponent}
          keyExtractor={(item) => item.email}
        />
      )}
    </View>
  );
}

export default Relatives;
