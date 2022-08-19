const add=(a,b)=>{
return new promise((resolve , reject)=>{
setTimeout(()=>{
    if(a<0 || b<0){
        reject("value should not be zero")
    }resolve(a+b)
},1000)}
)}
add(1,2)
.then((sum)=>{
    console.log(sum)
    return add(sum, 5)
})
.then((sum2)=>{
    console.log(sum2)
    return add(sum2, 5)
})
.then((sum3)=>{
    console.log(sum3)
    return add(sum3, 5)
})
.catch((e)=>{
    console.log(e)
})