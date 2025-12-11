import { StyleSheet, View } from 'react-native';

type Props = {
    rectangleColor: string,
}

export default function OverlayRectangle({ rectangleColor }: Props) {
    return (
        <View style={[styles.rectangle, { borderColor: rectangleColor }]} />
    );
}

const styles = StyleSheet.create({
    rectangle: {
        width: 35,
        height: 450,
        borderWidth: 2,
        borderStyle: 'dashed',
    },
});
