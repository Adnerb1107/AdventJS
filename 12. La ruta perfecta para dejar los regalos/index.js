export default function getMinJump(obstacles) {
  let max = Math.max(...obstacles)
  for (let i = 1; i < max; i++) {
    let posible = obstacles.filter(val => val % i !== 0)
    if (posible.length === obstacles.length) {
      return i
      break
    }
  }
  return max
}
