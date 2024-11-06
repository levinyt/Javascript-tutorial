class person{

    constructor(_name,_age){

        this.name=_name
        this.age=_age
       
    }
    welcome(){

        console.log(`hi ${this.name} bruuuu........`)

    }
}

let person1=new person('levin',21)
let person2=new person('yuva',21)
let person3=new person('hari bot',20)
let person4=new person('stalin',100)
console.log(person1)

person1.welcome()
