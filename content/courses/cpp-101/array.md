---
title: Arrays
description: In this section, we will cover the importance of arrays!
tags:
  - data-structure
  - array
published: true
lang: cpp
course: cpp-101
order: 6
---

## What is an array?
An array is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key.

An example of an array we use all the time is a **string**. _strings are just arrays of characters_ (`char[]`).

Arrays hold data of the same type meaning an array of **integers** or an array of **characters**.

Here's a simple example in pseudocode:

```cpp
auto my_array[] = { item1, item2, item3, ... }
```

So, `my_array` could be a collection of numbers, names, or any other type of data. You can access the items in the array using an index (which is like the compartment number). The first item in an array is held at index 0.

## Defining an array
The syntax for arrays are pretty simple:
1. Define the data type.
2. Define the name of the array.
3. Use the `[]` operator to signify that you want to create an array.
4. Define the size of the array (how many elements are inside it).
5. (Optionally) set default values for the items in the array using curly brackets. Be sure to separate each element with a comma.

There are a few ways to initialize an array. Here are 3 examples:
```cpp
int numbers[] = { 1, 2, 3 };
```
```cpp
int numbers[3] = { 1, 2, 3 };
```
```cpp
const int SIZE = 3;
int numbers[SIZE] = { 1, 2, 3 };
```

## Indexing
To retrieve items in an array, we use indexing. Indexing is kind of like referencing the position an item is in.

**Note**: Indexing starts at 0. The last item in the array is equal to the size of the array minus 1.

This means that our numbers array has a size of 3, but only reaches an index of 2. Use the following as reference:

```cpp
numbers[0]; // == 1
numbers[1]; // == 2
numbers[2]; // == 3
```

Arrays are really useful for storing and organizing data in your programs!

One thing to note is that arrays cannot be resized. Meaning that if you have an array that is initialized with a size of 3, you cannot change its size to 2 or 4!
