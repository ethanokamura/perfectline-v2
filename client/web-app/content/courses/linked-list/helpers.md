---
title: Helper Functions
description: Time to add some helper functions!
tags:
  - data-structure
  - linked-list
  - iterators
  - functions
published: true
lang: cpp
course: linked-list
order: 4
---

We may need some helper functions to make our life easier when working within the linked list. Functions like checking if the list is empty, what the current size is, and a function that lets us print our list!

## Checking Size
Let's first start by creating a function to check the size of our list!
```cpp
// returns the size of the linked list
std::size_t size() const { return list_size; }
```

Next, lets create a function to check to see if the list is empty:
```cpp
// returns true if list is empty
bool empty() const { return head == nullptr; }
```

**NOTE**: Both of these functions have the `const` keyword. This is because these functions do not modify the object's state.

## Iterators
Other member functions we may want would be a **front** and **back** function. These will return a reference to the value at the front and back of the lists.

These are pretty simple. We will just need to return either the head or the tail of the list:
```cpp
// returns the value of the head node
T& front() const { return head->data; }

// returns the value of the tail node
T& back() const { return tail->data; }
```

This should work fine, but we may want to [throw](https://en.cppreference.com/w/cpp/language/throw) an error if the head or tail does not exist. To do this, we will use [std::domain_error](https://en.cppreference.com/w/cpp/error/domain_error)

```cpp
// returns the value of the head node
T &front() const {
  if (head == nullptr) throw std::domain_error("empty list!");
  return head->data;
}

// returns the value of the tail node
T &back() const {
  if (tail == nullptr) throw std::domain_error("empty list!");
  return tail->data;
}
```

Again, these functions return a constant value.

The front and back functions act as iterators so we can do things like this:
1. Ranged-based for loop
2. `std::sort`
3. `std::find`
4. `std::count`
5. `std::swap`
6. `std::fill`
7. `std::min`
8. `std::max`
9. and other things in `<iterator>`

## Updating Our Functions
We may want to use the `empty()` when inserting:
```cpp
void push_front(T val) {
  Node* new_node = new Node(val);
  if (empty()) {  // edit
    head = tail = new_node;
  } else {
    new_node->next = head;
    head = new_node;
  }
  list_size++;
}

void push_back(T val) {
  Node* new_node = new Node(val);
  if (empty()) {  // edit
    head = tail = new_node;
  } else {
    tail->next = new_node;
    tail = new_node;
  }
  list_size++;
}
```