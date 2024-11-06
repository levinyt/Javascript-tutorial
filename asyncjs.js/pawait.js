function order(drink){

    return new Promise(function(resolve,reject){

        if(drink=='coffe'){

            resolve('order received')
        }
        else(

            reject('its a coffie showroom')

        )
    })
}

function process(order){

    return new Promise(function(resolve){
        console.log('order is being processed')
        resolve(`${order} is served`)

    })
}

// order('coffe').then(function(orderplaced){

//     console.log(orderplaced)
//     let orderprocessed=process(orderplaced)
//     return orderprocessed

// }).then(function(processedorder){

//     console.log(processedorder)
// })

//async await

async function serveorder(){

    let orderplaced=await order('coffe')
    console.log(orderplaced)

    let processedorder=await process(orderplaced)
    console.log(processedorder)
}