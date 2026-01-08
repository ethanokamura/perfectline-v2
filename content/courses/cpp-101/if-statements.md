---
title: if/else
description: In this section, we will cover the importance of if statements!
tags:
  - if-else
  - statements
published: true
lang: cpp
course: cpp-101
order: 5
---
if/else statements are crucial for any programming language and are debatably the easiest to learn.

They can be read similarly to a regular English sentence. "if" a condition is met, do this, "else", do that.

Keep in mind we may want to check for more than just one condition. To accomplish this, we use "else if" as well.

A pseudo-code version of this would be something like the following:

```
if (condition_a) {
	do something if true
} else if (condition_b) {
  do something if condition_a is false but condition_b is true
} else {
  do something if condition_a and condition_b are false
}
```

For instance, you could have a program that checks if a user's age is over 18. If it is, it lets them access a website. If not, it might show a message saying they're too young.

```cpp
if (age >= 18) {
  cout << "Access Granted\n";
} else {
  cout << "Access Denied\n";
}
```

## Syntax:

in C++, we use curly brackets to encase blocks of code as previously discussed. To write an if statement, we write "`if`" in lowercase, followed by a set of parenthesis to encase the condition that we are checking. If the condition is met, the code in the curly brackets or block will be executed.

```cpp
if (condition) {
  do this;
}
```

## Ternary Operations

A condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if/else statement. This should typically only be used for (if / else) NOT (if / else if / else):

```cpp
condition ? true do this : false do this;
```

With the example from earlier, we could rewrite the code to look a little more concise:

```cpp
cout << (age >= 18 ? "Access Granted" : "Access Denied") << '\n';
```
