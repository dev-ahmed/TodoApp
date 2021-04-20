import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Container} from './navigation';
import {persistor, store} from './store';
import {setI18nConfig} from './utils/i18n-helper';

const App = () => {
  const theme = useColorScheme();

  useEffect(() => {
    setI18nConfig();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <PersistGate loading={null} persistor={persistor}>
        <Container />
      </PersistGate>
    </Provider>
  );
};

export default App;
