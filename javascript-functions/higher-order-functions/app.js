
//even numbers by filter
const numberArray = [12,324,213,4,2,3,45,4234];

const modifiedArray = numberArray.filter((num)=>{
    if(num%2==0){
        return num
    }
})
console.log(modifiedArray)

//primeNumbers by filter

const numberArrayForPrime = [12,324,7,213,4,2,3,45,4234];

function isPrime(num){
    for(let i=2;i<num;i++){
        if (num%i == 0){
            return false;
        }
    }
    return true;
}

const modifiedPrime = numberArrayForPrime.filter((num)=>isPrime(num))

console.log(modifiedPrime)



// const numberArrayForPrime = [12,324,7,213,4,2,3,45,4234];

function isPrime(num){
    for(let i=2;i<num;i++){
        if (num%i == 0){
            return false;
        }
    }
    return true;
}

const modifiedNonPrime = numberArrayForPrime.filter((num)=>!isPrime(num))

console.log(modifiedNonPrime)




//Map
const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray){
    const SqNumbers = myArray.map((n)=>n**2)
    console.log(SqNumbers)
}

findSquareOfNumbers(myArray)


let num=[2, 3, 5, 10]
const ans= num.reduce((mul,n)=>mul*=n,1);
console.log(ans);

//Map using reduce

