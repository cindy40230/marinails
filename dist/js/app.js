"use strict";
 
 
 /*
 *Affichage du menu  version mobile
 */
function affichage() {
  let menu = document.querySelector(`.first `);
  menu.classList.toggle("active");
  console.log('ok');
}
   //afficage du menu en mode mobile
   let faBars = document.querySelector(".menu-toggle");
   faBars.addEventListener("click", affichage);