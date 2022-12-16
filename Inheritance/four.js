class Parent{
      constructor(id,name){

        this.id=id;
        this.name=name;
      }
      
}

class Child extends Parent{
    constructor(id,name){
        super()
        this.id=id;
        this.name=name;
        
    }

}
 let a1=new Child(101,"reddy")
 let a2= new Child(102,"pro")
 console.log(a1)
 console.log(a2)