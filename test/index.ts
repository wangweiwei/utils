import { array } from '../lib/utils.cjs.js'
const { reverse } = array;

const arr = [1, 2, 3]
reverse(arr, 0, arr.length - 1)
console.log(arr)
