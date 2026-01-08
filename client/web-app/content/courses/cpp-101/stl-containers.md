---
title: STL Containers
description: In this section, we will cover the importance of STL containers!
tags:
  - stl
  - list
  - map
  - vector
  - set
  - container
  - data-structure
published: false
lang: cpp
course: cpp-101
order: 15
---

### Containers in STL:
1. Vector: good at inserting and removing at the end of the container and is accessible by index!
2. List: efficient at inserting/removing at the front, the back, or during iteration, but does not support indexing (no `[]` operator).
3. Set: efficient at searching, inserting, and removing!
4. Map: also efficient at searching, inserting, and removing!

### Vectors: A nice alternative to arrays.
Vectors are the same as dynamic arrays with the ability to resize themselves automatically when an element is inserted or deleted, with their storage being handled automatically by the container. Vector elements are placed in contiguous storage so that they can be accessed and traversed using iterators. In vectors, data is inserted at the end. Inserting at the end takes differential time, as sometimes the array may need to be extended. Removing the last element takes only constant time because no resizing happens. Inserting and erasing at the beginning or in the middle is linear in time.

Vectors are sequence containers representing arrays that can change in size.

More on [vectors](https://cplusplus.com/reference/vector/vector/)

In C++, a vector is a dynamic array that can grow or shrink in size. It's part of the Standard Template Library (STL) and provides a flexible way to store and manipulate collections of data.

Here's a simple explanation:

1. Dynamic Size: Unlike regular arrays in C++, vectors can change their size during runtime. You don't need to specify the size when you create them.
2. Similar to Arrays: Vectors behave a lot like arrays, but they offer more flexibility. You can access elements by index, just like with arrays.
3. Automatic Memory Management: Vectors handle memory allocation and deallocation for you. You don't need to worry about managing memory manually.

`vector` is one of several [sequence containers](https://en.cppreference.com/w/cpp/named_req/SequenceContainer) in the STL, i.e. types that support functions like **push_back**, **size**, etc. The STL sequence containers are **array**, **deque**, **forward_list**, **list**, **string**, and **vector**. We will discuss STL more in the advanced C++ course!

A vector object maintains an “array” internally, and will manage that to support an arbitrary number of elements in the sequence.

It's common to use a vector instead of an array, so you don't have to manually allocate/deallocate arrays and manage array sizes.

Some member functions:
1. `push_back()`: Appends an element
2. `pop_back()`: Removes last element
3. `size()`: Returns the number of elements
4. `operator[]()`: This function gets called every time you “index” into a `vector` using square brackets. This has no more overhead than indexing into a regular array.
5. `begin()`: Gets an iterator to the beginning of the sequence
6. `end()`: Gets an iterator “past the end” of the sequence
7. `data()`: Gets a pointer to the actual internal array
8. `capacity()`: Returns the allocated size of the actual internal array

Vectors are efficient at:
Inserting/removing at the end of the container and is accessible via indexing!

Here's an example of how you might use a vector:

```cpp
std::vector<int> v1; // Creates an empty vector of integers

v1.push_back(10); // Adds 10 to the end of the vector
v1.push_back(20); // Adds 20 to the end of the vector

for (int i = 0; i < v1.size(); i++)
  std::cout << v1[i] << " "; // Access and print elements
std::cout << '\n';
```

This will output `10 20`.

Just like arrays, vectors must hold data of the same type! Meaning all strings, all ints, all bools, etc.

Insert words into the end of a vector called `words`:

```cpp
std::vector<std::string> words;
for (std::string word; std::cin >> word;)
  words.push_back(word);
```
Results: All whitespace delimited tokens in `stdin`, in order

Vectors are very versatile and useful for a wide range of tasks where you need to store collections of data of variable size. They're one of the many powerful tools available in C++ to help you manage and manipulate data.

Vectors are less efficient at inserting unless it's only adding to the end of the container.
### Lists: A sequential, non-indexable container
Good for modifying (inserting, removing) at any point! [More on Lists](https://cplusplus.com/reference/list/list/)
1. A `list` appears similar to a `vector` in terms of its interface (very similar functions, e.g. `push_pack`, `size`, etc.), but it is implemented very differently (usually as a “doubly linked list” —more on that later).
2. `list` is efficient at dealing with inserting or removing elements anywhere in the list, whereas `vector` is only efficient with such mutations at the end of the sequence. `list` iterators are the key to performing these operations.
3. `list` does not support indexing! It would be a computationally inefficient operation, and the STL is focused on providing efficiency.
4. Can resize itself dynamically (details handled by a list class)
5. Efficient:
   - Inserting/removing at the front or back and during iteration
   - Does not support indexing (no operator[ ] function)

### Sets: A computationally efficient collection of unique values
1. Sets are collections are unique values (sometimes called *keys*).
2. Sets offer **very** efficient `find`, and `erase` operations, compared to `vector` and `list`. In other words, sets are fast at searching.
3. `std::set` has an inherent order if you iterate its elements. `std::unordered_set` does not.
4. Values in a `std::set` must be mutually comparable.
5. Values in a `std::unordered_set` must have a specialization of template function [std::hash](https://en.cppreference.com/w/cpp/utility/hash) defined, which is true for all fundamental types, and also for common STL types like `std::string`.
6. A `std::unordered_set` will generally be faster than a `std::set`, so unless you need lexicographic order of the set keys, `std::unordered_set` is usually a better choice.

[More on Sets](https://cplusplus.com/reference/set/set/)

### Maps: Possibly the most useful STL container!
1. Each entry in a `std::map` or a `std::unordered_map` is a **key-value pair**. The keys constitute a set (and therefore must be unique).
2. **Looking up** a **value** by its associated **key** is a **very fast operation**.
3. In other languages this is sometimes called a “dictionary” (e.g. Python) or “associative array” (e.g. PHP).
4. Keys in a `std::map` must be mutually comparable.
5. Keys in a `std::unordered_map` must have a specialization of template function [std::hash](https://en.cppreference.com/w/cpp/utility/hash 'https://en.cppreference.com/w/cpp/utility/hash') defined, which is true for all fundamental types, and also for common STL types like `std::string`.
6. A `std::unordered_map` will generally be faster than a `std::map`.

[More on Maps](https://cplusplus.com/reference/map/map/)

Simple illustration of STL (unordered) map:
```cpp
#include <fstream>
#include <iostream>
#include <string>
#include <unordered_map>

int main() {
  std::unordered_map<int, std::string> zip_codes;
  int zip;
  {
    std::ifstream zipcities("/srv/datasets/zipcities");
    int zip_code;
    std::string city_state;
    // file line contents: ZIP\tCity, State
    while (zipcities >> zip_code && zipcities.seekg(1, std::ios_base::cur) &&
           std::getline(zipcities, city_state)) {
      zip_codes[zip_code] = city_state;
    }
  }
  while (std::cin >> zip)
    std::cout << zip_codes[zip] << '\n';
}
```

### `std::sort` And Examples:
- takes in random access iterators
- sorts in ascending order
- works for all containers

Example with a vector of integers:
```cpp
std::vector<int> data{5,2,4,3,0,1};
std::sort(data.begin(), data.end());  // std::sort is pretty quick with vectors
for (auto x : data)
  std::cout << x;
std::cout << '\n';
// Output: 012345
```

Get a list of words:
```cpp
// Fill a std::vector with all whitespace-delimited strings from stdin using 2 iterators
std::vector<std::string> word_vector(std::istream_iterator<std::string>(std::cin), std::istream_iterator<std::string>());

// Create a list from the vector in range (vector.begin() -> vector.end())
// Kind of like using push_back() repeatedly
std::list<std::string> word_list(word_vector.begin(), word_vector.end());
```

Alternatively:
```cpp
std::list<std::string> words;
for (std::string word; std::cin >> word;) {
  if (std::isupper(word[0]))
	words.push_front(word);
  else
	words.push_back(word);
}
```
