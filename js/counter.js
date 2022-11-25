const n = 6; 
let cpt = 0; 
const duree = 2; 
const delta = Math.ceil((duree * 1000) / n); 
const node =  document.getElementById("compteur"); 
 
function countdown() {
  node.innerHTML = cpt++ ;
  if( cpt < n ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdown, delta);
  }
}
 
setTimeout(countdown, delta);
