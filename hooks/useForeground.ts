import { useCallback, useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

export const useForeground = () => {
    const [foreground, setForeground] = useState(true);

    const onChange = useCallback((state: AppStateStatus) => {
        switch (state) {
            case 'active':
                setForeground(true);
                break;

            case 'inactive':
            case 'background':
                setForeground(false);
                break;

            case 'unknown':
            case 'extension':
            default:
                break;
        }
    }, []);

    useEffect(() => {
        const listener = AppState.addEventListener('change', onChange);
        return () => {
            listener && listener.remove();
        };
    }, [onChange]);

    return foreground;
};