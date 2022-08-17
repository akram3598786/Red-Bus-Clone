let ticket_container = document.getElementById("ticket_container");

document.querySelector(".search_btn").addEventListener("click", () => {
  let ticket_no = document.querySelector(".ticket_no").value;
  get_ticket(ticket_no);
});

async function get_ticket(ticket_no) {
  try {
    let url = `http://localhost:3000/Tickets?q=${ticket_no}`;
    // let res=await fetch("http://localhost:3000/Tickets");
    let res = await fetch(url);
    let ticket = await res.json();

    sidplayTicket(ticket[0]);
  } catch (err) {
    console.log("error occcured");
    console.log(err);
  }
}

function sidplayTicket(ticket) {
  if(!ticket){
    let msg = document.createElement("p");
    msg.innerText = "No Ticket found !"
    msg.setAttribute("class", "center");
    msg.style.color = "red";
    ticket_container.innerHTML="";
     ticket_container.append(msg);
    // ticket_container.innerHTML = "Ticket not Exist !"
 }else{

  let bus = ticket.booked_bus[0];
  // console.log(ticket)
  if (!ticket) {
    let msg = document.createElement("p");
    msg.innerText = "No Ticket found !";
    msg.setAttribute("class", "center");
    msg.style.color = "red";
    ticket_container.innerHTML = "";
    ticket_container.append(msg);
  } else {
    ticket_container.innerHTML = ` 
  <div id="ticketCard">
  <h3 class="center"><span>${ticket.user_points_input.pickPoint}</span> to <span>${ticket.user_points_input.dropPoint}</span></h3>
  <p class="center">Bus Name : <span>${bus.bus_name}</span></p>
  <div id="tickNo_price" class="row">
      <p class="bold">Ticket No : <span>${ticket.ticketN0}</span></p>
      <p class="bold">Total Price : <span class="bold">Rs. <span class="bold">${ticket.booked_price}</span></span></p>
  </div>
  <div id="times" class="row">
      <p>Boarding Time : <span>${bus.time_in}</span></p>
      <p>Dropping Time : <span>${bus.time_out}</span></p>
  </div>
  <div id="bus_det" class="row">
      <p>Bus Service : <span>${bus.company}</span></p>
      <p>Seat No : <span>${ticket.booked_seatID}</span></p>
  </div>
  <div id="userDetail">
      <div class="row">
          <p>Traveller Name : <span>${ticket.name}</span></p>
          <p>Phone No : <span>${ticket.phone}</span></p>
      </div>
  </div>
  <p class="bold center">Booked at : <span>${ticket.cur_Dt_time}</span></p>
  <button id="ticketCancel_btn" class="ticketCancel_btn">Cancel Ticket</button>
</div>
  `;
  }

  document.querySelector(".ticketCancel_btn").addEventListener("click", () => {
    console.log("cancel btn clicked");
    event.preventDefault();
    deleteTicket(ticket.id);
    initBus(bus.id);
    async function deleteTicket(ticketID) {
        
      let url = `http://localhost:3000/Tickets/${ticketID}`;
      let res = await fetch(url, {
        method: "DELETE",
        // body: JSON.stringify(ticketDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });
         
    }
    

    async function initBus(bus_id) {
      let busData = await getBus(bus_id);
      deleteSeat(busData);
    }

    function deleteSeat(busData) {
      let seats = busData.booked_seats;
      console.log(busData.booked_seats);
      console.log(ticket.booked_seatID);
      let seat_ind = busData.booked_seats.indexOf(ticket.booked_seatID);
      console.log(seat_ind);

      if (seat_ind != -1) busData.booked_seats.splice(seat_ind, 1);
      console.log(busData.booked_seats);
      patch_busSeat(busData, busData.id);
    }
    ticket_container.innerHTML = "";
    alert(`${ticket.ticketN0} Ticket has deleted Successfully`);
  });
}

async function getBus(bus_id) {
  try {
    let url = `http://localhost:3000/redbus/${bus_id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data)
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function patch_busSeat(updObj, selected_busID) {
  try {
    let res = await fetch(`http://localhost:3000/redbus/${selected_busID}`, {
      method: "PATCH",
      body: JSON.stringify(updObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
}
}
