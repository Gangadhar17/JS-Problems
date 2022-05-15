let A=prompt("Enter the string:")
let n=0
for(i=0;i<A.length;i++)
{
    if (A[i]==" "){
        continue;
    }
    else{
        n=n+1
    }
}
console.log(A,n)