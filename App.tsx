import React from 'react';
import { MyApp } from './src/MyApp';
import { NativeBaseProvider } from 'native-base';

const App = () => {
    return (
        <NativeBaseProvider>
            <MyApp />
        </NativeBaseProvider>
    )
}

export default App
