/*hoisting is defining a fuction before even execution 
normal functios can be called before even execution 
but the function expression cannot be called */
console.log(a)

greet()
var result=add(2,4)



var a='hi'

function greet(){


    console.log('hello from straw hats')
}

function add(a,b){


    return a+b
}

console.log(result)
