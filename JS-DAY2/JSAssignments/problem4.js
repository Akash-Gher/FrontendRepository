
// Most programmers will tell you that one of the ways to improve your performance in competitive 
// programming is to practice a lot of problems.

// Sam took the above advice very seriously and decided to set a target for himself.

// He decides to solve at least 10 problems every week for 4 weeks.
// Given the number of problems he actually solved in each week over 4 weeks as P_1, P_2, P_3,P_4

// output the number of weeks in which Sam met his target.

// Input Format:
// There is a single line of input, with 4 integers P_1, P_2, P_3,P_4. These are the number of problems 
// solved by Sam in each of the 4 weeks.

// Output Format:
// Output a single integer in a single line - the number of weeks in which Sam solved at least 10 problems.

// Sample 1:
// Input
// 12 15 8 10

// Output
// 3

// Explanation:
// Sam solved at least 10 problems in the first, second and fourth weeks. He failed to solve 
// at least 10 problems in the third week. 
// Hence, the number of weeks in which Sam met his target is 3.


// let p1=12;
// let p2=15;
// let p3=8;
// let p4=10;


function solveProblem(arr){
 
    let count=0;

    for(let i=0;i<arr.length;i++){

        if(arr[i]>=10)
        count++;
    }

return count;
}

let arr=[12,15,8,10];
console.log("the number of weeks he acive the target is "+solveProblem(arr));

