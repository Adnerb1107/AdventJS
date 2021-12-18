export default function wrapGifts(gifts) {
  // ¡No olvides compartir tu solución en redes!
  let inicio_fin = '*'.repeat(gifts[0].length + 2)
  let cuerpo = gifts.map(e => '*' + e + '*')
  let arr = inicio_fin
  return [arr, ...cuerpo, inicio_fin]

}