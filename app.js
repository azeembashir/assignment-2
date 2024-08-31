
//Chapter#3
//question1
//var age = "I am 15 years old";
//alert(age)

//question2
//var n = 3;
//var visit = "you have visited this sites " ;
//alert(visit + n +" times" )

//question3
//var birthYear = 24;
//var description = "My Birth Year is " + birthYear + "</br>";
//document.write(description);
//document.write("\data type is " + typeof birthYear);

//question4
// var visitor_name = "<b>John Doe</b>";
// var product_tittle = "<b>XYZ clothing store</b>";
// var quantity = "<b>5 T-shirts</b>";
// document.write(visitor_name + " ordered " + quantity + " on " + product_tittle );

//chapter#4

//question1
//let x= 20, y= 15, z= 25;

//question2
//legal
// firstName
// _age
// totalAmount
// $price
// isAvailable

//illegal
// 2ndPlace 
// var 
// user-name 
// @email 
// my variable 

//question3
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<p>Variable names can only contain, numbers, $ and _  For example $my_1stVariable</p>")
// document.write("<p>Variables must begin with a letters, $ or _  For example $name, _name or name</p>")
// document.write("<p>Variable names are case sensitive.</p>")
// document.write("<p>Variable names should not be JS keywords.</p>")

//chapter5

// question1 and 2

// var a = 20;
// var b = 10;
// var add = a + b;
// var sub = a - b;
// var mul = a * b;
// var div = a / b;
// var mod = a % b;

// document.write("Sum of a and b is " , add )
// document.write("<br> Sub of a and b is " , sub)
// document.write("<br> mul of a and b is " , mul)
// document.write("<br> div of a and b is " , div)
// document.write("<br> mod of a and b is " , mod)


//question3
// var a;
// a = 5;
// document.write("value after variable decleration is: ", a);
// document.write("<br> Initial value: ", a);
// a++;
// document.write("<br> Value after increment is : ", a);
// a = a + 7;
// document.write("<br> Value after addition of 7 is : ", a);
// a--;
// document.write("<br> Value after decrement is : ", a);
// var mod = a % 3;
// document.write("<br> The reminder is : ", mod);

//question4

// var cost = 600;
// document.write("cost of one movie ticket is :" , cost);
// document.write("PKR")
// var total = cost * 5;
// document.write("<br> cost of 5 movie ticket is :" , total);
// document.write("PKR")

//question5
// document.write("<h2>Table of 4</h2>");

// for(let i=1; i<=10; i++){
//     var mul= 4*i;
//     document.write("<br>4 x i = " , mul);
// }

//question6

// var C = 25;
// var F = 70;

// var Fahrenheit = (C * 9/5) + 32;
// var Celsius = (F - 32) * 5/9;
// document.write("25 <sup>o</sup>C is " , Fahrenheit );
// document.write( " <sup>o</sup>F");
// document.write("<br> 70 <sup>o</sup>F is " , Celsius);
// document.write( " <sup>o</sup>C");

//question7

// document.write("<h1>Shoping Cart</h1>");
// var price_item1 = 650;
// var price_item2 = 100;
// var quan_itm_1 = 3;
// var quan_itm_2 = 7;
// var shoppingCharges = 100;
// var totalCost = (price_item1 * quan_itm_1) + (price_item2 * quan_itm_2) + shoppingCharges;
// document.write("Price of item 1 is ", price_item1);
// document.write("<br>Quantity of item 1 is ", quan_itm_1);
// document.write("<br>Price of item 2 is ", price_item2);
// document.write("<br>Quantity of item 2 is ", quan_itm_2);
// document.write("<br>Total cost of your order is " , totalCost);

//question8

// var totalMarks = 980;
// var marksObtained = 804;
// var percentage = (marksObtained * 100) / totalMarks;
// document.write("Total marks: ", totalMarks);
// document.write("<br> marksObtained: ", marksObtained);
// document.write("<br> Percentage: ", percentage);
// document.write("%");

//question9
// var USD = 10;
// var Ryl = 25;
// var totalDollars = USD * 104.80;
// var totalRiyals = Ryl * 28;
// var totalCurrency  = totalDollars + totalRiyals;
// document.write("<h1>Currency in PKR </h1>")
// document.write("Total Currency in PKR : " , totalCurrency);

//question10
// var a = 10;
// a  = a + 5 * 10 / 2;
// document.write("The answer is ", a);