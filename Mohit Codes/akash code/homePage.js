import navbar from "./navbarhome.js";
// import moduleName from '../../Bus checking and booking/Bus ticket booking Module/availabilty_nd_booking.html'
let header = document.getElementById("header");
header.innerHTML = navbar();


document.querySelector("form").addEventListener("submit", () => {
  event.preventDefault();
  let from = document.querySelector("#input-label-from").value;
  let to = document.querySelector("#input-label-to").value;
  let Date = document.querySelector("#input-label-onward-date").value;
  if (from == "" || to == "" || Date == "")
    alert("Please Fill Complete details first !");
  else {
    let obj = {
      pickPoint: from,
      dropPoint: to,
      date: Date,
    };

    localStorage.setItem("user_inputs", JSON.stringify(obj));
    window.open(
      "../../Bus checking and booking/Bus ticket booking Module/availabilty_nd_booking.html",
      "_self"
    );
  }
});

// manging 
let flg = false;
document.getElementById("dropup-menu-booking").addEventListener("click",function(){
    
    if(!flg){
        flg = true;
        document.querySelector(".dropdown-menu-booking").style.display = "flex";
        document.querySelector(".dropdown-menu-booking").style.backgroundColor = 'white';
        document.querySelector(".dropdown-menu-booking").style.position = "absolute";
    }else{
        document.querySelector(".dropdown-menu-booking").style.display = "none";
        flg = false;
    }
    
});
// document.querySelector("#dropup-menu-booking").addEventListener("click",function(){
   // document.querySelector(".dropdown-menu-booking").style.display = "none";
// });


// ------------ click on profile:- profile menu open----------------------
let flg2= false;
document.getElementById("dropup-menu").addEventListener("click",function(){
    if(!flg2){
        document.querySelector(".dropdown-menu").style.display = "flex";
     document.querySelector(".dropdown-menu").style.backgroundColor = 'white';
     document.querySelector(".dropdown-menu").style.position = "absolute";
     flg2 = true;
    }else{
        document.querySelector(".dropdown-menu").style.display = "none"; 
        flg2 = false;
    }
});
// // ------ click on profile:- profile menu close-------
// document.getElementById("dropup-menu").addEventListener("click",function(){
//     document.querySelector(".dropdown-menu").style.display = "none";
// });
