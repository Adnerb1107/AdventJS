export default function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  let result1 = null
  for (let i = 0; i < numbers.length; i++) {
    const newarray = [...numbers];
    newarray[i] = 999999999999999999
    if (newarray.includes(result - numbers[i])) {
      result1 = [numbers[i], result - numbers[i]]
      break;
    }
  }
  return result1
}