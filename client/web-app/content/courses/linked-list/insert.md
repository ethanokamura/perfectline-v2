---
title: Insert
description: Let's add data to our list!
tags:
  - data-structure
  - linked-list
  - functions
published: true
lang: cpp
course: linked-list
order: 3
---

Ok, now that we have the constructors and destructor working, we need to create a way to insert elements or data into the list!

To do this, we should have an insert function.

If you have used vectors before, you have probably used the function `push_back()` where you put data at the end of the list.

Well, for this list, we may want to add data to both the front and the back of the list! Therefore, we will create the functions `push_front()` and `push_back()`.

We will define these functions like so:
```cpp
void push_front(T val);
void push_back(T val);
```

## Push Front
To insert data to the front of the list, we will need to assign the list a new head (the node we want to insert).

**NOTE**: When we do this, we will also need to increase the size of the `list_size` variable.

To save us some time, we may want to check to see if the list is empty, if so, we will need to make the new node both the head and tail of our linked list.

Let's see a code example:
```cpp
// adds a new element (val)
// assigns new element as head
void push_front(T val) {
  Node* new_node = new Node(val);
  if (list_size == 0) {
    head = tail = new_node;
  } else {
    new_node->next = head;
    head = new_node;
  }
  list_size++;
}
```

## Push Back
To insert to the back of the list, the function is pretty much the same as the push front, except in this function, we are redefining the tail.
```cpp
// adds a new element (val)
// assigns new element as tail
void push_back(T val) {
  Node* new_node = new Node(val);
  if (list_size == 0) {
    head = tail = new_node;
  } else {
    tail->next = new_node;
    tail = new_node;
  }
  list_size++;
}
```

Just like this, we can now add data to both the front and the back of the linked list! The constructors should be functional now.