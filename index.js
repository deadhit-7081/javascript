const arr=[1,2,3,5,6];
const bytwo=arr.map(function(number)
{
    return number*2;
});
const bythree=arr.map((number) =>
{
    return number*3;
});//statement body
const byfour=arr.map(number => number*4);//expression body
//Return an object
const byfive=arr.map((number) =>
(
    {
        number:number*5
    }
) 
);
//convert every number to 6
const bysix=arr.map(() => 6);
arr;
bytwo;
bythree;
byfour;
byfive;
bysix;