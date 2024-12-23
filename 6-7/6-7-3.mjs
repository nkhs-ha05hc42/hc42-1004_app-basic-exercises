const values = [1, 1, 1, 2, 3]
const valueSet = new Set()
for (const value of values) {
    valueSet.add(value)
}
console.log(Array.from(valueSet.values()))