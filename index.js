//string interpolation
//In ES5
var x=10;
var name="Jai";
var mess="My name is "+name+" and age is "+x;
console.log(mess);
//in ES6
var mess1=`My name is ${name} and age is ${x}`;
console.log(mess1);
//Multiline in ES5
var m="Hi i am Jai\n"+
"and my age is 21";
console.log(m);
//Multiline in ES6
var m1=`Hi my name is
Jai and my age is 21`;
console.log(m1);
//Tag
function tag(strings,...values)
{
    console.log(strings);
    console.log(values);
}
const name1="Jai";
const age=21;
tag`Hello my name is ${name1} and my age is ${age}`;
