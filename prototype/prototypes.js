class Person{
    constructor(firstname, lastname){
        this.firstname=firstname
        this.lastname=lastname
    }
}

Person.prototyoe.introduce=function(){
    console.log("Hi I'm",this.firstname )
}

Person.favoriteColor="green"
let p=new Person("Maria", "Saga")
console.log(p.favoriteColor)
p.introduce()