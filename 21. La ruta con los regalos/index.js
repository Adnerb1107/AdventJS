export default function canCarry(capacity, trip) {
    // ¡No olvides compartir tu solución en redes!
    let response=true
    let acumulado = 0
    let pendientes = []
    trip.forEach((viaje,index) => {
      let regalos = viaje[0]
      let recogida = viaje[1]
      let entrega = viaje[2]
      if(pendientes.length>0 && pendientes.shift()<=recogida && response){
        acumulado=acumulado-trip[index-1][0]
      }
      if(recogida< entrega && response){
        acumulado+= regalos
        pendientes= [...pendientes, entrega]
      }
      if(acumulado>capacity){
        response = false
      }
    })
    return response
   }
   