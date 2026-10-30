import "@/global.css"
import { Text, View, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const OnBoarding = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>OnBoarding Screen</Text>
        </View>
    );
};

export default function HomeScreen() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Welcome to navigater</Text>

            {/* Capitalized <Link> imported from expo-router with asChild */}
            <Link href="/OnBoarding" asChild>
                <Pressable className="mt-4 rounded bg-primary p-4">
                    <Text className="text-white">Go to Onboarding</Text>
                </Pressable>
            </Link>
            <Link href="/(auth)/sign-in" asChild>
                <Pressable className="mt-4 rounded bg-primary p-4">
                    <Text className="text-white">Go to sign-in</Text>
                </Pressable>
            </Link>

            <Link href="/(auth)/sign-up" asChild>
                <Pressable className="mt-4 rounded bg-primary p-4">
                    <Text className="text-white">Go to signup</Text>
                </Pressable>
            </Link>
            <Link href="/subscriptions/spotify" asChild>
                <Pressable className="mt-4 rounded bg-primary p-4">
                    <Text className="text-white">spotify subscription</Text>
                </Pressable>
            </Link>
            <Link
                href={{
                    pathname: "/subscriptions/[id]",
                    params: { id: "claude" }
                }}
                asChild
            >
                <Pressable className="mt-4 rounded bg-primary p-4">
                    <Text className="text-white">Claude Max Subscritpion</Text>
                </Pressable>
            </Link>
        </View>
    );
}