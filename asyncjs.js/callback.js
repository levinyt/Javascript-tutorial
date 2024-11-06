// const fs=require('fs')


// console.log('first line')

// fs.readFile('fs.txt')

function cb1(error,data){

    if(error){
        console.log(error)


       
    }
    console.log('this is file 1 data',data)
    
}

function cb2(error,data){

    if(error){
        console.log(error)


       
    }
    console.log('this is file 1 data',data)
    
}






console.log('last line')