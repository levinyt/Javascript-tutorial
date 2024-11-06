let person1={

    name:'levin YT',
    age:21,

    printdetails:function(city){

        console.log(`Hi im ${this.name} and im ${this.age} years Old and im from ${city} `)

    }
}

let person2={

    name:'Seenu',
    age:21,

    
}


//call

person1.printdetails.call(person2,'NY')
//apply
person1.printdetails.apply(person2,['NY'])

//blind
let myfunc=person1.printdetails.bin(person2,'NY')
console.log(myfunc)








