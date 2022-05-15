let l = +prompt("Enter the length of array: ")
let arr=[]

for(i=0;i<l;i++){
    arr[i]=prompt("Enter the elements in array: ")
    }

let count = {};

for (const element of arr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
console.log(count)
let val= []
val=Object.keys(count)

console.log(val)