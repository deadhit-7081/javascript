//Rest operator
function print()
{
    console.log(arguments);/*returns an object with key as 0,1,2,..
     and value as being passed
      in the 
      function call*/
    //convert into array
    var arr=Array.prototype.slice.call(arguments);//insted of this in es6 we use rest operator
    console.log(arr);
}
function print(age,name,...arr)
{
    console.log(age);
    console.log(name);
    console.log(arr);//returns array after 1st inde in function ,from {},..
}

print(1,"Jai",{},[1,2,3]);
