//find 

const trans=[100,200,400,600,-900,700];

let firstwithdraw=trans.find(function(n){

    return n<0


    })
console.log(firstwithdraw)


let firstwithdrawindex=trans.findIndex(function(n){

    return n<0


    })

console.log(firstwithdrawindex)
