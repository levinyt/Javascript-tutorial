function person(_name,_age){
    this.name=_name
    this.age=_age

    
    

    person.prototype.getNameAndAge=function(){

        console.log(`im am${this.name}and my age is ${this.age}`)

    }    



}
let person1=new person('levin',20)
let person2=new person('levin2',21)

console.log(person1.getNameAndAge())
console.log(person2)


