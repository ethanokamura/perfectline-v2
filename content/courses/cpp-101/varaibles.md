---
title: Variables
description: Learn all about variables!
tags:
  - variables
  - types
published: true
lang: cpp
course: cpp-101
order: 2
---
A variable is a named storage location in the computer's memory where you can store data. This data can be of different types, like numbers, text, or other kinds of information. C++ is a statically typed programming language, meaning that the type of variable must be known at compile time. C++ requires you to specify the type of variable or use the `auto` keyword.

(Try not to use `auto` unless necessary)

Here's a quick breakdown of how to use variables:
1. **Declaration**: To create a variable, specify the type of data it will hold and give it a name.
2. **Initialization**: After declaring a variable, you can also assign an initial value to it. This sets the initial content of the variable. Without initialization, the variable `x` will hold a "garbage value" more on this later.
3. **Usage**: You can then use the variable in your code. For example, you can perform operations on it, print its value, or use it in calculations.

```cpp
int x = 7;
int result = x + 10;  // result == 17
```
In this example, we declared and initialized a variable named `x` (of type integer) with a value of 7. We then declared a new variable named `result` with an initial value of `x + 10`.

Variables are crucial in programming because they allow you to store and manipulate data dynamically, making your programs adaptable and powerful. Remember to choose meaningful names for your variables to make your code more readable!
