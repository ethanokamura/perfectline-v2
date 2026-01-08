---
title: Constructors
description: Building and destroying our list!
tags:
  - linked-list
  - classes
  - template-classes
  - constructors
  - destructors
  - memory
  - memory-allocation
  - data-structure
  - functions
published: true
lang: cpp
course: linked-list
order: 2
---

In this section, we should create some ways for us to build our list! We need to allocate the memory necessary to hold our data. While we're at it, we should also create a destructor. The destructor will clean up any memory that must be deallocated. This will prevent [memory leaks](https://www.geeksforgeeks.org/memory-leak-in-c-and-how-to-avoid-it/).

All the constructors and destructors will be public member functions!

## Memory Leak
When a long-running program that has allocated memory, never gives back or deletes the allocation.

`valgrind` helps debug stuff like segmentation faults or memory leaks.

## Why Do We Need Constructors?
We will need at least one constructor for any class that we create. The constructor initializes our variables and constructs the object itself. We can have multiple constructors in case we want to build the lists in different ways.

We may want our list to be initialized with a list of elements or to create a list that is a copy of another list.

This being said, here are the three constructors we will be using:
1. **Default constructor**
2. **List constructor**
3. **Copy constructor**

**NOTE**: The list and copy constructor use the `push_back()` function! We will create this functionality in the next section.

## Default Constructor
The default constructor initializes the object of its class to some meaningful initial state. In our case, we will want to define the head, tail, and size of our list! Without setting values to our list (like creating a list), we will want to set the default nodes to null.

Here's what it looks like:
```cpp
// default constructor
LinkedList() : head(nullptr), tail(nullptr), list_size(0) {}
```

This looks very similar to the default constructor for our nodes!

## List Constructor
The list constructor will be similar to the constructor of an array or vector where we can initialize our linked list with a set of values.

The constructor will take the parameter of an [std::initializer_list](https://en.cppreference.com/w/cpp/utility/initializer_list). This is included in the `<initializer_list>` library. It essentially is like a set of values.

We pass in type `T` to stay aligned with our template class.

After that, we pretty much just loop through the list and insert it into our linked list!
```cpp
// list constructor
LinkedList(std::initializer_list<T> init_list) {
  for (const T &val : init_list) push_back(val);
}
```

## Copy Constructor
The copy constructor will be similar to the list constructor except we are copying values from another list rather than a set of values.

Again this is very similar to the list constructor because we are essentially just looping through the list we want to copy and inserting those values into our list.

The parameter for this function is a reference to another `LinkedList`!

We start by defining a reference to the head of the other `LinkedList`. We say "While the current node exists" (or is not null), we will push that data into our list! To move on to the next node in the other list, we assign our current node to the next node.
```cpp
// copy constructor
LinkedList(const LinkedList<T> &another) {
  Node* current = another.head;
  while (current) {
    push_back(current->data);
    current = current->next;
  }
}
```
**NOTE**: This can also be done with a for loop:
```cpp
// copy constructor
LinkedList(const LinkedList<T> &another) {
  for (Node* current = another.head; current; current = current->next)
    push_back(current->data);
}
```

## Destructor:
To reiterate, the destructor destroys the object and deallocates all memory allocated to the object (with [delete](https://www.geeksforgeeks.org/delete-in-c/)) _Essentially undoes the constructor._

Important things to keep in mind:
* This is a pointer-based structure
* This class will dynamically allocate memory to create (at least) Node objects
* Those Node objects must be deleted when a list dies.

This function looks almost identical to the copy constructor, but this time, we are deleting data, not inserting it.
```cpp
// destructor
~LinkedList() {
  Node* current = head;
  while (current != nullptr) {
    Node* next = current->next;
    delete current;
    current = next;
  }
}
```

And that's it for the constructors and destructors. This should take care of the memory allocation for creating and deleting our linked list.