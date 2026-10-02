function first(){
    console.log("first it");
}
function sec(){
    first();
    console.log("ended");
}
sec();
first();
first();
