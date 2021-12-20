export default function learn(time, courses) {
    // ¡No olvides compartir tu solución en redes!
    let fin = false
    let found = []
    for (let i = 0; i < courses.length - 1; i++) {
        for (let j = i + 1; j < courses.length; j++) {
            let suma = courses[j] + courses[i]
            if (suma === time) {
                found = [i, j]
                fin = true
                break
            }
            else {
                if (suma < time) {
                    let data = [suma, i, j]
                    found = [...found, data]
                }
            }
        }
        if (fin)
            break
    }
    if (found.length == 0)
        return null
    if (fin)
        return found
    else {
        let [_, b, c] = found.filter((x, index) => x[0] === Math.max(...found.map(x => x[0])))[0]
        return [b, c]
    }
}