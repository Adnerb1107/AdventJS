export default function canReconfigure(from, to) {
    // ¡No olvides compartir tu solución en redes!
     if(from.length!= to.length)
       return false
     else {
       let array= to.split('')
       let arrayFrom = from.split('')
       
       let response = true
       array.forEach((letra, index) => {
         let indice = array.indexOf(letra)      
         let indiceFrom = arrayFrom.indexOf(arrayFrom[index])        
         
         if(response){
           if(indice!= index) {
             if(from[index] !== from[indice]){          
               response =false
             }
           }
           else{
              if(indiceFrom!= index)
                response = false
           }
         }
       })    
       
       return response
     }
   } 
   