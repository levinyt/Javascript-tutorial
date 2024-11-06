//objects are in a key value pair

var person={
    fname:'levin',
    lname:'YT',
    age:20,
    ownscar:false
};
var iron_man={
    fname:'tony',
    lname:'stark',
    age:60,
    friends:['steve rogers','thor son of odin'],

    address:{

        state:'new york',

        city:{

            name:'manhatten',
            pincode:604304

        }
    }
    





}
console.log(person)


//to access objects
//dot notation

console.log(person.age)
//bracket notation

console.log(person['fname'])

console.log(iron_man.friends[1])
console.log(iron_man.address.city.name)

iron_man.movies=['iron_man1','iron_man2','avengers1']

console.log(iron_man)
delete iron_man.age

console.log(iron_man)








