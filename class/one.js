class Account{
 Minbalance=5000;
 open_account(){
   console.log("open_account")
 }
 deposit_amount(){
   console.log("deposit_account")
 }
 id=50;
 add(a,b){
    console.log(a+b)
 }
}

let a1=new Account()

console.log(a1)
console.log(a1.id)
a1.add(10,20)
a1.open_account()
a1.deposit_amount()