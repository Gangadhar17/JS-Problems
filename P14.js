let n=+prompt("Enter the number of elements :")
let k=+prompt("Enter the number of elements to rotate :")
let arr1=[]
let arr=[]
let arr2=[]
let newarr=[]
for(i=0;i<n;i++){
     arr[i]=prompt("Enter the array elemets:")
}
for(i=k;i<n;i++){
    arr1[i]=arr[i]
}
for(i=0;i<k;i++){
    arr2[i]=arr[i]
}
arr=arr1.concat(arr2)
for(i=0;i<arr.length;i++){
    
    if (arr[i]){
        newarr.push(arr[i])
    }
}
console.log(newarr)