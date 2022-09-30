//  3.    Create a function which takes an array of instances from the class IceCream and returns the sweetness
//  value of the sweetest ice cream.
//  Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1,
// and the sweetness values for the flavors are as follows:
// Flavors
// Sweetness Value
// Plain
// 0
// Vanilla
// 5
// ChocolateChip
// 5
// Strawberry
// 10
// Chocolate
// 10

// You'll be given instance properties in the order flavor, numSprinkles.
// Examples
// ice1 = IceCream("Chocolate", 13)     	// value of 23
// ice2 = IceCream("Vanilla", 0)       	// value of 5
// ice3 = IceCream("Strawberry", 7)    	// value of 17
// ice4 = IceCream("Plain", 18)         	// value of 18
// ice5 = IceCream("ChocolateChip", 3)  	// value of 8

// sweetestIcecream([ice1, ice2, ice3, ice4, ice5]) ➞ 23

// sweetestIcecream([ice3, ice1]) ➞ 23

// sweetestIcecream([ice3, ice5]) ➞ 17
// Notes
// Remember to only return the sweetness value.


class IceCream {
  constructor(flavor, sprinkle) {
    this.flavor = flavor;
    this.sprinkle = sprinkle;
  }

  getSweetness() {
    var fav = this.flavor;
    return sweetnessValues[fav] + this.sprinkle;
  }

  sweetestIceCream(arr) {
    let sweetest = arr[0].getSweetness();
    for (let object of arr) {
      if (object.getSweetness() > sweetest) {
        sweetest = object.getSweetness();
      }
    }

    return sweetest;
  }
}

let sweetnessValues = {
  Plain: 0,
  Vanilla: 5,
  ChocolateChip: 5,
  Strawberry: 10,
  Chocolate: 10,
};

icecream =new IceCream();
ice1 = new IceCream("Chocolate", 23);
ice2 = new IceCream("Vanilla", 10);
ice3 = new IceCream("Strawberry", 5);
ice4 = new IceCream("Plain", 7);
ice5 = new IceCream("ChocolateChip", 18);

console.log(icecream.sweetestIceCream([ice1,ice2, ice3, ice4, ice5]));
