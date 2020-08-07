export function toUpperCaseByPositions(str, positions) {
  return Array.from(str).map((letter, i) => {
     return positions.indexOf(i) !== -1
       ? letter.toUpperCase()
       : letter;
    }).join('');
}
