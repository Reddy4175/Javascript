class Account {
    min_bal = 500;
    acc_bal=0;
    acc_name=""
set_AccountName(name){
    this.acc_name= name
}
deposit_Amount(amount){
    this.acc_bal=this.acc_bal+amount
}
get_bal(){
    return this.acc_bal-this.min_bal
}

}
let a1=new Account()
let a2=new Account()
console.log(a1)
console.log(a2)
a1.set_AccountName("reddy")
a2.set_AccountName("anil")
a1.deposit_Amount(5000)
a2.deposit_Amount(45000)
console.log(a1)
console.log(a2)

