---
title: Resizing
description: Resizing our linked list
tags:
  - data-structure
  - functions
  - memory
  - deallocation
  - delete
published: true
lang: cpp
course: linked-list
order: 8
---

The last two functions we may want to add is the ability to resize the list. We can do this in two ways. Allocating memory (and inserting null values as placeholders) or filling the structure with filler values!

## Resizing without a filler value
The first function we will look at is resizing without a value to fill the list with. To do this is simple.
1. Check to see if the desired size is already met. If so, return.
2. Push or pop based on whether the resize is larger or smaller than our current size.
3. Push 0, which will act as a null value.
```cpp
// resizes the list
void resize(std::size_t n) {
  if (list_size == n) return;
  while (list_size < n) push_back(0);
  while (list_size > n) pop_back();
}
```
## Resizing with a filler value
Resizing with a value is the same function, however, we take in a value to use as a filler as a parameter. We then push back that value instead of a null value.
```cpp
// resizes the list with filler values
void resize(std::size_t n, const T &fill_value) {
  if (list_size == n) return;
  while (list_size < n) push_back(fill_value);
  while (list_size > n) pop_back();
}
```
