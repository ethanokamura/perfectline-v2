---
title: STL Overview
description: In this section, we will do a general overview of the Standard Template Library and Iterators
tags:
  - stl
  - iterators
published: false
lang: cpp
course: cpp-101
order: 14
---
### Standard Template Library (STL)

### General Notes:
Iterators:
  - Access containers
  - Pointer-like access to containers and I/O
Function Objects
  - Use iterators
  - Assist generic algorithms
  - Functions as callable values (passable as arguments, etc.)
Generic Algorithms:
  - Apply to containers
  - Use iterators
  - Function templates for manipulating containers e.g. std::transform()
Containers:
  - Sequential: string, vector, list (stack, queue)
  - Associative: set map

### STL Iterators:

Every STL container has member functions:
`.begin()` and `.end()` (some have `.rbegin()` and `.rend()`)
This applies to vectors, strings, etc.

Order of member functions:

1. `.rend()` is before container
2. `.begin()` is the first value of the container
3. `.rend()` is the last value of the container
4. `.end()` is after container

`r` in `.rbegin()` and `.rend()` stands for reverse!
##### Example:
```cpp
std::string str("hello");
std::cout << str.begin() << '\n';  // some memory address
std::cout << *str.begin() << '\n';  // h
std::cout << str << '\n';  // hello
```

A header file for iterator templates:
```cpp
#ifndef ITERATOR_DEMO_H_
#define ITERATOR_DEMO_H_

#include <list>
#include <string>
#include <vector>

template <typename T>
double mean_iterators(const T &collection) {
  double sum = 0;
  for (auto pos = collection.begin(); pos != collection.end(); ++pos)
    sum += *pos;
  return sum / collection.size();
}
template <typename T>
double mean_range_based(const T &collection) {
  double sum = 0;
  for (auto &val : collection)
	sum += val;
  return sum / collection.size();
}
#endif  // ITERATOR_DEMO_H_
```

Using the template `mean_iterators` from the header file with the previously defined string `str`:
1. `typename T` would be a string.
2. `collection` would be a reference to `str`.
3. `for` loop:
   1. `auto`: figures out the type to get its value (`std::string`).
   2. `pos = collection.begin()`: iterator of the first char in the string (`'h'`).
   3. `pos != collection.end()`: iterate until the end of the container is reached (`'o'`).
   4. `++pos`: iterate through each item in the container.
4. `sum += *pos`: sum of dereferenced values (in this case it is the sum of ASCII values).
5. returns the average value of the `char` in the string, `str`.

```cpp
std::cout << mean_iterators(str) << '\n';  // 106.4
```

An example of `mean_iterators()` with a vector of integers:

```cpp
mean_iterators(std::vector<int>{2,4,6,0,1})  // 2.6
```

Ranged-based loops (ie. `mean_range_based()`) are just _syntactic sugar_ (a nicer way of writing something) on top of dereferencing and incrementing iterator objects from `begin()` to `end()`. They both end with the same machine code.

