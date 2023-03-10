// Ouverture et fermeture des modales

const btns = document.querySelectorAll('.btn-modale');
const modaleEquipement = document.querySelector('.bloc-modale');
const fermetureModale = document.querySelector('.fermeture-modale');
const imgIndex = document.querySelector('.bloc-modale img');

// je boucle mes modales
if(window.matchMedia("(min-width: 850px)").matches) {
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {

            imgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
            modaleEquipement.classList.add('active-modale');
        })
    })

    // Fermutre avec le bouton
    // fermetureModale.addEventListener('click', (e) => {
    //     modaleEquipement.classList.remove('active-modale');
    // })

    // fermeture en cliquant sur l'image
    modaleEquipement.addEventListener('click', (e) => {
        modaleEquipement.classList.remove('active-modale');
    })
}

// Anim Navbar

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if(window.scrollY > 30) {
        nav.classList.add('anim-nav');
    }else {
        nav.classList.remove('anim-nav');
    }
})