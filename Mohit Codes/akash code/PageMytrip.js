

async function gettrips(){
    try{
        // let url = `https://my-databases-json.herokuapp.com/Tickets`;
        let url = `https://json-server-02.onrender.com/Tickets`;
        let res = await fetch(url);
        let trips = await res.json();
          console.log(trips);
          show_all_trips(trips);
    }catch(err){
        console.log(err);
    }
}
var userDetail = JSON.parse(localStorage.getItem("userProfile")) || [];
document.getElementById("userName").innerText = userDetail.UserName;

gettrips();
function show_all_trips(trips){
    let tripsContainer = document.querySelector(".trips_det");
    if(trips.length==0){
        // tripsContainer.innerHTML = "No trips Yet !";
        // console.log("running")
        let msg = document.createElement("p");
        msg.innerText = "No Trips Yet !"
        msg.setAttribute("class", "center");
        msg.style.color = "red";
        tripsContainer.innerHTML="";
        tripsContainer.append(msg);
    }else{
        // console.log(trips)
    tripsContainer.innerHTML="";
        trips.map((trip)=>{
       let card = document.createElement("div");
       card.setAttribute("id", "ticketCard");
       let bus = trip.booked_bus[0];
        card.innerHTML=` 
        <h3 class="center"><span>${trip.user_points_input.pickPoint}</span> to <span>${trip.user_points_input.dropPoint}</span></h3>
        <p class="center">Bus Name : <span>${bus.bus_name}</span></p>
        <div id="tickNo_price" class="row">
            <p class="bold">Ticket No : <span>${trip.ticketN0}</span></p>
            <p class="bold">Total Price : <span class="bold">Rs. <span class="bold">${trip.booked_price}</span></span></p>
        </div>
        <div id="times" class="row">
            <p>Boarding Time : <span>${bus.time_in}</span></p>
            <p>Dropping Time : <span>${bus.time_out}</span></p>
        </div>
        <div id="bus_det" class="row">
            <p>Bus Service : <span>${bus.company}</span></p>
            <p>Seat No : <span>${trip.booked_seatID}</span></p>
        </div>
        <div id="userDetail">
            <div class="row">
                <p>Traveller Name : <span>${trip.name}</span></p>
                <p>Phone No : <span>${trip.phone}</span></p>
            </div>
        </div>
        <p class="bold center">Booked at : <span>${trip.cur_Dt_time}</span></p>
        `;
        tripsContainer.append(card);
    });
}
    }
