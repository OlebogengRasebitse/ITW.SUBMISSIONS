 firstName = 'John';
age = 35;
 hobby = 'Coding';

//The expected output is:

// Hello, John (35). I love coding!
// Hello, John (35). I love coding!
const logTwice = (parameter) => {
    console(parameter)
  }
 
 function myHobby(){
  console.log(`Hello, ${firstName} ${age}. I love ${hobby}!`)
 }

myHobby()
myHobby()


