export default function countPackages(carriers, carrierID) {
  // ¡No olvides compartir tu solución en redes!
  let found = carriers.filter(carrier => carrier[0] === carrierID)
  let subordinados = found[0][2]
  let copy = [...subordinados]
  let suma = 0
  while (copy.length > 0) {
    let buscado = copy[0]
    copy.shift()
    carriers.filter(required => required[0] === buscado).forEach(x => {
      copy = copy.concat(x[2])
      suma += x[1]
    })
  }
  return suma + found[0][1]
}
