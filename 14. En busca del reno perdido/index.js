export default function missingReindeer(ids) {
  // ¡No olvides compartir tu solución en redes!
  if (ids.length === 1) {
    return ids[0] === 1 ? 0 : 1
  }
  var hastaN = Array(ids.length + 1).fill().map((v, i) => i);
  return hastaN.find(valor => {
    if (!ids.includes(valor) && valor != undefined) {
      return valor
    }
  })
}