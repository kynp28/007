let x = 10;
var y = "hey";
const z = 20.2;

const arr = [1, "Test",3 ,4,5 ];
const car = []
car[0] = "BMW"
car[1] = "Audi"
const fruit = new Array("App;e", "Banana" , "Orange")
const profile = [[1,2,3], "name" , "age"];
console.log(profile[0][1]);
console.log(profile);


fruit.push("Mango");
fruit.shift();
console.log(fruit);

arr.map((item) =>{
    console.log(item)
});





const person = {
    firstName : "sky",
    lastName : "kiki",
    age : 50,
    eyeColor : ["blue","black"],
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

person.adress = {
    street: "5th Avenue",
    city: "new york"
};
    
console.log(person.fullName());

function sum(a,b) {
    return a + b;
}

function sub(a,b) {
    console.log(a - b);
}

const mul = (a,b) => {
    return a * b;
}

const div = (a, b) => a/b;

const resule = sum(10,20);
console.log(resule);

document.getElementById("message1").innerHTML = "Hello World";
document.getElementById("message2").innerHTML = "what your name";