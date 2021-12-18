export default function checkSledJump(heights) {
  // ¡No olvides compartir tu solución en redes!
  let down = false
  let response = false
  let wrong = false
  let up = false
  heights.forEach((val, index) => {
    if (index < heights.length - 1) {
      if (val < heights[index + 1]) {
        up = true
        down = false
      }
      else {
        if (val === heights[index + 1]) {
          wrong = true
        }
        else {
          down = true
          up = false
        }
      }
    }
    else {
      if (!up && down && !wrong) {
        response = true
      }
    }
  })
  return response
}