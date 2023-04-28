//? == Menu burger du header == //
const sidenav = document.getElementById("mySidenav");                                   // Récupération de l'élément <div id="mySidenav">
const openBtn = document.getElementById("openBtn");                                     // Récupération de l'élément <div id="openBtn">
const closeBtn = document.getElementById("closeBtn");                                   // Récupération de l'élément <div id="closeBtn">
const burgerIcon = document.querySelector(".burger-icon_bar");                              // Récupération de l'élément <div class="burger-icon">

openBtn.onclick = openNav;                                                            // Au click sur le bouton ouvrir, on appelle la fonction openNav
closeBtn.onclick = closeNav;                                                          // Au click sur le bouton fermer, on appelle la fonction closeNav

function openNav() {                                                                  // Fonction pour ouvrir le menu burger
  sidenav.classList.toggle("active");                                                    // On ajoute la classe "active" à l'élément <div id="mySidenav">
  burgerIcon.classList.toggle("active");                                                  // On ajoute la classe "active" à l'élément <div class="burger-icon">
}
function closeNav() {                                                                 // Fonction pour fermer le menu burger
  sidenav.classList.remove("active");                                                 // On retire la classe "active" à l'élément <div id="mySidenav">
  burgerIcon.classList.toggle("active");                                                  // On ajoute la classe "active" à l'élément <div class="burger-icon">
}

//? == Fonction pour ouvrir les sous liens du menu burger == //
const formationElement = document.querySelector(".formation-block")                   // Récupération de l'élément <div class="formation-block">
const inscriptionElement = document.querySelector(".inscription-block")               // Récupération de l'élément <div class="inscription-block">
const informationElement = document.querySelector(".information-block")               // Récupération de l'élément <div class="information-block">
const tarifElement = document.querySelector(".tarif-block")                           // Récupération de l'élément <div class="tarif-block">

const formationLink = document.querySelectorAll(".formation-link")                    // Récupération de l'élément <a class="formation-link">
const inscriptionLink = document.querySelectorAll(".inscription-link")                // Récupération de l'élément <a class="inscription-link">
const informationLink = document.querySelectorAll(".information-link")                // Récupération de l'élément <a class="information-link">
const tarifLink = document.querySelectorAll(".tarif-link")                            // Récupération de l'élément <a class="tarif-link">


formationElement.addEventListener("click", function() {                               // Au click sur le lien "Formation"
  formationLink.forEach(link => {                                                     // Pour chaque élément <a class="formation-link">
    link.classList.toggle('active')                                                   // On ajoute ou on retire la classe "active" à l'élément <a class="formation-link">
  });
  inscriptionLink.forEach(link => {                                                   // Pour chaque élément <a class="inscription-link">
    link.classList.remove('active')                                                   // On retire la classe "active" à l'élément <a class="inscription-link">
  });
  informationLink.forEach(link => {                                                   // Pour chaque élément <a class="information-link">
    link.classList.remove('active')                                                   // On retire la classe "active" à l'élément <a class="information-link">
  });
  tarifLink.forEach(link => {                                                         // Pour chaque élément <a class="tarif-link">
    link.classList.remove('active')                                                   // On retire la classe "active"
  });
});
inscriptionElement.addEventListener("click", function() {                             // Au click sur le lien "Inscription"
  inscriptionLink.forEach(link => {                                                   // Pour chaque élément <a class="inscription-link">
    link.classList.toggle('active')                                                   // On ajoute ou on retire la classe "active" à l'élément <a class="inscription-link">
  });
  formationLink.forEach(link => {                                                     // Pour chaque élément <a class="formation-link">
    link.classList.remove('active')                                                   // On retire la classe "active" à l'élément <a class="formation-link">
  });
  informationLink.forEach(link => {                                                   // Pour chaque élément <a class="information-link">
    link.classList.remove('active')                                                   // On retire la classe "active" à l'élément <a class="information-link">
  });
  tarifLink.forEach(link => {                                                         // Pour chaque élément <a class="tarif-link">
    link.classList.remove('active')                                                   // On retire la classe "active"
  });
});
informationElement.addEventListener("click", function() {                             // Au click sur le lien "Information"
  informationLink.forEach(link => {                                                   // Pour chaque élément <a class="information-link">
    link.classList.toggle('active')                                                   // On ajoute ou on retire la classe "active" à l'élément <a class="information-link">
  });
  formationLink.forEach(link => {                                                     // Pour chaque élément <a class="formation-link">
    link.classList.remove('active')                                                   // On retire la classe "active" à l'élément <a class="formation-link">
  });
  inscriptionLink.forEach(link => {                                                   // Pour chaque élément <a class="inscription-link">
    link.classList.remove('active')                                                   // On retire la classe "active" à l'élément <a class="inscription-link">
  });
  tarifLink.forEach(link => {                                                         // Pour chaque élément <a class="tarif-link">
    link.classList.remove('active')                                                   // On retire la classe "active"
  });
});
tarifElement.addEventListener("click", function() {                                   // Au click sur le lien "Tarif"
  tarifLink.forEach(link => {                                                         // Pour chaque élément <a class="tarif-link">
    link.classList.toggle('active')                                                   // On ajoute ou on retire la classe "active" à l'élément <a class="tarif-link">
  });
  formationLink.forEach(link => {                                                     // Pour chaque élément <a class="formation-link">
    link.classList.remove('active')                                                   // On retire la classe "active" à l'élément <a class="formation-link">
  });
  inscriptionLink.forEach(link => {                                                   // Pour chaque élément <a class="inscription-link">
    link.classList.remove('active')                                                   // On retire la classe "active" à l'élément <a class="inscription-link">
  });
  informationLink.forEach(link => {                                                   // Pour chaque élément <a class="information-link">
    link.classList.remove('active')                                                   // On retire la classe "active"
  });
});


//? == Fonction pour positionner le footer en fixed/bottom 0 si la page fait moins de la hauteur de l'écran == //
const footer = document.querySelector('footer');                                      // Récupération de l'élément <footer>
const mainContainer = document.querySelector('.main-container');                      // Récupération de l'élément <div class="main-container"> (Hauteur totale du contenu)


function updatePosition() {                                                           // Fonction pour positionner le footer en fixed/bottom 0 si la page fait moins de la hauteur de l'écran
    const mainContainerHeight = mainContainer.offsetHeight;                           // Hauteur totale du contenu de la page
    const windowHeight = window.innerHeight;                                          // Hauteur totale de la fenêtre

    if (mainContainerHeight <= windowHeight) {                                        // Si la hauteur totale du contenu de la page est inférieur ou égale à la hauteur totale de la fenêtre
      footer.style.position = 'fixed';                                                // On positionne le footer en fixed
      footer.style.bottom = '0';                                                      // On positionne le footer en bas de la fenêtre
      mainContainer.style.minHeight = '100vh';                                        // On positionne la hauteur minimum de la page à 100vh
    } else {                                                                  // Sinon
      footer.style.position = 'static';                                               // On positionne le footer en static
    }
  };
  window.addEventListener('resize', updatePosition);                                  // Au redimensionnement de la fenêtre, on appelle la fonction updatePosition
  window.addEventListener('load', updatePosition);                                    // Au chargement de la page, on appelle la fonction updatePosition
  window.addEventListener('DOMContentLoaded', updatePosition);                        // Au chargement du DOM, on appelle la fonction updatePosition


//? == Fonction du modal 'contact' == //
//? = Pour la version mobile = //
const mainElement = document.querySelector('main');
const contactMobileElement = document.querySelector('.contact-link_mobile');          // Récupérez l'élément de la boîte de dialogue myModale
const contactElement = document.querySelector('.contact-link');                       // Récupérez l'élément de la boîte de dialogue myModale
const navBarMobileElement = document.querySelector('.header-small_nav');
const navBarElement = document.querySelector('.header-large');


contactMobileElement.addEventListener('click', function() {                           // Au click sur le lien "Contact"
  document.getElementById('myModal').style.display = "block";                         // Afficher la boîte de dialogue modale
  mainElement.style.display = "none"                                                  // On cache le corps de la page
  footer.style.display = 'none';                                                      // On positionne le footer en fixed
  navBarMobileElement.style.display = 'none';                                         // On cache la navBar mobile
});
//? = Pour la version desktop = //
contactElement.addEventListener('click', function() {                                 // Au click sur le lien "Contact"
  document.getElementById('myModal').style.display = "block";                         // Afficher la boîte de dialogue modale
  mainElement.style.display = "none"                                                  // On cache le corps de la page
  footer.style.display = 'none';                                                      // On positionne le footer en fixed
  navBarElement.style.display = 'none';                                               // On cache la navBar mobile
});

//? = Pour la fermeture du modal = //
const modalBackgroundElement = document.getElementById('modal-background')            // Récupérez l'élément de fond de la boîte de dialogue modale
if (modalBackgroundElement !== null) {                                                // Si l'élément de fond de la boîte de dialogue modale n'est pas nul
modalBackgroundElement.addEventListener('click', function() {                         // Ajoutez un gestionnaire d'événements de clic à l'élément de fond de la boîte de dialogue modale
  document.getElementById('myModal').style.display = "none";                          // Cachez la boîte de dialogue modale
  mainElement.style.display = "block"                                                 // On affiche le corps de la page
  footer.style.display = "block"                                                      // On affiche le footer
  navBarMobileElement.style.display = "flex";                                         // On affiche la navBar mobile
  navBarElement.style.display = "flex";                                               // On affiche la navBar mobile
});
}

//? == Fonction pour afficher/masquer la navBar au scroll == //
//? = Pour Desktop = //
lastScroll = window.scrollY;

window.addEventListener('scroll', () => {                                     // Au scroll
  if (window.scrollY < lastScroll || window.scrollY <= 10) {                          //! On compare la position du scroll actuel avec la position du scroll précédent ou si la position est inférieure à 10px (tout en haut)
    navBarElement.style.transition = "opacity 0.5s";                                  //! Si la valeur est inférieure alors => Le scroll est vers le haut
    navBarElement.style.display = "flex";                                             //* On affiche la navBar
    setTimeout(() => {                                                                //* avec une transition de 0.2s
      navBarElement.style.opacity = "1";                                              //* en passant par une opacité de 0.5 pour plus de fluidité
    }, 300);
  } else if (window.scrollY > lastScroll) {                                   // Sinon si 
    navBarElement.style.transition = "opacity 0.5s";                                  //! On compare la position du scroll actuel avec la position du scroll précédent
    navBarElement.style.opacity = "0";                                                //! Si la valeur est supérieure alors => Le scroll est vers le bas
    setTimeout(() => {                                                                //* On masque la navBar
    navBarElement.style.display = "none";                                             //* avec une transition de 0.5s
}, 500);                                                                              //* en passant par une opacité de 0.5 pour plus de fluidité
  }
  lastScroll = window.scrollY;                                                        //! On enregistre la position du scroll actuel pour la prochaine comparaison
});

//? = Pour Mobile = //
lastScrollMobile = window.scrollY;

window.addEventListener('scroll', () => {                                     // Au scroll
  if (window.scrollY < lastScrollMobile || window.scrollY <= 10) {                    //! On compare la position du scroll actuel avec la position du scroll précédent ou si la position est inférieure à 10px (tout en haut)
    navBarMobileElement.style.transition = "opacity 0.5s";                            //! Si la valeur est inférieure alors => Le scroll est vers le haut
    navBarMobileElement.style.display = "flex";                                       //* On affiche la navBar
    setTimeout(() => {                                                                //* avec une transition de 0.2s
      navBarMobileElement.style.opacity = "1";                                        //* en passant par une opacité de 0.5 pour plus de fluidité
    }, 200);
  } else if (window.scrollY > lastScrollMobile) {                             // Sinon si
    navBarMobileElement.style.transition = "opacity 0.5s";                            //! On compare la position du scroll actuel avec la position du scroll précédent
    navBarMobileElement.style.opacity = "0";                                          //! Si la valeur est supérieure alors => Le scroll est vers le bas
    setTimeout(() => {                                                                //* On masque la navBar
    navBarMobileElement.style.display = "none";                                       //* avec une transition de 0.5s
}, 500);                                                                              //* en passant par une opacité de 0.5 pour plus de fluidité
  }
  lastScrollMobile = window.scrollY;                                                  //! On enregistre la position du scroll actuel pour la prochaine comparaison
});



