let Marks = (Pass,Fail) =>{
    let PSA = 600;
   if(PSA >= 500){
    Pass("Party Hard")
   }
   else{
    Fail("No Party")
   }
}
Marks((a)=>{
    console.log(a);
}, (err) => {
    console.error(err)})