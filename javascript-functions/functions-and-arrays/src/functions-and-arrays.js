// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1,num2){
  return num1>num2?num1:num2;
}

// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
// function findScaryWord(words){
//   let max_word=words[0] || null;
//   for( i=0 ; i<words.length;i++){
//     if (words[i].length>max_word.length){
//       max_word=words[i]
//     }
//   }
//   console.log(max_word)
//   return max_word ;

// }

const findScaryWord = (words)=>{
  if (words.length==0 ) return null
  const max_word = words.reduce((m,word)=>{return word.length>m.length ? word : m},words[0]);
  return max_word
}




// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function netPrice(numbers){
  // if (numbers.length==0 ) return 0;
  const np = numbers.reduce((sum,number)=>sum=sum+number,0)
  return np;
}
// Progression #3.1
function sum(arr){
  let res=0;
  for(i=0;i<arr.length;i++){
    res+=arr[i];
  }
  return res;
}



function add(mixed){
  let res=0;
  for (let ele of mixed){

    if (typeof ele == "number"){
      res+=ele;
    }
    else if (typeof ele == "string"){
      res+=ele.length;
    } 
    else if (typeof ele == "boolean"){
      res+=ele == true ? 1 : 0 ;
    }
    else {
      throw new Error("Unsupported data type sir or ma'am")
    }
  }
  return res;
}

// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function midPointOfLevels(numbersAvg){
  
 return sum(numbersAvg)/numbersAvg.length || null;
}
// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  return add(wordsArr)/wordsArr.length || null;
}

function avg(mixed){
  if (mixed.length==0)return null;
  return Number((add(mixed)/mixed.length).toFixed(2)) ;
}
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

function uniqueArray(wordsUnique){

  if (wordsUnique.length==0) return null;
  let res=[];
  let visited = new Set();

  for (let word of wordsUnique){
    if (!visited.has(word)){
      res.push(word);
      visited.add(word);
    }
  }

  return res ;

}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,target){
  if (wordsFind.length==0) return null;
  for (let word of wordsFind){
      if (word===target){
        return true
      }
  }
  return false
}


// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount,target){
  if (wordsCount.length==0) return 0;
  let res = 0;
  for (let word of wordsCount){
      if (word===target){
        res+=1
      }
  }
  return res
}

// Progression #8: Bonus

const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45]
];


function maximumProduct(matrix){
  let res =1 ;

  for (i = 0;i<matrix.length;i++){
    for (j=0;j<matrix.length;j++){

      //horizontal
      if(j+3<10){
        const horProduct= matrix[i][j]*matrix[i][j+1]*matrix[i][j+2]*matrix[i][j+3];
        res=Math.max(res,horProduct);
      }

    }
  }

  
  for (i = 0;i<matrix.length;i++){
    for (j=0;j<matrix.length;j++){

      //vertical
      if(i+3<10){
        const verProduct= matrix[i][j]*matrix[i+1][j]*matrix[i+2][j]*matrix[i+3][j];
        res=Math.max(res,verProduct);
      }

    }
  }


  
  for (i = 0;i<matrix.length;i++){
    for (j=0;j<matrix.length;j++){

      //diagonal
      if(i+3<10 && j+3<10){
        const diaProduct= Math.max(matrix[i][j]*matrix[i+1][j+1]*matrix[i+2][j+2]*matrix[i+3][j+3],matrix[i][j]*matrix[i+1][j-1]*matrix[i+2][j-2]*matrix[i+3][j-3]);
        // res=Math.max(res,diaProduct);
      }

    }
  }


  return res;
}

