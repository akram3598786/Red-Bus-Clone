import {init_upperDeck,init_lowerDeck} from "./show_seats.js";

let main = document.querySelector("main");
let body = document.querySelector("body");

const show_popups=(checked_id)=>{
    let bg_modal = document.querySelector("#bg-modal");
    bg_modal.style.display = "flex";
     body.style.overflow = "hidden";
    init_upperDeck();
    init_lowerDeck();

}
// show_popups(5);

document.querySelector(".cross").addEventListener("click", function () {
    let bg_modal = document.querySelector("#bg-modal");
    bg_modal.style.display = "none";
    body.style.overflow = "auto";
});

export {show_popups};