 let counter = 0;
let i = setInterval(function(){
    console.log(counter);
    counter++;
    if(counter === 10){
        clearInterval(i);

    }
}, 1000);

 
