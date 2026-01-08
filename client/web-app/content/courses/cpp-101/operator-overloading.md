---
title: Operator Overloading
description: In this section, we will cover the importance of operator overloading!
tags:
  - operator-overloading
  - operators
published: true
lang: cpp
course: cpp-101
order: 13
---
You have probably heard the word `operator` before when talking about programming.

If you haven't heard of it, don't worry, you have used operators! Here are some examples of operators:

`+ - * / % & || ~ -- ++ += >= <= < > [] -> new ! << >>`

I would not be surprised if some of these are new to you! In this course, we have not used operators like `~` or `->` yet!

Here are the general types of operators:
1. **Arithmetic Operators** ->  used to perform arithmetic operations on variables and data (`+ - * /`).
2. **Assignment Operators** -> used to assign values to variables (`= += *=`).
3. **Relational Operators** -> used to check the relationship between two operands (`== != > <`).
5. **Logical Operators** -> used to check whether an expression is `true` or `false` (`&& || !`).
7. **Bitwise Operators** -> used to perform operations on individual bits. They can only be used alongside char and int data types. `& | ^ ~ << >>`
8. **Misc. Operators** -> `sizeof ?: . & -> << >>`

That's all good and fun, but what if we want to change the way these operators behave or define operators for our custom types/classes/structs? Well, we do this with [Operator Overloading](https://www.geeksforgeeks.org/operator-overloading-cpp/#).

IBM defines overloading operators as such:

"You can redefine or overload the function of most built-in operators in C++. These operators can be overloaded globally or on a class-by-class basis. Overloaded operators are implemented as functions and can be member functions or global functions.

An overloaded operator is called an _operator function_. You declare an operator function with the keyword `operator` preceding the operator. Overloaded operators are distinct from overloaded functions, but like overloaded functions, they are distinguished by the number and types of operands used with the operator."

-IBM's Website

Here's an example of how to overload an operator that compares the sum of our `CustomList` type:
1. `sum()` is a member function defined in the `CustomList` class.

```cpp
operator==(const CustomList &that) const {
	return this->sum() == that.sum() ? true : false;
}

operator!=(const CustomList &that) const {
	return this->sum() != that.sum() ? true : false;
}
```

We haven't covered arrow syntax with pointers yet and most likely will not cover it in this course. But essentially, the code is comparing the sums of 2 `CustomLists` using the `this` keyword and another `CustomList` defined as `that`. These operators return a boolean value!

You can overload any type of operator even `++` or `~`!