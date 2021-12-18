export default function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  let newString = ""
  let initialH = height
  for (let h = height; h > 0; h--) {
    newString += '_'.repeat(h - 1) + '*'.repeat(2 * initialH - 2 * h + 1) + '_'.repeat(h - 1) + "\n"
  }
  let base = ('_'.repeat(initialH - 1) + '#' + '_'.repeat(initialH - 1) + '\n').repeat(2).trim()
  return newString + base

}