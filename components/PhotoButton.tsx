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
        height: 74,
        width: 74,
        borderRadius: 37,
        backgroundColor: "#d9d9d9ff",
        borderWidth: 5,
        borderColor: "#fff",
    }
});

