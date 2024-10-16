import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'native-base'

export default function Otp({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'green',
            }}>
            <Text>Otp</Text>

            <Button onPress={() => navigation.goBack()} className="mt-8">Back</Button>
        </View>
    )
}