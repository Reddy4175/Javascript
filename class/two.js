class Employee{
  id=101;
  name="reddy"
  open_Account(a,b) {
    console.log("Opened Account Succesffully")
    console.log(a+b)
}
}
let b1=new Employee();
b1.open_Account(10,20)
console.log(b1)
console.log(b1.name)
/* function open_Account(a,b) {
    console.log("Opened Account Succesffully")
    console.log(a+b)
}
open_Account(10,20) */