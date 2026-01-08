---
title: Functions
description: In this section, we will cover the importance of functions!
tags:
  - functions
published: true
lang: cpp
course: cpp-101
order: 8
---
Functions are "self-contained" modules of code that accomplish a specific task. Functions usually "take in" data, process it, and "return" a result. Once a function is written, it can be used over and over and over again. When we extract the value or use a function we refer to it as "calling the function".

**NOTE**: You can use functions to call other functions.

When we use other, smaller functions to help us complete the task of a bigger function, we call them helper functions.

A function can even call itself in the function body. This is called recursion and will be covered in a different section.

## Function Definition:
A function definition is just like it sounds. We are defining a function to complete a specific task.

Similar to a variable declaration, we need to state the data type. However, when we define the type, we are determining what type of value the function would return. For example, if we had a function that calculated the total cost of a road trip, we would want to return a **double** to represent the total cost!

The function will need **parameters** or **arguments** such as the price per gallon of gas, the miles per gallon your car produces, and the total number of miles in your trip!

Here's what that function may look like:
```cpp
double price_of_trip(double price_per_gallon, double mpg, double miles);
```

We have the function **parameters** inside the parentheses to complete the declaration of the function. The parameters take in both a type and the name of the variable. Your function can have any number of **arguments**.

The parameters do not have to be of the same type as the function's **return value**. Meaning a function could take a string as a parameter, but return a true or false value.

**NOTE**: The parameters have **scope** local to the function, meaning they are used inside the function, but cannot be referenced outside the function.

## Function Implementation
For the function to do anything, we now need to implement the code. For this specific function, all we would need is a little bit of math!

Here's what that would look like:
```cpp
double price_of_trip(double price_per_gallon, double mpg, double miles) {
  return miles / mpg * price_per_gallon;
}
```

Though this is an extremely simple example, functional programming is crucial! The ability to break tasks down into smaller tasks will be a necessity throughout your lifetime as a programmer.

**NOTE**: A function should never do more than one thing, if a function is doing multiple tasks, break it into smaller functions!

## Calling the Function
We then need to call the function for it to be executed. We normally call the functions within the `main` function.

This might look something like this:
```cpp
double total_price = price_of_trip(3.20, 22, 500);
cout << "total price: " << total_price << '\n';  // total price: 70.4
```

The function will return a `double` with the value of `70.4`. We held the return value inside the `total_price` variable.