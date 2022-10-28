import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  useColorScheme,
} from 'react-native';
import Markdown from 'react-native-marked';

import mdString from './const';

export default function App() {
  const theme = useColorScheme();
  const isLightTheme = theme === 'light';
  return (
    <>
      <StatusBar
        barStyle={isLightTheme ? 'dark-content' : 'light-content'}
        backgroundColor={isLightTheme ? '#fff' : '#000'}
      />
      <SafeAreaView>
        <Markdown
          value={mdString}
          flatListProps={{
            contentContainerStyle: styles.container,
          }}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
