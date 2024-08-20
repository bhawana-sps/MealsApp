import { StyleSheet, Text, TextInput,View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from "../../util/Color";

function InputContainer({ label, placeHolder, value, keyboardType, onUpdateValue, secure }) {
    return (
        <View style={style.textStyle}>
            <Text style={style.textStyle}> {label} </Text>
            <TextInput
                style={style.textInputStyle}
                placeholder={placeHolder}
                placeholderTextColor={Color.color_ccc}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    )
}
const style = StyleSheet.create({
    rootContainer: {
        marginHorizontal: 8
    },
    textStyle: {
        fontSize: hp('2%'),
        color: "white",
        fontWeight: "700",
        marginBottom: 4,
        marginTop:10
    },
    textInputStyle: {
        fontSize: hp('2%'),
        color: 'white',
        backgroundColor: Color.color_3f2f25,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 4
    }

})

export default InputContainer