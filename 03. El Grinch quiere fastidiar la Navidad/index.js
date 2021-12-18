export default function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  let inicio = letter.split('').findIndex(e => e === '(')
  let fin = letter.indexOf(')')
  if (inicio >= 0 && fin >= 2) {
    let regalo = letter.split('').slice(inicio + 1, fin)
    let indexC = regalo.includes('[')
    let indexP = regalo.includes('{')
    return (!indexC && !indexP && !regalo.includes('(') && !regalo.includes(')'))
  }
  return false
}