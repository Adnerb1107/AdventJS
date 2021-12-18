export default function decodeNumbers(symbols) {
  // ¡No olvides compartir tu solución en redes!
  let claves = [".", ",", ":", ";", "!"]
  let values = [1, 5, 10, 50, 100]
  let data = symbols.split('')
  let suma = 0
  data.forEach((val, index) => {
    let temp = values[claves.indexOf(val)]
    if (claves.indexOf(val) < claves.indexOf(data[index + 1])) {
      temp = values[claves.indexOf(val)] * -1
    }
    suma += temp
  })
  return suma
}