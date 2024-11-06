/*let arr=[

    {name:'A',age:18,gender:'F'},
    {name:'B',age:17,gender:'M'},
    {name:'C',age:20,gender:'F'},
    {name:'D',age:28,gender:'F'},
    {name:'E',age:50,gender:'M'},
    {name:'F',age:37,gender:'F'}

]

let males=arr.filter(function(obj){

    return obj.gender=='M'
})

let maleage=arr.map(function(male){

    return male.age
})
console.log(males)
console.log(maleage)*/

let trans=[100,200,300,400,-800,1200]

let sum=trans.reduce(function(acc,value){

    let updatedsum=acc+value
    return updatedsum
},0).filter(function(n){

    return n>0
})

console.log(sum)


