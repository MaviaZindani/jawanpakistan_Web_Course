// chapter 14 to 20

// chapter 14 (if statements nested)

// question number 1
// var password = prompt("Enter your password");

// if (password != null) {
//     if (password <= 5) {
//         alert("Password must be greater then 5");
//     }else if(password >= 10){
//         alert("Password must be less then 10");
//     }else{
//     alert("OK");}
// }


// question number 2
var question1 = prompt("Enter age");
// because prompt take string data type
var question2 = prompt("Enter name");

if (question1 === 1) {
    if (question2 === "Max") {
        alert("OK");
    }
    
}

// question number 3
var question1 = 1;
var question2 = "Max";

if (question1 === 1) {
    if (question2 === "Max") {
        alert("OK");
    }
    
}

// question number 4
var number1 = 5;
var number2 = 5;

if (number1 === number2) {
    if (number1 <= number2) {
        alert("yappye!");
    }
}

// chapter number 15

// question number 1
var firstArray = new Array();

console.log(firstArray);

// question number 2
var secondArray = ['mavia'];

console.log(secondArray);

// question number 3
var alphabet1 = ["h", "i", "j", "k"];

console.log(alphabet1.indexOf("j"));

// question number 4
var alphabet2 = ["h", "i", "k", "l", "m", "n", "o"]

console.log(alphabet2.length);

// question number 5
var array1 = ["mavia"];
array1.push("maaz");

alert(array1[1]);

// chapter number 16

// question number 1
var array2 = ["mavia"];
array2.push("maaz");

alert(array2[1]);

// question number 2
var alphabet3 = ["h", "i", "j", "k"];
alphabet3.pop();

// question number 3
var alphabet4 = ["h", "i", "j", "k"];
alphabet4.push(1);

// chapter number 16 part II

// question number 1
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes);

// question number 2
var size = ["S", "M", "XL", "XXL", "XXXL"];
var size8 = size.slice(3);
console.log(size8);

// question number 3
var array3 = ["mavia"];
array3.unshift("maaz");
console.log(array3);

// question number 4
var size1 = ["S", "M", "XL", "XXL", "XXXL"];
size1.splice(2,0,"L")
console.log(size1);

// question number 5
var size2 = ["S", "M", "XL", "XXL", "XXXL"]
var resize = [size2.slice(0,3)]
console.log(resize);

// question number 6
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.reduce(1,3);
pets.splice(1,0,"parrot", "deer");
console.log(pets);

// question number 1
// question number 1
// question number 1
// question number 1