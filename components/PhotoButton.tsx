import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
    onPress: () => void
}

export default function PhotoButton({ onPress }: Props) {

    return (
        <View>
            <Pressable style={styles.button} onPress={onPress}>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 84,
        width: 84,
        borderRadius: 42,
        backgroundColor: "#fff",
    }
});

