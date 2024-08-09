import React, { useCallback, useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Text, View } from "react-native"
import { getRecepiListApi } from "../apiCalls/api"
import RecipeItemList from "./RecipeItemList"
import { useFocusEffect, useIsFocused } from "@react-navigation/native"

function AllRecepiesScreen(){
    const[recipes,setReipes]=useState([])
    const[loading,setLoading] =useState(true)
    const[error,setError]=useState(null)
    const isFocused=useIsFocused()
    
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const data = await getRecepiListApi()
            setReipes(data)
            console.log(data)
            }catch(error){
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
        }
        if (isFocused) {
            setLoading(true); // Reset loading state when screen is focused
            fetchData();
        }
    },[isFocused])
    if(loading) return <ActivityIndicator style={{alignItems:"center"}} size="large" color="#e4baa1"/>
    if (error) return <Text>{error}</Text>;
   

    return(
        <FlatList data={recipes}
        maxToRenderPerBatch={8}
        bounces={false}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            <RecipeItemList item={item}/>
            // <View><Text>All recepie screen- {item.name}</Text></View>
        )
           
        }
        />
        // <View><Text>All recepie screen</Text></View>
    )
}
export default React.memo(AllRecepiesScreen);