 const firstName = 'John';
 const age = 35;
 const hobby = 'Coding';

//The expected output is:

// Hello, John (35). I love coding!
// Hello, John (35). I love coding!

const logTwice = (logHobby) => {
    console.log(logHobby)
    console.log(logHobby)
  }//When logValue is called, it logs the value twice.
  

 function myHobby(){
  logTwice(`Hello, ${firstName} ${age}. I love ${hobby}!`)
 }

//My hobby calls logTwice and it passes the a new value in a form of a string.

myHobby()

