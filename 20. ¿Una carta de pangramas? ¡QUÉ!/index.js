export default function pangram(letter) {
 // ¡No olvides compartir tu solución en redes!
 let all = []
 let especiales = [["á","ä"],["é",'ë'],['í','ï'],['ó','ö'],['ú','ü']]
 let vowel = ['a','e','i','o','u']
 letter.split('').forEach(ele => {
   ele  = ele.toLowerCase()   
   if(vowel.includes(ele)){
     if(!all.includes(ele)){
       let toAdd= vowel.indexOf(ele)
       all = [...all, ...especiales[toAdd],ele]       
     }
   }
   else{
     if(ele.charCodeAt(0)<=122 && ele.charCodeAt()>=97 || ele.charCodeAt() ===241){
       if(!all.includes(ele)){
         all = [...all, ele]
       }       
     }
   }   
 })
  return all.length===37
}