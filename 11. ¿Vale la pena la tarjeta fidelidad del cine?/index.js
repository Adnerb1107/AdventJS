export default function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes!
    let total = 0
    let arr = Array(times).fill().map((v, i) => i + 1)
    let suma = 0
    total = arr.map((val, i) => {
        suma = suma + 12 * Math.pow(0.75, val)
        return suma
    })[arr.length - 1]
    return total + 250 < 12 * times

}