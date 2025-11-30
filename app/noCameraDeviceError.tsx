import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function NoCameraDeviceError() {
    return (
        <View style={styles.container}>
            <Ionicons name="sad-outline" color="#4090c9" size={96} />
            <Text style={styles.errorText}>Oh no. The app can't find your camera!</Text>
            <Text style={styles.errorText}>It looks like I screwed up. Try reloading the app, and let me know if that doesn't work.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    errorText: {
        marginTop: 10,
        fontSize: 18,
        textAlign: "center",
        maxWidth: "80%",
    },
});
