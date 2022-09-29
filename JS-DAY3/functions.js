

//check if number is odd or not 
//check if array of number is odd or not 

var isOdd=(element)=>{
    return element%2==1;
}

console.log(isOdd(23));                    //output for single element in array


//callback function 

var res=[1,3,5,7,9].every(isOdd);
console.log(res);                                                      //output for every element in array

var result=[1,2,3,4,5,6,7,8,9,10].every((element)=>element%2==1);
console.log(result);                                                   //output using annonimous function
 