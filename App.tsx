/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/configureStore';
import HomeScreen from './src/screens/HomeScreen';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={configureStore.store}>
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
