let rem=0;
let num=154;
let temp=0
let sum=0;
temp=num;
while(temp >0){
    rem=temp%10;
    temp=parseInt(temp/10);
    sum=sum+(rem*rem*rem);

}
if(num==sum){
    console.log("armstrong")

}
else{
    console.log("not an armstrong")
}