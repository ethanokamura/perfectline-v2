---
title: Syntax
description: Learn a bit of terminology, syntax and types for C++
tags:
  - type
  - syntax
published: true
lang: cpp
course: cpp-101
order: 1
---
## Now let's cover some basic programming terminology
1. **Syntax**: Grammar rules for forming statements
2. **Semantics**: The meaning of statements (ie how they can concretely be translated into machine code).
3. **Type System**: How data and expression values are categorized.
4. **Standard Library**: Functions, classes, objects, etc. available for use by any program.

The syntax for C++ is not very beginner-friendly and is often hated by new students. This being said, the benefits of learning the language outweigh the possible downsides. Here are some examples of C++ syntax. We will practice and talk more about this as we go. If this looks horrific at first. Don't worry, I thought the same thing.

## C++ has a complete syntax!
It contains 97 keywords! (Java: 50, JavaScript: 38, Python 3: 35) and has many more operators (`==`, `!=`, `+`, `+=`, `>`, etc.) than most languages and we can redefine what they mean for _compound types_ like objects

With anything, of course, there are tradeoffs:
1. C++ is powerful and has direct access to memory and the flexibility to break rules (with great power comes great responsibility)
2. C++ is concise, but not always readable (meaning it can get ugly).
3. The semantics can require many levels of interpretation (ie `+` means different things in different places).
4. Compilers are complicated to make but can produce highly optimized code making C++ suitable for things like game engines or robotics.
5. There are infinite ways to accomplish the same goal... which is great until the code you write doesn't work and no one has solved the problem in the same way.

## C++ Fundamental Types
A fundamental type is one that is built into the language. In C++ there are 4 major categories:
1. A lack thereof (no type): `void` -> for functions that don't return a value (and potentially other more exotic uses)
2. A nonexistent memory address: `std::nullptr_t` -> To mark a memory address as invalid/uninitialized (more on this later)
3. Integral: `bool`, `char`, `short`, `int`, `long`, etc. -> purpose: integers in constrained ranges, with perfect precision. Also `unsigned` version (no negative values allowed, greater positive range). One thing to note is that ranges are system-dependent, meaning newer systems will have better ranges.
4. Floating-Point: `float`, `double`, `long double`, etc. -> Fractional numbers, wider ranges, imperfect precision. Almost always approximate values.

_With fundamental types, there is no need to `#include` "built-in" (keywords)_

## The Building Blocks of C++
Most common blocks:
1. `if` statement: Selects a block to execute based on a Boolean or `bool` (`true`/`false`) condition.
2. `while` loop: Repeats a block as long as a `bool` condition remains true.
3. `for` loop: Repeats a block as long as a `bool` condition remains true or for every value in an iterable object.
4. Function definition: Defines a _callable_ block of code that can receive _arguments_ and _return_ a value.
5. `class`/`struct` definition: Defines a new data type, usually containing a combination of properties (variables) and actions (functions).

Blocks of code are typically wrapped in "curly brackets" `{}`

## Comments
You might notice a greyed-out line of code that starts with `//`.

The two slashes signify that a comment is written and will negate anything until the end of that line. When code is compiled (more on this later) the computer does not read comments. It sees the slashes and skips to the next line.

Comments can also be written with the `/**/` syntax for multi-line comments:
```cpp
// single line comment

/*
this is a
multi-line
comment
*/
```

## The `main` Function
Looking back at the comment itself in the program above, it says, "Every C++ program must define at least a main function!". This is true!

1. `main` function definition:
The block here constitutes the body of the main function. `int main()` is **ALWAYS** the program's _entry point_.
2. `int` returns a type (more on this later) and `main` is the name of the function.
3. `()` : No parameters (this function accepts no arguments).

Anything not referenced or put inside the `main` function will not be used in the program.

```cpp
int main() {

  return 0;
}
```

## Statements
The line that contains:
```cpp
cout << "Hi Mom!\n";
```
is called a statement.

All statements in C++ end in semicolons `;`

**NOTE**: I find the most common error both new and experienced programmers make is forgetting to put a `;` at the end of each statement.

You can think of semicolons as punctuation for programming (like a period). `cout` or "console output" is our way of printing statements to the terminal.


In basic terms, this entire statement essentially says, _Insert the string "Hi Mom!" into the standard output_

## Running the Program
1. Create and edit a source-code file using a text editor (such as VS Code).
2. Open the terminal to input commands to run the program.
3. Use a "compiler" to **preprocess**, **compile**, and **link** the code to create an **executable** (in a file named a.out or a.exe in the current directory by default) with the command `g++` or `clang++` followed by the filename `helloworld.cpp`.
4. Run the executable with the command `./a.out` for Mac or `./a.exe` for Windows.

