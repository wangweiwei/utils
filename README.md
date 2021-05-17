<p align="center">
    <img width="160" src="https://www.ellow.cn/examples/utils/images/logo.svg" alt="logo">
</p>

<h2 align="center">Utils</h2>

<p align="center">
  <a href="https://npmjs.com/package/@dengfengwang/utils" rel="nofollow">
    <img alt="Latest Version on NPM" src="https://img.shields.io/npm/v/@dengfengwang/utils" style="max-width:100%;">
  </a>
  <a href="https://github.com/wangweiwei/utils/issues">
    <img alt="Issue" src="https://img.shields.io/badge/-help--wanted-brightgreen" style="max-width:100%;">
  </a>
  <a href="https://github.com/wangweiwei/utils/blob/master/LICENSE">
    <img alt="Software License" src="https://img.shields.io/npm/l/@dengfengwang/utils" style="max-width:100%;">
  </a>
  <a href="https://github.com/wangweiwei/utils">
    <img alt="Contributors Anon" src="https://img.shields.io/github/contributors-anon/wangweiwei/utils" style="max-width:100%;">
  </a>
  <a href="https://github.com/wangweiwei/utils">
    <img alt="Code Size" src="https://img.shields.io/github/languages/code-size/wangweiwei/utils" style="max-width:100%;">
  </a>
  <a href="https://github.com/wangweiwei/utils">
    <img alt="Languages Count" src="https://img.shields.io/github/languages/count/wangweiwei/utils" style="max-width:100%;">
  </a>
  <br/>
  <a href="https://npmjs.com/package/@dengfengwang/utils" >
    <img alt="Downloads" src="https://img.shields.io/npm/dt/@dengfengwang/utils.svg" style="max-width:100%;">
  </a>
  <a href="https://github.com/wangweiwei/utils">
    <img alt="Languages" src="https://img.shields.io/github/languages/top/wangweiwei/utils" style="max-width:100%;">
  </a>
</p>

> Some convenience utils.



## **Installation**

```shell
npm install --save @dengfengwang/utils
```

or

```
yarn add @dengfengwang/utils
```



## **Usage**

You can import(or require) `@dengfengwang/utils` by getting it from `npm` 

```typescript
import { number } from '@dengfengwang/utils';

const { toFixed } = number;

console.log(toFixed(1.123, 2))
```



## **Table of contents**

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
  * [array](#array)
  * [string](#string)



## **API**

### array

```typescript


```



***.reverse***

Reverses an array in place.

**Params**

- `arr` **{Array}**: The array to reverse.
- `start` **{Number}**: Starting index.
- `end` **{Number}**: Ending index.

**Example**

```typescript
import { array } from '@dengfengwang/utils';
const { reverse } = array;

const arr = [1,2,3];
reverse(arr, 0, arr.length - 1);
console.log(arr);
//=> [3,2,1]
```



### boolean

***.random***

Get a random boolean (true/false).

**Params**

- `returns` **{Boolean}**: A boolean (true or false).

**Example**

```typescript
const arr = [1,2,3];
reverse(arr, 0, arr.length - 1);
console.log(arr);
//=> [3,2,1]
```



### boolean

***.random***

Get a random boolean (true/false).

**Params**

- `returns` **{Boolean}**: A boolean (true or false).

**Example**

```typescript
const arr = [1,2,3];
reverse(arr, 0, arr.length - 1);
console.log(arr);
//=> [3,2,1]
```



### string

***.reverse***

Reverse the characters in a string.

**Params**

- `str` **{String}**: The string to reverse.
- `returns` **{String}**

**Example**

```
reverse("abc");
//=> 'cba'
```



## **License**

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://github.com/wangweiwei/@dengfengwang/utils/blob/master/LICENSE)

Copyright (c) 2021-present, Weiwei Wang 

