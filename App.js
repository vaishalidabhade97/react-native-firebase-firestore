import React, { useState } from "react";
import { View } from "react-native";
import { getRelatives, getUser } from "./helpers";
import Login from "./Login";
import Relatives from "./Relatives";
import { styles } from "./styles";

function App() {
  const [user, setUser] = useState();
  const [relatives, setRelatives] = useState([]);

  const onLogin = async (loginCode) => {
    const usersSnapshot = await getUser(loginCode);
    if (usersSnapshot.size > 0) {
      const userData = usersSnapshot.docs[0].data();
      setUser(userData);
      const relativesSnapshot = await getRelatives(loginCode);
      const relativesDocs = relativesSnapshot.docs.map((doc) => doc.data());
      setRelatives(relativesDocs);
    }
  };

  return (
    <View style={styles.app}>
      {user ? (
        <View>
          <Relatives relatives={relatives} />
        </View>
      ) : (
        <Login onLogin={onLogin} />
      )}
    </View>
  );
}

export default App;
