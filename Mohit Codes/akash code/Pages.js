
import navbar from "./navbarhome.js";

let header = document.getElementById("header");
header.innerHTML = navbar();



// import footer from "./footer.js";

// let foot = document.getElementById("footer");
// foot.innerHTML = footer();

// manging 
document.getElementById("dropup-menu-booking").addEventListener("dblclick",function(){
document.querySelector(".dropdown-menu-booking").style.display = "flex";
document.querySelector(".dropdown-menu-booking").style.backgroundColor = 'white';
});
document.querySelector("#dropup-menu-booking").addEventListener("click",function(){
document.querySelector(".dropdown-menu-booking").style.display = "none";
});


// ------------double click on profile:- signUp open----------------------
document.getElementById("dropup-menu").addEventListener("dblclick",function(){
document.querySelector(".dropdown-menu").style.display = "flex";
document.querySelector(".dropdown-menu").style.backgroundColor = 'white';
});
// // ------ click on profile:- signUp close-------
document.getElementById("dropup-menu").addEventListener("click",function(){
document.querySelector(".dropdown-menu").style.display = "none";
});