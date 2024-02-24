let array = [1, 2, 3, 3, 4, 10];

// console.log(array.join(',')) //  returns string
// console.log(array.toString()); // returns string

// console.log(array.reverse()) // returns reversed array
// console.log(array.slice(2)); // returns array from index 2 to end
// console.log(array.slice(2, 4)); // returns array from index 2 to 4
// console.log(array.concat([6, 7, 8])); // returns new array and adds elements
// console.log(array.push(10), array); // returns length of array && add element to end of array
// console.log(array.pop(), array); // returns last element of array /&& removes last element of array
// console.log(array.shift(), array); // returns first element of array && removes first element of array
// console.log(array.unshift(0), array); // returns length of array && add element to start of array
// console.log(array.splice(2, 1)); // returns removed elements && first parameter is index and second parameter is number of elements to remove
// console.log(array.sort((a, b) => b > a).reverse()); // returns sorted array
// console.log(array.indexOf(3)); // returns index of element
// console.log(array.lastIndexOf(3)); // returns last index of element
array.map(function (x) {
  console.log(x);
}); // returns new array && applies function to each element && returns all elements

console.log(array.filter((x) => x > 2)); // returns new array  && returns elements that satisfy condition
// console.log(array.reduce((x, y) => x + y)); // returns single value && applies function to each element
// console.log(array.every((x) => x > 2)); // returns boolean && applies function to each element
// console.log(array.some((x) => x > 2)); // returns boolean
// array.forEach((x) => console.log(x)); // pplies function to each element like map but does not return anything
// console.log(array.find((x) => x > 2)); // returns first element
// console.log(array.findIndex((x) => x > 2)); // returns index of first element
// console.log(array.includes(3)); // returns boolean
// console.log(array.fill(0)); // returns modified array
// console.log(array.flat()); // returns new array && removes empty and nested arrays
// console.log(array.flatMap((x) => [x * 2])); // returns new array
