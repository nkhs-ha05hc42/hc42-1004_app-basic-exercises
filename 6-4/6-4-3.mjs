const score = 59
let result
if (score >= 90){
    result = "Excellent"
} else if (score >= 80){
    result = "Good"
} else if (score >= 60){
    result = "Normal"
} else {
    result = "Red"
}
console.log(result)