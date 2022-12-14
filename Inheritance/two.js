class A{
    m1(){
    console.log("m1 is printing")
    }


    m2(){
    console.log("m2 is printing")
    }

}
class B extends A{
    m2(){
        console.log("m2 printing")
        }

}
 let a1=new B ()
 a1.m1()
 a1.m2()
