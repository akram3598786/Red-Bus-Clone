let imgData = document.querySelector(".btn");
let imgData1 = document.querySelector(".btn1");
let imgData2 = document.querySelector(".btn2");
let imgData3 = document.querySelector(".btn3");
let imgData4 = document.querySelector(".btn4");
imgData.addEventListener("click",function(){
    document.querySelector(".img-div").innerHTML = ""
    imgData.style.backgroundColor = "#3e3e52"
    imgData1.style.backgroundColor = ""
    let imgD = document.createElement("img");
   imgD.src = "https://st.redbus.in/Images/redrail/mob2_cont.png"
   document.querySelector(".img-div").append(imgD)

})

imgData1.addEventListener("click",function(){
    document.querySelector(".img-div").innerHTML = ""
    imgData.style.backgroundColor = ""
    imgData1.style.backgroundColor = "#3e3e52"
    imgData2.style.backgroundColor = ""
    let imgD = document.createElement("img");
   imgD.src = "https://st.redbus.in/Images/redrail/select_train.png"
   document.querySelector(".img-div").append(imgD)

})

imgData2.addEventListener("click",function(){
    document.querySelector(".img-div").innerHTML = ""
    imgData1.style.backgroundColor = ""
    imgData2.style.backgroundColor = "#3e3e52"
    imgData3.style.backgroundColor = ""
    let imgD = document.createElement("img");
   imgD.src = "https://st.redbus.in/Images/redrail/irctc_un.png"
   document.querySelector(".img-div").append(imgD)

})

imgData3.addEventListener("click",function(){
    document.querySelector(".img-div").innerHTML = ""
    imgData2.style.backgroundColor = ""
    imgData3.style.backgroundColor = "#3e3e52"
    imgData4.style.backgroundColor = ""
    let imgD = document.createElement("img");
   imgD.src = "https://st.redbus.in/Images/redrail/make_pay.png"
   document.querySelector(".img-div").append(imgD)

})

imgData4.addEventListener("click",function(){
    document.querySelector(".img-div").innerHTML = ""
    imgData3.style.backgroundColor = ""
    imgData4.style.backgroundColor = "#3e3e52"
    let imgD = document.createElement("img");
   imgD.src = "https://st.redbus.in/Images/redrail/irctc_pwd.png"
   document.querySelector(".img-div").append(imgD)

})