---
title: Loops
description: In this section, we will cover the importance of loops!
tags:
  - loops
  - while
  - for
published: true
lang: cpp
course: cpp-101
order: 6
---

In programming, loops are used to repeat a block of code multiple times. They're like a set of instructions that the computer repeats until a certain condition is met.

## While Loops:

A **while loop** repeatedly executes as long as a specified condition is true.
It's like saying "Keep doing this while the condition is met".
**While loops** are useful when the number of times needed to repeat the instructions is unknown.

```cpp
while (condition) {
	// execute block
}
```
### Code Example:
Here's an example of a **while loop** that reads user input and outputs the value:
```cpp
int input;
while (cin >> input) {
  cout << input << '\n';
}
```
To stop inputting values hit `ctrl-d` to end the loop. When `ctrl-d` is pressed the condition for the while loop is no longer true.

## For Loops:
A **for loop** is used to iterate (or loop) over a range of values.
It's like saying "Do this for a specific number of times".
For loops are useful while the number of iterations is already known.

```cpp
for (initialization; condition; increment/decrement) {
	// execute block
}
```

The syntax for a **for loop** is not as straightforward, but after seeing it a few times, you'll quickly see the pattern.

With a typical **for loop**, we do the following:
1. Define a variable (usually an **integer**) to keep track of the current iteration inside the loop.
2. Define a stopping condition.
3. Increment the loop.

### Code Example:
Here's an example of a **for loop** that will be executed 5 times where `i` is the value of the current index or iteration of the loop:
```cpp
for (int i = 0; i < 5; i++) {
  cout << i;
}
cout << '\n';
```
This loop will print out `01234`.

## Ranged-Based For Loop:
The last thing I should cover is a **range-based for loop**. **Ranged-based loops** are similar to **foreach** loops in other languages. For example, "for each" `char` in a `string` do something!

In this snippet, the ranged-based loop capitalizes each letter in the given string.

```cpp
string str = "hello!";
for (char &c : str) {  // note: we need a reference to modify the original
  if (c >= 'a' && c <= 'z') {
    c += ('A' - 'a');
  }
}
cout << str << '\n';  // HELLO!
```

## The Difference:
**While Loop**: Used when you want to repeat a block of code based on a condition. You might not know in advance how many times the loop will run.

**For Loop**: Used when you know exactly how many times you want to repeat a block of code. It's great for iterating over a range of values or performing a specific task a known number of times. For example, looping over arrays or strings!

Depending on your specific use case, you can reproduce the same results with either loop.