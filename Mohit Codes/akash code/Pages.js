
import navbar from "./navbarhome.js";

let header = document.getElementById("header");
header.innerHTML = navbar();

// import footer from "./footer.js";

// let foot = document.getElementById("footer");
// foot.innerHTML = footer();

// manging 
let flg = false;
document.getElementById("dropup-menu-booking").addEventListener("click", function () {

    if (!flg) {
        flg = true;
        document.querySelector(".dropdown-menu-booking").style.display = "flex";
        document.querySelector(".dropdown-menu-booking").style.backgroundColor = 'white';
    } else {
        document.querySelector(".dropdown-menu-booking").style.display = "none";
        flg = false;
    }

});
// document.querySelector("#dropup-menu-booking").addEventListener("click",function(){
// document.querySelector(".dropdown-menu-booking").style.display = "none";
// });


// ------------ click on profile:- profile menu open----------------------
let flg2 = false;
document.getElementById("dropup-menu").addEventListener("click", function () {
    if (!flg2) {
        document.querySelector(".dropdown-menu").style.display = "flex";
        document.querySelector(".dropdown-menu").style.backgroundColor = 'white';
        flg2 = true;
    } else {
        document.querySelector(".dropdown-menu").style.display = "none";
        flg2 = false;
    }
});
// // ------ click on profile:- profile menu close-------
// document.getElementById("dropup-menu").addEventListener("click",function(){
//     document.querySelector(".dropdown-menu").style.display = "none";
// });