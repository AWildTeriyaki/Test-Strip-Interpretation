import CircleButton from '@/components/CircleButton';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    onCircleButtonPress: () => void,
}

export default function Home({ onCircleButtonPress }: Props) {

    return (
        <View style={styles.container}>
            <CircleButton onPress={onCircleButtonPress} />
            <Text style={styles.buttonLabel}>New Test Strip Interpretation</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    buttonLabel: {
        marginTop: 20,
        fontSize: 20,
    },
});
