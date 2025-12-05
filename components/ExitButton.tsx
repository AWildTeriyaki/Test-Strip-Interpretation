import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

type Props = {
    onPress: () => void;
}

export default function ExitButton({ onPress }: Props) {
    return (
        <Pressable onPress={onPress}>
            <Ionicons name="close-outline" color="white" size={36} style={{ alignSelf: "flex-end" }} />
        </Pressable>
    );
}
