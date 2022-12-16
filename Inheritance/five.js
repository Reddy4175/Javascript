class Account{
    min_Bal=1000; 
    constructor(id,name,amount){
   this.Acc_id=id;
   this.Acc_name=name;
   this.Acc_amount=amount;
    }
    deposit_amnt(amount){
  this.Acc_amount=this.Acc_amount+amount
    }
    get_bal(){
        return this.Acc_amount-this.min_Bal
    }
}

let a1=new Account(101,"anil",5000)
console.log(a1)
a1.deposit_amnt(2000)
console.log(a1)
console.log(a1.get_bal())
