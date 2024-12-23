let con = 0
let num = 0
for (let i = 1; i <= 100; i++){
    if (con > 50){
        break
    }
    if (i % 2 === 0){
        con = con + i
    }
    num++
}
console.log(con)
console.log(num)