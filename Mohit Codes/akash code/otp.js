
function OTPagain() {
    setTimeout( () =>{
        let num = "1234567890";
        let OTP= "";
      
        for(let i=0;i<4;i++){
            OTP += num[Math.floor(Math.random()*10)];
        }
        alert("Your OTP is "+ OTP )
        console.log(OTP)
        localStorage.setItem("OTP", JSON.stringify(OTP))
    },2000)
}

document.getElementById("ButtonSigup").addEventListener("click",function(){
    setTimeout( () =>{
            let num = "1234567890";
            let OTP= "";
          
            for(let i=0;i<4;i++){
                OTP += num[Math.floor(Math.random()*10)];
            }
            alert("Your OTP is "+ OTP )
            console.log(OTP)
            localStorage.setItem("OTP", JSON.stringify(OTP))
    },2000)
    
});


document.getElementById("ButtonOTPvarification").addEventListener("click" ,function(){
    let GetOTP = JSON.parse(localStorage.getItem('OTP'));
    console.log(GetOTP)

    let GetInput = document.getElementById("inputOTP").value
    console.log(GetInput)

    if(GetOTP == GetInput){
        alert("Login Successfully")
        document.getElementById("invalidOTP").style.display = "none";
        location.href = "../Mohit Codes/akash code/homePage.html";
    }
    else{
        let invalidOTP = document.getElementById("invalidOTP");
       

        const displayData = (parentNode) => {
    
                let div = document.createElement("div");
                invalidOTP.innerText="";
                let invalid = document.createElement("p");
                invalid.textContent = "Invalid OTP!";
                invalid.style.color = "red"
                div.append(invalid)
                parentNode.append(div)
            }
            
            displayData(invalidOTP);
        }
       
})