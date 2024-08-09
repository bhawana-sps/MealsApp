import { Text, View, Pressable, StyleSheet, Button } from "react-native"
import React, { useCallback } from "react"
import { useRoute } from "@react-navigation/native"
function DummyUseNavigation(){
    const route= useRoute()
    return (
        <View>
            <Text>Navigation Hook Test Screen - {route.params.title}</Text>
        </View>
    )
}
export default DummyUseNavigation