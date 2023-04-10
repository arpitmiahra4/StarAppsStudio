//Here in step 1 :- I take a sample array to solve the question.
const array1 = [2,1,2,3,1]
const array2 = [1,6,3,4,5,0,0,0,6];  
// Here in step 2 :- writing Arrow function to Solve This;

const minimumPlanesRequired = (array) =>{
 const N = array.length; // Here in step 3 :- First of all to simplyfy this i take a variable and takes array length;
 const planesRequired = new Array(N).fill(Number.MAX_SAFE_INTEGER); // Here in step 4 :- this new array i created to store the minimum number of planes required for reaching each airport,

// Here in step 5 :- Initial Case : we can reach first airport using [0] planes;
planesRequired[0] = 0;

// Here in step 6 :- Iterate it fy for loop over all airports from first --> second --To-- last;
for(let i = 0; i < N - 1; i++){
    // Here in step 7 :- Now by creating Nested loop i'm checking all the possible paths from airport i to airport j, where j is less than i;
    for(let j = i; j <= Math.min(i + array[i],N - 1); j++){
        //Here in step 8 :- if we can reach out airpot j using less planes than the previous calculated value is updated by planesRequired[j];
        planesRequired[j] = Math.min(planesRequired[j], planesRequired[i] + 1);
    }
}

//Here in step 9 :- If we are unable to reach the last airport by any of the case then as problem statement i have to return -1,
// Here in step 10 :- Else return the minimum number of planes required to reach the last airpot ;
return planesRequired[N - 1] === Number.MAX_SAFE_INTEGER ? -1 : planesRequired[N - 1];
}

// In Final Stage I'm Consoling the OutPut. of Both Array given in example.
console.log(minimumPlanesRequired(array1)); // Output is 2
console.log(minimumPlanesRequired(array2)); // Output is 3