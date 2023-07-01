/* 

Display array in a list in HTML just using javascript

*/

/* My Code Starts Here */

const array = ["one" , "two" , "three" , "four" , "five"]
const numList = document.getElementById('number-list')
for (let i = 0; i<array.length; i++){
    const li = document.createElement('li')
    li.innerHTML = array[i]
    numList.appendChild(li)
}