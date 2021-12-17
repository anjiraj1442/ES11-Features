//its used to find the string in given string


const str = 'test1tset2';
// const arr = [...str.match('test')];
// console.log(arr);
const arr = [...str.matchAll('test')];
console.log(arr);
