export const toLowerCaseByIndex = (str, indexArray) =>
    str
        .split("")
        .map((letter, i) =>
            indexArray.indexOf(i) !== -1 ? letter.toUpperCase() : letter
        )
        .join("");
