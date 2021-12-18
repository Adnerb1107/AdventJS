export default function maxProfit(prices) {
  // ¡Y no olvides compartir tu solución en redes!
  let posibilidades = []
  for (let i = 1; i < prices.length - 1; i++) {
    let venta = prices.slice(i + 1, prices.length)
    let compra = prices.slice(0, i)
    let profit = Math.max(...venta) - Math.min(...compra)
    posibilidades.push(profit)
  }
  return Math.max(...posibilidades) <= 0 ? -1 : Math.max(...posibilidades)
}

