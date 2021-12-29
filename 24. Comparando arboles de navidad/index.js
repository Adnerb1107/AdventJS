export default function checkIsSameTree(treeA, treeB) {
    // ¡No olvides compartir tu solución en redes!
   let response = true
     if(treeA.value != treeB.value){
       response= false
     }
     else{
       let al= treeA.left
       let bl= treeB.left
       let ar= treeA.right
       let br= treeB.right
       while(response === true){
         if(al != null && bl != null && ar!= null && br != null){        
             response = al.value === bl.value && ar.value === br.value
             if(!response){
               break
             }
             al = al.left 
             bl = bl.left
             ar= ar.right
             br= br.right
         }
         else{
           response = al === bl && ar===br
           break
         }      
       }    
     }
     return response  
   }