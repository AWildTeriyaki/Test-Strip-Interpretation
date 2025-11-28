import CircleButton from '@/components/CircleButton';
import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {

  const onCircleButtonPress = () => {
    return alert("You pressed a button!");
  }

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
    marginTop: 15,
    fontSize: 24,
  },
});
