import { Image, Pressable, StyleSheet } from 'react-native';

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{color:"#ccc"}}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Image source={icon} size={24} tintColor={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});