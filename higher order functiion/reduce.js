let num=[1,2,3,4,5,6]

let sum=0

for(let i=0;i<num.length;i++){

    sum=sum+num[i]
}

console.log(sum)



//reducee

let result=num.reduce(function(acc,value){
    let updatesum=acc+value
    return updatesum
    
},0)

console.log(result)