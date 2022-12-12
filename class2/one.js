class Account{
    Min_balance=500;
    Account_Balance=0;
    

deposit_Amount(Amount){
    this.Account_Balance = this.Account_Balance + Amount
}
get_Balance(){
    return this.Account_Balance-this.Min_balance;
}

}

let a1=new Account();
let a2=new Account();
console.log(a1)
console.log(a2)

a1.deposit_Amount(5000);
a1.deposit_Amount(4000);
a2.deposit_Amount(50000);
console.log(a1)
console.log(a2)

let r1= a1.get_Balance()
let r2= a2.get_Balance()
console.log(r1)
console.log(r2)