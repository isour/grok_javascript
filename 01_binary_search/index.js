const binary_search = (arr, element) => {
    let currentArr = arr;
    let needEl = element;
    let low = 0;
    let high = currentArr.length - 1;
    let mid;
    let guess;
    while (low <= high) {
        mid = Math.floor((low + high ) / 2);
        guess = currentArr[mid];
        if (guess === needEl){
            return `Searched index: ${mid}`
        } else if (guess > needEl){
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return 'No element'
};

let testArr = [];

const numberGenerator = function(arr) {
  if (arr.length >= 10) return;
  let newNumber = Math.floor(Math.random() * 10 + 1);
  if (arr.indexOf(newNumber) < 0) {
    arr.push(newNumber);
  }
  numberGenerator(arr);
};

numberGenerator(testArr);

console.log('Generated array', testArr);

console.log(binary_search(testArr, 5));
