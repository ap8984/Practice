let firstpromise = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("1st promise resolved")
    },1000)
})
let secondpromise = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("2nd promise resolved")
    },2000)
})
let thirdpromise = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
        resolve("3rd promise resolved")
    },3000)
})

let result = Promise.all([firstpromise,secondpromise,thirdpromise]);
result
.then((data)=>console.log(data))
.catch((err)=>console.log(err))
.then((data)=>
{console.log("success")})








    // Promise
    // .then(result => console.log(result))
    // .catch(err => console.log(err))
    // .finally(()=>console.log("success"))
