export default function contarOvejas(ovejas) {
    // aquí tu magia
    return ovejas.filter( ({color, name}) => (
        color === "rojo" &&
        name.toLowerCase().includes('n') && 
        name.toLowerCase().includes('a')
    ))
}