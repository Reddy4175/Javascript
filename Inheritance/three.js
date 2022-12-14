class Father{
      Name(){
        console.log("Mahesh")
      }

      Id(){
        console.log(101)
      }

    }
    class Son extends Father{
        Name(){
            console.log("reddy")
        }
        Id(){
            console.log(102)
        }
    }
    let a1=new Son()
    a1.Name()
    a1.Id()
