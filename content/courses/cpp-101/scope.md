---
title: Scope
description: In this section, we will cover the importance of scope!
tags:
  - scope
published: true
lang: cpp
course: cpp-101
order: 3
---

Scope defines the reach of each variable, meaning where we can use each variable.
1. **Global Scope** - available everywhere.
2. **Local Scope** - can only be used inside the function it was defined in.
3. **Block Scope** - can only be used inside the block or statement.

Scope applies to pretty much everything in programming (ie. if/else, loops, functions, and classes)!

Here's an example:

```cpp
#include <iostream>

int global = 10;
std::cout << "global scope: " << global;

int main() {
  local = 20;
  std::cout << "local scope: " << local;

  for (int i = 0; i < local; i++) {
    std::cout << "block scope: " << i << '\n';
  }

  return 0;
}
```

In this example, `global` can be accessed throughout the entire program, `local` can be accessed throughout the main function, and `i` can only be accessed within the `for` loop.

The scope is a simple, yet important concept to understand especially as our programs get more intense.

You might be wondering why one would not make all variables global. As the program gets bigger, it's best to keep variables defined in the lowest scope possible. Meaning if a variable is only needed in a block or function, it should be initialized in that block or function. This will lead to a more efficient use of memory and will allow for less clutter in the global scope.