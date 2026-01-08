---
title: Operator Overloading
description: Making our list easier to work with!
tags:
  - data-structure
  - linked-list
  - operators
  - operator-overloading
  - classes
  - functions
published: true
lang: cpp
course: linked-list
order: 6
---

At this point in the course, we will probably want to add the ability to have custom operators. If you have never heard of operator overloading or you want to brush up on vocabulary, you can check out my section in the Intro to C++ course [here](https://perfectline.io/courses/cpp/cpp-101/operator-overloading). Otherwise, you can learn as you go.

We will want to add the following operators to our linked list: `= == !=`.

**NOTE**: We want two different `=` operator functions. One is to copy the values from a list and one is to copy the values from another linked list.

Now you might be wondering why we would need to copy values when we have the copy and list constructors. Well, the constructors only apply when we are creating the linked list. If we want to set the values of our list to something else or copy another list at any point when using this data structure, we now can.

## Assigning Linked List to A Set of Data
For this function, we will want to clear the list and then put the desired values into the list.
```cpp
// assigns list to a new list
LinkedList& operator=(std::initializer_list<T> init_list) {
  clear();
  for (const T& val : init_list) push_back(val);
  return *this;
}
```
## Assigning Linked List to Another Linked List
Just like the last function, we will want to clear the list and then put the desired values into the list. This time, however, we are copying from another linked list. This means we should iterate through the other linked list accordingly.
```cpp
// assigns list to an existing list
LinkedList& operator=(const LinkedList &another) {
  Node *current = another.head;
  clear();
  while (current != nullptr) {
    push_back(current->data);
    current = current->next;
  }
  return *this;
}
```
## Checking For Equivalence
For this next operator, we will want to check to see if the linked lists are the same. For this, I think it would be best to use indexing.

We don't have indexing set up yet, but we will do this in the next section. For now, we will write it and then add the functionality after.

We start by checking the size of the linked lists. If those are not equal then we immediately return false. We do not have to do anything else.

We then loop for each value in the linked lists. Again, we already know that the size of each list is equivalent, so we can use this size or the other linked list's size for the loop. If at any point the values are not equal, we return false.

If we finish the loop, at this point we know both linked lists are equal so we return true.
```cpp
// checks list for equivalency to another list
bool operator==(const LinkedList &another) {
  if (size() != another.size()) return false;
  for (std::size_t i = 0; i < size(); i++)
    if (another[i] != (*this)[i]) return false;
  return true;
}
```

## Checking For Inequivalence
For this operator, we can just reuse our `==` operator. We just put a `!` operator in front.
```cpp
// checks list for inequivalence to another list
bool operator!=(const LinkedList &another) { return !(*this == another); }
```

Just like that, we have added comparison and copy operators to our linked list! In the next section, we will add indexing.