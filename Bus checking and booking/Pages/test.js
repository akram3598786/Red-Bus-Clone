

let test_obj={
    ele:[2,3,4,5,6]
  }
  let test_obj2 ={
    ele:[22,33,44,55]
  }
   test_obj.ele.push(7);
   test_obj2.ele.push(66,77,88,99);
//   console.log(test_obj.ele)
//   console.log(test_obj2.ele)
//   test_obj.ele.push(8);
//   test_obj2.ele.push(77);
//   console.log(test_obj.ele)
//   console.log(test_obj2.ele);

// let test_ele=  [22,33,44,55];


//   patch_ele();
  async function patch_ele(){
    try{
      let res = await fetch("http://localhost:3000/test_obj/1",{
        method : "PATCH",
        body : JSON.stringify(test_obj),
        headers:{
            "Content-Type": "application/json",
        },
      })

    }catch(err){
        console.log(err);
    }
  }
  /*
   let url = `http://localhost:3000/lowerDeck_seats/${id}`;
    let res = await fetch(url,{
        method:"PATCH",
        body:JSON.stringify(updatedData),
        headers:{
            "Content-Type": "application/json",
        },
    }); 
  */
/*
 let test=[2,3,4,5,6,7];
 let ind = test.indexOf(4);
 console.log(test);
 test.splice(ind,1);
 console.log(test);
*/