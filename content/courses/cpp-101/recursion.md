---
title: Recursion
description: In this section, we will cover the importance of recursion!
tags:
  - recursion
  - functions
published: true
lang: cpp
course: cpp-101

order: 9
---
As mentioned in the previous section, we can call a function inside of itself! This acts sort of like a loop. The function will repeatedly call itself until a base case is met.

Here's an example of a function that finds the factorial of a number!

```cpp
uint64_t factorial(uint64_t n) {
	if (n < 2) return 1;  // base case
	return n * factorial (n-1);
}

factorial(5);  // find 5!
```

## Base Case
It is extremely important to have a base case for our recursive functions, otherwise, we will have an **infinite loop**. This will lead to many breaking issues.

In the case of our factorial function, we have a base case for if our factorial is less than 2. This is because 1! and 0! are both equal to 1. This will also stop our function from calling itself again because it means we have completed the instructions!

For a recursive function, data is stored on the "stack" (memory typically stored in the cache). One call waits for another call which waits for another call until it reaches a base case where a value is returned.

Recursion is typically slower than a regular loop, but has important use cases and can be optimized. However, we won't be covering this in the course.

## The Fibonacci Sequence
The Fibonacci sequence is a classic mathematical pattern where the current number is the sum of the previous 2 numbers. It looks like this: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

The **nth** Fibonacci number is equal to the one before that plus the one before that.

```cpp
fib(n) = fib(n - 1) + fib(n - 2);
```

This is untrue for the first or second number!
```cpp
fib(0) = 0;
fib(1) = 1;
```

In this case, 0 and 1 would be our base case (just like with the factorial function).

Here's a completed Fibonacci function:
```cpp
uint_64t fib(uint64_t n) {
	if (n < 2) return n;  // base case
	return fib(n - 1) + fib(n - 2);
}
```

