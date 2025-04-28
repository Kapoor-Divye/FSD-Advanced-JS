// let doingArrowsStuff=x=>console.log(x)
// doingArrowsStuff(3)

// const arr=["squirrel","alpaca","buddy"]
// arr.forEach(e=>console.log(e))

//Spread Operator
// let spread=["so","much","fun"]
// const message=["JavaScript","is",...spread,"and","very","powerful"]
// console.log(message)

// function addTwoNumbers(x,y){
//     console.log(x+y)
// }
// let arr=[5,9]
// addTwoNumbers(...arr)

// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a)
// }
// let arr1=[5,9]
// let arr2=[10,20]
// addFourNumbers(...arr1,...arr2)

//Rest Operator
// function SomeFunction(para1,...para2){
// console.log(para1,para2)
// }
// SomeFunction("Hi","there!","How are you?")

//Returning Function Values
// function addTwoNumbers(x,y){
//     return x+y
// }
// let result=addTwoNumbers(4,5)
// console.log(result)

// let resultArr=[]
// for(let i=0;i<10;i++){
//     let  result=addTwoNumbers(i,2*i)
//     resultArr.push(result)
// }
// console.log(resultArr)

//Returning with Arrow Functions
// let addTwoNumbers=(x,y)=>x+y
// let result=addTwoNumbers(12,15)
// console.log(result)

//Variable Scope in Functions
//Local Variables in functions
// function testAvailability(x){
//     console.log("Available here: ",x)
// }
// testAvailability("hi")
// console.log("Not Available Here")

// function testAvailability(){
//     let y="Local Variable"
//     console.log("Available here: ",y)
//     return y
// }
// let z=testAvailability()
// console.log("Outside the funcion: ",z)
// console.log("Not available here")

// function doingStuff(){
//     if(true){
//         var x="local" //function scope from var
//     }
//     console.log(x)
// }
// doingStuff()

// function doingStuff(){
//     if(true){
//         console.log(x)
//         var x="local"
//     }
// }
// doingStuff()

// function doingStuff(){
//     if(true){
//         const x="local"
//     }
//     console.log(x)
// }
// doingStuff()

//Global Variables
// let globalVariable="Global Var"
// console.log("Outside the function: ",globalVariable)
// function creatingnewscope(x){
//     console.log("Access he global variavbles in the function: ",globalVariable)
// }
// creatingnewscope("some parameter")
// console.log("Still available: ",globalVariable)
// To hide the global variable, make a local variable inside any block to overwrite the global variable.

// let x="Global"
// function doingStuff(){
// let x="Local"
// console.log(x)
// }
// doingStuff()
// console.log(x)

// let x="Global"
// function doingStuff(x){
//     console.log(x)
// }
// doingStuff("Param")

// function confusereader(){
//     x="Guess my scope"
//     console.log("Inside the function: ",x)
// }
// confusereader()
// console.log("Outside teh function: ",x)

// (function(){
//     console.log("IIFE")
// })()

// (()=> {
//     console.log("run right away")
// })()

//Recursive function
// function getrecursive(nr){
//     if(nr>0){
//         getrecursive(--nr)
//     }
//     console.log(nr)
// }
// getrecursive(3)
// function logRecursive(nr){
// console.log("Started Function:",nr)
// if(nr>0){
//     logRecursive(nr-1)
// }
// else{
//     console.log("Done with Recursion")
// }
// console.log("Ended Function:",nr)
// }

// logRecursive(3)

//Nested Function
// function doOuterfunction(nr){
//     console.log("Outer Function")
//     doInnerfunction(nr)
//     function doInnerfunction(x){
//         console.log("Inner Function")
//         console.log(x+7)
//         console.log("I can access outer variables:",nr)
//     }
// }
// doOuterfunction(2)

//Function callbacks
// let functionVariable=function(){console.log("Not so secret though")}
// let anotherfunctionVariable=function(){console.log("Hello")}
// function doFlexibleStuff(executeStuff){
//     executeStuff()
//     console.log("Inside doFlexibleStuff")
// }
// doFlexibleStuff(functionVariable)
// doFlexibleStuff(anotherfunctionVariable)

let youGotThis=function(){console.log("You are doing really well, keep coding!")}
// setTimeout(youGotThis,1000)
setInterval(youGotThis,1000)