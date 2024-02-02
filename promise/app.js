let mypromise =new Promise((resolve,reject)=>{

    if(true)
        resolve("Success")
    else
        reject("falied")
})


mypromise.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})

mypromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log("First "+value + ' Last');
  })
  .catch((err) => {
    console.error(err);
  });