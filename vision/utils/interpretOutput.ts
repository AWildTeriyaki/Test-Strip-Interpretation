interface Detection {
    box: {
        xMin: number,
        yMin: number,
        xMax: number,
        yMax: number,
    };
    confidence: number,
    classId: number
}

function interpretOutput(output: any) {
    const ordered = Object.values(output); // for some reason the output is returned as a really weird string to int object thing
    
}