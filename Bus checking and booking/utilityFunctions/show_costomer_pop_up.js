let main = document.querySelector("main");
let body = document.querySelector("body");

const show_popups=(checked_id)=>{
    let bg_modal = document.querySelector("#bg-modal");
    bg_modal.style.display = "flex";
    // body.style.overflow = "hidden";
   
}
// show_popups(5);

document.querySelector(".cross").addEventListener("click", function () {
    let bg_modal = document.querySelector("#bg-modal");
    bg_modal.style.display = "none";
    body.style.overflow = "auto";
});

export {show_popups};