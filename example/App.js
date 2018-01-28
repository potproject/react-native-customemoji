import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomEmoji from "react-native-customemoji";

const emojiArray = {
  "reactnative" :   {uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"},
  "mobile"      :   require("./assets/mobile.png"),
  "javascript"  :   require("./assets/javascript.png"),
  "react"       :   {uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAXCAYAAAAV1F8QAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPpQAAD6UBjdDpgQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOySURBVEiJvZZNaFRXFMd/5743j9J8LPq5KBKk86KmRTQiBYuhXXSjiyJBraQU8yZWgkSpgkgpFUsoIUWLBtFGZ1L6ZRuR0oWrLlISWihSFWkTnDciqXTRD7pI0lJm3r2niwzpzPgsddHc1eX/zvn///fc+869oqqkjahkR3DaifAAwkQZ/62PsszVxrxcojUgeRPleZS/MHK1kPUG0vhMGpgr2m2i2qNGzqIyjKMz0KSYiyu7l2Liyu5AkyKOTlSG1chZUe3JFe22NE4/dTlGh1B9fSzrf1hFPsvFtlvhdFRK2hchiQTZl2/3LtWIN2EYAj7/T0KqNGPkRi2WD71Le+LytFVzBcDDbTwXBjN1eUZu4GhO9Z66ItSqxWtEEzE7gDJQrs4bsvBA7X0ImbJB6pz1xXarKAeNcV3GuC5RDvbFdms9mTSDKacxStqpyxUrH6jIL8AXQCfIClT7EZ0Gma/6b0GlA5EzoHeAq8CLovpYvj3zyr8KRXHyBNALvASsAX4HrqCsQbDAKPBrNfxR4FUUD2EG2Ag8BMwAnwJjhdD/qU4oipMHgcPAIeArQb5RdDCT+CvKnu0S0RHP958+t5Kfa13uuc3jNkm+V5WBwHqTFT+5I8gbim4CngOOA8OF0P9TeouVh4HrwG3gtULofwfQGyffKnrBIIdADhdC70JUKneg3oFFi/ZkIRtMR7HdBTqsqscR2TUW+s9Uq7MBeBdYCayT3mLlHWBdIfRfqNunku1R504i8ltb6Hf8ANJcrNxCpG1xi3R2oT3z5FOgP8bJtKo+IsYcyGe9j2t5ojj5ErhugAg407h581nvImJaUZk6Cq7lZmX9kgiASFvLzcr6o+BUZQoxrfNZ72IjT5U7MkAB6G/82lKy21E3J6Kbj4GZX5W5hursUoDq7PyqzLVjYBDdjLq5lpLdniLUDxQMMASsjuJkslpXAJzqfoVBhabZ2O4cB4vRLSCjIKMY3TIOdja2O4EmJww61f01JdsQxckksBoYWr5Tt6z/UeP4PzpDevcWs0mUgXy7NwVMAfTFdsLBJ8a4ZwGcM18bkR3nQ+/yPwZts4qMpHHeo6m6wKELtcj50LuswgnnzKRzZlKFE7UiAIs5LrgPIfHE465276sbBwIgqM4bsrAgd10v9xQSYUGcrq3FcrHttpgJhFMIpyxmIhfb7ro8p2tFWCBlpF/lTo4g5HtL9g9xlEH3InQIeiSfzby/KFwpKpyOisk+kPfUEBjkbZzkUs0v1yvob6ni/tUQdBJXAAAAAElFTkSuQmCC"}
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.container}>
          <Text style={styles.largeText}>Welcome to :reactnative: !</Text>
          <Text style={styles.mediumText}>Build native :mobile: apps using :javascript: and :react:.</Text>
        </View>
        <View style={styles.container}>
          <CustomEmoji emojis={emojiArray} emojiStyle={{borderRadius:5 ,width: 30, height: 30}}>
            <Text style={styles.largeText}>Welcome to :reactnative: !</Text>
          </CustomEmoji>
          <CustomEmoji emojis={emojiArray}>
            <Text style={styles.mediumText}>Build native :mobile: apps using :javascript: and :react:.</Text>
          </CustomEmoji>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText: {
    fontSize: 30
  },
  mediumText: {
    fontSize: 14
  }
});
