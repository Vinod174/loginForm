//REDUCE
// const arr = [1, 2, 3, 4, 5, 6];

// const sumAll = (arr) => {
//     const sum = arr.reduce((acc, value) => {
//         return acc + value;
//     }, 0); 
//     return sum;
// }

// console.log(sumAll(arr));

// const cartItems = [
//     {name: "Samsung", category: "mobile", price: 200, quantity: 2}, 
//     {name: "Laptop", category: "desktop", price: 400, quantity: 1}
// ]; 


// const totalPrice = (cartItems) => {
//     const total = cartItems.reduce((acc, item) => {
//         return acc + item.price * item.quantity;
//     }, 0);

//     return total;
// }

// console.log(totalPrice(cartItems));


// let numbers = [2, 3, 4, 5, 6];

// const product = (numbers) => {
//     let num = 1;
//     for(let i = 0; i < numbers.length; i++){
//        num =  num * numbers[i];
//     }

//     return num;
// }


// const product2 = (numbers) => {
//     let product = 1;
//     for (let value of numbers) {
//         product = product * value;
//     }
//     return product;
// }




//  console.log(product(numbers))



//  const array = [1, 2, 3, 5, 10, 21, 5];
// const index = array.indexOf(5);


// console.log(index);


// const exists = array.includes(90);
// console.log(exists);

// const arr2 = [
//     {name: "Alok", age: 45},
//     {name: "Vinod", age: 29},
//     {name: "Aman", age: 29},
// ]

// const index2 = arr2.findIndex((value) => {
//     return value.age === 29;
// });

// console.log(index2);



// const arr = [];

// if(arr.length === 0) {

// }


// Objects
// const obj = {
//     name: "alok",
//     age: 21
// }

// const keys = Object.entries(obj);
// console.log(keys);



// const x = 20;
// x = 10;
// console.log(x);

// const arr3 = [1, 2, 3, 4];
// arr3[2] = 20;
// console.log(arr3);


const obj = {
    name: "alok",
    age: 0
}


if (obj.hasOwnProperty("age")) {
    console.log("Exists");
}
else {
    console.log("Does not Exists");
}

// obj.name = "Vinod";
// console.log(obj);




