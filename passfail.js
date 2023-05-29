console.log('Pass Fail Marks');
const subject = ['Tamil', 'English', 'Maths', 'Science', 'Social Science']
console.log('subject Name is ', subject);
let student1 = [30, 65, 100, 85, 75]
let sudent2 = [100, 60, 80, 78, 100]
console.log('Student one', student1);

let result = sudent2.forEach((elem)=>{
    if(elem >= 35){
        console.log('Your Marks', elem);
    }
    else {
        console.log('Student Fail', elem);
    } 
})


// Switch case 

let grade = 1


switch(grade) {
    case 1 : 
        console.log('1');
    break;

    case 2:
        console.log('2');
    break;
        
    case 3:
        console.log('3');
    break

    case 4:
        console.log('4');
    break

    case 5: 
        console.log('5');
    break
    case 6: 
        console.log('6');
    break

    default:
        break;
}


