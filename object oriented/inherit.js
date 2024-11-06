class person{

    constructor(_name,_age){

        this.name=_name
        this.age=_age

    }
    
    welcome(){

        console.log(`welcome${this.name}`)

    


}
}
class teacher extends person{
    constructor(_name,_age,_strength){
        super(_name,_age)

        this.strength=_strength
    }
    text(){
        super.welcome()
    }


}
class student extends person{
    constructor(_name,_age,_cgpa){

        super(_name,_age)
        this.cgpa=_cgpa

    }


}



let teacher1=new teacher('victoria',30,90)
console.log(teacher1)
let student1=new student('levin',21,10.1)
console.log(student1)
teacher1.text()
