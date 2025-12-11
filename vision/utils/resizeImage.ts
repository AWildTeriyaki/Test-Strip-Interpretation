import { Frame } from 'react-native-vision-camera'

export function resize(
    frame: Frame,
    width: number,
    height: number,
): Uint8Array {
    'worklet'
    const inputWidth = frame.width
    const inputHeight = frame.height

    // Use the reliable RGBA assumption (4 channels in, 3 channels out)
    const rawBuffer = frame.toArrayBuffer()
    const inputArray = new Uint8Array(rawBuffer);
    const outputFrame = new Uint8Array(width * height * 3);
    // outputFrame is already pre-allocated and sized by the Frame Processor hook

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const srcX = Math.floor((x / width) * inputWidth)
            const srcY = Math.floor((y / height) * inputHeight)

            const srcIndex = (srcY * inputWidth + srcX) * 3
            const destIndex = (y * width + x) * 3

            // RGBA -> RGB copy (R, G, B channels)
            outputFrame[destIndex] = inputArray[srcIndex]
            outputFrame[destIndex + 1] = inputArray[srcIndex + 1]
            outputFrame[destIndex + 2] = inputArray[srcIndex + 2]
        }
    }

    return outputFrame
}