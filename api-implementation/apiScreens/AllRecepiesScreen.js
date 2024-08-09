import React, { useCallback, useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { geSortedtRecepiListApi, getRecepiListApi } from "../apiCalls/api"
import RecipeItemList from "./RecipeItemList"
import { useFocusEffect, useIsFocused } from "@react-navigation/native"

function AllRecepiesScreen() {
    const [recipes, setReipes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const isFocused = useIsFocused()
    const [isClicked, setIsClicked] = useState(1)
    const searchRecepi = async (search) => {
        try {
            const data = await searchRecepi(search)
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
    const imageSource = () => {
        if (isClicked == 1) return require("../../assets/sort.png")
        else if (isClicked == 2) return require("../../assets/arrow_up.png")
        else return require("../../assets/arrow_down.png")
    }
    if (loading) return <ActivityIndicator style={{ alignItems: "center" }} size="large" color="#e4baa1" />

    if (error) return <Text>{error}</Text>


    return (
        <View style={{ flex: 1, marginVertical: 10 }}>
            <View style={{ flexDirection: "row", marginHorizontal: 18 }}>
                <TouchableOpacity activeOpacity={0.6} style={{
                    height: 45, width: 45,
                    flex: 1, alignItems: "flex-end"
                }} onPress={onPress}>
                    <View style={style.circularView}>
                        <Image style={style.imageStyle} resizeMethod="auto"
                            source={imageSource()} />
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
    imageStyle: {
        width: 35,
        height: 35,
        // resizeMode: "center",
        tintColor: "#351401",
        alignItems: "center",
        justifyContent: "center",
        margin: 2
    },
    circularView: {
        borderRadius: 150,
        backgroundColor: "#ccc"
    }
})
export default React.memo(AllRecepiesScreen);