

const upperDeck=async ()=>{
    try{
        // let res=await fetch("https://my-databases-json.herokuapp.com/UpperSeats");
        let res=await fetch("https://json-server-02.onrender.com/UpperSeats");
        let data = res.json();
        return data;
    }catch(err){
        console.log("Error occured");
        console.log(err);
    }
}
const lowerDeck=async ()=>{
    try{
        // let res=await fetch("https://my-databases-json.herokuapp.com/LowerSeats");
        let res=await fetch("https://json-server-02.onrender.com/LowerSeats");
        let data = res.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

export {upperDeck,lowerDeck};