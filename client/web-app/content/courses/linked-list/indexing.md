---
title: Indexing
description: Let's access data in an easier, prettier way.
tags:
  - data-structure
  - linked-list
  - indexing
  - operator-overloading
  - time-complexity
  - iterators
  - functions
published: true
lang: cpp
course: linked-list
order: 7
---

In this part of our linked list, we may want to index our list to make dealing with nodes a little easier.

In our case, using the index operator `[]` to access elements in a linked list can be slower compared to directly traversing the list using pointers. This is because using the index operator requires traversing the list from the beginning each time you access an element at a specific index.

## Disadvantages
1. **Traversal Overhead**: With the index operator, you start from the head of the list and traverse it sequentially until you reach the desired index. This traversal process takes time proportional to the index you're trying to access.

2. **No Direct Access**: Unlike arrays, where elements are stored contiguously in memory and can be accessed directly using pointer arithmetic, linked lists require sequential traversal to reach a specific node. Each traversal step involves following the next pointer of the current node.

3. **Time Complexity**: While both methods have a time complexity of O(n) for accessing an element at a specific index, using the index operator involves more overhead because it requires traversing the list sequentially from the beginning, while direct traversal using pointers can be more efficient. We cover time complexity in our [DSA course](https://perfectline.io/courses/cpp/dsa/complexity).

## Advantages
This being said I think the indexing is worth it because it allows us to traverse to a specific node without using nodes. When working with other structures with a linked list in the background, we will want to access data at a specific point and will not have access to the node type.

In practical scenarios, the difference in performance might not be significant for small lists or occasional access operations. It's essential to consider factors such as the size of the list, the frequency of access, and the overall performance requirements of your application when choosing between the two methods.

In general, if you need frequent random access to elements or performance is critical, direct traversal using pointers may be more efficient. On the other hand, if simplicity and ease of use are more important, the index operator can provide a convenient way to access elements in the linked list.

## Indexing
Ok, so after all that, let's write our indexing operation. This will take the parameter of an index to loop to. We will want to do the following:
1. Make sure the index is within the bounds of our linked list.
2. Create a node pointing to our head node.
3. Iterate through the list until we reach the desired index
4. Return the data to that index.
```cpp
// allows indexing functionality
T &operator[](std::size_t index) const {
  if (index >= list_size) throw std::out_of_range("Index out of range");
  Node *current = head;
  for (std::size_t i = 0; i < index; ++i) current = current->next;
  return current->data;
}
```

**NOTE**: This returns a const value. By adding const after the function declaration, you're indicating that this member function can be called on const objects of LinkedList, and it won't modify the object's state.

This next part is optional, but here are some functions we can create with our new indexing operator:

## Reverse The List
If we want to reverse the list for whatever reason, it is now made extremely easy!
```cpp
// reverse the order of elements
void reverse() {
  for (std::size_t i = 0; i < size() / 2; ++i)
    std::swap((*this)[i], (*this)[size() - 1 - i]);
}
```
**NOTE**: This uses `std::swap` but you can easily write your swap function.

## Contains?
Let's say we want to find out if the list contains a certain value. Well, now we can do this with a simple for loop.
```cpp
// check if a value exists in the linked list
bool contains(const T &value) const {
  for (std::size_t i = 0; i < size(); ++i)
    if ((*this)[i] == value) return true;
  return false;
}
```

## Remove All
We mentioned earlier that we may want to remove all data that matches a certain value. To do this, we index through our list and remove any node that holds data matching the target value.

```cpp
// function to remove all occurrences of a value from the linked list
void remove_all(const T &target) {
  for (std::size_t i = 0; i < size(); i++) {
    if ((*this)[i] == target) {
      remove(target);
      --i;
    }
  }
}
```