import NoCameraDeviceError from '@/app/noCameraDeviceError';
import ExitButton from '@/components/ExitButton';
import OverlayRectangle from '@/components/OverlayRectangle';
import PhotoButton from '@/components/PhotoButton';
import { useForeground } from '@/hooks/useForeground';
import { useIsFocused } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Camera, useCameraDevice, useFrameProcessor } from 'react-native-vision-camera';
import { DetectedObject, detectObjects, FrameProcessorConfig } from 'vision-camera-realtime-object-detection';

type Props = {
    exitButtonPress: () => void;
}

export default function CameraScreen({ exitButtonPress }: Props) {

    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    const [resetCameraView, setResetCameraView] = useState<boolean>(true);

    const camera = useRef<Camera>(null);
    const device = useCameraDevice('back');

    const isFocused = useIsFocused();
    const foreground = useForeground();


    const isActive = foreground && isFocused;

    const frameProcessorConfig: FrameProcessorConfig = {
        modelFile: 'assets/model/60_epochs_larger_dataset_float32.tflite',
        scoreThreshold: 0.5,
    };

    const frameProcessor = useFrameProcessor((frame) => {
        'worklet';

        const detectedObjects: DetectedObject[] = detectObjects(frame, frameProcessorConfig);

    }, []);

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
        if (!permissionResponse) {
            requestPermission();
        }
    });

    // setting the isActive prop on the camera component to false does not prevent it from throwing an error when you open another camera app on android
    // so I decided to unmount the camera completely after the user closes out of the app
    // the problem with that is that the camera preview wouldn't render at the correct height every time
    // so I found that waiting half a second and reapplying Styles.absoluteFill every time the user opens the app fixes that
    // I know it's cursed, "but it works"
    useEffect(() => {
        if (isActive) {
            setResetCameraView(false);
            setTimeout(() => setResetCameraView(true), 500);
        }
    }, [isActive])

    return (
        <View style={StyleSheet.absoluteFill}>
            {isActive && (<Camera
                ref={camera}
                device={device}
                style={resetCameraView ? styles.camera : styles.placeholder}
                isActive={isActive}
                photo={true}
                frameProcessor={frameProcessor}
            />)}
            <View style={styles.overlay}>
                <OverlayRectangle rectangleColor="#fff" />
                <PhotoButton onPress={takePhoto} />
            </View>
            <View style={styles.exitButtonContainer}>
                <ExitButton onPress={exitButtonPress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 40,
        gap: 30,
    },
    camera: {
        ...StyleSheet.absoluteFillObject,
    },
    placeholder: {

    },
    exitButtonContainer: {
        ...StyleSheet.absoluteFillObject,
        padding: 15,
    },
});
