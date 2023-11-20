console.log("Variables")
const x = 1
let y = 5

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed

console.log("Arrays")

const t = [1, -1, 3]

t.push(5)

console.log("length",t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
}) 

console.log("Objects")

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
  
  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }
  console.log(object1)
  console.log(object2)
  console.log(object3)

  console.log("Functions")
  const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
  }

  const result = sum(1, 5)
    console.log(result)