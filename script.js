let incrementNumber = document.getElementById("count-display") // for connecting icnrement button
let decrementNumber = document.getElementById("count-display") // for connecting decrement button
let saveNumber = document.getElementById("save-element") // for connecting the save number button
let backtozeroNumber = document.getElementById("count-display") // for going back to zero

let count = 0 
console.log(incrementNumber)

// below function increments the count
function increment(){
   count = count + 1
   incrementNumber.innerText = count
}

// below function decrements the count
function decrement(){
    count = count - 1
    decrementNumber.innerText = count
}

// below function saves the count
function save(){
    let countStr = count + ", "
    saveNumber.textContent += countStr
}
console.log(count) // prints the saved count

// below function gets the count back to zero
function backtozero(){
    backtozeroNumber.textContent = 0
    count = 0
}

// Was thinking of adding morefeatures, but it would become clustered. 
// BTW, today is 12 June 2023, 0938 hrs. 
