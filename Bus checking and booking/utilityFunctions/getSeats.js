

const upperDeck=async ()=>{
    try{
       
        let res=await fetch("http://localhost:3000/upperDeck_seats");
        let data = res.json();
        return data;
    }catch(err){
        console.log("Error occured");
        console.log(err);
    }
}
const lowerDeck=async ()=>{
    try{
       
        let res=await fetch("http://localhost:3000/lowerDeck_seats");
        let data = res.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

export {upperDeck,lowerDeck};