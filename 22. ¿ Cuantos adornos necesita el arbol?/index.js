export default function countDecorations(bigTree) {
    // ¡No olvides compartir tu solución en redes!
     if(bigTree.right === null && bigTree.left === null){
         return bigTree.value
     }
     if(bigTree.right === null && bigTree.left !== null){
       return bigTree.value + countDecorations(bigTree.left)
     }
     else{
       if(bigTree.right!= null && bigTree.left == null){
           return bigTree.value+countDecorations(bigTree.right)
       }
       
       if(bigTree.right != null && bigTree.left != null)
         return countDecorations(bigTree.right)+countDecorations(bigTree.left)+bigTree.value
     }
   }