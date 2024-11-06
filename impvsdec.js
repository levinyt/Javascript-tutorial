
//imperative
const a=4

let squared=a*a

if(a*a %2==0){

    console.log("it is even")
    console.log(squared)


}else{

    console.log("odd")
    console.log(squared)

}

//declarative

const checksquared=x=>(x*x %2==0 ?true:false)
console.log(checksquared(4))

