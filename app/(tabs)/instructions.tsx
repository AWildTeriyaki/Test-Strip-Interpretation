import { StyleSheet, Text, View } from 'react-native';

export default function Instructions() {
    return (
        <View style={styles.instructionsContainer}>
            <Text style={styles.title}>How to use the four drug test strip:</Text>
            <Text style={styles.sectionTitle}>
                1) 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    instructionsContainer: {
        flex: 1,
        padding: 30,
        gap: 20,
    },
    textContainer: {

    },
    title: {
        fontSize: 26,
        textAlign: "center",
    },
    sectionTitle: {
        fontSize: 23,
    },
});
