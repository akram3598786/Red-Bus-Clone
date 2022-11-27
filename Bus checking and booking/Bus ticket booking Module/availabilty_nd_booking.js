import { show_popups } from "../utilityFunctions/show_pop_up.js";
import getData from "../utilityFunctions/getBus_data.js";
import { upperDeck, lowerDeck } from "../utilityFunctions/getSeats.js";
import checking_point from "../utilityFunctions/checking_points_popUp.js"
import { patchSeat_upper, patchSeat_lower } from "../utilityFunctions/patch_seatDetail.js";
import navbar from "../../Mohit Codes/akash code/navbarhome.js"


document.getElementById("header").innerHTML = navbar();
init_busData();
// show_popups();
// init_upperDeck();
// init_lowerDeck();
async function init_busData() {
  let data = await getData();
  display_buses(data);
}

/*
async function init_upperDeck() {
  let data = await upperDeck();
  show_upperDeck(data);
}

async function init_lowerDeck() {
  let data = await lowerDeck();
  show_lowerDeck(data);
} */
// ================ Header section JS ======================
let input_obj = JSON.parse(localStorage.getItem("user_inputs"));
let pick = document.getElementById("piclup_point");
pick.innerText = input_obj.pickPoint;
document.getElementById("desti_point").innerText=input_obj.dropPoint;
document.getElementById("date").innerText=input_obj.date;
 document.getElementById("modify_btn").addEventListener("click",()=>{
   window.open("../Pages/landingPage.html", "_self");
 });


//  display_buses function =================

let bus_details_section = document.getElementById("bus_details_section");
  bus_details_section.innerHTML = `<h1 id="loadingHeading">Loading Buses..</h1>`;
function display_buses(data) {
  let no_of_buses = document.getElementById("no_of_buses");
  bus_details_section.innerHTML = "";
  no_of_buses.innerHTML = `${data.length} `;
  data.forEach((bus) => {
    let bus_card = document.createElement("div");
    bus_card.setAttribute("class", "bus_card");
     let balance_avl_seats = bus.seat_available - bus.booked_seats.length;
     if(balance_avl_seats== 0) balance_avl_seats="All Seats Booked";
    bus_card.innerHTML = `  
    <div class="bus_info">
        <table>
            <tr id="tr1">
                <td class="bold"><img class="operator_logo" src="https://www.redbus.in/images/reviews/primo_logo.svg" alt=""></td>
            </tr>
            <tr id="tr2">
                <td class="bold">${bus.company}</td>
                <td id="in_time" class="bold">${bus.time_in}</td>
                <td id="duration" class="font">07:30</td>
                <td id="out_time">${bus.time_out}</td>
                <td>
                    <p class="rating"><i class="fa-regular fa-star"></i>${bus.rating}</p>
                </td>
            </tr>
            <tr>
                <td>${bus.bus_name}</td>
                <td id="pickup_point">${input_obj.pickPoint}</td>  
                <td id="icon"><i class="fa-solid fa-arrow-right"></i></td>
                <td id="dept_point">${input_obj.dropPoint}</td>
                <td class="members"><i class="fa-solid fa-people-group"></i>200</td>
            </tr>
        </table>
        <div class="price_nd_seat_div">
            <p>Starts from <span class="bold" id="Bus_price">INR ${bus.price}</span></p>
            <p>${balance_avl_seats} Seats available</p>

        </div>
    </div>
    <div class="extra_features_row">
        <ul class="facility_icons">
            <li title="Snacks"><i class=" fa-solid fa-cookie"></i></li>
            <li title="Water Bottle"><i class="fa-solid fa-bottle-water"></i></li>
            <li title="Charging Point"><i class="fa-solid fa-plug"></i></li>
            <li title="Toilet"><i class="fa-solid fa-restroom"></i></li>
        </ul>
        <p><i class="fa-solid fa-right-long"></i> Primo</p>
        <p><i class="fa-solid fa-map-location-dot"></i>Live Tracking</p>
        <div id="see_seat_btn_div">
        <button id="${bus.id}" class="view_seat_btn">view Seats</button>
        </div>
    </div>
    `;
    bus_details_section.append(bus_card);

    let view_seat_btn = document.getElementById(`${bus.id}`);
    view_seat_btn.addEventListener("click", () => {
      localStorage.setItem("selected_busID", bus.id);
      window.scrollTo(0, 0);
      show_popups();
    });
  });

  // Sorting functionalities ===========================================
  
  document.getElementById("rating").addEventListener("click", () => {
    sortData(data)
  })

  document.getElementById("price").addEventListener("click", () => {
    sortPrice(data)
  })
  document.getElementById("departure").addEventListener("click", () => {
    sortDepature(data)
  })

  document.getElementById("seat").addEventListener("click", () => {
    sortSeat(data)
  })

  // Filtering functionalities ===========================================
  
  let selecter = document.getElementById("before-6am")
  selecter.addEventListener("change", (e) => {
    if (e.target.checked) {
      let newData = data.filter(function (time) {
        if (time.time_in > "6") {
          return true
        }
        else {
          return false;
        }
      })

      let value = document.getElementById("span1")
      value.innerHTML = ""
      value.append(newData.length)
      // console.log(newData.length)
      display_buses(newData)

    } else {
      // displayData(data)
      console.log("data2", data)
    }

  })

  document.getElementById("morning").addEventListener("click", () => {
    DisplayData(data)

  })
  document.getElementById("evening").addEventListener("click", () => {
    DisplayEveData(data)

  })

  // bus type

  document.getElementById("seater").addEventListener("click", () => {
    seater(data)

  })

  document.getElementById("sleeper").addEventListener("click", () => {
    sleeper(data)

  })

  document.getElementById("ac").addEventListener("click", () => {
    AC(data)

  })

}

const sortData = (data) => {
  let sortType = data.sort((a, b) => {
    return b.rating - a.rating
  })
  display_buses(sortType)
}

const sortPrice = (data) => {
  let sortPrice = data.sort((a, b) => {
    return a.price - b.price
  })
  display_buses(sortPrice)
}

const sortDepature = (data) => {
  let sortDep = data.sort((a, b) => {
    return b.time_in - a.time_in
  })
  display_buses(sortDep);
}

const sortSeat = (data) => {
  // console.log(data)
  let sortSea = data.sort((a, b) => {
    return b.seat_available - a.seat_available
  })
  display_buses(sortSea)
}


function DisplayData(data) {
  let newData1 = data.filter(function (time) {
    if (time.time_in < "6" && time.time_in >= "12") {
      return true
    }
    else {
      return false;
    }
  })
  let value1 = document.getElementById("span2")
  value1.innerHTML = ""
  value1.append(newData1.length)
  display_buses(newData1)
  // location.reload()
}


function DisplayEveData(data) {
  let newData2 = data.filter(function (time) {
    if (time.time_in <= "12") {
      return true
    }
    else {
      return false;
    }
  })
  let value2 = document.getElementById("span3")
  value2.innerHTML = ""
  value2.append(newData2.length)
  display_buses(newData2)
  // location.reload()
}


function seater(data) {
  let newData2 = data.filter(function (name) {
    if (name.bus_name <= "Seater") {
      return true
    }
    else {
      return false;
    }
  })
  let value3 = document.getElementById("span4")
  value3.innerHTML = ""
  value3.append(newData2.length)
  display_buses(newData2)
  // location.reload()
}


function sleeper(data) {
  bus_details_section.innerHTML = "";
  let newData2 = data.filter(function (name) {
    if (name.bus_name <= "Sleeper") {
      return true
    }
    else {
      return false;
    }
  })
  let value4 = document.getElementById("span5")
  value4.innerHTML = ""
  value4.append(newData2.length)
  display_buses(newData2)
  // location.reload()
}

function AC(data) {
  let newData2 = data.filter(function (name) {
    if (name.bus_name <= "A/C") {
      return true
    }
    else {
      return false;
    }
  })
  display_buses(newData2)
}



/*
async function show_upperDeck(data) {
  let buses_data=await getData();
  let selected_busID = localStorage.getItem("selected_busID");
  let selected_bus=buses_data.filter((el)=>{
    if(selected_busID==el.id) return el;
})   
 console.log(selected_busID,selected_bus);
  let upper_deck_box = document.getElementById("upper_deck_box");
  data.forEach((seat) => {
    let seat_ele = document.createElement("p");
    seat_ele.setAttribute("class", "seat");
    seat_ele.setAttribute("title", `No: ${seat.id}`);
    seat_ele.innerText = seat.id;
    if (seat.Gender == "Female") {
      seat_ele.style.border = "2px solid red";
    }
    
   if(selected_bus[0].booked_seats.includes(seat.id)){
    seat_ele.style.color="white";
    seat_ele.style.backgroundColor="red";
    seat_ele.setAttribute("title", `No: ${seat.id} Booked`);
   }else{
    seat_ele.style.backgroundColor="white";
   }

    upper_deck_box.append(seat_ele);
    seat_ele.onclick = () => {
 
      checking_point();
      localStorage.setItem("selected_seat_id", seat.id);
      document.querySelector("#seats_contents_right").style.display = "none";
      document.querySelector("#seats_contents_right-2").style.display = "flex";
      document.querySelector("#confirm_booiking_box").style.display = "none";
    };
  });
} */
/*
function show_lowerDeck(data) {
  let lower_deck_box = document.getElementById("lower_deck_box");
  data.forEach((seat) => {
    let seat_ele = document.createElement("p");
    seat_ele.setAttribute("class", "seat");
    seat_ele.setAttribute("title", `No: ${seat.id}`);
    seat_ele.innerText = seat.id;
    if (seat.Gender == "Female") {
      seat_ele.style.border = "2px solid red";
    }
    if (seat.booked) seat_ele.style.backgroundColor = "red";
    else seat_ele.style.backgroundColor = "white";
    lower_deck_box.append(seat_ele);
    seat_ele.onclick = () => {
   
      checking_point();
      localStorage.setItem("selected_seat_id", seat.id);
      document.querySelector("#seats_contents_right").style.display = "none";
      document.querySelector("#seats_contents_right-2").style.display = "flex";
      document.querySelector("#confirm_booiking_box").style.display = "none";
    };
  });
}
*/



