console.log('Loops Started');

// true or false 
if(false) {
    console.log('Condtion True');
} else {
    console.log('Condtion False');
}

//condtion checking

let arryX = [1, 4  , 10, 'string' , 30, 50, 2, 7]
console.log('Original Array', arryX);

let StringArray = [] // Empty String array for push from the main array
let numberArray = [] // Empty Number array for push from the main array
arryX.forEach(arrayElem=>{
    //console.log('ArrayDeails ', typeof(arrayElem));
    //console.log(index);
    if(typeof(arrayElem) === 'string') {
       StringArray.push(arrayElem)
    } else if (typeof(arrayElem) === 'number') {
        numberArray.push(arrayElem)
    } else {
        console.log('Wrong value');
    }  
})
numberArray.sort()
console.log('String Array', StringArray);
console.log('Number Array', numberArray.sort());

//Adding Two arrays
let finalArray = StringArray.concat(numberArray)
console.log(finalArray);

// Sort method

let sortNumber = [1, 5 , 3 , 6 , 8]

console.log('Before Sort array', sortNumber.sort()); // working single digit sort number 

// Simple sort method end

let bigSortNumber = [20, 50, 60, 5, 100, 9999, 0]
console.log('big sort number', bigSortNumber);
bigSortNumber.sort(function(num1, num2){
    return num1-num2
})

console.log('Result =', bigSortNumber);

// Arrow function sort 
bigSortNumber.sort((numA, numB)=> numA-numB)// Assending order
console.log('Arrow Fn Sort', bigSortNumber);

bigSortNumber.sort((numX, numY)=> numY - numX)
console.log('Arrow Desending Number', bigSortNumber);


// Test program 
let subjects = ['Tamil', 'English', 'Maths', 'Science', 'Social Science']
let simeon = [28, 50, 89, 65, 30]
// let beulah = [80, 99, 65, 80, 86]
// let Evania = [99, 100, 100, 100, 99]
//let simeon = [100, 99, 99, 88, 99]

let fixedMarks = 35
let failString ='Fail'
let passString = 'Pass'


let simeonArry = simeon.forEach(elem =>{
    console.log('Simeon Marks', elem);
    if(fixedMarks < elem ) {
        console.log(passString);
        
    } else if(fixedMarks > elem){
        console.log(failString);
        
    }
    if(passString !== passString) console.log('STUDENT PASS');
    else if(failString) console.log('STUDENT FAIL');
})



// Read text in your text 

document.getElementById('readText').onclick = () =>{
    let TextAreaVal = document.getElementById('textArea').value
    let vocie = new SpeechSynthesisUtterance(TextAreaVal)
    console.log(vocie);
    speechSynthesis.speak(vocie)
    
}






