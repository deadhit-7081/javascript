//Spread operator
function print(...args)
{
    args=['<br>',...args,'</br>'];
    console.log(args);
    console.log(args.join(' '));
}
const mess="helloworld";
const a=[...mess];
console.log(a);//converts into string

print("Hello","world!");
