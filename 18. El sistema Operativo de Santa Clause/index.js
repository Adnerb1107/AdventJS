export default function fixFiles(files) {
    // ¡No olvides compartir tu solución en redes!
    let copy = [...files]
    for (let i = 1; i < copy.length; i++) {
        let rest = files.slice(0, i)
        if (rest.includes(files[i])) {
            let times = rest.filter(z => z == files[i]).length;
            copy[i] = copy[i] + "(" + times + ")"
        }
    }
    return copy
}