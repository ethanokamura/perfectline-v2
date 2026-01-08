---
title: Nodes
description: Let's start off by covering the node class!
tags:
  - data-structure
  - linked-list
  - references
  - pointers
  - custom-data
  - classes
  - objects
  - oop
published: true
lang: cpp
course: linked-list
order: 1
---

As stated previously, each element of the list will consist of a Node object. We will not need to access these outside of our linked list so they will be created and solely available inside this class.

Each node consists of:
  1. Data
  2. A pointer to the previous node
  3. A pointer to the next node

Keeping track of the next and previous node will help us navigate through our list!

Doubly linked lists support traversal in both directions and operations at either end, so it makes sense to have pointers to both ends of the list (`head` and `tail`).

Here's what our `Node` data type looks like
```cpp
struct Node {
  T data;
  Node* next = nullptr;
  Node* prev = nullptr;
  // default constructor!
  Node(T value) : data(value), next(nullptr), prev(nullptr) {}
};
```

Just like the linked list itself, the nodes also hold generic data `T`.

In the constructor, we want to set default values for the data along with initializing our next and previous nodes (relative to the node we want to create).