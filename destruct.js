//for array
let arr=['hi','im ','levin']
console.log(arr[1])

let[a,b,c,d]=arr

console.log(c)


//for object

let obj={
    name:'levin',
    age:21,
    gender:'M',

    address:{
        country:'india',
        city:'mumbai'


    }

}
let {name:n,age:g,gender:h,address:{country:i}}=obj

console.log(n)
console.log(g)
console.log(h)
console.log(i)

