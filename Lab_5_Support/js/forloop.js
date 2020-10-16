// https://wsvincent.com/javascript-array-range-function/
function range(start, edge, step) {
    // If only 1 number passed make it the edge and 0 the start
    if (arguments.length === 1) {
        edge = start;
        start = 0;
    }

    // Validate edge/start
    edge = edge || 0;
    step = step || 1;

    // Create array of numbers, stopping before the edge
    let arr = [];
    for (arr; (edge - start) * step > 0; start += step) {
        arr.push(start);
    }
    return arr;
}

const arr = range(5);
console.log(arr.length);

for (let i = 0; i < arr.length; i += 1) {
    arr[i] = `position=${i}`;
}

console.log(arr);

const arr2 = range(15);

for (let i = 0; i < arr2.length; i += 1) {
    arr2[i] = `position=${i}`;

    if (i === 9) {
        break;
    }
}

console.log(arr2);


const arr3 = range(15);

for (let i = 0; i < arr3.length; i += 1) {
    
    if (i === 9) {
        console.log("continue!!!");

        continue;
    }
    else {
        console.log(i);

        arr3[i] = `position=${i}`;

    }
    // if any code here , it would not be run after continue is hit
}
console.log(arr3);


let num = 5;
let textContent = '';
for (let i = 1; i <= num; i++) {

    let sqRoot = Math.sqrt(i);

    if (Math.floor(sqRoot) !== sqRoot) {
        continue;
    }

    textContent += i + ' ';
    console.log(textContent);
}
console.log("Here!!!!!!!");
