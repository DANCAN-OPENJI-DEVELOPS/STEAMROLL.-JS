function steamrollArray(arr) {
  const myArr = [];
  /*let myArr = [...new Set(arr.flat())];
  let newArr = [...new Set(myArr.flat())];
  return [...new Set(newArr.flat())] */
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      myArr.push(...steamrollArray(arr[i]));
    } else {
      myArr.push(arr[i])
    }
    //console.log(arr[i])
  }
  return myArr
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
