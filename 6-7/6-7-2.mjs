const values = [1, 1, 1, 2, 3]
const valueSet = new Set(values)
console.log(valueSet)
for (const value of values) {
    valueSet.add(value)
}