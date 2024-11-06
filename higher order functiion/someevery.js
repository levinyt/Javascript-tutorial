//some method

let trans=[-200,900,600,900,600]

let result=trans.some(function(n){

    return n>0
})
console.log(result)


//every

let everyres=trans.every(function(n){

    return n>0
})
console.log(everyres)
