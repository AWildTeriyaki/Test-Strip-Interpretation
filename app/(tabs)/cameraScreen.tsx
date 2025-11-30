import NoCameraDeviceError from '@/app/noCameraDeviceError';
import PhotoButton from '@/components/PhotoButton';
import { useAppState } from '@react-native-community/hooks';
import { useIsFocused } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';

export default function CameraScreen() {

    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

    const camera = useRef<Camera>(null);
    const device = useCameraDevice('back');

    const isFocused = useIsFocused();
    const appState = useAppState();


    const isActive = appState === "active" && isFocused;

    if (device == null) {
        return <NoCameraDeviceError />
    }

    async function takePhoto() {
        if (camera.current == null) {
            console.log("Somehow you're taking a photo before the ref isn't null?")
        } else {
            const photo = await camera.current.takePhoto();
            const asset = await MediaLibrary.createAssetAsync(photo.path);
            console.log("photo saved: ", asset);
            alert("Photo saved!")
        }
    }

    useEffect(() => {
        if (!permissionResponse?.granted) {
            requestPermission();
        }
    })

    useEffect(() => {

    })

    return (
        isActive ? (
            <>
                <Camera
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={isActive}
                    ref={camera}
                    photo={true}
                />
                <View style={styles.container}>
                    <View style={styles.spacer} />
                    <PhotoButton onPress={takePhoto} />
                </View>
            </>) : (
            <View style={styles.placeholder} />
        )
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    spacer: {
        height: 500,
    },
    placeholder: {
        flex: 1,
        backgroundColor: 'black',
    },
});
