
const patchSeat_upper=async (updatedData,id)=>{

    // let url = `http://localhost:3000/upperDeck_seats/${id}`;
    let url = `https://json-server-02.onrender.com/upperDeck_seats/${id}`;
    let res = await fetch(url,{
        method:"PATCH",
        body:JSON.stringify(updatedData),
        headers:{
            "Content-Type": "application/json",
        },
    }); 
}
const patchSeat_lower=async (updatedData,id)=>{

    // let url = `http://localhost:3000/lowerDeck_seats/${id}`;
    let url = `https://json-server-02.onrender.com/lowerDeck_seats/${id}`;
    let res = await fetch(url,{
        method:"PATCH",
        body:JSON.stringify(updatedData),
        headers:{
            "Content-Type": "application/json",
        },
    }); 
}
export {patchSeat_upper,patchSeat_lower};