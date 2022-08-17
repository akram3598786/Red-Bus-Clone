
const getData = async () => {
    try {
      let url = "http://localhost:3000/redbus";
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data)
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  export default getData;