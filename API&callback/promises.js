//its defineed by eventual result of an asynchronous operation//
/*promis:-1.pending.
        :-2.fulfilled.
        :-3.rejected.
        */

const promise = new Promise((resolve, reject) => {

    let success = false;

    if (success) {
        resolve(" Data succefully fetched!");
    } else {
        reject("Something went wrong");
    }

});
promise.then((result) => {
    console.log(result);

})
.catch((error) => {
    console.log(error);
})
.finally(() =>{
    console.log("finished");

})
//.then is use when the promise succeeds//
//.catch  is use the promise for erros//
//finally runs for whether the prmose is success or not but it runs alway//

