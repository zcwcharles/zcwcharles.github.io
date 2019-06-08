# JavaScript Learning Note - 01

> Chapter 3: Type, value and variable


## Type
> We could split all the types in JavaScript into two category Primitive type and Object type.

### Primitive Type
`Number` `String` `Boolean` `undefined` `null`

### Object Type 
Set of key-value pairs `{ key: value }`  
  
And some special types or we could call them **class**
`Array` `Function` `Date` `RegExp` `Error`  

Almost all types could have functions excpet for `null` and `undefined`.

## Class
Class are usually created by functions called **constructor**.  
  
Since JavaScrpit is a O-O language (Object Oriented Language), every class could has its own functions. Therefore, some common functions are defined in class by design instead of having a global function.  
  
For exampe:  
In C++, when we want to sort an array, we usually would do:  
```c++
int myInts[] = [2, 4, 3, 1];
std::sort (myInts.begin(), myInts.end());
```
But in JavaScript:
```javascript
const myInts = [2, 4, 3, 1];
myInts.sort();
```

## Mutable & Immutable
> Besides spliting types in to primitive and object, we could also classify them as mutable and immutable type.

### Mutable type
Values or property of these types could be mutated.  
For instance, `Object` and `Array`.

### Immutable type
Values of which could not be mutated. 
For example, `Boolean`, `Number` and `String`.  
  
> Why does Mutable and Immutable matter and what is mutation?

Here is an example:
```javascript
let a = [1,2,3];
let b = a;
a.push(4);
console.log(a);
console.log(b);
```
Output:  
![output1](@/assets/blog-01/output1.png)

```javascript
let a = 10;
let b = a;
a = 12;
console.log(a);
console.log(b);
```
Output:  
![output2](@/assets/blog-01/output2.png)

From the example above we could see that for mutable types, the variables are like reference of these types. Any change on these types would be applied on all variables referred to them. But for immutable types, they are like pure values assigned to variable. Instead of changing values, we are more likely assigning new values to variables.

## Variable
Variables are untyped, they could be assigned any value. JavaScript is using lexical scoping, any variable declared outside function would be treated as global variable, they could be accessed anywhere but for variables in function scope, they could only be accessed in function.

## Number
> All Numbers in JS would be reperesented as float type.  

JS is using 64-bit float precision. The largest float in JS would be `±1.7976931348623157e308` and the smallest would be `±5e-324`. The integer range is `±2^53`. Any number exceed this range,the precision of lower bits could not be guaranteed.  
  
![output3](@/assets/blog-01/output3.png)

We can get nagetive value by adding a `-` before any positive number but `-` is a Arithmetic operator, not a part of number itself.  

One more thing, some operation in JS (like index of an array) are actually 32-bit based.  

### Integer
In JS, we can either reperesent Decimal or Hexadecimal number, some Octal numbers (start with `0` and followed by number `0~7` like `0377 -> 255`) are available but not fully supported by JS, so better not to use number start with `0`. What's more, in ES6, under strict mode, Octal numbers are not allowed.

### Float
The reperesenting method of float in JS would be:  
`[digits][.digits][(E|e)[(+|-)]digits]`  
  
for instance:
```javascript
3.14
23456.899
.7889
6.023e23
258E-15
```
### Operators
Basic operators in JS would be `+, -, *, /, %`. For more complicated operations we include them in a Object called **Math**.  

### Overflow and Underflow
Any numbers exceed JS's available range would be reperesented as `Infinity` or `-Infinity` when they are overflow. Almost all calculation between them would result in `Infinity` or `Infinity` but in some case, we would get `NaN`(Not a Numebr), like `/` or `Infinity + (-Infinity)`.

Underflow happens when the calculation result is infinitely close to `0`, and all the results would be `0`. When underflow happens to nagetive numbers then the result would be `-0`.  

The operation result in JS would be `Number`, `Infinity` or `NaN`. `NaN` the result of an operation is not a number or not able to be converted to number. Like getting square root of nagetive numbers or divide `0` by `0`.  

### About NaN and -0
`NaN` is not equal to any value in JS, include `NaN` itself. So the only way to define a variable is `NaN` or not is using a function called `isNaN()` or something like `x !== x`.  
  
![output5](@/assets/blog-01/output5.png)

In JS, `0` and `-0` are equal we cloud use any number divided by one variable to see if it is `0` or `-0`.  
  
![output4](@/assets/blog-01/output4.png)

### Binary float and error in rounding
JS could only reperesent limited number of real number using float, which means we are usually reperesenting a value that close to the real number we are reperesenting.

The **IEEE 754 float precision** is able to reperesent numebrs like `1/2`, `1/4`, `1/8` precisely but not so precise when we are trying to reperesent `1/10` or `1/100`. Here is an example:  
  
![output6](@/assets/blog-01/output6.png)
  
> So is there a safe way of comparing float numbers in JS?  

One of my solution would be:  
  
![output7](@/assets/blog-01/output7.png)
  
The reason is that in Javascript, the value of ε is IEEE 754 double-precision floating point. If the distence between two numbers is less than the double-precision floating point, then these two Numbers could be considered as equal.

### Date and Time
Date is not a simple type like Number. JS provided a constructor with params to create Date object. Detailed introduction would be mentioned later.  

## String  

> String is a sequence of 16-bit values or we could also call it UTF-16. Usually, these values are from Unicode. There is no Char type in JS. Instead, we have string with length one. 

### Quote Mark and Multiple Line String
In JS, we could use both single quote mark and double quote mark. In ES 3 standard, all characters of a string must be in same line. When it comes to ES5, we could have a single line string reperesented in multiple lines by using `\` at the end of every line. And if we want to have a multiple line string, then just use `\n` to change line.  

One more thing about quote mark, since we could use quote mark in both HTML and JS, so a better coding style would be using only one type of quote mark in these two scripts separately.  

Like  

```html
<button onClick="alert('Clicked')">Click here</button>
```

### Escape character
Just like in some other programming language, `\` mark could be used to reperesent an escape characeter in JS. JS accepts both 16-bit Latin-1 and 16-bit Unicode to reperesent escape characters.  

Here is a table of some escape characters.
|Escape Value|Meaning                 |
|------------|------------------------|
|\o          |NUL(\u0000)             |
|\b          |Backspace(\u0008)       |
|\t          |Horizontal tab(\u0009)  |
|\n          |Line break(\u000A)      |
|\v          |Vertical tab(\u000B)    |
|\f          |Page break(\u000C)      |
|\r          |Carriage return(\u000D) |
|\\"         |Double Quote(\u0022)    |
|\\'         |Single Quote(\u0027)    |
|\\\         |Backslash(\u005C)       |
|\xXX        |16-bit Latin-1 character|
|\uXXXX      |16-bit Unicode character|

### String functions
First thing we have to notice is that in JS, many functions seem to change the string itself, but actually they just return a copy of the modified string, source string itself won't be modified.

```javascript
var str = 'hello, world';
s.charAt(0) // => h
s.substring(1, 4) // => ell
s.slice(1, 4) // => ell
s.slice(-3) // => ell, this one is little tricky, -3 = 1 - 4;
s.indexOf('l') // => 2
s.lastIndexOf('l') // => 10
s.indexOf('l', 3) // => 3, the first appearance of l after index 3, include index 3.
s.split(',') // => ['hello', 'world'] omit space.
s.replace('l', 'L') // => 'heLlo, world', replace only the first match of the search element.
s.replace(/l/g, 'L') // => 'heLLo, worLd', Regular expressions are also acceptable for the search element.
s.toUpperCase() // => 'HELLO, WORLD'. 
```  

Like Mentioned before, functions like `replace` and `toUpperCase` won't make any modification on the source string.  

### Regular Expression
It is not a basic data structure of JS, it is a object instead. It is a powerful tool to process text in JS. More detailed information would be mentioned in Chapater 10.

## Boolean
> Like in other programming languages, JavaScript also has `true` and `false` as the value for boolean. 

One notable thing about Boolean in JS is that, all type of values could be transformed into Boolean, and this is the most important reason why most of time we would try to use `===` instead of `==` while we are comparing two values or objects.  

Values that would be transfered into `false`:  
- `undefined`
- `null`
- `0`
- `-0`
- `NaN`
- `""` or string with only spaces.  

All other values would be transfered into `true`. The six values above are also called as **falsy value**, and all other values could be called as **truthy value**.  

## `null` and `undefined`
> `null` and `undefined` are both values that could reperesent **empty** concept in JS, but they are not the same.  

`null` is actually an object, with a meaning 'not an object'. However, `undefined` is not an object, it has its own type called `undefined`, it means that a variable is not initialized, a property or an element doesn't exist. In ES3, `undefined` could be assigned any value, this bug is fixed in ES5, `undefined` is now read-only.  

```javascript
typeof(null) // => "object"
typeof(undefined) // => "undefined"
```
  
`null` and `undefined` do not have any property or function, in fact any `.` or `[]` operation on these two value would caused a type error. And when we want to pass a **empty** value in to functions or assign variables with **empty** value. `null` might be a better choice than `undefined`, since `null` can be considered as a **expected** empty value and `undefined` is more like a **unexpected** error or empty value.  

## Global Object
> When JavaScript Interpreter started or explorer reloaded, it would create a new **global object**, which includes variables and functions which we could call any where inside a JS program.  

The **Global Object** would include the following properties:  
- Global property: `undefined`, `Infinity`, `NaN` and etc.
- Global function: `inNaN()`, `parseInt()`, `eval()` and etc.
- Constructor function: `Date()`, `RegExp()`, `String()`, `Object()`, `Array()` and etc.
- Global object: `Math`, `JSON` and etc.  

We could use these properties straightly, with/without keyword `this` outside any functions or objects. And in explores, this **Global Object** would be a **Window** object, which would have some more properties than it. And in explores, an refer called `window` will be a default reference of this global **Window** object.  

When **Global Object** is created, all global variables and functions would be defined, and if we claimed a global variable or function in our code, it would also be included in **Global Object**.  

