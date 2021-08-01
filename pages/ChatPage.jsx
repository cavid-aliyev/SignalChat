import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ChatPage = ({navigation, route}) => {
    return (
        <View>
            <Text>{route.params.id}</Text>
            <Text>{route.params.chatName}</Text>
        </View>
    )
}

export default ChatPage

const styles = StyleSheet.create({})
