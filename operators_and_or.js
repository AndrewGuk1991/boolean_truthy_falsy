
console.log("A" && ("B" || "C")) // 'B'
console.log(false || ("X" && "Y")) // 'Y'
console.log(("" && "Test") || "Default") // "Default"
console.log("Hi" || (false && "Bye")) // "Hi"
console.log((true && "Yes") || "No") // "Yes"
console.log(null || (0 && "Zero")) // 0


console.log("A" || ("B" && "C")) // "A"
console.log(("A" || "B") && "C") // "C"
console.log(("A" && "B") || ("C" && "D")) // "B"
console.log((false && true) || (true && "Result")) // "Result"