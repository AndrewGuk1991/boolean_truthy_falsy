console.log(true && "Hello") // 'Hello'
console.log(false && "World") // false
console.log("" && "JavaScript") // ''
console.log("React" && "Vue") // 'Vue'
console.log(5 && 10) // 10
console.log(0 && 100) // 0
console.log(null && "Test") // null
console.log(undefined && 42) // undefined

console.log("A" && "B" && "C") // 'C'
console.log("X" && "" && "Z") // ''
console.log(1 && 2 && 0 && 4) // 0
console.log(true && "Yes" && 7) // 7