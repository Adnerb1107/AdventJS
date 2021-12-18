function hasta(dia, mes) {
  const numberdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let suma = 0
  for (let i = 0; i < mes - 1; i++) {
    suma += numberdays[i]
  }
  return suma + dia
}
export default function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!

  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  let time = 0
  if (month == 11 && year === 2021) {
    time = 25 - day
  }
  else {
    if (year > 2021) {
      time = - (hasta(day, month + 1) + 6)
    }
    else {
      time = hasta(25, 12) - hasta(day, month + 1)
    }
  }

  return time
}
