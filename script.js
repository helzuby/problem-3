//Write a JavaScript function that accepts two arguments, a string and a letter.
//The function will count the number of occurrences of the specified letter
//within a string.
//Step 1: Write a Javascript function that holds the two arguments.
//Step 2: Declare a variable
//Step 3: Use a for loop and an if statement to set the number of occurence equal to 1

function letterCount(str, letter) {
  let numberOfOccurence = 0;
  
  for(let x = 0; x < str.length; x++) {
    
    if(str[x].toLowerCase() === letter.toLowerCase()) {
      
numberOfOccurence += 1;
    }
  }
return numberOfOccurence;
}
console.log(letterCount("How are you doing", "O"));