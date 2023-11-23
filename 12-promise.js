
let mypromise = new Promise ((sucess,error)=>{

const x=1;
if(x===0){
    sucess('Logged In successfully')
}
else{
    error('Wrong username or password')
}
}) ;

mypromise.then(
    (resolve)=> console.log(resolve) ,
    (reject)=> console.log(reject)
)