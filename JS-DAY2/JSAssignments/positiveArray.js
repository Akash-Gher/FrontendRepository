


// 2. Create a function that receives an array of numbers and returns an array
//  containing only the positive numbers

function positiveArray(arr){

    let outputArray=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
          
           outputArray.push(arr[i]);
        }
    }

    return outputArray
}


let inputArray=[-1,2,5,6,-3,-4,3,1,-7];
let output=positiveArray(inputArray);
console.log(output);
