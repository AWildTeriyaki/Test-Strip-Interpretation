import { Ionicons } from '@expo/vector-icons/';
import { useCallback, useEffect, useState } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Camera, CameraPermissionStatus } from 'react-native-vision-camera';

type Props = {
    navigateBack: () => void,
}

export default function RequestPermissions({ navigateBack }: Props) {

    const [cameraPermissionStatus, setCameraPermissionStatus] = useState<CameraPermissionStatus>('not-determined')

    const requestCameraPermissions = useCallback(async () => {
        const cameraPermission = await Camera.requestCameraPermission();
        if (cameraPermission === "denied") {
            await Linking.openSettings();
        }
        setCameraPermissionStatus(cameraPermission);
    }, []);

    useEffect(() => {
        if (cameraPermissionStatus === "granted") {
            navigateBack();
        }
    }, [cameraPermissionStatus]);

    return (
        <View style={styles.container}>
            <Ionicons name="camera" color="#4090c9" size={76} />
            <Text style={styles.permissionsText}>
                This application needs access to your camera.
            </Text>
            <Text style={styles.hyperlink} onPress={requestCameraPermissions}>
                Grant
            </Text>
            <Text style={styles.hyperlink} onPress={() => { console.log(cameraPermissionStatus.valueOf()) }}>
                Deny
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    permissionsText: {
        fontSize: 20,
        textAlign: "center",
        marginTop: 10,
        maxWidth: "80%",
    },
    hyperlink: {
        color: "#007aff",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 15,
    },
});
