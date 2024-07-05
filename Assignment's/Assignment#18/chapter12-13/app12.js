// chapter 12-13

// question 1
var num0 = prompt("Enter a number or string")

if(num0 == "A"){
    document.write("<br>65<br>");
  if(num0 == "Z"){
        document.write("<br>90<br>")
    }else if(num0 == "a"){
        document.write("<br>96<br>")
    }else if(num0 == "z"){
        document.write("<br>122<br>")
    }else if(num0 == "65"){
        document.write("<br>A<br>")
    }else if(num0 == "90"){
        document.write("<br>Z<br>")
    }else if(num0 == "96"){
        document.write("<br>a<br>")
    }else if(num0 == "122"){
        document.write("<br>z<br>")
    }
}else{
    document.write("<br>Shut up<br>")
}


// question 2
var num1 = 4, num2 = 5;

if(num1< num2){
    document.write("<br>"+num1+" is grater then "+num2+"<br>")
}else{
    document.write("<br>"+num1+" is equal with "+num2+"<br>")
}


// question 3
var num3 = +prompt("Enter a number", "-6" )

if(num3 <= 100 && num3 >= 0){
    document.write("<br>"+num3+" is positive"+"<br>")
}else{
    document.write("<br>"+num3+" is nagative"+"<br>")
}


// question 4
var ans = a;

if(ans == a || ans == e || ans == i || ans == o || ans == u){
    document.write("<br>"+ans+" its a vowel"+"<br>")
}else{
    document.write("<br>"+ans+" its not a vowel"+"<br>")
}


// question 5
var password = "ma-hoon-na";

if(password == ""){
    document.write("<br>Please enter your password<br>")
}else if(password == "ma-hoon-na"){
    document.write("<br>Correct! The password you entered matches the original password<br>")
}else{
    document.write("<br>Incorrect password<br>")
}


// question 6
var greeting;
var hour = 13;

if(hour <= 18){
    document.write("<br>Good day<br>");
}else{
    document.write("<br>good evening<br>");
}


// question 7
var time = +prompt("Enter your time" , "2" )

