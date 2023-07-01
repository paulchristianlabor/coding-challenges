/* 

Display array in a list in HTML just using javascript

*/

/* My Code Starts Here */

const array = ["one" , "two" , "three" , "four" , "five"]
let li = document.createElement("li")
let number = ""
for (let i = 0; i<array.length; i++){
    number += array[i]
}
li.appendChild(number)
number.innerHTML = array