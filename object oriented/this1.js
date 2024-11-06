console.log(this)

function displaythis(){

    console.log(this)
}

displaythis()


let myobj={

    name:'levin',
    myfun1:function(){
            function myfunc2(){

                    console.log(this)

                
            }



       
    }
}

myobj.myfun1()


