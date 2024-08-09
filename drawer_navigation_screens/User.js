import { View, Text,Button } from 'react-native';

function User({navigation}) {
    function openDrawerHandler() {
        navigation.toggleDrawer();
      }
    
    return (
        <View>
            <Text style={{ color: "#740808" }}>User Screen</Text>
            <Button title="Open Drawer" onPress={openDrawerHandler} />
        </View>
    )
}
export default User