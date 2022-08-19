
// const promise = new Promise ((resolve,reject)=>{
//   setTimeout(() => {
//     resolve("promise resolved");
//   })
// })

// promise
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))
// .finally(()=>console.log("done"))







// //async .then method
// async function num(){
//     let resolvedvalue =  setTimeout(()=>{
//       console.log("resolved")
//     },5000)
//   }
  
//   num()
//   .then((data)=>{
//     console.log(data)
//   })



async function tally(){
let sum =  setTimeout(()=>{
sum= 150+150;
console.log(sum);
})
}
tally()
.then((data)=>{
    console.log(data)
})


// async function num(){
//     let sum = await setTimeout(()=>{
// sum=10+10;
// console.log(sum)
//     }, 2000)
// }

// num();