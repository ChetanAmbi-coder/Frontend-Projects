
const   URL = " https://cat-fact.herokuapp.com/facts";
const getFacts =  async () => {
    console.log("getting the data...");
    let response =  await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
};