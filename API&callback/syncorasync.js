console.log("started");
setTimeout(() => {
    console.log("hey");

}, 7000);     //Asynchronic example which it will not untill the previous condition wait it will jump nect to executr//
console.log("ended");
console.log("syncA");
console.log("syncB"); //A,B,C and they are synchrnic becaues the B will wait until the A os exected after the B will executed//
console.log("syncC");

