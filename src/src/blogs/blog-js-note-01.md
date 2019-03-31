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

