---
title: Remove
description: Let's remove data from our list!
tags:
  - data-structure
  - functions
  - memory
  - deallocation
  - delete
published: true
lang: cpp
course: linked-list
order: 5
---

I believe the next logical functionality to add would be to remove data. Just like inserting data, we may want to move from the front and the back.

We define these functions as:

```cpp
void push_front(T val);
void push_back(T val);
```

Believe it or not, the pop front and pop back are a bit different.

Let's start with removing the head.

## Pop Front
This function does the following:
1. Assign a temporary node pointing to the head of the linked list.
2. Assign the head to the next node in the list and delete the pointer to the old head (temp).
3. Check to see if the head is null, if so, the tail should also be null.
3. Decrease the size of the linked list.

```cpp
// removes the current head node from the list
// reassigns new head
void pop_front() {
  if (empty()) throw std::domain_error("empty list!");
  Node *temp = head;
  head = head->next;
  delete temp;
  if (head == nullptr) tail = nullptr;
  list_size--;
}
```
Now it's time to remove the tail!

## Pop Back
There could be a simpler way of removing the tail if we had access to the previous node, however, for this course, we will not be implementing a pointer to the node's previous node.

To remove the tail, we must first see if the head's next node is null. If so, the linked list has a size of one. In this case, we just delete the existing head and set both the head and the tail to null. If this is true, we do not need to do anything further in this function so we return.

Next, we want to iterate through the list and look for one node past our tail. To do this, we use double arrow syntax `current->next->next`. If we find that the next node is null, that means that the next node is the tail. We then delete the tail and set the tail equal to our current node.

Lastly, we decrement our size variable.

```cpp
// removes the current head node from the list
// reassigns new head
void pop_back() {
  if (empty()) throw std::domain_error("empty list!");
  if (head->next == nullptr) {
    delete head;
    head = tail = nullptr;
    list_size--;
    return;
  }
  Node *current = head;
  while (current->next->next != nullptr) current = current->next;
  delete current->next;
  current->next = nullptr;
  tail = current;
  list_size--;
}
```

## Remove Value
We may want to remove a specific value inside our linked list. Specifically, removing the first value that matches the target value in the list.

Later in the course, we will cover removing all values in the list that match the target value, but for now, we will remove the first found value.

We take in a target value as the parameter for the function.

To accomplish removing that target we will do the following.
1. Make sure the list is not empty
2. Check to see if our head is equal to the target, if so, remove the head.
3. Loop until we find the target.
4. If the target is found, delete the node.
```cpp
// removes the first value in the list that matches the target value
void remove(const T &target) {
  if (empty()) return;
  if (head->data == target) {
    pop_front();
    return;
  }
  Node *current = head;
  while (current->next != nullptr && current->next->data != target)
    current = current->next;
  if (current->next != nullptr) {
    Node *temp = current->next;
    current->next = current->next->next;
    list_size--;
    delete temp;
  }
}
```

We have now finished our functionality for removing data!

The last function we might want to add is a function to clear our list:

```cpp
// clears the linked list
void clear() {
  while (head) pop_front();
}
```

This just checks to see if the head is not a **nullptr**. If so, there are still nodes in the list so we remove them.

