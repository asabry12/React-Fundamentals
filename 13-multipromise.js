let eat=true;
let play=true;
let sleep=true;

let eating = new Promise ((sucess,error)=>{

    if(eat){
        sucess('Im eating now')
    }
    else{
        error('not eating')
    }
    }) ;
    
   

    let playing = new Promise ((sucess,error)=>{

        if(play){
            sucess('Im playing now')
        }
        else{
            error('not playing')
        }
        }) ;
        
       

        let sleeping = new Promise ((sucess,error)=>{

            if(sleep){
                sucess('Im sleeping now')
            }
            else{
                error('not sleeping')
            }
            }) ;
            


            eating.then(
                (resolve)=> {
                    console.log(resolve)
                    playing.then(
                        (resolve)=>{
                            console.log(resolve) ,
                            sleeping.then(
                                (resolve)=> console.log(resolve) ,
                                (reject)=> console.log(reject)
                            );
                        }, 
                        (reject)=> console.log(reject)
                    );
                } ,
                (reject)=> console.log(reject)
            )

          

            