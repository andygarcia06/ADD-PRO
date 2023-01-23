const media1 = document.querySelector('#media-1');
const media2 = document.querySelector('#media-2');
const media3 = document.querySelector('#media-3');
const media4 = document.querySelector('#media-4');
const media5 = document.querySelector('#media-5');
const media6 = document.querySelector('#media-6');
const noLinks = document.querySelectorAll('.prevent-default');
changingImg1 = document.querySelector('#changing-img-hover-1');
changingImg2 = document.querySelector('#changing-img-hover-2');

media1.addEventListener('mouseover', () => {
    changingImg1.src = '../img/portfolio/villa quentin exte.jpg';
    changingImg2.src = '../img/portfolio/vue2 (1).jpg';
});

media2.addEventListener('mouseover', () => {
    changingImg1.src = '../img/portfolio/renovation-appartement-3D-à-cannes-1.jpeg';
    changingImg2.src = '../img/portfolio/renovation-appartement-3D-à-cannes-2.jpeg';
});

media3.addEventListener('mouseover', () => {
    changingImg1.src = '../img/portfolio/modélisation-3D-hall-immeubel-1-1.jpeg';
    changingImg2.src = '../img/portfolio/modélisation-3D-hall-immeubel-2-1.jpeg';
});

media4.addEventListener('mouseover', () => {
    changingImg1.src = '../img/portfolio/3.jpg';
    changingImg2.src = '../img/portfolio/renovation-appartement-3D-à-cannes-2.jpeg';
});

media5.addEventListener('mouseover', () => {
    changingImg1.src = '../img/portfolio/renovation-appartement-3D-à-cannes-1.jpeg';
    changingImg2.src = '../img/portfolio/1.jpg';
});

media6.addEventListener('mouseover', () => {
    changingImg1.src = '../img/portfolio/modélisation-3D-hall-immeubel-1-1.jpeg';
    changingImg2.src = '../img/portfolio/modélisation-3D-hall-immeubel-2-1.jpeg';
});

// modal

const arrayDatasModal = [
    [ "Modélisation d'un challet", "Modélisation d'une chambre", "Modélisation d'un appartement", "Modélisation en 3D d'un aménagement extérieur", "Modélisation d'une maison","Modélisation d'un appartemment","Modélisation d'unne chambre", "Modélisation en 3D d'un appartemment"],
    ["img/portfolio/Chalet-Allos-scaled.jpeg","img/portfolio/master-room-scaled.jpeg","img/portfolio/renovation-appartement-3D-à-cannes-1.jpeg","img/portfolio/Modélisation en 3D d'un aménagement extérieur.jpg","img/portfolio/ENTRE INSTA.jpg","img/portfolio/renovation-appartement-3D-à-cannes-2.jpeg","img/portfolio/rénovation-chambre-en-3D-à-Nice.jpeg","img/portfolio/renovation-appartement-3D-à-cannes-1.jpeg"],
];
const modalOpener = document.querySelectorAll('.modal-launcher');
const modalClose = document.querySelector('.modal-close-btn');
const bodyBlur = document.querySelector('.blur-background');
const openModal1 = document.querySelector('#modal-launcher-1');
const experience = document.querySelector('#experience'); 
const specialization = document.querySelector('#specialization'); 
const wrapper = document.querySelector(".modal-wrapper"),
header = wrapper.querySelector("header");
function onDrag({movementX, movementY}){
  let getStyle = window.getComputedStyle(wrapper);
  let leftVal = parseInt(getStyle.left);
  let topVal = parseInt(getStyle.top);
  wrapper.style.left = `${leftVal + movementX}px`;
  wrapper.style.top = `${topVal + movementY}px`;
}
header.addEventListener("mousedown", ()=>{
  header.classList.add("active");
  header.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", ()=>{
  header.classList.remove("active");
  header.removeEventListener("mousemove", onDrag);
});

function closeModal(){
    wrapper.style.visibility = 'hidden';

    bodyBlur.style.filter = 'blur(0px)';
    experience.style.filter = 'blur(0px)';
    specialization.style.filter = 'blur(0px)';

}



function createContentModal(index){
    wrapper.style.visibility = 'visible';

    bodyBlur.style.filter = 'blur(20px)';
    experience.style.filter = 'blur(10px)';
    specialization.style.filter = 'blur(10px)';

    const modalName = document.querySelector('.modal-title h3');
    modalName.textContent = arrayDatasModal[0][index];

    const modalImg = document.querySelector('.modal-img');
    modalImg.src = arrayDatasModal[1][index];


    
};



openModal1.addEventListener('click',createContentModal);


 for (let i = 0; i < modalOpener.length; i++) {
     modalOpener[i].addEventListener("click", () => createContentModal(i));
 }

 modalClose.addEventListener("click",closeModal);

 











