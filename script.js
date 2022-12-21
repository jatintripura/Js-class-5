// Javascript Ternary operator 
/* if else example
*/
let age =18;
if(age>=18){
    console.log("You will be get cityzenship in Bangladesh");
}
else{
    console.log("You will not get cityzenship in Bangladesh");
}

//Ternary operator

//Three part 1.condition 2.if condition true 1st statement run 3.if condition false 2nd condition run

age >=18 ? console.log("You will be get cityzenship in Bangladesh"):console.log("You will not get cityzenship in Bangladesh");
age >=20 ? console.log("You will be get cityzenship in Bangladesh"):console.log("You will not get cityzenship in Bangladesh");

let marrie;
if (age>=20) {
    marrie = " married";
}
else{
    marrie = "unmarried";
}
console.log(marrie);
console.log (`His marital status :- ${marrie}`);

 //using ternary operator

console.log (`His marital status :- ${age>= 20? "married": "unmarried"}`);
console.log (`His marital status :- ${age>= 11? "married": "unmarried"}`);

// Javascript function

function showtext(){
console.log("My name");
}
showtext();

function name(input){
    console.log(input);
}
name("Jatin");
name("Riyalina");

function multiple(a1,a2){
    console.log(a1*a2);
}
multiple(23,45);
multiple(293,4005);

/*function average(sub1,sub2,sub3,sub4,sub5,sub6){
    console.log((sub1+sub2+sub3+sub4+sub5+sub6)/6);
}
average(80,89,98,78,86,86);
*/


function average(sub1,sub2,sub3,sub4,sub5,sub6)
{
    const average = (sub1+sub2+sub3+sub4+sub5+sub6)/6;
    return average;
}
//console.log(average(80,89,98,78,86,86));
//s-1

const averagemark_1=average(80,89,98,78,86,86);

console.log(averagemark_1);

//s-2
const averagemark_2=average(82,89,88,88,86,96);

console.log(averagemark_2);

//s-3

const averagemark_3=average(80,90,98,88,86,86);

console.log(averagemark_3);

console.log(averagemark_1,averagemark_2,averagemark_3)