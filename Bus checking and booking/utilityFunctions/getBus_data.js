
const getData = async () => {
    try {
      // let url = "https://my-databases-json.herokuapp.com/redbus";
      let url = "https://json-server-02.onrender.com/redbus";
      const res = await fetch(url);
      const data = await res.json();
        // console.log(data)
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  export default getData;