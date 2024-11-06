function add(a,b){

    console.log(a+b)
}
function sub(a,b){

    console.log(a-b)
}
function mul(a,b){

    console.log(a*b)
}
function div(a,b){

    console.log(a/b)
}
add(3,4)
sub(3,4)
mul(3,4)
div(3,4)


module.exports={
    addition:add,
    subraction:sub,
    multiple:mul,
    division:div
}
