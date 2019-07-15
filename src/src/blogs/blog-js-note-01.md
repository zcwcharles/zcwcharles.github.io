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

## <a name="Boolean"><a/>Boolean
> Like in other programming languages, JavaScript also has `true` and `false` as the value for boolean. 

One notable thing about Boolean in JS is that, all type of values could be transformed into Boolean. And this would happen when we evaluating values with `if()`.  

Values that would be converted into `false`:  
- `undefined`
- `null`
- `0`
- `-0`
- `NaN`
- `""` or string with only spaces.  

All other values would be converted into `true`. The six values above are also called as **falsy value**, and all other values could be called as **truthy value**.  

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

## Wrapper Object
> As we know that string, boolean, number are types of JS, unlike objects, they don't have their own property or functions but how could we get properties like `.length` from a string ?

What happens when trying to get `.length` from a string is that a temperory object was created according to the string value. After we get the `.length` property, it was destoryed. This might not be what actually happens, but it works in a similar way.  

```javascript
var s = 'abc';
s.len = 12; // This step won't cause error is because of the existance of temperory object.
var t = s.len; 
/* t would be undefined, at the time we declare t
temperory object of s has already been destoryed.*/
```

Besides the basic types like string, boolean, number, we also have Wrapper Objects correspondingly. And these objects would be treated as the same when using `==` to compare with basic types holding the same values. But if we use `===`, the Wrapper Objects would be treated as different from basic types holding the same values, this is because they are not the same in type. And we could also have customized functions or properties when using a Wrapper Object.  

```javascript
var s = 'abc';
var S = new String(s);
s == S // => true
s === S // => false
typeof(S) // => object
typeof(s) // => string
S.len = 4
var t = S.len // => t would be 4, since S is an object, we could add any properties or functions to it
```

## Unchangeable primitive values and changeable object
> In JavaScript, we have 5 primitve value types: `undefined`, `null`, `boolean`, `number` and `string` which are not allow to be changed. We also have objects which are changeable.  

### Primitive values
Primitve values are not allowed to be changed or mutated, functions like `toUpperCase`, `substring` or `toString` only return values, but won't change the source. And also when we comparing primitive values, we juse simply compare their value and see if they are the same. Which means using `===` is enough for comparing these kind of values.  

### Objects
Unlike primitive values, objects are changeable, we could easily add or modify props to them. And their props could be primitive values, functions or another object. And it is reasonable that to tell if two objects are the same is somewhat difficult. Also, using `===` won't help, since it only test if two objects are the same instance.  

```javascript
var a = [] // => notice that array is also object.
var b = []
var c = a

a === b // => false, two arrays are never equal if they are not the same instance.
a === c // => true since they refer to the same instance.
a.push(1)
c.length // => 1
```

## Type transform
> In JavaScript, the type of a value could be easily changed. We could see this by recalling truthy value and falsy values. Let's first look at some examples.  

```javascript
1 + ' String' // => '1 String'
'6' * '8' // => 48
var a = 1 - 'x' // => NaN
a + ' Object' // => 'NaN Object'
```  

After we checked out these examples, let's have a look of the complete table how values would be converted in JS.  

|Original Value|string         |number   |boolean |object               |
|--------------|---------------|---------|--------|---------------------|
|undefined     |'undefined'    |**NaN**  |false   |throws TypeError     |
|null          |'null'         |**0**    |false   |throws TypeError     |
|true          |'true'         |1        |        |new Boolean(true)    |
|false         |'false'        |0        |        |new Boolean(false)   |
|''            |               |**0**    |false   |new String('')       |
|'1.2'         |               |1.2      |true    |new String('1.2')    |
|'str'         |               |**NaN**  |true    |new String('str')    |
|0             |'0'            |         |false   |new Number(0)        |
|-0            |**'0'**        |         |false   |new Number(-0)       |
|NaN           |'NaN'          |         |false   |new Number(NaN)      |
|Infinity      |'Infinity'     |         |true    |new Number(Infinity) |
|-Infinity     |'-Infinity'    |         |**true**|new Number(-Infinity)|
|2             |'2'            |         |true    |new Number(2)        |
|{}            |Reference      |Reference|true    |                     |
|[]            |''             |0        |**true**|                     |
|[3]           |'3'            |3        |true    |                     |
|[1,2]         |'1,2'          |**NaN**  |true    |                     |
|['a','b']     |'ab'           |**NaN**  |true    |                     |
|function(){}  |Reference      |**NaN**  |true    |                     |

## Equality
Like we mentioned [before](#Boolean), when we using `if()` we are just evaluating values after they are converted into truthy and falsy values. Two values might have the same result when we evaluating them with `if()` but this doesn't mean they are equal. Here is an example:  

```javascript
if (undefined) { // => false
    ...
}
if (false) { // => false
    ...
}
undefined == false // => false
```

This is because `==` would never try to convert values in to Boolean to compare.  
We would talk about this later.  

## Type Conversion

### Conversion using functions
In JS, one straight way to convert values is using convert functions, for example:  

```javascript
Number('3') // => 3
String(undefined) // => 'undefined'
Boolean([]) // => true
Object(3) // new Number(3)
```

The functions we mentioned above are all constructor functions when we use them with keyword `new`, which would create new objects but without `new`, they are just convert functions.  

Excepting for `null` and `undefined`, we could use `toString()` of other type of values to get string value, it is the same as `String()`. And when we use `Object()` on `null` and `undefined`, we would get a `{}` object.  

### Conversion without functions
Besides convert funtions, there are some quicker ways to convert values.  

```javascript
x + '' // equal to String(x)
+x // or x-0, equal to Number(x)
!!x // equal to Boolean(x)
```

### Conversions between numbers and strings
Let's first take a look of how numbers could be convert into different positional notations. Basically, we count on `toString()` function, and the first parameter of this function is the radix which defines the notation we want.  

```javascript
var x = 11;
x.toString(2) // => binary notation, 1011
x.toString(8) // => octal notation and the first 0 would be omitted, 13
x.toString(16) // => heximal notation, the '0x' would be omitted, b
```

Another common need is we need to convert float into different precisions, and we have three functions for this need. `toFixed()`, `toExponential()` and `toPrecision()`. Parameter of `toFixed()` and `toExponential()` reperesents how many digits we want after the decimal point, but for `toPrecision()` it means how many digits we want in total.

```javascript
var n = 123456.789
n.toFixed(0) // => 123457
n.toFixed(2) // => 123456.79
n.toFixed(5) // => 123456.78900
n.toExponential(1) // => 1.2e+5
n.toExponential(3) // => 1.235e+5
n.toPrecision(4) // => 1.235e+5
n.toPrecision(7) // =>123456.8
n.toPrecision(10) // => 123456.7890
```

`Number()` is could be only used on pure number string, for example `'1.1'`, `'12'`. However `parseInt()`, `parseFloat()` would be more flexiable, they could be used on more complicated strings. And any notations will be accepted by the three functions above. One more thing for `parseInt()`, we could have a second to determine which notation we want the number to be converted into.  

```javascript
Number('12') // => 12
Number('0x15') // => 21
Number('1 dog') // => NaN
parseInt('1 dog') // => 1
parseFloat('1.3 meter 1') // => 1.3
parseInt('012') // => 10
parseInt('077', 8) // => 63
parseInt('077', 10) // => 77
```

### <a name="Obj2Pri"><a/>Convert native objects into primitive values
In JS,there two native functions to convert native objects into `string` or `number`, they are `toString()` and `valueOf()`. For different native objects, we have different version of `toString()`, but the default `toString()` for customized object won't return a fancy result like the native ones.  

```javascript
({a: 1, b: 2}).toString() // => "[object Object]"
[1,2,3].toString() // => "1,2,3"
(function(x) {console.warn(x)}).toString() // => "function(x) {console.warn(x)}"
/\d+/g.toString() // => "/\d+/g"
(new Date()).toString() // => "Mon Jun 24 2019 20:44:37 GMT+0800 (中国标准时间)"
```

`valueOf()` is also a way to convert objects into primitive values, but it only cover a really limited range of objects. For most of types of objects, `valueOf()` would only return themselves. 

```javascript
({a: 1, b: 2}).valueOf() // => {a: 1, b: 2}
[1,2,3].valueOf() // => [1,2,3]
(function(x) {console.warn(x)}).valueOf() // => ƒ (x) {console.warn(x)}
/\d+/g.valueOf() // => /\d+/g
(new Date()).valueOf() // => 1561380583463
```

Under some situations, JS would have to convert objects into string, and this conversion would be like the following step:  

- If this object has a `toString()` function, it would return the result of `toString()`.
- If this object does not have `toString()`, JS would try to call `valueOf()`, if `valueOf()` existed, then JS would convert the result of `valueOf()` into string and return it.
- If this object neither has `toString()` nor has `valueOf()`, or these two functions could not provide a primitve value as a result, JS will throw a type error.  

And the step which JS convert objects into number is somewhat the same as above:  

- If this object has a `valueOf()` function, JS would convert the reuslt of `valueOf()` into number and return it.
- If this object has no `valueOf()` function, JS would try to call `toString()` and convert the result into number and return it.
- When the two steps could not get a desired result, JS would throw a type error.  

Base on the rules above, we could sketch a rough picture of how different types would be converted to primitive values in JS. Next, let's take a look of some examples:  

`Number([1]); // => 1`
```javascript
var ary = [1];
ary.valueOf() // => [1], not a primitive type, so try to call toString()
var str = ary.toString() // => "1"
Number(str) // => 1
```

`Number([]); // => 0`
```javascript
var ary = [];
ary.valueOf() // => [], not a primitive type, so try to call toString()
var str = ary.toString() // => ""
Number(str) // => 0
```

`[1] + 1 // => "11"` or `1 + [1] // => "11"`
```javascript
var ary = [1];
ary.valueOf() // => [1], not a primitive type, so try to call toString()
var str = ary.toString() // => "1"
'1' + 1 // => "11", when we have string in a plus operation, then it would be a concat of string.
```

`1 == '1' // => true`
```javascript
var num = 1;
var str = '1';
num === Number(str); // true 
```
A full comparsion process of `==` could be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness).  

Relation operators like `==`, `>` would do the comparing process like above except for `Date` types. Most types of values would first try to convert into Number or say call `valueOf()` first, but for `Date` objects, it would call `toString()` first and won't do any conversions later.  

Complex comparing process above would only happen on `+` and relation operators, other operators like `-` would simply try to convert all types including `Date` Objects into `Number`.  

