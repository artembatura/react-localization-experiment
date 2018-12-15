export const getPositionsOfLowerCaseLetters = str => {
    const changes = [];

    str.split().forEach((letter, i) => {
        if (letter.toLowerCase() !== letter) {
            changes.push(i);
        }
    });

    return changes;
};
