//const arr1=[1,2,3,4,5,6,7,8,9,10]
//const arr2=arr1.map(item => {
    //if(item > 2)
    //{return true}
    //else 
    //{return false}
//}) ;
//console.log(arr1)
//console.log(arr2)

//const arr1=[1,2,3,4,5,6,7,8,9,10]
//const arr2=arr1.filter (item => item >2)

//console.log(arr1)
//console.log(arr2)


const arr1=[5,3,1,6,2,0,11,10,9]
//const arr2=arr1.reduce (item => item ===7)
//const arr2=arr1.reduce ((total , current)=> total+current)
//const arr2=arr1.find (item => item ===7)
const arr2=arr1.sort ((a,b)=> {
    if (a>b)
    return 1;
    if (b>a)
    return -1;
})
console.log(arr1)
console.log(arr2)
