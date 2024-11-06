
/*
function firstname(fname,cb){

    console.log(fname)
    cb('man')


}

function lastname(lname){

    console.log(lname)
}

firstname('iron',lastname)


*/

let iseven=(n)=>{
    return n%2==0
}
let result=(evenfn,num)=>{
    let isnumeven=evenfn(num)
    console.log(`the number ${num} is even number  ${isnumeven}  `)



}
result(iseven,17)


