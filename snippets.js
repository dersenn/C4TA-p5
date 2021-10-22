// array stuff

let myArray = []

myArray.push("Rot") // Add to End of Array
myArray.unshift("Blau") // Add to Start of Array
myArray.pop() // Remove from End of Array
myArray.shift() // Remove from Start of Array

myArray.reverse() // Reverse Array

// Shuffle Array (Fisher Yates Shuffle)
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// https://bost.ocks.org/mike/shuffle/
function shuffleArray(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

//infinite array loop
let array = ['a','b','c','d']
for ( let i = 0; i < array.length; i = (i+1) % array.length) {
  console.log(array[i])
}
