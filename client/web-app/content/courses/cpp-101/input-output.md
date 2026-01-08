---
title: iostream
description: In this section, we will cover the importance of iostream!
tags:
  - standard-input
  - standard-output
  - iostream
published: true
lang: cpp
course: cpp-101
order: 4
---

By including C++'s standard input/output library `<iostream>`, we can create both inputs with `cin` and outputs with `cout` through the **command line**.

Command Line Interface: The command line is a text interface for your computer. It's a program that takes in commands, which it passes on to the computer's operating system to run.

## Import the Library
To start, let's include the [iostream](https://cplusplus.com/reference/iostream/) library at the top of our file:
```cpp
#include <iostream>
```
**NOTE**: When you include libraries you do not need semicolons!

Now let's get into the actual input and output.

## Syntax
We use `std::` to say in simple terms "Inside the standard library we are using...". In this specific case, we are using `std::cin` (console input from the standard library), `std::cout` (console output from the standard library), and `std::string` (a non-fundamental type). For any class, type, etc. that is not included in the C++ language, we access it using libraries or headers. To specify which library we are extracting them from we use the "`::`" syntax.

**NOTE**: The use of `std` can be avoided by writing the following line of code underneath the library imports:
```cpp
using namespace std;
```

With this line, we no longer have to include `std::` when referencing something from the standard library.

## Basic Output
To start a line of output, we use `cout` or "console out".

To end an output line you would finish with either `endl` or `'\n'`.

`\n` counts as a single character despite containing 2 characters at first glance. You can think of the backslash as a command. This is faster than writing `endl` not only for the user but also for the computer when executing the program.

```cpp
cout << "hello, world\n";
//  OR
cout << "hello, world" << endl;
```
These 2 variations work interchangeably. I prefer the `\n`.

## Chained Output
To include multiple pieces or variable types in an output, you use the [insertion operators](https://faculty.cs.niu.edu/~hutchins/csci241/io-op.htm) `<<` like glue. For example:

```cpp
cout << "this is an example of how to print the number " << 1 << '\n';
```

You should see the result of `this is an example of how to print the number 1` where the integer 1 could be replaced by any type of variable.

Notice how I left a space after the `number` to allow for space in front of the integer/variable. This is purely preference. I believe it allows for a more desirable outcome.

## Basic Input
To get input, we use `cin` or "console in".

```cpp
int input;
cin >> input;
```

Where `input` will hold the data we would like to extract.

**NOTE**: The "extraction operators" `>>` are similar to the insertion operators except they are flipped. This allows us to extract the user's input from the console.

## Wrapping Up

To put it all together, let's look at a simple program:
```cpp
cout << "enter your age: ";
int age;
cin >> age;
cout << "you are " << age << " years old!\n";
```
We have accomplished the following:
1. Prompted the user to input data.
2. Extract the data from the command line.
3. Output the data that we extracted.