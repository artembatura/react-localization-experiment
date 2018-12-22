export const getPositionsOfLowerCaseLetters = str => (
    str.split('').reduce(
        (positions, letter, i) => letter.toLowerCase() !== letter ? ([
            ...positions,
            i
        ]) : positions,
        []
    )
);
