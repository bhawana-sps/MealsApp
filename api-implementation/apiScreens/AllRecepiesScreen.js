import React, { useCallback, useEffect, useRef, useState } from "react"
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { geSortedtRecepiListApi, getRecepiListApi, searchtRecepiApi } from "../apiCalls/api"
import RecipeItemList from "./RecipeItemList"
import { useFocusEffect, useIsFocused } from "@react-navigation/native"
import Color from "../../util/Color"
import ImageStyle from "../../componenets/ImageStyle"


function AllRecepiesScreen() {
    const [recipes, setReipes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const isFocused = useIsFocused()
    const [searchText, setSearchText] = useState("")
    const [isClicked, setIsClicked] = useState(1)
    const debounceTimeout = useRef(null);
    const searchRecepi = async (search) => {
        try {
            const data = await searchtRecepiApi(search)
            setReipes(data)
            console.log(data)
        } catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }
    const sortData = async (sort) => {
        try {
            const data = await geSortedtRecepiListApi("name", sort)
            setReipes(data)
            console.log(data)
        } catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }
    const fetchData = async () => {
        try {
            const data = await getRecepiListApi()
            setReipes(data)
            console.log(data)
        } catch (error) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (isFocused) {
            setLoading(true); // Reset loading state when screen is focused
            fetchData();
        }
    }, [isFocused])
    function onPress() {
        setReipes([])
        setLoading(true);
        if (isClicked == 1) {
            setIsClicked(2)
            sortData("asc")
        }
        else if (isClicked == 2) {
            setIsClicked(3)
            sortData("desc")
        }
        else {
            setIsClicked(1)
            fetchData()
        }
    }


    const handleSearchChange = (text) => {
        setSearchText(text)
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        // Set a new timeout
        debounceTimeout.current = setTimeout(() => {
            searchRecepi(text);
        }, 800); // Delay of 800ms
    }
    const imageSource = () => {
        if (isClicked == 1) return require("../../assets/funnel.png")
        else if (isClicked == 2) return require("../../assets/arrow_up.png")
        else return require("../../assets/arrow_down.png")
    }
    if (loading) return <ActivityIndicator style={{ alignItems: "center" }} size="large" color={Color.color_e4baa1} />

    if (error) return <Text>{error}</Text>

    return (
        <View style={style.rootContainer}>
            <View style={style.innerViewStyle}>
                <View style={style.searchLayoutStyle}>
                    <ImageStyle image={require("../../assets/home_search_icon.png")}/>
                    <TextInput style={style.inputTextStyle} maxLength={20} placeholder="Search Recepi"
                        value={searchText}
                        onChangeText={handleSearchChange} />
                </View>

                <TouchableOpacity activeOpacity={0.6} style={style.touchableStyle} onPress={onPress}>
                    <View style={style.circularView}>
                    <ImageStyle image={imageSource()}/>
                    </View>
                </TouchableOpacity>

            </View>

            <FlatList data={recipes}
                maxToRenderPerBatch={8}
                bounces={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <RecipeItemList item={item} />
                    // <View><Text>All recepie screen- {item.name}</Text></View>
                )

                }
            />
        </View>

        // <View><Text>All recepie screen</Text></View>
    )
}
const style = StyleSheet.create({
    rootContainer: {
        flex: 1, marginVertical: 10
    },
    searchLayoutStyle: {
        flex: 1,
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: Color.color_ccc,
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 2,
        marginEnd: 30,
    },
    innerViewStyle: {
        flexDirection: "row",
        marginHorizontal: 18,
        alignItems: "center",
        justifyContent: "center"
    },
    touchableStyle: {
        height: 45,
        width: 45,
    },
  
    inputTextStyle: {
        backgroundColor: "transparent",
        paddingHorizontal: 16,
        paddingVertical: 5,
        alignItems: "center",

        fontSize: 15,

        placeholder: "Enter text",
        underlineColorAndroid: "transparent",
        color:  Color.color_351401
    },
    circularView: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        backgroundColor: Color.color_ccc
    }
})
export default React.memo(AllRecepiesScreen);