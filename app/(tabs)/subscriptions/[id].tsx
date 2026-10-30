
import { Text, View } from 'react-native';


import React from 'react';
import {Link, useLocalSearchParams} from 'expo-router';


const subscriptionsDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <View>
            <Text>subscriptions Details:{id}</Text>
            <Link href="/">Go Back</Link>
        </View>
    );
};
export default subscriptionsDetails
