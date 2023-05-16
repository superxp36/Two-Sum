const twoSum = (arr, sum) => {
  let count = 0
  const pastNumbers = []
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    let neededNumber = sum - arr[i]
    if(!pastNumbers.includes(neededNumber)) {
      pastNumbers.push(current)
    } else {
      return [neededNumber, current]
    }
    count++
  }
  console.log(count);
  return 'Not found'
}

const arr = [1,2,3,4,5,6,7,8,9];
const sum = 177;

console.log(twoSum(arr, sum));