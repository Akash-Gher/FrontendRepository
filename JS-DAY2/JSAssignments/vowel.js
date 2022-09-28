// 1. Return the number of vowels in a string
// Create a function that"ll return an integer of the number of vowels found in a string.


var str ="aeiouzz";

function detectVowels(){
    let  count=0;
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)=="a"|| str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"||str.charAt(i)=="A"||str.charAt(i)=="E"||str.charAt(i)=="I"||str.charAt(i)=="O"||str.charAt(i)=="U")
            count ++;
        
    }
return count;

}


console.log("The number of vowels in a sting is "+detectVowels(str));
