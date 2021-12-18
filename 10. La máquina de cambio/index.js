export default function getCoins(change) {
  // ¡No olvides compartir tu solución en redes!
  let coins = [50, 20, 10, 5, 2, 1]
  let rest = change
  let coins_detail = []
  while (rest > 0) {
    let coin = coins.filter(valore => rest >= valore)[0]
    let nro = Math.floor(rest / coin)
    let detail = {
      coin: coin,
      nro: nro
    }
    rest = rest - nro * coin
    coins_detail.push(detail)
  }
  let final_array = [0, 0, 0, 0, 0, 0]
  coins_detail.forEach(e => {
    let indice = coins.indexOf(e.coin)
    final_array[indice] = e.nro
  })
  return final_array.reverse()
}