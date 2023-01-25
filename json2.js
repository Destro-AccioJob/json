let hello = {
    name : "Abhishek",
    country: 'India',
    age: 10,
} 
// let j1 = JSON.stringify(hello,)
// let j2 = JSON.stringify(hello,null ,"  --  ")

// let j2 = JSON.stringify(hello, ["name", "country"])

 let j2 = JSON.stringify(hello, (key,value)=>{
     if(key == "name"){
         return "Anubhav"
     }
     console.log(key, value)
})


// console.log(j2)

// 2nd :  callback 
// 3rd :  space (int - 1-10 , string => 1 letter to 10 letters)