import Home from '@/app/home';
import RequestPermissions from '@/app/requestPermissions';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Camera } from 'react-native-vision-camera';



export default function HomeScreen() {

  const [showRequestPermissions, setShowRequestPermissions] = useState<boolean>(false);

  const onCircleButtonPress = () => {
    const permission = Camera.getCameraPermissionStatus();
    if (permission !== "granted") {
      setShowRequestPermissions(true);
    } else {
      return alert("You pressed a button!")
    }
  }

  const navigateBack = () => {
    setShowRequestPermissions(false);
  }

  return (
    (showRequestPermissions ? <RequestPermissions navigateBack={navigateBack} /> : <Home onCircleButtonPress={onCircleButtonPress} />)
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
