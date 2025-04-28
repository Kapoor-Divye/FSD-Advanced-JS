// const fruits=new Map()

// fruits.set("apples",200)
// fruits.set("bananas",300)
// fruits.set("oranges",400)
// fruits.set("apples",500)

// console.log(fruits.get("apples"))
// console.log(typeof fruits)
// console.log(fruits.size)

// let text=""
// for(const x of fruits.entries()){
//     text+=x
// }
// console.log(text)

// let text1=""
// for(const x of fruits.keys()){
//     text1+=x
// }
// console.group(text1)

// const fruits=[
//     {name:"apples",quantity:300},
//     {name:"bananas",quantity:500},
//     {name:"oranges",quantity:200},
//     {name:"kiwi",quantity:150},
// ]

// function myCallback({quantity}){
//     return quantity>200?console.log("ok"):console.log("low")
// }

// const result=Map.groupBy(fruits,myCallback)
// console.log(result)

//Destructuring
// const person={
//     firstName:"John",
//     lastName:"Doe",
//     age:50
// }

// let {lastName:name}=person
// console.log(name)

// let name="Gurukul The Schools"
// ley [a1,a2,a3,a4,a5]=name
// console.log(a1,a2,a3,a4,a5)

// const fruits=["bananas","oranges","apples","mangoes"]
// let {[0]:fruit1,[3]:fruit2}=fruits
// console.log(fruit1+" "+fruit2)

// const numbers=[10,20,30,40,50,60,70]
// const[a,b,...rest]=numbers
// console.log(rest)

// firstName="John"
// lastName="Doe"
// {firstName,lastName}={lastName,firstName}
// console.log(firstName+" "+lastName)

// let x=5
// let z=x**2
// console.log(z)

// let x=5
// x**=2
// console.log(x)

//Array.includes
// const fruits=["banana","apples","oranges","mangoes"]
// console.log(fruits.includes("apples",2))

//trailing comma
// const arr=["one","two","three",]

// const person={
//     firstName:"John",
//     ,
//     age:30
// }