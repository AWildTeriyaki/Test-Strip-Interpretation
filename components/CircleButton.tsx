import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
    onPress: () => void;
}

export default function CircleButton({ onPress }: Props) {

    return (
        <View style={styles.circleButtonContainer}>
            <Pressable style={styles.circleButton} onPress={onPress}>
                <Ionicons name="add" color="#25292e" size={48} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    circleButtonContainer: {
        width: 94,
        height: 94,
        borderWidth: 4,
        borderColor: "#9bd5ffff",
        borderRadius: 47,
        padding: 3,
    },
    circleButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 47,
        backgroundColor: "#fff",
    }
})
