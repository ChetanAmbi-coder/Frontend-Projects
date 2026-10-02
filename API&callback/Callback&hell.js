function start( name, callback){
    console.log("hello " + " " +name +  " " +"started");
    callback();

}
function end(){
    console.log("finished ambi");

}
start("ambi", end);
//Asynshromous with Callback
console.log("started");
setTimeout(() => {
    console.log("data has fetched succesfully");

 },  2000);
console.log("ended");
//Callback Hell//
getusers(function(user){
    console.log("Dear Chetan");
    getorders(function(orders){
          console.log("your order is placed");
        getpayment(function(payemnt){
              console.log("your payment is succesfull");
            getdelivery(function(delivery){
                  console.log("your order is out for delivery");

            });
        });
    });
});
