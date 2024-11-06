let arr=[1,2,3,4,5]
let squaredarr=[]

for(i=0;i<arr.length;i++){

    squaredarr.push(arr[i]*arr[i])
}
console.log(squaredarr)

//map

let num=[1,3,4,5,6]
let square=num.map(function(n){
    return n*n

})