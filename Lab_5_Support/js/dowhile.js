// https://wsvincent.com/javascript-array-range-function/
function getCats(start, edge, step) {
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
        let catName = "cat" + (edge-start);
        arr.push(catName);
    }
    return arr;
}

 
const cats = getCats(5);

let i = 0;
let info = '';
do {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
} while (i < cats.length);

console.log(info);