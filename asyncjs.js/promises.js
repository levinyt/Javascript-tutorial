let mypromise=new Promise(function(resolve,reject){


    const a=4
    const b=6

    setTimeout(()=>{

        if(a===b){

            resolve('values are equal')
        }
        else{

            reject('not equal')
        }
    },2000)
})

//pending

console.log(mypromise)
//Fullfiled - then method
mypromise.then(function(result){

    console.log((result))
})
mypromise.catch(function(failed){

    console.log(failed)
    
})




