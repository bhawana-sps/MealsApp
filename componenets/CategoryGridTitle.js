import { Text, View, Pressable, StyleSheet, Button } from "react-native"
import React, { useCallback } from "react"
import { useNavigation } from "@react-navigation/native"

function press() {
    console.log("pressed")
}
function CategoryGridTitle({ title, color, onPress }) {

   const navigate = useNavigation();
   function handleOnNavigate(){
    navigate.navigate("DummyUseNavigation",{
        title:title
    });
   }
//    const handleOnNavigate = () => navigate("DummyUseNavigation");
    return (
        <View style={style.outerContainer}>
            <Pressable style={(press) => [style.pressable, press.pressed ? style.pressables : null]}
                android_ripple={{ color: "#ccc" }} onPress={onPress}>
                <View style={[style.innerContainer, { backgroundColor: color }]}>
                    <Text style={style.text}>{title}</Text>
                    <Button title="ClickMe" onPress={handleOnNavigate}></Button>
                </View>
            </Pressable>
        </View>
    )
}
const style = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "black",
        fontStyle: "normal",
        includeFontPadding: true
    },
    pressable: {
        flex: 1

    },
    pressables: {
        opacity: 0.5

    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    outerContainer: {
        flex: 1,
        margin: 18,
        shadowColor: "black",
        borderRadius: 8,
        elevation: 4,
        height: 150,
        backgroundColor: 'white',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    }
})
export default React.memo(CategoryGridTitle)