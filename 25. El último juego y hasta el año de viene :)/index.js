export default function canMouseEat(direction, game) {
  // ¡Gracias por jugar a AdventJS 2021! 🤗
  // ¡Nos vemos el año que viene! 👋
  // Por favor, comparte en las redes qué te ha parecido! 🚀
  let pos = game.map((e, i) => e.includes('m') ?  [i, e.indexOf('m')] : 0)
          .filter(e => e!=0)[0]  
  let x= pos[1]
  let y= pos[0]  
  
  let respuesta = true
  switch(direction){
   case("up" ):
      let ejey= y-1
      if(ejey< 0){
        ejey=y
      }
      return game[ejey][x] === "*"     
      break
   
    case("down"):
        let ejey1= y+1
        console.log(ejey1)
        if(ejey1>= game.length){
          ejey1=y
        }      
        return game[ejey1][x] ==="*"    
        break
    
    case("left"):    
        let ejex=x-1
        if(ejex<0){
          ejex=x
        }
        return game[y][ejex] === "*"
        break
    
    case("right"):
        let ejex1= x+1
        if(ejex1>= game.length){
          ejex1=x
        }
        return game[y][ejex1] ==="*"      
        break
    
    default: 
      break
  }
  return respuesta
}