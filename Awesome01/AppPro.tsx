import React, { JSX } from "react";
import { View, Text, SafeAreaView, useColorScheme, StyleSheet } from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <Text
          allowFontScaling={false}
          style={[styles.text, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}
        >
          Hello world
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center'
  },
  text: {
    fontSize: 14,
    width : 100,
    backgroundColor : 'red',
    padding : 3,
    borderRadius : 3,
    textAlign : 'center'

  },
});

export default AppPro;
