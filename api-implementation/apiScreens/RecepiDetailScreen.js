import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useLayoutEffect, useState } from "react"
import { ActivityIndicator, Text, View } from "react-native"
import { getRecepiDetailApi } from "../apiCalls/api"
import IconButton from "../../componenets/IconButton"


function RecepiDetailScreen() {
    const [recepiDetail, setrecepiDetail] = useState({})
    const [isloading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const isFocused = useIsFocused()
    const route = useRoute()
    const navigation = useNavigation();
    const recepiId = route.params.recepiId
  
    useEffect(() => {

        const fetchData = async () => {
            try {
                console.log("data")
                const data = await getRecepiDetailApi(recepiId)
                setrecepiDetail(data)
                navigation.setOptions({ title: data.name }); 
                console.log(data)
            }
            catch (error) {
                console.log(recepiId)
                setError(error.message)
            }
            finally {
                setLoading(false)
            }

        }
        if (isFocused) {
            setLoading(true); // Reset loading state when screen is focused
            fetchData();
        }
    }, [isFocused,navigation])

    if (isloading) return <ActivityIndicator style={{ alignItems: "center" }} size="large" color="#e4baa1" />
    if (error) return <Text>{error}</Text>;
    return (
        <View>
            <Text>{recepiDetail.name}</Text>
        </View>
    )
}
export default RecepiDetailScreen