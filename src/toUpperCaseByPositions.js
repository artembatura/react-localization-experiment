export const toUpperCaseByPositions = (str, positions) =>
    str
        .split("")
        .map((letter, i) =>
            positions.indexOf(i) !== -1 ? letter.toUpperCase() : letter
        )
        .join("");
