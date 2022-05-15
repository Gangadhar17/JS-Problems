let a = +prompt("Enter the co-efficient of A : ")
let b = +prompt("Enter the co-efficient of B : ")
let c = +prompt("Enter the co-efficient of C : ")
console.log(a)
console.log(b)
console.log(c)
let x1 = (-b + Math.pow((b*b-4*a*c),0.5))/2*a
let x2 = (-b - Math.pow((b*b-4*a*c),0.5))/2*a
x1=x1.toFixed(2)
x2=x2.toFixed(2)
console.log(x1,x2)