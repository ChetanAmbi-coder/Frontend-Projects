
const   URL = " https://cat-fact.herokuapp.com/facts";
const getData =  async () => {
    console.log("getting the data...");
    let response =  await fetch(URL);
    console.log(response);
    let data = await response.json();
};