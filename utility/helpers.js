
// normalizes string then checks if it starts with a certain letter
function startsWithLetter(word, letter) {
    return word.toLowerCase().substring(0, 1) == letter.toLowerCase();
}

// calculates rizz score based on name and major
export function calculate(name, major) {
    let score = 0;

    if (startsWithLetter(name, 'j')) {
        score -= 10;
    } else if (startsWithLetter(name, 'a')) {
        score += 10;
    }

    if (major.toLowerCase().includes('computer')) {
        score = Number.MIN_SAFE_INTEGER;
    }

    return score
}