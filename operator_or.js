console.log(false || "Default") // "Default"
console.log("" || "Fallback") // "Fallback"
console.log(null || "Backup") // "Backup"
console.log("First" || "Second") // "First"
console.log(0 || 42) // 42
console.log(undefined || "Value") // "Value"


console.log("" || 0 || "Found") // "Found"
console.log(false || null || "OK") // "OK"
console.log(undefined || "" || 0 || "Final") // "Final"
console.log("Start" || false || "End") // "Start"


function getUserName(user) {
    return user.name || 'Гость'
}

// Тесты:
console.log(getUserName({ name: "Анна" })) // "Анна"
console.log(getUserName({})) // "Гость"
console.log(getUserName({ name: "" })) // "Гость"

