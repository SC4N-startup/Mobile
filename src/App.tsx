import React from 'react';
import { StyleSheet } from 'react-native';
import { Root } from './navigation/root';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Toast, { ErrorToast } from 'react-native-toast-message';
import { persistor, store } from './redux/store';

const toastConfig = {
  success: (props) => (
    <ErrorToast
      style={styles.successToast}
      {...props}
      text1Style={styles.errorTextStyle}
      text2Style={styles.errorSecondaryTextStyle}
    />
  ),

  error: (props) => (
    <ErrorToast
      style={styles.errorToast}
      {...props}
      text1Style={styles.errorTextStyle}
      text2Style={styles.errorSecondaryTextStyle}
    />
  )
};

export const App = () => {
  return (
    <>
      <SafeAreaProvider style={styles.container}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Root />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>

      <Toast config={toastConfig} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorToast: {
    top: 60,
    borderLeftColor: 'tomato',
  },
  errorTextStyle: {
    fontSize: 18,
  },
  errorSecondaryTextStyle: {
    fontSize: 16,
  },
  successToast: {
    top: 60,
    borderLeftColor: '#4DC217',
  },
});