function rotateArrayRight(arr, steps) {
  const len = arr.length;
  steps = steps % len; 
  if (steps < 0) {
      steps += len; 
  }
  return arr.slice(-steps).concat(arr.slice(0, -steps));
}

function cyclicRotation(arr) {
  const sum = arr.reduce((a, val) => a + val, 0);
  return rotateArrayRight(arr, sum);
}

console.log(cyclicRotation([-2, 0, 1, 0, 2])); 
console.log(cyclicRotation([-2, 0, 1, 0, 3])); 
console.log(cyclicRotation([-2, 0, 1, 2, -2]));