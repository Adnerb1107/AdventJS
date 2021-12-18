export default function contains(store, product) {
  // ¡Y no olvides compartir tu solución en redes!
  const add = []
  const almacenX = JSON.stringify(store)
  const arr1 = almacenX.split('')
    .filter(e => e != ":")
    .filter(e => e != "{")
    .filter(e => e != "}")
    .filter(e => e != '""')
    .join('')
    .split('""')
    .map(e => e.split('"').join(' '))
    .filter(e => e.split(',').join(''))
  const valor2 = arr1.map(e => {
    const val1 = e.trim().split(',')
    return [...add, val1]
  })
  return valor2.join(',').split(',').map(e => e.trim()).includes(product)
}