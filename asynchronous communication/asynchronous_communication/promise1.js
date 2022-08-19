let getvalue = (a,b) => {
return new Promise((resolve,reject)={
    sum=(a+b);
 resolve(sum)
})
}
getvalue
.then((sum)=>{
    console.log(sum)
    return(sum+6);
})