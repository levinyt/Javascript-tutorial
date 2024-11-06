let myobj={

    
}
console.log(myobj)

let person={
    name:'levin',
    age:23

}
console.log(person.hasOwnProperty('gender'))

//constructor fn

function person1(_name,_age){

    this.name=_name
    this.age=_age

}

let person2=new person1('levinbro',21)
console.log(person2)
