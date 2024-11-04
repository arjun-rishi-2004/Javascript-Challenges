// Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

// Note
// If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
// num = 
// 8970
// nth = 3

// Write the function to find the findDigit obtained.
var findDigit = function(num, nth){
     //your code here
     if (nth<=0) return -1;

     // let n = num<0? -1*num : num;
     let n = Math.abs(num)
     let dig;
     
     let count=1;
   console.log(`Num ${num},Nth ${nth} `)
     while(count!=nth+1){
       dig=n%10;
     console.log(`count: ${count} , digit : ${dig} , Number : ${n}`)
 
       if (count==nth)
         { return dig;}
 
       count+=1;
   
       n=Math.trunc(n/10);
 
     }

  }

//Use SpecRunner to check the Test Cases.