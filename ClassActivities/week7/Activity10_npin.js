// new Promise(function(resolve, reject) {
//     // after 1 second signal that the job is finished with an error
//     setTimeout(() => reject(new Error("Whoops!")), 1000);
//     });


//exercise 3
function sleep (t) {
    return new Promise((resolve, reject) =>
    {
    console.log("running promise");
    setTimeout(() => {
    console.log("running timer");
    resolve()
    }, t)
    })
    }
    sleep(3000);
    console.log("")
//exercise 4
// function nosleep(t){
//     return new Promise((resolve, reject) => {
//     console.log("running promise");
//     setTimeout(() => {
//     console.log("running timer");
//     reject(new Error("Whoops!"));
//     }, t);
//     });
//     }
//     nosleep(3000);
// //exercise 5.1
// function myresolve(t){
//     return "Sucess!! Promise waited ["+t+"]ms";
//     }
//     function sleep (t) {
//     let mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {resolve(myresolve(t))}, t)
//     });
//     mypromise.then(
//     result => alert(result),
//     error => alert(error)
//     );
//     }
//     sleep(3000);
//exercise 5.2

//exercise 6.1

//exercise 6.2

//exercise 7
