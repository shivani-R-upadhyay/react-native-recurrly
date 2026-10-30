import React from 'react';
import {Link} from "expo-router";
import { Text, View } from 'react-native';


const Signup = () => {
    return (
        <View>
            <Text>Sign up</Text>
            <Link href="/(auth)/sign-up">Sign In</Link>
        </View>
    );
};

export default Signup