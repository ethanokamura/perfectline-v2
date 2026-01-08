---
title: Classes And Objects
description: In this section, we will cover the importance of object oriented programming!
tags:
  - oop
  - classes
  - objects
published: true
lang: cpp
course: cpp-101
order: 10
---
At the beginning of this course, we learned about fundamental types in C++ like `int` and `bool`, but now let's look at how to make our types! We can do this by defining **classes** and **structs**.

## What is a Class?
A class is a blueprint or a template for creating **objects**. It's a way to group data (attributes) and actions (methods or functions) that operate on that data.

`class` in C++ is the building block that leads to **Object-Oriented Programming**. It is a user-defined data type, which holds its own data members and member functions, which can be accessed and used by creating an instance of that class.

## Here's an Example:

Consider the `class` of Cats. There may be many cats with different names and colors but all of them will share some common properties (ie. all of them will have 2 eyes, 4 legs, a nose, etc). So here, Cat is the class, and coat color, age, and weight are their properties.
  1. **Attributes:** These are like variables that hold information about an object. For example, if you're creating a class for cats, attributes could be things like `color`, `name`, `age`, etc.
  2. **Methods:** These are functions that define what actions an object can perform. For our cat example, methods could be things like `Meow()`, `Eat()`, `Scratch()`, and so on.

Here's an example of a simple class in C++:

```cpp
class Cat {
	// Attributes
	string color;
	string name;
  int age;

 public:
  // Methods
  void Meow() {
    // Code to meow
  }
  void Eat() {
    // Code to eat
  }
  void Scratch() {
    // Code to scratch
  }
};
```

Once you have a class defined, you can create **objects** (instances) of that class. Each object will have its own set of attributes and can perform actions defined in the methods.

For example:
```cpp
int main () {
	Cat cat1; // This creates an object of type Cat
	cat1.color = "Gray"; // Set the color attribute
	cat1.name = "Milo"; // Set the name attribute
	cat1.Meow(); // Call the Meow method
	return 0;
}
```

We could then go and create a second cat with all the same attributes and methods, yet still be completely different:

```cpp
int main () {
	Cat cat1;
	cat1.color = "Gray";
	cat1.name = "Milo";
	Cat cat2;
	cat2.color = "black";
	cat2.name = "frank";
	return 0;
}
```

Classes are fundamental in object-oriented programming and help organize code by encapsulating data and behavior into reusable units.

By default, all attributes and methods in classes are private, meaning that they can only be used within the class itself. To specify whether an attribute or method is private/public you use the `public` and `private` keywords. Here's an example:

```cpp
class SomeClass {
  // Public Attributes
  int x;

 // Public Methods
 public:
  void PublicMemberFunction() {}

 // Private Methods/Attributes
 private:
  char c;
  void PrivateMemberFunction() {}
};
```

Both `x` and `PublicMemberFunction` can be referenced and manipulated from outside the class whereas, `c` and `PrivateMemberFunction` can only be used inside the class.
