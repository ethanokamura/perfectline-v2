---
title: Constructors
description: In this section, we will cover the importance of constructors!
tags:
  - oop
  - classes
  - objects
published: true
lang: cpp
course: cpp-101
order: 12
---
When we create classes and structs, we need to also talk about [constructors](https://www.w3schools.com/cpp/cpp_constructors.asp)

## What is a Constructor?
Constructors initialize our classes so that we can create and use objects! There are a whole bunch of different ways to construct a class. For now, let's look at 4 examples:
1. Default Constructors
2. List Constructors
3. Copy Constructors
4. Range Constructors

## Default Constructors
A default constructor is a constructor where no value is assigned on the creation of an object. Essentially it is like creating a variable but not assigning it a value, so, by **default** we assign it values.

Here's an example of a **Default Constructor** for a class.
```cpp
class Pizza {
 public:
  Pizza() : slices(12) {}
 private:
  int slices;
};

// create a pizza object!
Pizza pizza;
```
When the object is created, we automatically assign its number of slices to 12. This means that any pizza we create starts with 12 slices!

More on [default constructors](https://en.cppreference.com/w/cpp/language/default_constructor)

### Initializer List Constructor
We may want to create an object using a list of values (in braces).

This allows us to initialize our object in the same way we would initialize a variable. For this, let's create a couple of pizzas.

```cpp
class Pizza {
 public:
  Pizza(int amount_of_slices) {
    slices = amount_of_slices;
  }
 private:
  int slices;
};

Pizza pizza1{14};
Pizza pizza2{6};
Pizza pizza3{342};
```
We now create a pizza that starts with a dynamic amount of slices!

## Copy Constructors:
We may want to make a copy of our object to either replicate or manipulate the values without disturbing the integrity of the original object. To do this, we create a new object by copying all the values from the original object to the new object.

To do this, we initialize an object using another object of the same type (thus creating a copy).

Here's an example with a vector.
```cpp
vector<int> a{ 1, 2, 3 };
vector<int> b(a);
```

This code example shows that we have successfully copied `a` to `b`, but they have unique **memory addresses** (more on this later)!

More on [copy constructors](https://en.cppreference.com/w/cpp/language/copy_constructor).

### Range Constructor:
Purpose: initialize an object using a range of values specified by iterators.

Here's an example:
```cpp
std::string test("hello!");
std::string reversed(test.rbegin(), test.rend());
```

