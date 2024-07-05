// chapter 14 - 16 Array


// question number 1
var firstArray = new Array('mavia','maaz','yaseen','irfan','hamza');

console.log(firstArray);

// question number 2
var secondArray = ['mavia','maaz','yaseen','irfan','hamza'];

console.log(secondArray);

// question number 3
var letterArray = ['mavia','maaz','yaseen','irfan','hamza']

console.log(letterArray);

// question number 4
var numberArray = [ 1, 2, 3, 4, 5]

console.log(numberArray);

// question number 5
var boolArray = [false, true, false, true, true]

console.log(boolArray);

// question number 6
var mixedArray = ['mavia', 23 , true , 67 ,'maaz',false];

console.log(mixedArray);

// question number 7
var educationArray = ["SSC" , "HSC", "BCS","BS", "BCOM", "MS", "M.Phil", "PhD"];

document.write(
    "<h3>Qualifications</h3>"
    +"1)"+educationArray[0]+"<br>"
    +"2)"+educationArray[1]+"<br>"
    +"3)"+educationArray[2]+"<br>"
    +"4)"+educationArray[3]+"<br>"
    +"5)"+educationArray[4]+"<br>"
    +"6)"+educationArray[5]+"<br>"
    +"7)"+educationArray[6]+"<br>"
    +"8)"+educationArray[7]+"<br>")

// question number 8
var student = ['Michael', 'john', 'Tony'];
var score = [320, 230, 480];
var total = 500;

document.write(
    "<br><br>"
    +"<h3>Student Percentage</h3>"
    +"Score of "+student[0]+" is score "+score[0]+".Percentage: "+score[0]/total*100+"<br>"
    +"Score of "+student[1]+" is score "+score[1]+".Percentage: "+score[1]/total*100+"<br>"
    +"Score of "+student[2]+" is score "+score[2]+".Percentage: "+score[2]/total*100+"<br>");

// question number 9

// question number 10
var scoreArray = [320, 230, 480, 120];
scoreArray.sort();

console.log(scoreArray);

// question number 11
var cityArray = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedcity = ["Islamabad", "Quetta"];

console.log("Cities list"+cityArray);

// question number 12
var cat = ["This", "is", "my", "cat"];

document.write(
    "<h3>Array:</h3>"
    +cat
    +"<h3>String:</h3>"
    +cat.join(' ')
    +"<br>");

// question number 13
var valueArray = ["keyboard", "mouse", "printer", "monitor"]

const iterator = valueArray.values();
console.log( "Selected cities list:"+selectedcity)

document.write(
    "<h3>Devices:</h3>"
    +valueArray
    +"<br>")

for(const value of iterator) {

    document.write(
       "<br>Out:<br>"
        +value);
}


// question number 14
var valueArray = ["keyboard", "mouse", "printer", "monitor"]
const reverseedArray = valueArray.reverse();
const reverse = valueArray.values();


document.write(
    "<h3>Devices:</h3>"
    +valueArray
    +"<br>")

for(const value of reverse) {

    document.write(
       "<br>Out:<br>"
        +value);
}

// question number 15
var phoneArray = new Array("Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier");

document.write(
    "<h3>Select a phone your foverat phone</h3>"
    +'<select>'
    +'<option value="0ption1">'+phoneArray[0]+'</option>'
    +'<option value="0ption1">'+phoneArray[1]+'</option>'
    +'<option value="0ption1">'+phoneArray[2]+'</option>'
    +'<option value="0ption1">'+phoneArray[3]+'</option>'
    +'<option value="0ption1">'+phoneArray[4]+'</option>'
    +'<option value="0ption1">'+phoneArray[5]+'</option>'
    +'</select>'
)
