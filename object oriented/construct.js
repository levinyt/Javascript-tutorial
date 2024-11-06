//This key word acts as an empty object which creates an key to values from the parameters which are about to pass

function createcar(_name,_company,_color){
    this.name=_name
    this.company=_company
    this.color=_color

    this.drive=function(){

        console.log(  `Im driving the ${this.name} and the color is ${this.color}`)
    }

}


let car1=new createcar('X4','BMW','Red')

console.log(car1)
car1.drive()

