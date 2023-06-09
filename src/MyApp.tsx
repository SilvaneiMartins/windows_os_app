import React from 'react';
import { VStack, Text } from 'native-base';

export const MyApp = () => {
    return (
        <VStack
            flex={1}
            alignItems="center"
            justifyContent="center"
        >
            <Text fontSize={35} color={'white'}>MyApp</Text>
        </VStack>
    )
}
