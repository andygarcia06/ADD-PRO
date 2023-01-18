const n = 6; 
const duree = 2; 
const delta = Math.ceil((duree * 1000) / n); 
const node =  document.getElementById("compteur"); 

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

let cpt = 0; 
let blur = document.getElementById('blur')
 
function countdown() {
  node.innerHTML = cpt++ ;
  if( cpt < n ) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
     setTimeout(countdown, delta);
  }
}
 
setTimeout(countdown, delta);

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModalButtons(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })

// function openModal(modal) {
//   if(modal == null) return
//   modal.classList.add('active')
//   overlay.classList.add('active')
// }

// function closeModal(modal) {
//   if(modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }

const figure1 = document.querySelector('#figure-1');
const modalPopup = document.querySelector('#modal-popup')


function openForm() {
  modalPopup.classlist.toggle('active')
  
}
function closeForm() {
  document.getElementById("project-popup").style.display = "none";
}

// window.onclick = function (event) {
//   let modal = document.getElementsByClassName('modal-popup');
//   if (event.target === modal) {
//     closeForm();
//   }
// }


// figure1.addEventListener('click', () => {
//   setTimeout(() =>{
//     console.log('ça se lance')
//     openForm()
//   }, 2000);
// })


