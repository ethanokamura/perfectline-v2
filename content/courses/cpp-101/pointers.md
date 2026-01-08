---
title: Pointers
description: In this section, we will cover the importance of pointers!
tags:
  - pointers
  - memory
  - references
published: true
lang: cpp
course: cpp-101
order: 11
---
In this section, we are finally covering the topic of pointers! Pointers are everywhere, in some ways, everything boils down to being a pointer. Pointers are often thought of as one of the most challenging topics to cover in C++ but, in the right hands, they are not so complicated.

Pointers are a fundamental concept in programming, especially in languages like C and C++. They allow you to directly interact with **memory locations**. Here's a simple explanation:

**Memory Address**: Every piece of data in a computer's memory has a unique address. Think of it like a house number on a street. We may need to access that specific address at some point!

## Vocab
Here are 2 important definitions for this section:
1. **Pointer**: A pointer is a special type of variable that stores the memory address of another variable. It's like writing down the address of a house on a piece of paper.
2. **Dereferencing**: When you want to access the actual value at the memory address stored in a pointer, you "dereference" the pointer. This is like going to the house whose address you wrote down and seeing what's inside.

## Where would I see a pointer?
Pointers are just memory addresses!
- Arrays are just pointers which are just memory addresses.
- Strings are just an array of characters which are pointers which are just memory addresses.
- References are just pointers in disguise which are memory addresses as well.

So essentially:
* arrays == pointers
* strings == array of characters == arrays == pointer
* references == pointer
* everything == pointer

Before, we get into pointers, let's review some things:

## What even is a variable? And what does it hold?
4 important aspects of any variable:
1. Type
2. Name (identifier)
3. Value
4. Location (memory address)

```cpp
int x;  // where type: int, name: x, value: garbage, locaton: &x
```

Any fundamental type in C++ holds a garbage value until it's initialized. This is not true for non-fundamental types such as string which are empty upon declaration.

Location is always some integer value! (ie, the memory address of the variable) If we need it we can access it via `&` AKA the "address-of" operator

An example of a memory address might look something like `0x744c516a000`

In a program, each variable holds a unique memory address!

## Syntax
Here's some syntax that you'll see in the rest of the section:
1. **Pointers**: Pointers are declared using an asterisk (\*). They directly hold the memory address of another variable.
2. **References**: References are declared using an ampersand (&). They are essentially aliases for existing variables.

Here's an example:
```cpp
int n = 7;      // seems normal
int *ptr = &n;  // a pointer to n's memory address
```

`ptr` is the location of the address of `n` and is of type `int*` where `*` represents a pointer.

In this example:
- `n` is 7
- `&n` is n's memory address
- `ptr` points to the address of `n` (ptr and &n are equivalent)
- `&ptr` is a different memory address
- `*ptr` dereferences the pointer and is equal to the value of `n` (7).

Pointers are powerful because they allow you to manipulate data at a lower level, which can be very useful in certain situations. However, they can also be a bit tricky, so it's important to be careful when using them to avoid errors in your code.

## C Strings
Now let's look at "strings". In C, there is no string type. Instead, we have either `char[]` or `char*`. And believe it or not, in C and C++, arrays don't exist either.

All of these c strings (strings of characters) are equivalent:
```cpp
char msg[] = "hello";
char msg[] = { 'h', 'e', 'l', 'l', 'o', 0 };
char msg[] = { 'h', 'e', 'l', 'l', 'o', '\0' };
```

To check the length of a string, one could use the function:
```cpp
int strlen(const char *str) {
	int len = 0;
    for(; *str; ++str)
	    ++len;
	return len;
}
```

When the function is called via:
```cpp
strlen(msg);
```

The parameter `str` in the function `strlen()` gets a copy of the argument: pointer/memory address of `msg`.

In the function itself, when we use `*str` we are **dereferencing** it or getting its actual value at the address being pointed to.

By incrementing `str` with `++str` we are increasing the value of the pointer/memory address `str` by the size of on char. Meaning we move forward to the next item in the referenced string.

## Why the hell would I want to use pointers
At this point, you might be wondering: When do you _need_ to use pointers
1. Whenever you are using arrays. (You have no choice)
2. Rarely! (You should use `std::vector` instead of arrays most time)
3. Whenever you are using references. (They are just pointers)

So where, if anywhere, do pointers show up in the STL?
* Not too frequently, but you may find them useful occasionally!

## Difference between references and pointers:
In C++, both references and pointers are used to work with memory addresses, but they have some important differences:

### Nullability
Pointers: Pointers can be assigned a special value `nullptr` to indicate that they are not pointing to any valid memory location.

**NOTE**: References must always be initialized and cannot be changed to refer to a different object after initialization.

Here's the code example:
```cpp
int* ptr = nullptr; // Valid
int& ref; // Error: References must be initialized
```

### Dereferencing
**Pointers**: To access the value pointed to by a pointer, you use the dereference operator (*) like `*ptr`.

**References**: References do not require dereferencing. They are used directly, similar to regular variables.
```cpp
cout << *ptr << endl; // Access value pointed to by ptr
cout << ref << endl;  // Access value through ref
```

### Reassignment
**Pointers**: Pointers can be reassigned to point to different memory locations.
**References**: References cannot be reassigned after initialization. They always refer to the same object.
```cpp
int num2 = 10;
ptr = &num2; // ptr now points to num2
int& ref2 = num2; 
// ref2 = &num; // Error: Cannot reassign a reference
```

## Pointer Arithmetic
**Pointers**: You can perform arithmetic operations on pointers, like adding or subtracting an integer to move between memory locations.
**References**: References don't have a notion of memory address arithmetic.
```cpp
int arr[5] = {1, 2, 3, 4, 5};
int* ptr_arr = arr; // Points to the first element of arr
// References don't have this capability
```

## Function Parameters
**Pointers**: They can be passed as arguments to functions, allowing the function to directly modify the original variable.
**References**: They can also be used as function parameters, offering similar benefits to pointers, but with a more intuitive syntax.
```cpp
void modifyWithPointer(int* ptr) {
  *ptr = 100;
}

void modifyWithReference(int& ref) {
  ref = 100;
}
```

Both references and pointers have their use cases. References are often preferred for their safety and cleaner syntax when you want to work with existing variables. Pointers, on the other hand, offer more flexibility in certain situations, such as dynamic memory allocation or when you need to reassign where the variable points.

We will be using lots of pointers and references in the courses that follow! If you are interested in learning more, I encourage you to check out the more advanced courses.