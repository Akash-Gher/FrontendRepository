// Consider your mobile phone and represent it as an object. 
// Create a method to display only the tech spec of it. Create
//  a method that computes the remaining storage available


class Mobile {
    constructor(model, brand,processor,camera,storage) {
      this.model = model;
      this.brand = brand;
      this.processor=processor;
      this.camera=camera;
      this.storage=storage;
    }
    getTechSpace(brand,model,procesor,camera,storage) {
      
      console.log("Tech spaces are "+this.brand+" "+this.model+" "+this.processor+" "+this.camera+" "+this.storage);
    }
  remainingStorage(used){
         console.log("Total storage remaining is: " +this.storage-used);
     
    }

  }

  let mymobile = new Mobile("oneplus","nord2t","dimencity1300","50MP",128);
  mymobile.getTechSpace();
  mymobile.remainingStorage(80);
 


//   add an attribute and create a method to calculate the remaining 
//   storage(total - used storage space) within the objec
