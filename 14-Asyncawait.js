let eat=false;
let play=true;
let sleep=true;

const EATING =()=>{
   return new Promise ((sucess,error)=>{

    if(eat){
        sucess('Im eating now')
    }
    else{
        error('not eating')
    }
    }) ;
}

 const PLYING=()=>{

    return new Promise ((sucess,error)=>{

        if(play){
            sucess('Im playing now')
        }
        else{
            error('not playing')
        }
        }) ;
 }

 const SLEEPING=()=>{
return new Promise ((sucess,error)=>{

    if(sleep){
        sucess('Im sleeping now')
    }
    else{
        error('not sleeping')
    }
    }) ;

 }
            const run=async()=>{
                try{
             const eatMessage = await EATING();
             console.log(eatMessage)
             const playMessage= await PLYING();
             console.log(playMessage)
             const sleepMessage = await SLEEPING();
             console.log(sleepMessage)
            } catch (error){console.log (error)}
            }

            run ();

