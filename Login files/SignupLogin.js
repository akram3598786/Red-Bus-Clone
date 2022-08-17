import navbar from "../Mohit Codes/akash code/utilities/navbar.js";


let header = document.getElementById("header");
header.innerHTML = navbar();
document.querySelector("form").addEventListener("submit",()=>{
    event.preventDefault();
    alert("Please Login first");
})

// manging 
document.getElementById("dropup-menu-booking").addEventListener("dblclick",function(){
    document.querySelector(".dropdown-menu-booking").style.display = "flex";
    document.querySelector(".dropdown-menu-booking").style.backgroundColor = 'white';
});
document.querySelector("#dropup-menu-booking").addEventListener("click",function(){
    document.querySelector(".dropdown-menu-booking").style.display = "none";
});

// ------------double click on profile:- profile menu open----------------------
document.getElementById("dropup-menu").addEventListener("dblclick",function(){
    document.querySelector(".dropdown-menu").style.display = "flex";
    // document.querySelector(".dropdown-menu").style.backgroundColor = 'white';
});
// // ------ click on profile:- profile menu close-------
document.getElementById("dropup-menu").addEventListener("click",function(){
    document.querySelector(".dropdown-menu").style.display = "none";
});

// -------------Click On Sign:- Open 1st Popup--------------------------------
document.querySelector(".dropdown-menu").addEventListener("click",function(){
    document.querySelector(".windowSignUp").style.display = "flex";
    document.querySelector(".dropdown-menu").style.display = "none";
});

// ------Click on close and close 1st Popup-------------
document.getElementById("close").addEventListener("click",function(){
    document.querySelector(".windowSignUp").style.display = "none";
})


// ------- OTP varification Page--------
document.getElementById("ButtonSigup").addEventListener("click",function(){
    document.querySelector(".windowSignUp").style.display = "none";
    document.querySelector(".windowOTP").style.display = "flex";

    let Number = document.getElementById("inputName").value;
    localStorage.setItem("number",JSON.stringify(Number));
});
document.getElementById("closetwo").addEventListener("click",function(){
    document.querySelector(".windowOTP").style.display = "none";
})

